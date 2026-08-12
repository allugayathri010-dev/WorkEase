import ServiceCard from "../components/ServiceCard";
import "../styles/Home.css";
export default function Home() {
    return (
    <div className="home">
        <h1>Book Trusted Home Services</h1>

        <p>
        Find experienced plumbers, electricians,
        cleaners, painters, gardeners and many more.
        </p>
        <div className="buttons">
            <button onClick={()=>alert("Booking feature coming soon!")}>Book Now</button>
            <div id="services" className="services-container">
                <button
                    onClick={() =>
                            document.getElementById("services").scrollIntoView({behavior: "smooth", block: "start"})}>
                Explore Services
                </button>
            </div>
            </div>
            <div className="serviceCard">
            <h2>Our Services</h2>
            <p>choose the service you need</p>
        <div className="services-container">

  <ServiceCard
    icon="🧹"
    title="Home Cleaning"
    services={[
      "Bathroom Cleaning",
      "Kitchen Cleaning",
      "Premium Cleaning",
      "Sofa Cleaning",
      "Full House Cleaning"
    ]}
  />

  <ServiceCard
  icon="🎨"
    title="Painting"
    services={[
      "Interior Painting",
      "Exterior Painting",
      "Rental Painting",
      "Waterproofing",
      "wall Texture Painting"
    ]}
  />
  <ServiceCard
  icon="🚚"
    title="Packers & Movers"
    services={[
      "Within City",
      "Between Cities",
      "Vehicle Shifting",
      "vehicle Transportation",
        "Office Relocation"
    ]}
  />

  <ServiceCard
    icon="❄️"
    title="AC & Appliances"
    services={[
      "AC Service",
      "Washing Machine Repair",
      "Refrigerator Repair",
      "Water Purifier Repair",
      "Microwave Repair"
    ]}
  />

  <ServiceCard
    icon="🔧"
    title="Plumbing"
    services={[
      "Pipe Repair",
      "Tap Installation",
      "Leakage Repair",
      "water Tank Installation",
      "Bathroom Fitting"
    ]}
  />

  <ServiceCard
  icon="💡"
    title="Electrician"
    services={[
      "Fan Repair",
      "Switch & socket Repair",
      "Wiring",
      "Inverter Installation",
      "Appliance Installation"
    ]}
  />

  <ServiceCard
    icon="🪚"
    title="Carpentry"
    services={[
      "Furniture Assembly",
      "Door & Window Repair",
      "Wood Work",
      "Cupboard Installation",
        "Furniture Polishing"
    ]}
  />

  <ServiceCard
    icon="🛠️"
    title="Other Services"
    services={[
      "TV Mounting",
      "Wall Hanging",
      "Office Cleaning",
      "Maid Service",
      "wall panelling"
    ]}
  />
  </div>
<div className="reviews-section">
  <h2>What Our Customers Say</h2>
<div className="reviews-container">
  <div className="review-card">
    <h3>⭐⭐⭐⭐⭐</h3>
    <p>"Excellent home cleaning service. Very professional team."</p>
    <h4>- Rahul</h4>
  </div>

  <div className="review-card">
    <h3>⭐⭐⭐⭐⭐</h3>
    <p>"Electrician arrived quickly and fixed the issue perfectly."</p>
    <h4>- Priya</h4>
  </div>

  <div className="review-card">
    <h3>⭐⭐⭐⭐⭐</h3>
    <p>"Very smooth shifting experience with packers and movers."</p>
    <h4>- Arjun</h4>
  </div>
</div>
</div>
</div>
    </div>
    );
}

