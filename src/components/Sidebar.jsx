// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-45 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">Admin</div>
      <nav className="flex-1 p-4 space-y-4">
        <NavLink to="/" className="block px-3 py-2 hover:bg-gray-700 rounded" end>
          Dashboard
        </NavLink>
        <NavLink to="/add-food" className="block px-3 py-2 hover:bg-gray-700 rounded">
          Add Food
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
