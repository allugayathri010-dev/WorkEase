import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);

      return {
        name: parsedUser.name || "",
        email: parsedUser.email || "",
        phone: parsedUser.phone || "",
      };
    }

    return {
      name: "",
      email: "",
      phone: "",
    };
  });

  const [message, setMessage] = useState("");

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Please Login</h2>
          <p>You need to login to view your profile.</p>

          <button onClick={() => navigate("/login")}>
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setMessage("Please enter your phone number.");
      return;
    }

    const updatedUser = {
      ...user,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
    };

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((registeredUser) =>
      registeredUser.id === updatedUser.id
        ? updatedUser
        : registeredUser
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setUser(updatedUser);
    setFormData({
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
    });

    setIsEditing(false);
    setMessage("Profile updated successfully.");
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <h1>{user.name}</h1>

          <p>{user.email}</p>
        </div>

        {isEditing ? (
          <form onSubmit={handleSave}>

            <div className="profile-form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="profile-form-group">
              <label>Email Address</label>

              <input
                type="email"
                value={formData.email}
                disabled
              />
            </div>

            <div className="profile-form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {message && (
              <p className="profile-message">
                {message}
              </p>
            )}

            <div className="profile-actions">

              <button
                type="submit"
                className="profile-save-button"
              >
                Save Changes
              </button>

              <button
                type="button"
                className="profile-cancel-button"
                onClick={() => {
                  setIsEditing(false);
                  setMessage("");
                }}
              >
                Cancel
              </button>

            </div>

          </form>
        ) : (
          <>
            <div className="profile-details">

              <div className="profile-detail">
                <span>Full Name</span>
                <strong>{user.name}</strong>
              </div>

              <div className="profile-detail">
                <span>Email Address</span>
                <strong>{user.email}</strong>
              </div>

              <div className="profile-detail">
                <span>Phone Number</span>
                <strong>{user.phone}</strong>
              </div>

            </div>

            {message && (
              <p className="profile-message">
                {message}
              </p>
            )}

            <button
              className="profile-edit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          </>
        )}

      </div>

    </div>
  );
}