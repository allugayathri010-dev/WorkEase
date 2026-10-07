import "../styles/ServiceCard.css";
import { Link } from "react-router-dom";

export default function ServiceCard({
  icon,
  title,
  description,
  price,
  services
}) {
  return (
    <div className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p className="service-description">
        {description}
      </p>

      <div className="service-price">
        {price}
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <p key={index}>
            <span>✓</span>
            {service}
          </p>
        ))}
      </div>

      <Link
        to="/booking"
        state={{ service: title }}
        className="book-link"
      >
        <button className="book-button">
          Book Service
        </button>
      </Link>

    </div>
  );
}