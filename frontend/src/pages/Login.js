import "../styles/Login.css";
import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <label>Email :</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password :</label>
        <input type="password" placeholder="Enter your password" />
        <Link to="/forgot-password" className="forgot-password">
        Forgot Password?
        </Link>

        <button>Login</button>

        <p>
          Don't have an account? Register
        </p>
        <Link to="/register">
        <button className="register-button">Register Here</button>
        </Link>
      </div>
    </div>
  );
}