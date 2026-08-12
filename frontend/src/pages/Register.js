import "../styles/Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">

        <h2>Create Account</h2>
        <label>Full Name :</label>
        <input
          type="text"
          placeholder="Enter your full name"
        />

        <label>Email :</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Phone Number :</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
        />

        <label>Password :</label>
        <input
          type="password"
          placeholder="Create password"
        />

        <label>Confirm Password :</label>
        <input
          type="password"
          placeholder="Confirm password"
        />
        <button className="register-btn">
          Register
        </button>

        <p>
          Already have an account?
          <Link to="/login"> Login Here</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;