import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { ProductContext } from "../products/ProductProvider";
import { ProductTypeContext } from "../products/ProductTypeProvider";
import { Link } from "react-router-dom";
import "./Locations.css";
import "../products/Products.css";



export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);
  const { products, getProducts } = useContext(ProductContext);
  const { productTypes, getProductTypes } = useContext(ProductTypeContext);

  useEffect(() => {
    getLocations().then(getProducts);
  }, []);

  return (
    <>
      <h2 className="locationHeader">Locations</h2>
      <section className="locationList">
        {locations.map((location) => (
          <div className="locationListItem" key={location.id}>
            <Link to={`/locations/detail/${location.id}`}>
              <h3 key={location.id}>{location.name} </h3>
            </Link>
            <div key={location.address}>{location.address}</div>
          </div>
        ))}
      </section>
      <h2 className="productHeader">Products</h2>
      <section className="productList">
        {products.map((product) => (
          <div className="productListItem" key={product.id}>
            <h3>{product.name}</h3> - ${product.price}
          </div>
        ))}
      </section>
    </>
  );
};
