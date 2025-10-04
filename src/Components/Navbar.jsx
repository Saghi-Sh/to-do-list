import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-md shadow-md">
            <div className="flex items-center justify-between p-4 md:pl-12 md:pr-12">
                <a href="/" className="font-varela text-4xl text-darkTaupe">
                  Dot.
                </a>

                <ul className="hidden sm:flex items-center space-x-10 mt-2">
                  <li>
                    <a href="/features" className="hover:text-lightTaupe font-normal">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/help" className="hover:text-lightTaupe font-normal">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/login" className="hover:text-lightTaupe font-normal">
                      Log In
                    </a>
                  </li>
                  <li>
                    <button 
                    onClick={() => navigate("/signup")} 
                    className="px-4 py-2 bg-Taupe text-white rounded hover:bg-lightTaupe font-medium">
                      Sign Up
                    </button>
                  </li>
                </ul>
                <div className="sm:hidden">
                  <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="relative w-6 h-6 flex items-center justify-center focus:outline-none"
          >
            {/* top bar */}
            <span
              className={`absolute block w-6 h-[3px] bg-darkTaupe rounded transform transition duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0 rotate-45 origin-center" : "-translate-y-2"
              }`}
            />
            {/* middle bar */}
            <span
              className={`absolute block w-6 h-[3px] bg-darkTaupe rounded transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "translate-y-0"
              }`}
            />
            {/* bottom bar */}
            <span
              className={`absolute block w-6 h-[3px] bg-darkTaupe rounded transform transition duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0 -rotate-45 origin-center" : "translate-y-2"
              }`}
            />
          </button>

                </div>
            </div>
                <div className={`sm:hidden shadow-xl transform transition-all duration-300 ease-in-out overflow-hidden
                   ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="flex flex-col space-y-4 pl-6 pr-6 pt-4 pb-0 divide-y divide-gray-300">
                    <li>
                      <a href="/features" className="block pb-6 pl-2 hover:text-lightTaupe font-normal">
                      Features
                      </a>
                    </li>
                    <li>
                      <a href="/help" className="block pb-6 pt-2 pl-2 hover:text-lightTaupe font-normal">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="/login" className="block pb-6 pt-2 pl-2 hover:text-lightTaupe font-normal">
                        Log In
                      </a>
                    </li>
                    
                  </ul>
                </div>
            
        </nav>
    )
};

export default Navbar;