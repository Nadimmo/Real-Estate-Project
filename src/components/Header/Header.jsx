import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="navbar backdrop-blur-xl bg-white/30 shadow-md border-b border-white/20">
        
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden glass rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </div>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content glass bg-white/40 rounded-xl mt-3 w-52 p-3 shadow-xl backdrop-blur-lg"
            >
              <Link to="/" className="hover:text-blue-500 transition"><li>Home</li></Link>
              <Link to="/about" className="hover:text-blue-500 transition"><li>About</li></Link>
              <Link to="/services" className="hover:text-blue-500 transition"><li>Services</li></Link>
              <Link to="/contact" className="hover:text-blue-500 transition"><li>Contact</li></Link>
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold glass rounded-xl px-4">
            RealEstate<span className="text-blue-500">Finder</span>
          </Link>
        </div>

        {/* CENTER – Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-6 text-lg font-medium">
            <Link to="/" className="hover:text-blue-500 transition"><li>Home</li></Link>
            <Link to="/about" className="hover:text-blue-500 transition"><li>About</li></Link>
            <Link to="/services" className="hover:text-blue-500 transition"><li>Services</li></Link>
            <Link to="/contact" className="hover:text-blue-500 transition"><li>Contact</li></Link>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <button className="btn glass rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition px-6">
            Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;
