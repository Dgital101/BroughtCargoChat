import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useContext, useState } from "react";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import { useNavigate, useLocation, Link } from "react-router-dom";


const InitialState = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword : ""
    };

export default function SignupScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const { dispatch: cxtDispatch } = useContext(Store);
  const [userInput, setUserInput] = useState(InitialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInput.password !== userInput.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post("/api/users/signup", {
        userInput,
      });
      cxtDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  function handleChange(event){
    const {name, value} = event.target;

    setUserInput(prevState => {
      return {...prevState, [name] : value}
    })
  }

  return (
    <section className="bg-[#FEF9F3] w-full h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <form onSubmit={handleSubmit} autoComplete="on" className='border-[1px] border-gray-400 rounded-xl p-4 w-3/4 md:w-1/2 lg:w-1/3'>
        <h1 className="text-center text-2xl font-bold mb-2">Sign Up</h1>
        <section className="flex flex-col">
          <label htmlFor="firstName" className="text-md font-semibold">First Name</label>
          <input
          type='text'
          name='firstName'
          required
          value={userInput.firstName}
          onChange={handleChange}
          className='border-[1px] border-gray-400 rounded-sm'
        >
        </input>
        </section>
        <section className="flex flex-col">
          <label htmlFor="firstName" className="text-md font-semibold">Last Name</label>
          <input
          type='text'
          name='lastName'
          required
          value={userInput.lastName}
          onChange={handleChange}
          className='border-[1px] border-gray-400 rounded-sm'
        >
        </input>
        </section>
        <section className="flex flex-col">
          <label htmlFor="email" className="text-md font-semibold">Email</label>
          <input
          type='email'
          name='email'
          required
          value={userInput.email}
          onChange={handleChange}
          className='border-[1px] border-gray-400 rounded-sm'
        >
        </input>
        </section>
        <section className="flex flex-col">
          <label htmlFor="firstName" className="text-md font-semibold">Password</label>
          <input
          type='password'
          name='password'
          required
          autoComplete="new-password"
          minLength={8}
          value={userInput.password}
          onChange={handleChange}
          className='border-[1px] border-gray-400 rounded-sm'
        >
        </input>
        </section>
        <section className="flex flex-col">
          <label htmlFor="confirmpassword" className="text-md font-semibold">Confirm password</label>
          <input
          type='password'
          name='confirmpassword'
          required
          minLength={8}
          autoComplete="new-password"
          value={userInput.confirmpassword}
          onChange={handleChange}
          className='border-[1px] border-gray-400 rounded-sm'
        >
        </input>
        </section>
        <section className="w-full mx-auto mt-8 border-[1px] border-gray-600 rounded-sm bg-[#FEF9F3]">
          <button className="bg-white flex justify-center items-center w-full p-1 text-md font-semibold">
            Sign Up
          </button>
        </section>
        <section>
          <p className="text-gray-600 text-sm flex justify-evenly mt-4">
            Already have an account? 
            <Link to="/signin" state={{userInput}} className="text-gray-800 font-bold">Sign in</Link>
          </p>
        </section>
      </form>
    </section>

      
  );
}
