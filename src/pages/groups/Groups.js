import { Link, Outlet } from "react-router-dom";

const Groups = () => {
  return (
    <section className="fixed top-16 w-full h-full">
      <nav className="px-6 block text-l md:text-xl lg:text-xxl">
        <ul className="block md:flex justify-between items-center ">
          <li className="flex justify-between items-center md:gap-6 md:mr-auto">
            <Link to="/groups/my-groups" className="flex items-center ">
              <img
                src="/assets/images/groups/groups-icon.png"
                className="h-16 w-16 md:h-28 md:w-28"
                alt="your groups"
              />
              <h1>Your Groups</h1>
            </Link>
            <Link to="/groups/explore-groups" className="underline">
              Explore Groups
            </Link>
          </li>
          <li className="flex justify-end items-center md:block md:ml-auto">
            <Link
              to="/groups/create-group"
              className="bg-[#fed034] rounded-full px-2 py-1">
              +Create Group
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default Groups;
