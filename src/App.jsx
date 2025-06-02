import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddFood from './pages/AddFood';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SignUp from './pages/Signup/Signup';
import Login from './pages/Login/Login';

// Layout for dashboard pages
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
};

// Layout for auth pages like login/register
const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-400">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes */}
        <Route path="/" element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        } />
        <Route path="/register" element={
          <AuthLayout>
            <SignUp />
          </AuthLayout>
        } />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } />
        <Route path="/add-food" element={
          <DashboardLayout>
            <AddFood />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
