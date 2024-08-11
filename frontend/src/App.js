import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/Navbar' element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
