import React from 'react';
// Icons for Global Relocation and Career
import { 
  FaGlobe,      // Global/Country Search
  FaLaptopCode, // Remote Work / Tech
  FaPassport,   // Visa & Immigration
  FaUserTie,    // Skilled Worker / Career
} from 'react-icons/fa'; 

const GlobalCareerGuide = () => {
  
  // Data focused on the immigration and work process
  const guideData = [
    {
      title: "1. Define Your Path: Skilled or Remote?",
      icon: FaUserTie,
      description: "Determine the best way to move: Are you seeking a local job (Skilled Worker Visa) or planning to work for a foreign company (Remote/Digital Nomad Visa)?",
      features: [
        "Skilled Worker: High-demand fields (Tech, Healthcare, Engineering).",
        "Digital Nomad: Proof of foreign income and high-speed internet needs.",
        "Entrepreneur: Startup/Investor visa requirements (capital & business plan).",
      ],
      color: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700"
    },
    {
      title: "2. The Visa & Immigration Roadmap",
      icon: FaPassport,
      description: "Research visa types. Countries like Canada, Australia, and Germany often offer structured, points-based systems for skilled professionals.",
      features: [
        "**Express Entry (Canada/Australia):** Point-based system for Permanent Residency.",
        "**EU Blue Card (Germany/EU):** For university-level graduates with a job offer.",
        "**Digital Nomad Visas (Portugal, Spain, Estonia):** For location-independent workers.",
        "**Job Seeker Visas (Germany):** Allows entry to search for a job locally.",
      ],
      color: "bg-teal-600",
      hoverColor: "hover:bg-teal-700"
    },
    {
      title: "3. Find Work & Secure Sponsorship",
      icon: FaLaptopCode,
      description: "Most work visas require a job offer from a local employer willing to sponsor you. Networking and tailored applications are key.",
      features: [
        "Update CV/Resume to destination country standards.",
        "Use international job boards (e.g., LinkedIn, specialized expat sites).",
        "Network with professionals in the destination country's industry.",
        "Attach visa pre-qualification reports to resumes to build employer confidence.",
      ],
      color: "bg-yellow-600",
      hoverColor: "hover:bg-yellow-700"
    },
    {
      title: "4. Settle In: Culture & Logistics",
      icon: FaGlobe,
      description: "Once the visa is secured, focus on the practical steps: finding accommodation, understanding healthcare, and cultural assimilation.",
      features: [
        "Learning the local language is critical for long-term success/PR.",
        "Understand local tax and social security obligations.",
        "Register with local authorities immediately upon arrival.",
        "Seek out expat groups and local community resources.",
      ],
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. Header Section */}
      <div className="py-20 bg-blue-50 border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            ✈️ Your Guide to Working and Immigrating Abroad
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A step-by-step roadmap for choosing your dream country, navigating the visa process, and securing employment as an expatriate or remote worker.
          </p>
        </div>
      </div>

      {/* 2. Guide Steps Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {guideData.map((step, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl shadow-xl transition duration-300 bg-white hover:shadow-2xl border-t-4 border-${step.color.slice(3)}`}
            >
              <div className={`p-4 inline-flex items-center justify-center rounded-full ${step.color} text-white shadow-lg mb-6`}>
                <step.icon className="h-7 w-7" />
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-3 min-h-[56px] flex items-center">
                {step.title}
              </h2>
              
              <p className="text-gray-600 mb-6 text-sm min-h-[72px]">
                {step.description}
              </p>
              
              <ul className="space-y-2 text-left text-sm">
                {step.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <svg className="shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full py-2 px-4 border border-transparent rounded-lg text-white font-semibold shadow-md ${step.color} ${step.hoverColor} transition duration-150 ease-in-out text-sm`}
              >
                Start Step {index + 1} Planning
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* 3. Call to Action (CTA) */}
      <div className="bg-blue-700">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to take the first step?</span>
            <span className="block text-blue-200">See which countries need your professional skills.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                View Top Immigration Countries
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400"
              >
                Contact an Immigration Consultant
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default GlobalCareerGuide;