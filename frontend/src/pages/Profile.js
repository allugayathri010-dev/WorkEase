import "../styles/Profile.css";

function Profile() {
  const totalBookings =
    JSON.parse(localStorage.getItem("bookings"))?.length || 0;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>My Profile</h1>

        <div className="profile-item">
          <strong>Name:</strong> Gayathri
        </div>

        <div className="profile-item">
          <strong>Email:</strong> gayathri@example.com
        </div>

        <div className="profile-item">
          <strong>Phone:</strong> 9876543210
        </div>

        <div className="profile-item">
          <strong>Address:</strong> Vizianagaram, Andhra Pradesh
        </div>

        <div className="profile-item">
          <strong>Total Bookings:</strong> {totalBookings}
        </div>
      </div>
    </div>
  );
}

export default Profile;