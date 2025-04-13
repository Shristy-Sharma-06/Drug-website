import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './Components/Home';
import  Contact  from './Components/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/contact'element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
      
  );
}

export default App;

