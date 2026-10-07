import Navbar from "./components/navbar.js";
import Home from "./pages/home.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/Forgot Password.js";
import Booking from "./pages/Booking.js";
import MyBookings from "./pages/MyBookings.js";
import Profile from "./pages/Profile.js";
import Payment from "./pages/Payment.js";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}