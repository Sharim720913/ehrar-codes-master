import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [dropDowns, setDropDowns] = useState([
    { name: "Services", hidden: true },
    { name: "Delivery Solutions", hidden: true },
    { name: "Corporate Solutions", hidden: true },
    { name: "Support", hidden: true },
  ]);

  const hideOtherDropdown = (name) => {
    setDropDowns(
      dropDowns.filter((ele, index) => {
        if (ele.name === name) {
          ele.hidden = false;
        } else {
          ele.hidden = true;
        }
        return ele;
      })
    );
  };
  useEffect(() => {
    document.querySelector("#con").addEventListener("click", () => {
      setDropDowns(
        dropDowns.filter((ele, index) => {
          ele.hidden = true;

          return ele;
        })
      );
    });
    return () => {};
  }, []);

  return (
    <nav className="bg-white shadow dark:bg-white-800  lg:pd-12">
      <div className="container px-6 py-3 mx-auto" id="main-container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                className="text-2xl font-bold text-black-800 transition-colors duration-200 transform dark:text-black lg:text-3xl hover:text-black-700 dark:hover:text-black-300"
                href="#"
              >
                LOGO
              </a>
              {/* Search input on desktop screen */}
            </div>
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-black-500 dark:text-black-200 hover:text-black-600 dark:hover:text-black-400 focus:outline-none focus:text-black-600 dark:focus:text-black-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div className="items-center md:flex">
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              {dropDowns.map((ele, index) => {
                return (
                  <DropDown
                    text={ele.name}
                    hidden={ele.hidden}
                    hideOtherDropdown={hideOtherDropdown}
                  />
                );
              })}
            </div>
            <div
              className="flex items-center py-2 -mx-1 md:mx-0"
              id="login-btn"
            >
              <a
                className="block w-1/2 px-3 py-2 mx-2 text-sm font-medium leading-5 text-center text-black transition-colors duration-200 transform bg-white-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
                href="#"
              >
                Login
              </a>

              <a
                className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
const DropDown = ({ text, hidden, hideOtherDropdown }) => {
  return (
    <div className="relative inline-block ">
      {/* Dropdown toggle button */}
      <button
        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white  dark:text-black  focus:outline-none"
        onClick={() => {
          hideOtherDropdown(text);
        }}
      >
        <span className="mx-1">{text}</span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div class=" " id="mobile-list">
        <ul class="divide-y-2 divide-gray-100">
          <li class="p-3"> your profile</li>
          <li class="p-3"> your profile</li>
          <li class="p-3"> your profile</li>
          <li class="p-3"> your profile</li>
        </ul>
      </div>
      {/* Dropdown menu */}

      <div
        class="absolute  right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl "
        id={`hover-${text}`}
        style={{ display: hidden ? "none" : "block" }}
        id="mob-dropown"
      >
        <a
          href="#"
          class="block px-4 py-3 text-sm  text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
        >
          {" "}
          your profile{" "}
        </a>
        <a
          href="#"
          class="block px-4 py-3 text-sm text-gray-600  capitalize transition-colors duration-200 transform hover:bg-gray-100"
        >
          {" "}
          your profile{" "}
        </a>
        <a
          href="#"
          class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
        >
          {" "}
          your profile{" "}
        </a>
      </div>
    </div>
  );
};
