import { useEffect, useReducer } from "react";
import axios from "axios";
import Product from "../../components/Product";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const HotPicks = () => {

  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETC_REQUEST" });
      try {
        const results = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: results.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <section>
        <section>
        <section className="flex items-center justify-center py-6 px-2">
          <img
            src="/assets/images/home/fire-icon.jfif"
            alt="hot picks"
            className="w-8 h-8 md:w-16 md:h-16 lg:h-20 lg:w-20"
          />
          <h1 className="text-lg font-semibold md:text-2xl lg:text-4xl">
            Hot Picks
          </h1>
        </section>
        <section>
            </section>
        { 
            loading ? <LoadingBox /> :
            error ? 
            <section className='flex justify-center m-8 mb-32 font-bold text-red-600'>
                <MessageBox variant="danger">{error} !!!</MessageBox>
            </section> :
            <section className='flex'>
                {
                    products.map( product => {
                        return <Product key={product.slug} product={product}/>
                    })
                }
            </section>
        }
        </section>
    </section>
      
  );
}

export default HotPicks;