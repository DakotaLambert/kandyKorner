import React, { useState, createContext } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
      .then((response) => response.json())
      .then(setEmployees);
  };

  return (
    <LocationContext.Provider value={{
        
        employees,
        getEmployees,

      }}>

      {props.children}
    </LocationContext.Provider>
  );
};
