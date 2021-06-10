import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import "./Locations.css";
export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <h2 className="locationHeader">Locations</h2>
      <section className="locationList">
        {locations.map((location) => (
          <div className="locationListItem" key={location.id}>
            <h3 key={location.id}>{location.name} </h3>
            <div key={location.address}>{location.address}</div>
          </div>
        ))}
      </section>
    </>
  );
};
