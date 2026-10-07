import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Check login status whenever the page/route changes
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(
        localStorage.getItem("isLoggedIn") === "true"
      );
    };

    checkLoginStatus();
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    setIsLoggedIn(false);

    navigate("/");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        WorkEase
      </Link>

      <ul className="navbar-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link to="/my-bookings">
                My Bookings
              </Link>
            </li>

            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>

            <li>
              <button
                className="logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="login-link"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="register-link"
              >
                Register
              </Link>
            </li>
          </>
        )}

      </ul>
    </nav>
  );
}