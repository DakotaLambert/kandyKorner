import React from "react";
import { ApplicationView } from "./ApplicationViews";
// import { Route } from "react-router-dom";
import { NavBar } from "./nav/NavBar";

export const KandyKorner = () => (
  <>
    <NavBar />
    <div className="kandyKornerInfoHead">
      <h1>Kandy Korner</h1>
      <small>Kandy around every Korner</small>
      <address>
        <div>1337 Kandy Korner</div>
      </address>
    </div>
    <ApplicationView />
  </>
);
