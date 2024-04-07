import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";
import ContextState from "./components/Context/ContextState";

const Home = lazy(() => import("./components/Main/Home"));
const ProductById = lazy(() => import("./components/Products/ProductById"));
const OrderProduct = lazy(() => import("./components/Products/OrderProduct"));
const PostProduct = lazy(() => import("./components/Seller/PostProduct"));
const AddToCart = lazy(() => import("./components/Cart/AddToCart"));
const PaymentSuccess = lazy(() => import("./components/Payment/PaymentSuccess"));
const SignUp = lazy(() => import("./components/Authontication/SignUp"));
const Login = lazy(() => import("./components/Authontication/LogIn"));
const LoginUser = lazy(() => import("./components/Helper/LoginUser"));

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContextState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Suspense fallback={<div>Loading...</div>}> <Home /> </Suspense>} />
            <Route path="/productbyid/:productId" element={<Suspense fallback={<div>Loading...</div>}> <ProductById /> </Suspense>} />
            <Route path="/OrderProduct" element={<Suspense fallback={<div>Loading...</div>}> <OrderProduct /> </Suspense>} />
            <Route path="/postProduct" element={<Suspense fallback={<div>Loading...</div>}> <PostProduct /> </Suspense>} />
            <Route path="/addToCart" element={<Suspense fallback={<div>Loading...</div>}> <AddToCart /> </Suspense>} />
            <Route path="/paymentSuccess" element={<Suspense fallback={<div>Loading...</div>}> <PaymentSuccess /> </Suspense>} />
            <Route path="/signup" element={<Suspense fallback={<div>Loading...</div>}> <SignUp /> </Suspense>} />
            <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}> <Login /> </Suspense>} />
            <Route path="/loginUser" element={<Suspense fallback={<div>Loading...</div>}> <LoginUser /> </Suspense>} />
            <Route path="*" element={<img src={'https://blog.fluidui.com/assets/images/posts/get-notes.png'} alt='notvalid' />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextState>
    </div>
  );
}

export default App;
