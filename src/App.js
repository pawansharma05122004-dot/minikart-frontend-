import React from "react";
import Footer from "./components/Landing/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Header from "./components/Landing/Header";
import Cart from "./components/Cart";
import ContextData from "./components/userCart/contextData";
function App() {

  return (
    <div>
      <BrowserRouter >
        {/* <ContextData> */}
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='userProfile/' element={<Profile />}>
              <Route path=':userId' element={<Profile />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<img src={'https://blog.fluidui.com/assets/images/posts/get-notes.png'} alt='notvalid' />} />
          </Routes>
          <Footer />
        {/* </ContextData> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
