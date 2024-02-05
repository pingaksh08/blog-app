import React from 'react';
import "./App.css";
import Posts from './components/Posts';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
      <Header />
      <Posts />
    </main>
  );
}

export default App;
