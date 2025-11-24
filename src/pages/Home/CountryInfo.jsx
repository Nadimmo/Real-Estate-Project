import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryInfo = ({ cityId }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!cityId) return; // optional: handle empty cityId

    axios
      .get(`https://restcountries.com/v3.1/name/${cityId}`)
      .then((response) => {
        if (response.data.length > 1) {
          // If multiple countries found, set all data
          setCountry(response.data);
        } else if (response.data.length === 1) {
          // If only one country found, set the first item
          setCountry(response.data[0]);
        } else {
          // No countries found
          setCountry(null);
        }

        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setCountry(null);
      });
  }, [cityId]);

  // console.log(country);

  // Extract data
  const capital = country?.capital?.[0];
  const population = country?.population?.toLocaleString();
  const lat = country?.latlng?.[0];
  const lng = country?.latlng?.[1];
  const region = country?.region;
  const subregion = country?.subregion;
  const flag = country?.flags?.svg;
  const languages = country?.languages
  const officialName = country?.name?.official;

  return (
    <div className=" mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      {country?.length > 0 ? (
        <div className="grid grid-cols-2 gap-8 ">
          {" "}
          {country?.map((e) => (
            <div
              key={e.name.common}
              className="border rounded-2xl p-4 border-[#FAF3E1]"
            >
              {/* Title */}
              <div className="flex items-center gap-4">
                <img
                  src={e.flags.svg}
                  alt="flag"
                  className="w-14 h-10 rounded shadow"
                />
                <h2 className="text-3xl font-bold text-gray-800">
                  {e.name.common}
                </h2>
              </div>
              {/* Info */}
              <div className="grid md:grid-cols-2 gap-6 mt-6 text-lg">
                <p>
                  <strong>Capital:</strong> {e.capital?.[0]}
                </p>
                <p>
                  <strong>Official Name:</strong> {e.name?.official}
                </p>
                <p>
                  <strong>Region:</strong> {e.region}
                </p>
                <p>
                  <strong>Subregion:</strong> {e.subregion}
                </p>
                <p>
                  <strong>Population:</strong> {e.population?.toLocaleString()}
                </p>
                <p>
                  <strong>Latitude:</strong> {e.latlng?.[0]}
                </p>
                <p>
                  <strong>Longitude:</strong> {e.latlng?.[1]}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {e.languages && Object.values(e.languages).join(", ")}
                </p>
              </div>
              {/*  Google Map */}
              <div className="mt-8">
                <iframe
                  title="country-map"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: "12px" }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${e.latlng?.[0]},${e.latlng?.[1]}&z=5&output=embed`}
                ></iframe>
              </div>
            </div>
          ))}{" "}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {" "}
          {/* Title */}
          <div className="flex items-center gap-4">
            <img src={flag} alt="flag" className="w-14 h-10 rounded shadow" />
            <h2 className="text-3xl font-bold text-gray-800">
              {country?.name?.common}
            </h2>
          </div>
          {/* Info */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 text-lg">
            <p>
              <strong>Capital:</strong> {capital}
            </p>
            
            <p>
              <strong>Official Name:</strong> {officialName}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Subregion:</strong> {subregion}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Latitude:</strong> {lat}
            </p>
            <p>
              <strong>Longitude:</strong> {lng}
            </p>
            
            <p>
              <strong>Languages:</strong> {languages && Object.values(languages).join(", ")}
            </p>
          </div>
          {/*  Google Map */}
          <div className="mt-8">
            <iframe
              title="country-map"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "12px" }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${lat},${lng}&z=5&output=embed`}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
