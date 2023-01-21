import { useEffect, useReducer } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../../components/Product";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { Helmet } from "react-helmet-async";
import HotPicks from "./HotPicks"

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
function Products() {

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
      },
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
        countInStock: 1,
        brand: "Nike",
        rating: 2.5,
        numReviews: 75,
        Description: "High Quality TV with 6 months warrant ",
      },
  ];
  const productElements = products.map( (product, index) => { return <Product key={index} product={product}/> })
  const loading = false;
  const error = '';


  return (
    <section className="h-full">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1 className='text-3xl font-semibold text-center'>Products</h1>
      <main className='overflow-y-auto scrollbar-hide h-full'>
        { 
          loading ? <LoadingBox /> :
          error ? 
          <section className='flex justify-center m-8 mb-32 font-bold text-red-600'>
              <MessageBox variant="danger">{error} !!!</MessageBox>
          </section> :
            <section className='overflow-y-auto scrollbar-hide flex flex-wrap'>
              {
                productElements
              }
            </section>
        }
      </main>
    </section>
  );
}

export default Products;
