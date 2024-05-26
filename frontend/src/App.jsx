import React from 'react'
import "./App.css"
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
     
    
      <Footer/>
      <ToastContainer position="top-center"/>
    </Router>

    </>
  );
};

export default App