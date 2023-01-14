import { useLocation } from "react-router-dom";
import Products from "../products/Products";

const Deals = () => {
  const { state } = useLocation();

  const showSearchResults = () => {
    const queryWord = state.searchWord;
  };
  return (
    <section>
      <Products />
    </section>
  );
};

export default Deals;
