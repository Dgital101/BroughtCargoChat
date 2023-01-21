import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { getError } from "../../utils";

const InitialState = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }

export default function Signin() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [userInput, setUserInput] = useState(InitialState);
  const { state, dispatch: cxtDispatch } = useContext(Store);
  const { userInfo } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users/signin", {
        userInput,
      });
      cxtDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate(redirect);
  //   }
  // }, [navigate, redirect, userInfo]);

  function handleChange(event){
    const {name, value} = event.target;

    setUserInput(prevState => {
      return {...prevState, [name] : value}
    })
  }

  return (
    <section className="bg-[#FEF9F3] w-full h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <form onSubmit={handleSubmit} autoComplete="on" className='border-[1px] border-gray-400 rounded-xl p-4 w-3/4 md:w-1/2 lg:w-1/3'>
        <h1 className="text-center text-2xl font-bold mb-2">Sign In</h1>
        <section className="flex flex-col">
          <label htmlFor="email" className="text-md font-semibold">Email</label>
          <input
          type='email'
          name='email'
          required
          value={userInput.email}
          onChange={handleChange}
          className='border-[1px] border-gray-400 rounded-sm px-2'
        >
        </input>
        </section>
        <section className="flex flex-col">
          <label htmlFor="firstName" className="text-md font-semibold">Password</label>
          <input
          type='password'
          name='password'
          required
          autoComplete="current-password"
          minLength={8}
          value={userInput.password}
          onChange={handleChange}
          className='border-[1px] border-gray-400 rounded-sm  px-2'
        >
        </input>
        </section>
        <section className="w-full mx-auto mt-8 border-[1px] border-gray-600 rounded-sm bg-[#FEF9F3]">
          <button className="bg-white flex justify-center items-center w-full p-1 text-md font-semibold">
            Sign In
          </button>
        </section>
        <section>
          <p className="text-gray-600 text-sm flex justify-evenly mt-4">
            Do not have an account? 
            <Link to="/signup" className="text-gray-800 font-bold">Sign up</Link>
          </p>
        </section>
      </form>
    </section>

      
  );
}
