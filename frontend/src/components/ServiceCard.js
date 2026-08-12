import "../styles/ServiceCard.css";
import {Link} from "react-router-dom";
export default function ServiceCard({icon,title,services}) {
    return (
        <div className="service-card">
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            {services.map((service, index)=>(
                <p key={index}>{service}</p>
            ))}

            <Link to="/booking">
  <button className="book-button">
    Book Service
  </button>
</Link>
        </div>
    );
}