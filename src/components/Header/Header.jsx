import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, SignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const LogOut = () => {
    SignOut().then(() => {
      Swal.fire({
        title: "Logged out successfully!",
        text: "You will be redirected to the home page.",
        icon: "success",
        confirmButtonText: "Continue",
      });
      navigate("/");
    });
  };

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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content glass bg-white/40 rounded-xl mt-3 w-52 p-3 shadow-xl backdrop-blur-lg"
            >
              <Link to="/" className="hover:text-blue-500 transition">
                <li>Home</li>
              </Link>
              <Link to="/about" className="hover:text-blue-500 transition">
                <li>About</li>
              </Link>
              <Link to="/global-career-guide" className="hover:text-blue-500 transition">
                <li>Global Career Guide</li>
              </Link>
              <Link to="/weather-search" className="hover:text-blue-500 transition">
                <li>Weather Search</li>
              </Link>
            </ul>
          </div>

          <Link
            to="/"
            className="btn btn-ghost normal-case lg:text-2xl font-bold glass rounded-xl lg:px-4"
          >
            Home<span className="text-blue-500">Sphere</span>
          </Link>
        </div>

        {/* CENTER – Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-6 text-lg font-medium">
            <Link to="/" className="hover:text-blue-500 transition">
              <li>Home</li>
            </Link>
            <Link to="/about" className="hover:text-blue-500 transition">
              <li>About</li>
            </Link>
            <Link to="/global-career-guide" className="hover:text-blue-500 transition">
              <li>Global Career Guide</li>
            </Link>
            <Link to="/weather-search" className="hover:text-blue-500 transition">
              <li>Weather Search</li>
            </Link>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          {user ? (
            <>
              <p className="mr-4">{user.displayName}</p>
              <button
                onClick={LogOut}
                className="btn glass rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition px-6"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {" "}
              <Link to="/login" className="btn glass rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition px-6">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
