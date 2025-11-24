import axios from "axios";
import React, { useState } from "react";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const GEO_API_KEY = "7f8f2bd484msh9f503299fe34d0fp16ef34jsn254268c8b60d"; // <-- replace with your key

const CityInfo = ({ cityId }) => {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  try {
    axios
      .get(`${GEO_API_URL}/${cityId}`, {
        headers: {
          "X-RapidAPI-Key": GEO_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      })
      .then((res) => {
        setCity(res.data.data);
        console.log(res.data);
        
      });
    setLoading(false);
  } catch (err) {
    console.error("City Info Error:", err);
    setLoading(false);
  }

  if (!cityId)
    return (
      <p className="text-center text-gray-500 mt-6">
        Search for a city to view details.
      </p>
    );

  if (loading)
    return (
      <p className="text-center text-gray-500 mt-6">Loading city info...</p>
    );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{city.city}</h2>

      <div className="grid md:grid-cols-2 gap-6 text-lg">
        <p>
          <strong>Country:</strong> {city.country}
        </p>
        <p>
          <strong>Region:</strong> {city.region}
        </p>
        <p>
          <strong>Latitude:</strong> {city.latitude}
        </p>
        <p>
          <strong>Longitude:</strong> {city.longitude}
        </p>
        <p>
          <strong>Population:</strong> {city.population?.toLocaleString()}
        </p>
      </div>

      {/* Google Map Embed */}
      <div className="mt-8">
        <iframe
          title="city-map"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "12px" }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${city.latitude},${city.longitude}&hl=es;z=12&output=embed`}
        ></iframe>
      </div>
    </div>
  );
};

export default CityInfo;
