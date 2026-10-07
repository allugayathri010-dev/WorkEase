import "../styles/Home.css";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="services-page">

      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Choose a service and book a trusted professional
          at your convenience.
        </p>
      </div>

      <div className="services-container">

        <ServiceCard
          icon="🧹"
          title="Home Cleaning"
          description="Professional cleaning services to keep your home fresh and spotless."
          price="Starting from ₹499"
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
          description="Give your home a fresh new look with professional painting services."
          price="Starting from ₹1,499"
          services={[
            "Interior Painting",
            "Exterior Painting",
            "Rental Painting",
            "Waterproofing",
            "Wall Texture Painting"
          ]}
        />

        <ServiceCard
          icon="🚚"
          title="Packers & Movers"
          description="Reliable moving services for homes, offices and vehicles."
          price="Starting from ₹2,499"
          services={[
            "Within City",
            "Between Cities",
            "Vehicle Shifting",
            "Vehicle Transportation",
            "Office Relocation"
          ]}
        />

        <ServiceCard
          icon="❄️"
          title="AC & Appliances"
          description="Professional repair and maintenance for your home appliances."
          price="Starting from ₹499"
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
          description="Quick and reliable solutions for plumbing repairs and installations."
          price="Starting from ₹399"
          services={[
            "Pipe Repair",
            "Tap Installation",
            "Leakage Repair",
            "Water Tank Installation",
            "Bathroom Fitting"
          ]}
        />

        <ServiceCard
          icon="💡"
          title="Electrician"
          description="Professional electrical repair, installation and maintenance services."
          price="Starting from ₹299"
          services={[
            "Fan Repair",
            "Switch & Socket Repair",
            "Wiring",
            "Inverter Installation",
            "Appliance Installation"
          ]}
        />

        <ServiceCard
          icon="🪚"
          title="Carpentry"
          description="Expert carpentry services for furniture, doors and other woodwork."
          price="Starting from ₹399"
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
          description="Convenient solutions for other home and office service requirements."
          price="Starting from ₹299"
          services={[
            "TV Mounting",
            "Wall Hanging",
            "Office Cleaning",
            "Maid Service",
            "Wall Panelling"
          ]}
        />

      </div>
    </div>
  );
}

export default Services;