import React from "react";
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import Login from './Login'
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Header() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

   const [scroll, setScroll] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setScroll(window.scrollY > 0); // Trigger effect after 50px scroll
     };
    
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 pt-3.5 z-50 top-0 fixed left-0 right-0  ${
        scroll ? "sticky-navbar bg-base-200 shadow-lg transition-all easy-in-out duration-100" : "bg-transparent"
      }`}>
        <div className="navbar bg-white-600">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Course">Courses</a>
                </li>
                <li>
                  <a>Contacts</a>
                </li>
                <li>
                  <a>Details</a>
                </li>
              </ul>
            </div >
            <a className="btn btn-ghost text-2xl ">BookApp</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex  mx-6 font- ">
              <ul className="menu menu-horizontal px-1 gap-3 text-lg">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Course">Courses</Link>
                </li>
                <li>
                  <a>Contacts</a>
                </li>
                <li>
                  <a>Details</a>
                </li>
              </ul>
              <div className="mx-4">
                <label className=" flex items-center px-3 rounded-md py-2 border-1 border-zinc-200 outline-none gap-2">
                  <input type="text" className=" grow outline-none
                  border-none " placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
              <div>
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="synthwave"
                  />

                  {/* sun icon */}
                  <SunIcon className="h-6 w-6 text-yellow-500 swap-off" onClick={toggleTheme} />

                  {/* moon icon */}
                  <MoonIcon className="h-6 w-6 text-gray-300 swap-on" onClick={toggleTheme}/>
                </label>
              </div>
            </div>
            {authUser ? (
              <Logout />
            ) : (
              <div className="">
                 <a className="btn mx-2 bg-black text-white rounded-md hover:bg-zinc-800 duration:300 curser-pointer"
            onClick={() => document.getElementById("my_modal_5").showModal()}>
              LogIn
            </a>
                <Login />
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
