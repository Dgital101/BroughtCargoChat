import axios from "axios";
import { useContext } from "react";
import {  useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Rating from "../../components/Rating";
import Badge from "react-bootstrap/Badge";
import { Helmet } from "react-helmet-async";
import { Store } from "../../Store"; 

function Product() {
  const product = useLocation().state;

  const { state, dispatch: cxtDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);

    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry, Product out of stock");
      return;
    }
    cxtDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };

  console.log(product)
  return (
    <div>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <section>
        <img 
        src={product.Image}
        alt={product.name}
        className=''
        />
      </section>
    </div>
  );
}

export default Product;
