import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';  // Import the Dashboard page
import AddJobPage from './pages/AddJobPage';
import ProfilePage from './pages/ProfilePage';
import AllJobPage from './pages/AllJobPage';
import Stats from './pages/Stats';

function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add-job" element={<AddJobPage/>}/>
        <Route path="/all-jobs" element={<AllJobPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/stats" element={<Stats/>}/>
      </Routes>
    </>
  );
};

export default App;
