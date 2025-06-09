// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddFood from "./pages/AddFood";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { LoaderProvider } from "./context/LoaderContext";

const App = () => {
  return (
    <LoaderProvider>
      <Router>
        <div className="flex ">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-food" element={<AddFood />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LoaderProvider>
  );
};

export default App;
