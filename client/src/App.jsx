import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import AboutUs from './components/Aboutus'
import ImageTextExtractor  from './components/imagetextextractor';
import Chatbot from './components/chatbot';



function App() {
 
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
    <Chatbot/>
   
    
    

    </>
  )
}

export default App
