import { Link } from "react-router-dom";
import "../styles/navbar.css";
export default function Navbar() {
return (
    <nav className="navbar">
        <h2>WorkEase</h2>

        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/my-bookings">My Bookings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        </ul>
    </nav>
);
}




