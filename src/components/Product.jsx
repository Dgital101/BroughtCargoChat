import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Store } from "../Store";

function Product(props) {
  const { product } = props;
  const { state, dispatch: cxtDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const [color, setColor] = useState(" fa-heart-o");

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);

    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry, Product out of stock");
      return;
    }

    cxtDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <section className='cursor-pointer mx-4 my-4 p-4 rounded-md border-gray-400 border-[1px]'>
      <div className="flex justify-end mx-4">
           <i className={`fa ${color}`} onClick={() => setColor("fa-heart")}></i>
      </div>
      <Link to={`/deals/products/{product.slug}`}>
        < img
        alt={product.name}
        src={product.Image}
        className='w-full flex justify-center items-center'
        />
      </Link>
      <section className='mx-6'>
        <h1 className='font-lg font-bold'>{product.name}</h1>
        <small className='text-[#ffa500]'>R{product.price}</small>
        <section className='mt-4'>
          {product.countInStock === 0 ? (
             <button variant="light" disabled>
               {" "}
               Sold Out
             </button>
           ) : (
             <div className="border-black border-2 rounded-full cursor-pointer flex justify-center py-4 " onClick={() => addToCartHandler(product)}>
               <small>
                 <i className="fa fa-shopping-cart" aria-hidden="true"></i> ADD{" "}
               </small>
             </div>
           )}
        </section>
      </section>
      
    </section>
  );
}

export default Product;
