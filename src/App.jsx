import React from "react";
import Footer from "./components/Main/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Main/Home";
import Header from "./components/Main/Header";
import SignUp from "./components/Authontication/SignUp";
import Login from "./components/Authontication/LogIn";
import OrderProduct from "./components/Products/OrderProduct";
import ProductById from "./components/Products/ProductById";
import PostProduct from "./components/Seller/PostProduct";
import AddToCart from "./components/Cart/AddToCart";
import { PaymentSuccess } from "./components/Payment/PaymentSuccess";
import LoginUser from "./components/Helper/LoginUser";
// import { ContextState } from "./components/Context/ContextState";
import ContextState from "./components/Context/ContextState";
function App() {
    return (
    <div className="flex flex-col min-h-screen">
      <ContextState>
        <BrowserRouter >
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productbyid/:productId' element={<ProductById />} />
            <Route path='/OrderProduct' element={<OrderProduct />} />
            <Route path='/postProduct' element={<PostProduct />} />
            <Route path='/addToCart' element={<AddToCart />} />
            <Route path='/paymentSuccess' element={<PaymentSuccess />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loginUser' element={<LoginUser />} />
            <Route path='*' element={<img src={'https://blog.fluidui.com/assets/images/posts/get-notes.png'} alt='notvalid' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextState>
    </div>
  );
}

export default App;
