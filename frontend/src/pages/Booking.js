
import { useState } from "react";
import "../styles/Booking.css";

function Booking() {
  const [booking, setBooking] = useState({
    fullName: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push({
      ...booking,
      status: "Pending",
    });

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    setMessage(
      "Booking Successful! Our team will contact you shortly."
    );

    setBooking({
      fullName: "",
      phone: "",
      address: "",
      service: "",
      date: "",
      time: "",
      description: "",
    });
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        <h2>Book Your Service</h2>

        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={booking.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={booking.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={booking.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />

        <label>Select Service</label>
        <select
          name="service"
          value={booking.service}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option>Home Cleaning</option>
          <option>Painting</option>
          <option>Packers & Movers</option>
          <option>AC & Appliances</option>
          <option>Plumbing</option>
          <option>Electrician</option>
          <option>Carpentry</option>
          <option>Maid Service</option>
        </select>

        <label>Select Date</label>
        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleChange}
        />

        <label>Select Time</label>
        <input
          type="time"
          name="time"
          value={booking.time}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          rows="4"
          name="description"
          value={booking.description}
          onChange={handleChange}
          placeholder="Describe your requirement"
        ></textarea>

        <button
          type="button"
          className="booking-btn"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>

        {message && (
          <p className="success-message">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Booking;