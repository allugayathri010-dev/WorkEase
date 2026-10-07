import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const enteredEmail = email.trim().toLowerCase();

    if (!enteredEmail || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(enteredEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (newPassword.length < 6) {
      setError(
        "Password must be at least 6 characters long."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex(
      (user) =>
        user.email.toLowerCase() === enteredEmail
    );

    if (userIndex === -1) {
      setError(
        "No account found with this email address."
      );
      return;
    }

    const updatedUsers = [...users];

    updatedUsers[userIndex] = {
      ...updatedUsers[userIndex],
      password: newPassword,
    };

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setEmail("");
    setNewPassword("");
    setConfirmPassword("");

    setSuccess(
      "Password reset successfully. Redirecting to Login..."
    );

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="forgot-password-page">

      <div className="forgot-password-card">

        <div className="forgot-password-header">
          <h1>Reset Password</h1>

          <p>
            Enter your registered email and create a new
            password.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="forgot-form-group">
            <label>Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
                setSuccess("");
              }}
              placeholder="Enter your registered email"
            />
          </div>

          <div className="forgot-form-group">
            <label>New Password</label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setError("");
                setSuccess("");
              }}
              placeholder="Enter new password"
            />
          </div>

          <div className="forgot-form-group">
            <label>Confirm New Password</label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
                setSuccess("");
              }}
              placeholder="Confirm new password"
            />
          </div>

          {error && (
            <p className="forgot-error">
              {error}
            </p>
          )}

          {success && (
            <p className="forgot-success">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="forgot-submit-button"
          >
            Reset Password
          </button>

        </form>

        <button
          className="back-login-button"
          onClick={() => navigate("/login")}
        >
          ← Back to Login
        </button>

      </div>

    </div>
  );
}

export default ForgotPassword;