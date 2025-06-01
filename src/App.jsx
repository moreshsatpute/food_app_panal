// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddFood from './pages/AddFood';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
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
  );
};

export default App;
