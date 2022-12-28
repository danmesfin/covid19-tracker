import React, { useState } from "react";
import Link from "next/link";
import Navitem from "../../components/NavItem/Navitem";
import Image from "next/image";
// import { Icon } from "leaflet";

function Navbar() {
  let [activeIdx, setActiveIdx] = useState(0);
  const [navActive, setNavActive] = useState(false);
  const Menu = [
    { title: "Home", link: "/" },
    { title: "Map", link: "/map" },
    { title: "Analytics", link: "/analytics" },
    { title: "Prevention", link: "/prevention" },
    { title: "Github", link: "https://github.com/danmesfin/covid19-tracker" },
  ];
  return (
    <nav className="sticky top-0 z-[99] bg-white border-b border-gray-700 px-2 sm:px-4 py-2 shadow-sm dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="cursor-pointer">
          <a>
            <div className="flex justify-center  text-xl font-bold whitespace-nowrap text-red-600 dark:text-white">
              <Image alt="logo" src="/favicon.ico" width={38} height={38} />
              <p className="my-auto">
                Track
                <span className="text-black dark:text-red-600">Covid</span>
              </p>
            </div>
          </a>
        </Link>
        <button
          data-collapse-toggle="#navbar-default"
          onClick={() => {
            setNavActive(!navActive);
          }}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${navActive ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {Menu.map((menu, idx) => (
              <div
                key={menu.title}
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
              >
                <Navitem
                  menu={menu.title}
                  link={menu.link}
                  active={activeIdx === idx}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
