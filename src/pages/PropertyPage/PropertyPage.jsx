import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';

// --- MOCK DATA AND UTILITIES (Same as before) ---
const adaptDataToProperty = (posts) => {
    const images = [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3825e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1564013799919-ab6000aa1cd9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1502672260266-cedfb1bbd9d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    return posts.map((post) => ({
        id: post.id,
        title: post.title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        price: (Math.floor(Math.random() * 900) + 100) * 1000,
        location: `Block ${post.userId}, City ${post.id % 5 + 1}`,
        beds: (post.id % 5) + 1,
        baths: (post.id % 4) + 1,
        sqft: (Math.floor(Math.random() * 2000) + 800),
        description: post.body.substring(0, 100) + '...',
        image: images[post.id % images.length],
    }));
};
// --------------------------------------------------

const PropertyPage = () => {
    // 1. Data States
    const [allProperties, setAllProperties] = useState([]); // Stores all fetched data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Filter State
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [filterApplied, setFilterApplied] = useState(false); // Used to trigger filtering logic

    // --- Data Fetching Logic (Same as before) ---
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?');
                const propertyData = adaptDataToProperty(response.data);
                setAllProperties(propertyData);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching properties:", err);
                setError("Failed to fetch property listings. Please try again.");
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    // --- Filtering Function ---
    const filteredProperties = useMemo(() => {
        const minPrice = parseInt(priceRange.min) || 0;
        // Default max to a very large number if not specified
        const maxPrice = parseInt(priceRange.max) || Infinity; 

        if (!filterApplied) {
            return allProperties;
        }

        return allProperties.filter(property => {
            return property.price >= minPrice && property.price <= maxPrice;
        });
    }, [allProperties, priceRange, filterApplied]);
    // The list only recalculates when allProperties, priceRange, or filterApplied changes.

    // --- Handlers ---
    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        // Ensure filterApplied is reset when input changes
        setFilterApplied(false); 
        setPriceRange(prev => ({ ...prev, [name]: value }));
    };

    const handleFilterClick = () => {
        // Apply the filter state
        setFilterApplied(true); 
    };
    // --------------------------------------------------


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="text-xl font-medium text-indigo-600">Loading property listings...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-red-50">
                <div className="text-xl text-red-700 p-8 rounded-lg border-2 border-red-300 shadow-md">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            
            {/* Header */}
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900">
                    Featured Property Listings
                </h1>
                <p className="mt-2 text-xl text-gray-600">
                    Showing {filteredProperties.length} of {allProperties.length} total properties.
                </p>
            </div>

            {/* --- FILTER BAR --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FaFilter className="mr-2 text-indigo-600" /> Filter by Price
                </h2>
                <div className="flex flex-col md:flex-row gap-4 items-end">
                    
                    {/* Min Price Input */}
                    <div className="w-full md:w-1/3">
                        <label htmlFor="min-price" className="block text-sm font-medium text-gray-700">Min Price ($)</label>
                        <input
                            type="number"
                            id="min-price"
                            name="min"
                            value={priceRange.min}
                            onChange={handlePriceChange}
                            placeholder="e.g., 100000"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    
                    {/* Max Price Input */}
                    <div className="w-full md:w-1/3">
                        <label htmlFor="max-price" className="block text-sm font-medium text-gray-700">Max Price ($)</label>
                        <input
                            type="number"
                            id="max-price"
                            name="max"
                            value={priceRange.max}
                            onChange={handlePriceChange}
                            placeholder="e.g., 500000"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    
                    {/* Filter Button */}
                    <div className="w-full md:w-1/3">
                        <button
                            onClick={handleFilterClick}
                            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
            </div>
            {/* --- END FILTER BAR --- */}


            {/* Property Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {filteredProperties.length === 0 ? (
                    <div className="text-center py-10 text-xl text-gray-500 border-2 border-dashed border-gray-300 p-8 rounded-lg">
                        ⚠️ No properties match the current filter criteria.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map((property) => (
                            <div 
                                key={property.id} 
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-2xl hover:scale-[1.01] transition duration-300 border border-gray-100"
                            >
                                {/* Property Card content (same as before) */}
                                <div className="h-56 overflow-hidden">
                                    <img 
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover transition duration-500 ease-in-out hover:opacity-90"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-indigo-700 mb-1">
                                        ${property.price.toLocaleString()}
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-900 truncate">
                                        {property.title}
                                    </p>
                                    <div className="flex items-center text-gray-500 mt-2 mb-4">
                                        <FaMapMarkerAlt className="h-4 w-4 mr-2 text-indigo-500" />
                                        <span>{property.location}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-b border-gray-200 py-3">
                                        <div className="flex items-center text-gray-600 text-sm font-medium">
                                            <FaBed className="h-4 w-4 mr-1 text-indigo-500" /> {property.beds} Beds
                                        </div>
                                        <div className="flex items-center text-gray-600 text-sm font-medium">
                                            <FaBath className="h-4 w-4 mr-1 text-indigo-500" /> {property.baths} Baths
                                        </div>
                                        <div className="flex items-center text-gray-600 text-sm font-medium">
                                            <FaRulerCombined className="h-4 w-4 mr-1 text-indigo-500" /> {property.sqft} sqft
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-4">
                                        {property.description}
                                    </p>
                                    <button className="mt-6 w-full py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition duration-150">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyPage;