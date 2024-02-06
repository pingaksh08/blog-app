import React from 'react';
import "./App.css";
import Post from './components/Post';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <main>
      <Routes>
        <Route index element={<>
          <Header />
          <Post />
          <Post />
          <Post /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </main>
  );
}

export default App;
