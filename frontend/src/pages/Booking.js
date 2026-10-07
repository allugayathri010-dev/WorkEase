import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Booking.css";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedService = location.state?.service || "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    service: selectedService,
    date: "",
    time: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const servicePrices = {
    "Home Cleaning": 499,
    "Painting": 1499,
    "Packers & Movers": 2499,
    "AC & Appliances": 499,
    "Plumbing": 399,
    "Electrician": 299,
    "Carpentry": 399,
    "Other Services": 299,
  };

  const servicePrice =
    servicePrices[formData.service] || 299;

  useEffect(() => {
    const savedUser =
      JSON.parse(localStorage.getItem("currentUser")) || null;

    if (savedUser) {
      setFormData((previous) => ({
        ...previous,
        fullName: savedUser.name || "",
        phone: savedUser.phone || "",
      }));
    }
  }, []);

  const getTomorrowDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    const {
      fullName,
      phone,
      address,
      service,
      date,
      time,
      description,
    } = formData;

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !service ||
      !date ||
      !time
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (fullName.trim().length < 3) {
      setError("Please enter a valid full name.");
      return;
    }

    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(phone.trim())) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (address.trim().length < 10) {
      setError("Please enter a complete service address.");
      return;
    }

    const selectedDate = new Date(`${date}T00:00:00`);
    const tomorrow = new Date();
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (selectedDate < tomorrow) {
      setError("Please select a date from tomorrow onwards.");
      return;
    }

    if (description.trim().length > 500) {
      setError("Additional requirements cannot exceed 500 characters.");
      return;
    }

    const savedUser =
      JSON.parse(localStorage.getItem("currentUser")) || null;

    const newBooking = {
      id: Date.now(),
      userId: savedUser?.id || null,
      fullName: fullName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      service: service,
      date: date,
      time: time,
      description: description.trim(),
      amount: servicePrice,
      status: "Pending Payment",
      paymentStatus: "Pending",
      createdAt: new Date().toISOString(),
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, newBooking])
    );

    localStorage.setItem(
      "pendingBookingId",
      newBooking.id.toString()
    );

    setMessage("Booking details saved. Redirecting to payment...");

    setTimeout(() => {
      navigate("/payment");
    }, 1000);
  };

  return (
    <div className="booking-page">

      <div className="booking-header">
        <h1>Book a Service</h1>
        <p>
          Choose your preferred date and time for your service.
        </p>
      </div>

      <div className="booking-content">

        <div className="booking-form-card">

          <div className="booking-section-title">
            <h2>Service Details</h2>
            <p>Tell us what service you need.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="booking-form-group">
              <label>
                Select Service <span>*</span>
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">
                  Select a service
                </option>

                <option value="Home Cleaning">
                  Home Cleaning
                </option>

                <option value="Painting">
                  Painting
                </option>

                <option value="Packers & Movers">
                  Packers & Movers
                </option>

                <option value="AC & Appliances">
                  AC & Appliances
                </option>

                <option value="Plumbing">
                  Plumbing
                </option>

                <option value="Electrician">
                  Electrician
                </option>

                <option value="Carpentry">
                  Carpentry
                </option>

                <option value="Other Services">
                  Other Services
                </option>
              </select>
            </div>

            <div className="booking-form-row">

              <div className="booking-form-group">
                <label>
                  Full Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="booking-form-group">
                <label>
                  Phone Number <span>*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit phone number"
                  maxLength="10"
                />
              </div>

            </div>

            <div className="booking-form-group">
              <label>
                Service Address <span>*</span>
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete service address"
                rows="4"
              />
            </div>

            <div className="booking-section-title schedule-title">
              <h2>Schedule Your Service</h2>
              <p>Select a convenient date and time.</p>
            </div>

            <div className="booking-form-row">

              <div className="booking-form-group">
                <label>
                  Preferred Date <span>*</span>
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  min={getTomorrowDate()}
                  onChange={handleChange}
                />
              </div>

              <div className="booking-form-group">
                <label>
                  Preferred Time <span>*</span>
                </label>

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">
                    Select a time slot
                  </option>

                  <option value="09:00 AM - 11:00 AM">
                    09:00 AM - 11:00 AM
                  </option>

                  <option value="11:00 AM - 01:00 PM">
                    11:00 AM - 01:00 PM
                  </option>

                  <option value="02:00 PM - 04:00 PM">
                    02:00 PM - 04:00 PM
                  </option>

                  <option value="04:00 PM - 06:00 PM">
                    04:00 PM - 06:00 PM
                  </option>

                  <option value="06:00 PM - 08:00 PM">
                    06:00 PM - 08:00 PM
                  </option>
                </select>
              </div>

            </div>

            <div className="booking-form-group">
              <label>
                Additional Requirements
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us anything else we should know..."
                rows="4"
                maxLength="500"
              />

              <small>
                {formData.description.length}/500
              </small>
            </div>

            {error && (
              <p className="booking-error">
                {error}
              </p>
            )}

            {message && (
              <p className="booking-success">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="booking-submit-button"
            >
              Continue to Payment
            </button>

          </form>
        </div>


        <div className="booking-summary-card">

          <div className="booking-summary-icon">
            {formData.service === "Home Cleaning" && "🧹"}
            {formData.service === "Painting" && "🎨"}
            {formData.service === "Packers & Movers" && "🚚"}
            {formData.service === "AC & Appliances" && "❄️"}
            {formData.service === "Plumbing" && "🔧"}
            {formData.service === "Electrician" && "💡"}
            {formData.service === "Carpentry" && "🪚"}
            {formData.service === "Other Services" && "🛠️"}
            {!formData.service && "🛠️"}
          </div>

          <h2>Booking Summary</h2>

          <div className="summary-item">
            <span>Service</span>
            <strong>
              {formData.service || "Not selected"}
            </strong>
          </div>

          <div className="summary-item">
            <span>Date</span>
            <strong>
              {formData.date || "Not selected"}
            </strong>
          </div>

          <div className="summary-item">
            <span>Time</span>
            <strong>
              {formData.time || "Not selected"}
            </strong>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span>Starting Price</span>
            <strong>₹{servicePrice}</strong>
          </div>

          <p className="summary-note">
            Final charges may vary depending on the
            service requirements.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Booking;