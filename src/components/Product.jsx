import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { Store } from "../Store";

function Product(props) {
  const { product } = props;
  const { state, dispatch: cxtDispatch } = useContext(Store);
  const navigate = useNavigate();
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

  const toProductDescription = () => {
    navigate(`/product/${product.name}`, {
      state: {
				product,
			},
    }
    )
  }
  return (
    <section
      className='cursor-pointer mx-4 my-4 p-2 rounded-md border-gray-400 border-[1px] md:max-w-sm max-h-80'>
      <div className="flex justify-end mx-4">
           <i className={`fa ${color}`} onClick={() => setColor("fa-heart")}></i>
      </div>
      <Link to={`/product/${product.slug}`}>
        <section className="flex items-center justify-center">
          < img
            alt={product.name}
            src={product.Image}
            className='w-5/6 flex justify-center items-center'
          />
        </section>
      </Link>
      <section className='mx-12'>
        <h1 onClick={toProductDescription}  className='font-lg md:text-xl font-bold'>{product.name}</h1>
        <small className='text-[#ffa500]'>R{product.price}</small>
        <section className='mt-2'>
          {product.countInStock === 0 ? (
             <button  variant="light" disabled>
               Sold Out
             </button>
           ) : (
             <div className="border-black border-2 rounded-full cursor-pointer flex justify-center py-2" onClick={() => addToCartHandler(product)}>
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
