import { useNavigate } from "react-router-dom";
import HotPicks from "../products/HotPicks"

const Home = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/signup");
  };
  return (
    <main className="h-full">
      <section className='overflow-y-auto scrollbar-hide h-full'>
        <section className="bg-[#E5DBD3] flex justify-center">
          <section className="flex flex-col md:flex-row-reverse w-full items-center justify-center py-6 px-2">
            <section className="flex flex-col items-center justify-center w-full lg:h-[320px]">
              <h1 className="flex flex-col justify-center items-center text-2xl lg:text-4xl lg:gap-x-4 font-bold">
                <span>Bulk Goods Delivered to You</span>
                <span> at Wholesale Prices !</span>
              </h1>
              <p className="flex flex-col justify-center items-center text-lg lg:text-2xl font-normal my-2">
                <span>Join other retailers near You</span>
                <span> and enjoy discounted wholesale prices </span>
              </p>
              <button
                onClick={getStarted}
                className="bg-[#FED034] rounded-full px-2 py-1 lg:text-2xl lg:w-48 lg:h-16 mt-2 lg:mt-6">
                Get Started
              </button>
            </section>
            <img
              src="/assets/images/home/groceries.png"
              alt="bulk groceries"
              className="md:w-1/2 lg:ml-32"
            />
        </section>
      </section>

      <section>
        {<HotPicks/>}
      </section>

      <section className="flex flex-col gap-y-2 items-center justify-center bg-[#FEF9F3]">
        <h1 className="uppercase font-medium text-sm md:text-base lg:text-lg">
          Trust by over {20} wholesalers
        </h1>
        <section className="flex flex-wrap gap-x-2 gap-y-2 lg:gap-x-4 items-center justify-center">
          {/* company logos */}
          <img
            src="/assets/images/home/trustee-logo.jfif"
            alt="trustee company"
            className="w-18 h-12 md:w-28 md:h-16 lg:w-40 lg:h-24"
          />
          <img
            src="/assets/images/home/trustee-logo.jfif"
            alt="trustee company"
            className="w-18 h-12 md:w-28 md:h-16 lg:w-40 lg:h-24"
          />
          <img
            src="/assets/images/home/trustee-logo.jfif"
            alt="trustee company"
            className="w-18 h-12 md:w-28 md:h-16 lg:w-40 lg:h-24"
          />
          <img
            src="/assets/images/home/trustee-logo.jfif"
            alt="trustee company"
            className="w-18 h-12 md:w-28 md:h-16 lg:w-40 lg:h-24"
          />
          <img
            src="/assets/images/home/trustee-logo.jfif"
            alt="trustee company"
            className="w-18 h-12 md:w-28 md:h-16 lg:w-40 lg:h-24"
          />
          <img
            src="/assets/images/home/trustee-logo.jfif"
            alt="trustee company"
            className="w-18 h-12 md:w-28 md:h-16 lg:w-40 lg:h-24"
          />
        </section>
      </section>
      <section className='h-20'></section>
      </section>
    </main>
  );
};

export default Home;
