import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Navbar from '../components/Navbar';
import LoginPage from '../components/LoginPage';
import Registration from '../components/Registration';
import ProfilePage from '../components/ProfilePage';
import LogOutPage from '../components/LogOutPage';

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/logout" element={<LogOutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
