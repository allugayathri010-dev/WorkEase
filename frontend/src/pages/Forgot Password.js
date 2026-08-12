import "../styles/ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>

        <p>
          Enter your registered email address to receive a password reset link.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button className="reset-btn">
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;