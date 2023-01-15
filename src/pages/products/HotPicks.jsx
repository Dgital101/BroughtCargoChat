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
  );
}

export default HotPicks;