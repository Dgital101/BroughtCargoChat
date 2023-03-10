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

  // const [{ loading, error, products }, dispatch] = useReducer(reducer, {
  //   products: [],
  //   loading: true,
  //   error: "",
  // });


  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: "FETC_REQUEST" });
  //     try {
  //       const results = await axios.get("/api/products");
  //       dispatch({ type: "FETCH_SUCCESS", payload: results.data });
  //     } catch (err) {
  //       dispatch({ type: "FETCH_FAIL", payload: err.message });
  //     }
  //   };
  //   fetchData();
  // }, []);

  // TODO : delete
  const products = [
    {
        name: '32" LG TV',
        slug: "lg-tv",
        category: "TVs",
        Image: "/assets/images/products/TV.jpeg",
        price: 2500,
        countInStock: 1,
        brand: "Nike",
        rating: 2.5,
        numReviews: 75,
        Description: "High Quality TV with 6 months warrant ",
      },
    {
        name: '32" LG TV',
        slug: "lg-tv",
        category: "TVs",
        Image: "/assets/images/products/TV.jpeg",
        price: 2500,
        countInStock: 0,
        brand: "Nike",
        rating: 2.5,
        numReviews: 75,
        Description: "High Quality TV with 6 months warrant ",
      }
  ];
  const productElements = products.map( (product, index) => { return <Product key={index} product={product}/> })
  const loading = false;
  const error = '';

  return (
    <section className='w-full'>
        <section className="flex items-center justify-center pt-6 px-2">
          <img
            src="./assets/images/home/fire-icon.jfif"
            alt="hot picks"
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <h1 className="text-lg font-semibold md:text-2xl lg:text-4xl">
            Hot Picks
          </h1>
        </section>
        { 
          loading ? <LoadingBox /> :
          error ? 
          <section className='flex justify-center m-8 mb-32 font-bold text-red-600'>
              <MessageBox variant="danger">{error} !!!</MessageBox>
          </section> :
            <section className='overflow-x-auto flex flex-wrap'>
              {
                productElements
              }
            </section>
        }
    </section>
  );
}

export default HotPicks;