import React from 'react';
import { FaHeart, FaHandsHelping, FaLightbulb } from 'react-icons/fa'; // Icons for the values section

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/7xKbf1m1/Rectangle-28.png')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-center">
            Your Journey to Home Starts Here
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-center font-light max-w-3xl">
            We're dedicated to helping you find more than just a house—we help you find a community.
          </p>
        </div>
      </div>
      

      {/* 2. Mission Statement */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Mission
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Making Real Estate Personal and Simple
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Our goal is to **simplify the process of buying, selling, and renting homes**. We combine cutting-edge technology with personalized, human guidance to ensure every client's real estate experience is seamless, stress-free, and ultimately successful. We believe that finding your perfect home should be an exciting milestone, not a stressful task.
          </p>
        </div>
      </div>

      <hr className="max-w-6xl mx-auto border-gray-200" />
      
      {/* 3. Core Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            
            {/* Value 1: Integrity */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-[1.03] transition duration-300">
              <FaHeart className="mx-auto h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Integrity</h3>
              <p className="mt-2 text-base text-gray-500">
                We operate with complete honesty and transparency in every transaction, ensuring you can trust us completely with your biggest investment.
              </p>
            </div>

            {/* Value 2: Partnership */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-[1.03] transition duration-300">
              <FaHandsHelping className="mx-auto h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Partnership</h3>
              <p className="mt-2 text-base text-gray-500">
                We view our relationship with clients as a partnership. Your goals become our goals, and we work collaboratively to achieve them.
              </p>
            </div>

            {/* Value 3: Innovation */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-[1.03] transition duration-300">
              <FaLightbulb className="mx-auto h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
              <p className="mt-2 text-base text-gray-500">
                Utilizing the latest data and mapping technology to provide you with the most accurate, up-to-date property information available.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="max-w-6xl mx-auto border-gray-200" />

      {/* 4. Call to Action / Team Info */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Meet the Experts
            </h2>
            <p className="text-xl text-gray-500 mb-10">
                Our team is composed of licensed real estate professionals and technology specialists who live and breathe local markets. We’re here to guide you.
            </p>
            
            {/* Placeholder Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="h-24 w-24 rounded-full bg-indigo-200 mx-auto mb-4">
                        {/* Placeholder for Profile Picture */}
                        



                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Sarah K.</h4>
                    <p className="text-indigo-600">Lead Broker & Founder</p>
                </div>
                
                {/* Team Member 2 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="h-24 w-24 rounded-full bg-indigo-200 mx-auto mb-4">
                        {/* Placeholder for Profile Picture */}
                        
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">David M.</h4>
                    <p className="text-indigo-600">Technology & Data Lead</p>
                </div>

                {/* Team Member 3 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="h-24 w-24 rounded-full bg-indigo-200 mx-auto mb-4">
                        {/* Placeholder for Profile Picture */}
                        
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Elena R.</h4>
                    <p className="text-indigo-600">Client Success Manager</p>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;