import { useEffect, useState } from "react";
import "../styles/MyBookings.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
const [selectedBooking, setSelectedBooking] = useState(null);
  const cancelBooking = (index) => {
  setSelectedBooking(index);
  setShowPopup(true);
};
const confirmCancel = () => {
  const updatedBookings = bookings.filter(
    (_, i) => i !== selectedBooking
  );

  setBookings(updatedBookings);

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );

  setShowPopup(false);
  setSelectedBooking(null);
};
  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);
  }, []);

  return (
    <div className="mybookings-container">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="no-bookings">
          No bookings found.
        </p>
      ) : (
        bookings.map((booking, index) => (
          <div className="booking-card" key={index}>
            <h3>{booking.service}</h3>

            <p>
              <strong>Name:</strong> {booking.fullName}
            </p>

            <p>
              <strong>Phone:</strong> {booking.phone}
            </p>

            <p>
              <strong>Address:</strong> {booking.address}
            </p>

            <p>
              <strong>Date:</strong> {booking.date}
            </p>

            <p>
              <strong>Time:</strong> {booking.time}
            </p>

            <p>
              <strong>Description:</strong>{" "}
              {booking.description}
            </p>

            <p className={booking.status.toLowerCase()}>
  <strong>Status:</strong> {booking.status}
</p>
            <button
                className="cancel-btn"
                onClick={() => cancelBooking(index)}
                >
                Cancel Booking</button>
          </div>
        ))
      )}
      {showPopup && (
      <div className="popup-overlay">
        <div className="popup-box">

          <h3>Cancel Booking</h3>

          <p>
            Are you sure you want to cancel this booking?
          </p>

          <div className="popup-buttons">

            <button
              className="yes-btn"
              onClick={confirmCancel}
            >
              Yes
            </button>

            <button
              className="no-btn"
              onClick={() => setShowPopup(false)}
            >
              No
            </button>

          </div>

        </div>
      </div>
    )}

  </div>
);

}

export default MyBookings;