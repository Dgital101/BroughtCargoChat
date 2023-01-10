import { useLocation } from "react-router-dom";

const Deals = () => {
  const { state } = useLocation();

  const showSearchResults = () => {
    const queryWord = state.searchWord;
    console.log(queryWord);
  };
  return <section>{showSearchResults()}</section>;
};

export default Deals;
