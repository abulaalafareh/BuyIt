import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-background py-2 shadow-sm shadow-black lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* Collapsible navigation container */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          {/* Logo */}
          <a
            className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            href="#"
          >
            <img
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              style={{ height: "15px" }}
              alt="TE Logo"
              loading="lazy"
            />
          </a>
          {/* Left navigation links */}
        </div>
        <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row items-end">
          {/* Move Dashboard link to the right */}
          <li className="mb-4 lg:mb-0 lg:pr-2 px-2">
            <a
              className="text-black transition duration-200 hover:text-neutral-500 "
              href="/"
            >
              Products
            </a>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2 ml-3 mr-3">
            <a
              className="text-black transition duration-200 hover:text-neutral-500 "
              href="/cart"
            >
              Cart
            </a>
          </li>
        </ul>
        <Link className="nav-link active" to="/login">
          <button
            className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-button"
            type="click"
          >
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
