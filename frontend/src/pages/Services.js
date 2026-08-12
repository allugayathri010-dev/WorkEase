import "../styles/Home.css";
import ServiceCard from "../components/ServiceCard";
function Services() {
  return (
    <div>
      <div className="services-header">
      <h1>Services Page</h1>
      <p>choose the service you need</p>
      </div>
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
    </div>
  );
}

export default Services;