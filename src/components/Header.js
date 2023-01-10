import { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [searchWord, setSearchWord] = useState();
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const searchSubmit = (event) => {
    event.preventDefault();
    //handle the form
  };

  const toggleMenu = () => {
    setDisplayMobileMenu((prevState) => !prevState);
  };
  return (
    <section>
      <header className="flex justify-between items-center bg-[#FEF9F3] h-16 p-4 md:h-24 lg:h-36">
        <Link to="/">
          <img
            src="/assets/images/BroughtCargo-logo.png"
            alt="BroughtCargo Logo"
            className="w-32 h-20 p-0 md:w-40 md:h-24 lg:w-60 lg:h-40"
          />
        </Link>
        <nav className="md:flex text-black text-lg lg:text-2xl font-semibold">
          {/* Desktop navigation */}
          <ul
            className={
              displayMobileMenu
                ? "absolute left-0 top-16 block w-full px-4 bg-[#FEF9F3]"
                : "hidden md:flex items-center gap-6"
            }>
            <li>
              <Link to="/">
                <h1 className={"py-1 hover:underline"}>Home</h1>
              </Link>
            </li>
            <li>
              <Link to="/deals">
                <h1 className="py-1 hover:underline">Deals</h1>
              </Link>
            </li>
            <li>
              <Link to="/groups">
                <h1 className="py-1 hover:underline">Find a Group</h1>
              </Link>
            </li>
            <li>
              <Link to="/sell">
                <h1 className="py-1 hover:underline">Sell</h1>
              </Link>
            </li>
            <li>
              <form
                className="flex justify-center items-center  py-1 bg-[#E5DBD3] md:rounded-full rounded-sm w-full lg:w-64 h-6 lg:h-8 pd-2"
                onSubmit={searchSubmit}>
                <button type="submit">
                  <img
                    src="/assets/images/search-icon.png"
                    alt="search button"
                    className="w-4 h-4 lg:w-6 lg:h-6 mx-2"
                  />
                </button>
                <input
                  value={searchWord}
                  onChange={(event) => setSearchWord(event.target.value)}
                  placeholder="Search"
                  className="bg-[#E5DBD3] h-6 lg:h-8 w-full md:w-24 lg:w-full md:rounded-full px-2 focus:outline-0 placeholder:text-white"
                />
              </form>
            </li>
            <li>
              <Link to={`/account/${props.username}`}>
                <button className="flex items-center py-1">
                  <img
                    src="/assets/images/account-icon.png"
                    alt="account button"
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                </button>
              </Link>
            </li>
          </ul>
          {/* mobile navigation */}
          <button onClick={toggleMenu} className="md:hidden relative">
            <img
              src="/assets/images/menu-icon.png"
              alt="mobile menu"
              className="w-8 h-8"
            />
          </button>
        </nav>
      </header>
    </section>
  );
};

export default Header;
