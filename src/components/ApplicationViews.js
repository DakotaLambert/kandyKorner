import React from "react"
// import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider";
import { LocationList } from "./locations/LocationList";

export const ApplicationView = () => {
    return (
        <>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </>
    )
}