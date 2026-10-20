import React from 'react';
import NavBar from './dashboard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup.jsx'

export default function Add() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for your registration/signup page */}
        <Route path="/" element={<Signup />} />
        
        {/* Route for your dashboard page */}
        <Route path="/dashboard" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}