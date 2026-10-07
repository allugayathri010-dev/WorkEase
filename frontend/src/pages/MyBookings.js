import { useEffect, useState } from "react";
import "../styles/MyBookings.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const currentUser =
      JSON.parse(localStorage.getItem("currentUser")) || null;

    let userBookings = savedBookings;

    if (currentUser) {
      userBookings = savedBookings.filter(
        (booking) =>
          booking.userId === currentUser.id ||
          booking.userId === null
      );
    }

    setBookings(userBookings);
  };

  const openCancelPopup = (bookingId) => {
    setSelectedBookingId(bookingId);
    setShowPopup(true);
  };

  const closeCancelPopup = () => {
    setShowPopup(false);
    setSelectedBookingId(null);
  };

  const confirmCancel = () => {
    if (selectedBookingId === null) {
      return;
    }

    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const updatedBookings = savedBookings.map((booking) => {
      if (booking.id === selectedBookingId) {
        return {
          ...booking,
          status: "Cancelled",
          cancelledAt: new Date().toISOString(),
        };
      }

      return booking;
    });

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings((previousBookings) =>
      previousBookings.map((booking) => {
        if (booking.id === selectedBookingId) {
          return {
            ...booking,
            status: "Cancelled",
            cancelledAt: new Date().toISOString(),
          };
        }

        return booking;
      })
    );

    closeCancelPopup();
  };

  const getStatusClass = (status) => {
    const currentStatus = status || "Pending Payment";

    return currentStatus
      .toLowerCase()
      .replace(/\s+/g, "-");
  };

  const getServiceIcon = (service) => {
    const icons = {
      "Home Cleaning": "🧹",
      "Painting": "🎨",
      "Packers & Movers": "🚚",
      "AC & Appliances": "❄️",
      "Plumbing": "🔧",
      "Electrician": "💡",
      "Carpentry": "🪚",
      "Other Services": "🛠️",
    };

    return icons[service] || "🛠️";
  };

  const getPaymentMethod = (booking) => {
  if (booking.paymentMethodLabel) {
    return booking.paymentMethodLabel;
  }

  if (booking.paymentMethod === "UPI") {
    return "UPI";
  }

  if (booking.paymentMethod === "upi") {
    return "UPI";
  }

  if (booking.paymentMethod === "Card") {
    return "Card";
  }

  if (booking.paymentMethod === "card") {
    return "Card";
  }

  if (booking.paymentMethod === "Cash on Service") {
    return "Cash on Service";
  }

  if (booking.paymentMethod === "cash") {
    return "Cash on Service";
  }

  return "Not Available";
};

const getPaymentStatus = (booking) => {
  if (booking.paymentStatus === "Paid") {
    return "Paid";
  }

  if (booking.paymentStatus === "Pay on Service") {
    return "Pay on Service";
  }

  if (booking.paymentStatus === "Pending") {
    return "Pending";
  }

  return "Not Available";
};

  return (
    <div className="mybookings-page">

      <div className="mybookings-header">
        <h1>My Bookings</h1>
        <p>
          View and manage all your WorkEase service bookings.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="no-bookings">

          <div className="no-bookings-icon">
            📋
          </div>

          <h2>No Bookings Yet</h2>

          <p>
            You have not booked any services yet.
            Choose a service and make your first booking.
          </p>

          <a
            href="/services"
            className="browse-services-button"
          >
            Browse Services
          </a>

        </div>
      ) : (

        <div className="bookings-list">

          {bookings.map((booking) => {

            const status =
              booking.status || "Pending Payment";

            const amount =
              booking.amount || 0;

            return (
              <div
                className="booking-card"
                key={booking.id}
              >

                <div className="booking-card-header">

                  <div className="booking-service-title">

                    <div className="booking-service-icon">
                      {getServiceIcon(booking.service)}
                    </div>

                    <div>
                      <h2>{booking.service}</h2>

                      <p>
                        Booking ID: #{booking.id}
                      </p>
                    </div>

                  </div>

                  <span
                    className={`booking-status ${getStatusClass(
                      status
                    )}`}
                  >
                    {status}
                  </span>

                </div>


                <div className="booking-details">

                  <div className="booking-detail">
                    <span>Customer</span>
                    <strong>
                      {booking.fullName}
                    </strong>
                  </div>

                  <div className="booking-detail">
                    <span>Phone</span>
                    <strong>
                      {booking.phone}
                    </strong>
                  </div>

                  <div className="booking-detail">
                    <span>Date</span>
                    <strong>
                      {booking.date}
                    </strong>
                  </div>

                  <div className="booking-detail">
                    <span>Time</span>
                    <strong>
                      {booking.time}
                    </strong>
                  </div>

                  <div className="booking-detail booking-address">
                    <span>Service Address</span>
                    <strong>
                      {booking.address}
                    </strong>
                  </div>

                  <div className="booking-detail">
                    <span>Amount</span>
                    <strong>
                      ₹{amount}
                    </strong>
                  </div>

                  <div className="booking-detail">
                    <span>Payment Status</span>
                    <strong>
                      {getPaymentStatus(booking)}
                    </strong>
                  </div>

                  <div className="booking-detail">
                    <span>Payment Method</span>
                    <strong>
                      {getPaymentMethod(booking)}
                    </strong>
                  </div>

                </div>


                {booking.description && (
                  <div className="booking-description">

                    <span>
                      Additional Requirements
                    </span>

                    <p>
                      {booking.description}
                    </p>

                  </div>
                )}


                <div className="booking-card-footer">

                  {status.toLowerCase() ===
                    "pending payment" && (
                    <p className="pending-message">
                      Payment is required to confirm
                      this booking.
                    </p>
                  )}

                  {status.toLowerCase() ===
                    "confirmed" && (
                    <p className="confirmed-message">
                      ✓ Your service booking is confirmed.
                    </p>
                  )}

                  {status.toLowerCase() ===
                    "cancelled" && (
                    <p className="cancelled-message">
                      This booking has been cancelled.
                    </p>
                  )}

                  {status.toLowerCase() ===
                    "completed" && (
                    <p className="completed-message">
                      ✓ This service has been completed.
                    </p>
                  )}

                  {status.toLowerCase() !==
                    "cancelled" &&
                    status.toLowerCase() !==
                      "completed" && (
                      <button
                        className="cancel-btn"
                        onClick={() =>
                          openCancelPopup(booking.id)
                        }
                      >
                        Cancel Booking
                      </button>
                    )}

                </div>

              </div>
            );
          })}

        </div>
      )}


      {showPopup && (
        <div className="popup-overlay">

          <div className="popup-box">

            <div className="popup-icon">
              ⚠️
            </div>

            <h3>
              Cancel Booking?
            </h3>

            <p>
              Are you sure you want to cancel
              this booking?
            </p>

            <div className="popup-buttons">

              <button
                className="yes-btn"
                onClick={confirmCancel}
              >
                Yes, Cancel
              </button>

              <button
                className="no-btn"
                onClick={closeCancelPopup}
              >
                No, Keep It
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default MyBookings;