import React, { useState, createContext } from "react";

export const ProductTypeContext = createContext();

export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
      //the embedded data has to have a foreignKey to the main datas primaryKey
    return fetch("http://localhost:8088/productTypes?_embed=products")
      .then((response) => response.json())
      .then(setProductTypes);
  };

  return (
    <ProductTypeContext.Provider value={{
        
        productTypes,
        getProductTypes,

      }}>

      {props.children}
    </ProductTypeContext.Provider>
  );
};