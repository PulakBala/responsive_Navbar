"use client";

import React, { useState } from "react";
// import Lottie from "react-lottie";
import homeAnimation from "../../public/lottieAnimations/home.json";
import about from "../../public/lottieAnimations/about.json";
import services from "../../public/lottieAnimations/services.json";
import contact from "../../public/lottieAnimations/contact.json";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log('clicked');
  };

  // Sample data as an array of objects
  const navItems = [
    { id: 1, label: "Home", link: "/"},
    { id: 2, label: "About", link: "/" },
    { id: 3, label: "Services", link: "/" },
    { id: 4, label: "Contact", link: "/" },
  ];

  return (
    <nav className="bg-black overflow-hidden sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                Company Logo
              </a>
              {/* <Lottie animation={navItems.animation} height={100} width={100} /> */}
            </div>
          </div>

          <div className="hidden md:flex ml-4 space-x-4">
            {/* Dynamically generate nav items with hover effect */}
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-white p-2 transition duration-300 group relative"
              >
                {item.label}

                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#00b9b4] transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            ))}
          </div>

          <div className="hidden  items-center md:block">
            <div className="flex-shrink-0">
              <button className="text-white  border border-[#00b9b4] px-4 p-2 rounded-3xl hover:bg-[#00B9B5]">
                Get a quote
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Dynamically generate responsive menu items */}
            {navItems.map((item) => (
              <div
                key={item.id}
                className=" text-white flex  justify-between  hover:bg-white hover:text-black rounded-lg p-2"
              >
                <span className="flex items-center">{item.label}</span>
               {/* <div>
               
                  <Lottie
                    options={{
                      animationData: item.animation,
                     
                    }}
                     // adjust as needed
                  />
            
               </div> */}
              </div>
            ))}

            <div className="flex justify-center ">
              <button className="text-white w-11/12 md:w-auto border border-[#00b9b4] p-2 rounded-3xl hover:bg-[#00B9B5]">
                Get a quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
