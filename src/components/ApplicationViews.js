import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./locations/LocationProvider";
import { LocationDetail } from "./locations/LocationDetail";
import { ProductProvider } from "./products/ProductProvider";
import { ProductTypeProvider } from "./products/ProductTypeProvider";
import { LocationList } from "./locations/LocationList";

export const ApplicationView = () => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <ProductTypeProvider>
            <Route exact path="/">
              <LocationList />
            </Route>

            <Route exact path="/locations/detail/:locationId(\d+)">
              <LocationDetail />
            </Route>
          </ProductTypeProvider>
        </ProductProvider>
      </LocationProvider>
    </>
  );
};
