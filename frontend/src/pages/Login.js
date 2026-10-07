import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Check empty fields
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Get registered users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
      (registeredUser) =>
        registeredUser.email.toLowerCase() ===
          email.trim().toLowerCase() &&
        registeredUser.password === password
    );

    // Check login details
    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    // Save login status
    localStorage.setItem("isLoggedIn", "true");

    // Save current user
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    // Go to home page
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h1>Welcome Back</h1>

          <p>
            Login to continue using WorkEase.
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="login-form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="login-form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <div className="forgot-password">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="login-submit"
          >
            Login
          </button>

        </form>

        <div className="register-text">
          Don't have an account?
          <Link to="/register">
            {" "}Create an Account
          </Link>
        </div>

      </div>
    </div>
  );
}