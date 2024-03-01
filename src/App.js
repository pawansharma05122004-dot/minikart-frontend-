import React from "react";
import Footer from "./components/Landing/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Main/Home";
import Header from "./components/Landing/Header";
import SignUp from "./components/Authontication/SignUp";
import  Login  from "./components/Authontication/LogIn";
function App() {

  return (
    <div>
      <BrowserRouter >
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<img src={'https://blog.fluidui.com/assets/images/posts/get-notes.png'} alt='notvalid' />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
