import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LocationContext } from "./LocationProvider";
import "./Locations.css";

export const LocationDetail = () => {
  const { locations } = useContext(LocationContext);

  const [location, setLocation] = useState({
    products: [],
  });

  const { locationId } = useParams();

  useEffect(() => {
    const thisLocation = locations.find(
      (foundLocation) => foundLocation.id === parseInt(locationId)
    ) || { location: {} };
    setLocation(thisLocation);
  }, [locationId]);

  return (
    <section>
      <div className="locationListItem">
        <h2>{location.name}</h2>
        <h3>Products</h3>


      </div>
    </section>
  );
};
