import React from 'react';
import { FaSearch, FaHandshake, FaHome, FaSign } from 'react-icons/fa'; // Icons for service features

const Services = () => {
  
  // Define service data for easy mapping
  const serviceData = [
    {
      title: "Buying Your Dream Home",
      icon: FaSearch,
      description: "Our dedicated agents provide personalized property searches, market analysis, and negotiation expertise to help you secure the perfect home at the right price.",
      features: [
        "Personalized property matching",
        "Exclusive access to off-market listings",
        "Expert negotiation and closing support",
        "Financial consultation and loan pre-approval guidance"
      ],
      color: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700"
    },
    {
      title: "Selling Your Property",
      icon: FaHandshake,
      description: "Maximize your property's value with our comprehensive marketing strategies, professional staging advice, and targeted buyer outreach.",
      features: [
        "Professional photography and virtual tours",
        "Targeted digital and social media campaigns",
        "Competitive market price analysis (CMA)",
        "Seamless open house management and showing schedules"
      ],
      color: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      title: "Rental Management & Leasing",
      icon: FaHome,
      description: "From finding qualified tenants to full-service property management, we make owning rental properties simple, profitable, and stress-free.",
      features: [
        "Tenant screening and lease agreements",
        "24/7 maintenance coordination",
        "Rent collection and financial reporting",
        "Legal compliance and eviction assistance"
      ],
      color: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-700"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Header Section */}
      <div className="py-20 bg-indigo-50 border-b border-indigo-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Premium Real Estate Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you are looking to buy, sell, or rent, our expert team provides dedicated support at every stage of your property journey.
          </p>
        </div>
      </div>

      {/* 2. Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl shadow-xl transition duration-300 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} hover:shadow-2xl border-t-4 border-${service.color.slice(3)}`}
            >
              <div className={`p-4 inline-flex items-center justify-center rounded-full ${service.color} text-white shadow-lg mb-6`}>
                <service.icon className="h-8 w-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h2>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3 text-left">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 px-4 border border-transparent rounded-lg text-white font-semibold shadow-md ${service.color} ${service.hoverColor} transition duration-150 ease-in-out`}
              >
                Explore {service.title}
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* 3. Call to Action (CTA) */}
      <div className="bg-indigo-700">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-indigo-200">Contact us today for a free consultation.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;