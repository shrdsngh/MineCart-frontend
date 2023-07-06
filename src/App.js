import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Homepage from "./components/Homepage";
import Checkout from "./components/Checkout";
import Address from "./components/Address";
import AddProduct from "./components/AddProduct";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/Orders";
import PrivateComponent from "./components/PrivateComponent";

const promise = loadStripe(
  "pk_test_51NMml8SG0P2qUZ5ruGVlKXwJlCMmIxRoAyVLixTVrWXac9RLVGa3GnfBo5UEVgiN9fbW72lpB4obzrkhymGftMhP006KrWwEWf"
);

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/address" element={<Address />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            />
          </Route>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
