import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { Register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const name = e.target.firstName.value;
    const email = e.target.email.value;
    const designation = e.target.designation.value;
    const password = e.target.password.value;
    // console.log({ name, email, designation, password });
    Register(email, password)
      .then((res) => {
        if (res.data) {
          alert("Registration successful!");
        }
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 mt-16">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          🚀 Join Our Community
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Name Input */}
          <div className="space-y-1">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Designation Input */}
          <div className="space-y-1">
            <label
              htmlFor="designation"
              className="block text-sm font-medium text-gray-700"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              placeholder="e.g., Software Engineer, Manager"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Minimum 8 characters"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-[1.01]"
          >
            Register Now
          </button>

          {/* OR Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white text-gray-500 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Sign-in Section */}
          <div className="space-y-4">
            {/* GitHub Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <i className="fab fa-github text-xl mr-3"></i>
              Sign in with <strong className="ml-1">GitHub</strong>
            </button>

            {/* Facebook Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center py-3 px-4 border border-blue-600 rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              <i className="fab fa-google text-xl mr-3"></i>
              Sign in with <strong className="ml-1">Google</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
