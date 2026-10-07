import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";

function Payment() {
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const pendingBookingId =
      localStorage.getItem("pendingBookingId");

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    if (!pendingBookingId) {
      return;
    }

    const selectedBooking = bookings.find(
      (item) => item.id.toString() === pendingBookingId
    );

    if (selectedBooking) {
      setBooking(selectedBooking);
    }
  }, []);

  const amount = booking?.amount || 299;

  const handlePayment = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!booking) {
      setError("No pending booking was found.");
      return;
    }

    // Validate UPI
    if (paymentMethod === "upi") {
      const upiPattern =
        /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,}$/;

      if (!upiId.trim()) {
        setError("Please enter your UPI ID.");
        return;
      }

      if (!upiPattern.test(upiId.trim())) {
        setError("Please enter a valid UPI ID.");
        return;
      }
    }

    // Validate Card
    if (paymentMethod === "card") {
      const cleanCardNumber =
        cardNumber.replace(/\s/g, "");

      if (
        cleanCardNumber.length !== 16 ||
        !/^\d+$/.test(cleanCardNumber)
      ) {
        setError("Please enter a valid 16-digit card number.");
        return;
      }

      if (!cardName.trim()) {
        setError("Please enter the name on the card.");
        return;
      }

      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        setError("Enter expiry date in MM/YY format.");
        return;
      }

      if (!/^\d{3}$/.test(cvv)) {
        setError("Please enter a valid 3-digit CVV.");
        return;
      }
    }

    setProcessing(true);
    setMessage("Processing your payment...");

    setTimeout(() => {
      const bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      // Convert the selected payment method
      // into a clear value that will be stored.
      let savedPaymentMethod = "";
      let savedPaymentStatus = "";

      if (paymentMethod === "upi") {
        savedPaymentMethod = "UPI";
        savedPaymentStatus = "Paid";
      }

      if (paymentMethod === "card") {
        savedPaymentMethod = "Card";
        savedPaymentStatus = "Paid";
      }

      if (paymentMethod === "cash") {
        savedPaymentMethod = "Cash on Service";
        savedPaymentStatus = "Pay on Service";
      }

      const updatedBookings = bookings.map((item) => {
        if (item.id === booking.id) {
          return {
            ...item,

            status: "Confirmed",

            paymentMethod: savedPaymentMethod,

            paymentMethodLabel: savedPaymentMethod,

            paymentStatus: savedPaymentStatus,

            amount: amount,

            paidAt:
              paymentMethod === "cash"
                ? null
                : new Date().toISOString(),
          };
        }

        return item;
      });

      localStorage.setItem(
        "bookings",
        JSON.stringify(updatedBookings)
      );

      localStorage.removeItem("pendingBookingId");

      setProcessing(false);

      if (paymentMethod === "cash") {
        setMessage(
          "Booking confirmed successfully!"
        );
      } else {
        setMessage(
          "Payment successful! Your booking is confirmed."
        );
      }

      setTimeout(() => {
        navigate("/my-bookings");
      }, 1500);
    }, 1500);
  };

  if (!booking) {
    return (
      <div className="payment-page">
        <div className="payment-empty-card">
          <div className="payment-empty-icon">💳</div>

          <h1>No Pending Payment</h1>

          <p>
            We could not find a booking that needs payment.
          </p>

          <button
            className="back-services-button"
            onClick={() => navigate("/services")}
          >
            Browse Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">

      <div className="payment-header">
        <h1>Complete Your Payment</h1>

        <p>
          Review your booking and choose your preferred
          payment method.
        </p>
      </div>

      <div className="payment-content">

        <div className="payment-summary-card">

          <div className="payment-summary-icon">
            {booking.service === "Home Cleaning" && "🧹"}
            {booking.service === "Painting" && "🎨"}
            {booking.service === "Packers & Movers" && "🚚"}
            {booking.service === "AC & Appliances" && "❄️"}
            {booking.service === "Plumbing" && "🔧"}
            {booking.service === "Electrician" && "💡"}
            {booking.service === "Carpentry" && "🪚"}
            {booking.service === "Other Services" && "🛠️"}
          </div>

          <h2>Booking Summary</h2>

          <div className="payment-summary-item">
            <span>Service</span>
            <strong>{booking.service}</strong>
          </div>

          <div className="payment-summary-item">
            <span>Customer</span>
            <strong>{booking.fullName}</strong>
          </div>

          <div className="payment-summary-item">
            <span>Date</span>
            <strong>{booking.date}</strong>
          </div>

          <div className="payment-summary-item">
            <span>Time</span>
            <strong>{booking.time}</strong>
          </div>

          <div className="payment-summary-divider"></div>

          <div className="payment-total">
            <span>Total Amount</span>
            <strong>₹{amount}</strong>
          </div>

          <p className="payment-note">
            Final charges may vary depending on the actual
            service requirements.
          </p>

        </div>

        <div className="payment-form-card">

          <h2>Payment Method</h2>

          <div className="payment-methods">

            <button
              type="button"
              className={
                paymentMethod === "upi"
                  ? "payment-method active"
                  : "payment-method"
              }
              onClick={() => {
                setPaymentMethod("upi");
                setError("");
                setMessage("");
              }}
            >
              <span>📱</span>
              <strong>UPI</strong>
            </button>

            <button
              type="button"
              className={
                paymentMethod === "card"
                  ? "payment-method active"
                  : "payment-method"
              }
              onClick={() => {
                setPaymentMethod("card");
                setError("");
                setMessage("");
              }}
            >
              <span>💳</span>
              <strong>Card</strong>
            </button>

            <button
              type="button"
              className={
                paymentMethod === "cash"
                  ? "payment-method active"
                  : "payment-method"
              }
              onClick={() => {
                setPaymentMethod("cash");
                setError("");
                setMessage("");
              }}
            >
              <span>💵</span>
              <strong>Cash</strong>
            </button>

          </div>

          <form onSubmit={handlePayment}>

            {paymentMethod === "upi" && (
              <div className="payment-method-form">

                <label>UPI ID</label>

                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => {
                    setUpiId(e.target.value);
                    setError("");
                    setMessage("");
                  }}
                  placeholder="example@upi"
                />

                <p className="payment-help">
                  Enter your UPI ID to continue.
                </p>

              </div>
            )}

            {paymentMethod === "card" && (
              <div className="payment-method-form">

                <div className="payment-form-group">

                  <label>Card Number</label>

                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => {
                      const value =
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 16);

                      setCardNumber(value);
                      setError("");
                      setMessage("");
                    }}
                    placeholder="16-digit card number"
                    maxLength="16"
                  />

                </div>

                <div className="payment-form-group">

                  <label>Name on Card</label>

                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => {
                      setCardName(e.target.value);
                      setError("");
                      setMessage("");
                    }}
                    placeholder="Enter name on card"
                  />

                </div>

                <div className="card-details-row">

                  <div className="payment-form-group">

                    <label>Expiry</label>

                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => {
                        let value =
                          e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 4);

                        if (value.length > 2) {
                          value =
                            value.slice(0, 2) +
                            "/" +
                            value.slice(2);
                        }

                        setExpiry(value);
                        setError("");
                        setMessage("");
                      }}
                      placeholder="MM/YY"
                      maxLength="5"
                    />

                  </div>

                  <div className="payment-form-group">

                    <label>CVV</label>

                    <input
                      type="password"
                      value={cvv}
                      onChange={(e) => {
                        setCvv(
                          e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 3)
                        );

                        setError("");
                        setMessage("");
                      }}
                      placeholder="CVV"
                      maxLength="3"
                    />

                  </div>

                </div>

              </div>
            )}

            {paymentMethod === "cash" && (
              <div className="cash-payment-box">

                <div className="cash-icon">💵</div>

                <h3>Pay on Service</h3>

                <p>
                  You can pay ₹{amount} directly to the
                  service professional after the service
                  is completed.
                </p>

              </div>
            )}

            {error && (
              <p className="payment-error">
                {error}
              </p>
            )}

            {message && (
              <p className="payment-success">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="pay-button"
              disabled={processing}
            >
              {processing
                ? "Processing..."
                : paymentMethod === "cash"
                ? "Confirm Booking"
                : `Pay ₹${amount}`}
            </button>

            <p className="secure-payment-text">
              🔒 This is a frontend payment simulation.
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Payment;