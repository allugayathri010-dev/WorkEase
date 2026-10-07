import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small-text">
            Reliable Services. Easy Booking.
          </p>

          <h1>
            Get Trusted Home Services
            <br />
            At Your Doorstep
          </h1>

          <p className="hero-description">
            Book reliable professionals for cleaning, painting,
            repairs, moving and other home services with WorkEase.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="hero-primary-btn">
              Explore Services
            </Link>

            <Link to="/booking" className="hero-secondary-btn">
              Book a Service
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services-section">
        <div className="section-heading">
          <h2>Our Popular Services</h2>
          <p>
            Professional services for your everyday needs.
          </p>
        </div>

        <div className="home-service-grid">

          <div className="home-service-item">
            <div className="home-service-icon">🧹</div>
            <h3>Home Cleaning</h3>
            <p>
              Keep your home clean and fresh with professional
              cleaning services.
            </p>
          </div>

          <div className="home-service-item">
            <div className="home-service-icon">🎨</div>
            <h3>Painting</h3>
            <p>
              Give your home a fresh look with quality painting
              services.
            </p>
          </div>

          <div className="home-service-item">
            <div className="home-service-icon">🔧</div>
            <h3>Plumbing</h3>
            <p>
              Get quick and reliable solutions for your plumbing
              problems.
            </p>
          </div>

          <div className="home-service-item">
            <div className="home-service-icon">💡</div>
            <h3>Electrician</h3>
            <p>
              Professional electrical repair and installation
              services.
            </p>
          </div>

        </div>

        <div className="view-services">
          <Link to="/services">
            View All Services →
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="section-heading">
          <h2>How WorkEase Works</h2>
          <p>
            Booking a service is simple and convenient.
          </p>
        </div>

        <div className="steps-container">

          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Choose a Service</h3>
            <p>
              Select the service you need from our wide range
              of professional services.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Book a Time</h3>
            <p>
              Enter your details and choose a convenient date
              and time for the service.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Get the Service</h3>
            <p>
              Our service professional will arrive at your
              doorstep at the scheduled time.
            </p>
          </div>

        </div>
      </section>

      {/* Why WorkEase */}
      <section className="why-section">
        <div className="why-content">
          <div>
            <h2>Why Choose WorkEase?</h2>

            <p>
              WorkEase makes it easier to find and book trusted
              professionals for your home and everyday service needs.
            </p>
          </div>

          <div className="why-points">

            <div className="why-point">
              <span>✓</span>
              <div>
                <h3>Easy Booking</h3>
                <p>Book your service in just a few simple steps.</p>
              </div>
            </div>

            <div className="why-point">
              <span>✓</span>
              <div>
                <h3>Reliable Services</h3>
                <p>Choose from a wide range of home services.</p>
              </div>
            </div>

            <div className="why-point">
              <span>✓</span>
              <div>
                <h3>Convenient Scheduling</h3>
                <p>Select a date and time that works for you.</p>
              </div>
            </div>

            <div className="why-point">
              <span>✓</span>
              <div>
                <h3>Secure Payments</h3>
                <p>Choose your preferred payment method.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta">
        <h2>Need a Service?</h2>

        <p>
          Book a professional service today with WorkEase.
        </p>

        <Link to="/services">
          Book Now
        </Link>
      </section>

    </div>
  );
}

export default Home;