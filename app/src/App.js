import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import {Route,Routes} from 'react-router-dom'
import { useState,useEffect } from 'react';
function App() {
 

  return (
    <><Navbar/>
   
    <div className='container'>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/products'element={<Products/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
    </div>
    </>
    
  );
}

export default App;
