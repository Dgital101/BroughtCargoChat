import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Deals from "./pages/deals/Deals";
import Groups from "./pages/groups/Groups";
import CreateGroup from "./pages/groups/CreateGroup";
import ExploreGroups from "./pages/groups/ExploreGroups";
import MyGroups from "./pages/groups/MyGroups";
import Sell from "./pages/sell/Sell";
import Account from "./pages/account/Account";
import Chat from "./pages/chat/Chat";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Shipping from "./pages/shipping/Shipping";
import Product from "./pages/product/Product";
import Payment from "./pages/payment/Payment";
import Cart from "./pages/cart/Cart"

const App = () => {
  const username = "Njabulo";
  return (
    <Router>
      <Header username={username} />
      {/* TODO : Fixed the header for mobile */}
      <main className="fixed left-0 top-16 md:top-24 lg:top-36 w-full h-full overflow-y-auto scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/deals/*" element={<Deals />}>
            <Route path="product/:slug" element={<Product />}></Route>
          </Route>
          <Route path="/groups/*" element={<Groups />}>
            <Route index element={<MyGroups />}></Route>
            <Route path="my-groups" element={<MyGroups />}></Route>
            <Route path="explore-groups" element={<ExploreGroups />}></Route>
            <Route path="create-group" element={<CreateGroup />}></Route>
          </Route>
          <Route path="/groups/:id" element={<Chat />}></Route>
          <Route path="/sell" element={<Sell />}></Route>
          <Route path={`/account/:${username}/*`} element={<Account />}>
            <Route path={"shipping"} element={<Shipping />}></Route>
            <Route path={"payment"} element={<Payment />}></Route>
            <Route path={"cart"} element={<Cart />}></Route>
          </Route>
          <Route path={"/signin"} element={<Signin />}></Route>
          <Route path={"/signup"} element={<Signup />}></Route>
        
        </Routes>
      </main>
    </Router>
  );
};

export default App;
