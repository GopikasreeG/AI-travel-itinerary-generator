/* eslint-disable no-unused-vars */
import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path=""
          element={<LandingPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
