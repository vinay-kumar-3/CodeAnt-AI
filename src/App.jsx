import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SigninPage } from "./pages/SigninPage";
import { Dashbord } from "./Dashboard/Dashbord";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Signin Page */}
        <Route path="/" element={<SigninPage/>} />

        {/* Route for Dashboard */}
        <Route path="/dashboard" element={<Dashbord/>} />
      </Routes>
    </Router>
  );
};

export default App;
