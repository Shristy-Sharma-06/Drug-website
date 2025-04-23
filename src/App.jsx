import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './Components/Home';
import  Contact  from './Components/Contact';
import About from './Components/About'
import Service from './Components/Service';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Product from './Components/Product';
import More1 from './Components/More1';
import More2 from './Components/More2';
import More3 from './Components/More3';



function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/contact'element={<Contact/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login'element={<Login/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/service'element={<Service/>} />
      <Route path=''element={<Product/>}/>
      <Route path='/product/more1'element={<More1/>}/>
      <Route path='/product/more2'element={<More2/>}/>
      <Route path='/product/more3'element={<More3/>}/>
      
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
      
  );
}

export default App;

