import { useState } from "react";
import "../styles/Payment.css";
function Payment() {
  const [message, setMessage] = useState("");

  const handlePayment = () => {
    setMessage("Payment Successful! Your booking has been confirmed.");
  };

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2>Payment</h2>

        <label>Select Payment Method</label>

        <div className="payment-option">
          <input type="radio" name="payment" id="upi" />
          <label htmlFor="upi">UPI</label>
        </div>

        <div className="payment-option">
          <input type="radio" name="payment" id="card" />
          <label htmlFor="card">Credit / Debit Card</label>
        </div>

        <div className="payment-option">
          <input type="radio" name="payment" id="cash" />
          <label htmlFor="cash">Cash on Service</label>
        </div>

        <button className="pay-btn" onClick={handlePayment}>
          Pay Now
        </button>

        {message && (
          <p className="payment-success">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Payment;