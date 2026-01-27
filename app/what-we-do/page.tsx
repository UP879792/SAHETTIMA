import ParallaxImage from "@/components/ParallaxImage";

const services = [
  {
    title: "CNG Mother Stations",
    detail:
      "Central compression hubs supplying daughter stations and fleet corridors with resilient, high-volume throughput."
  },
  {
    title: "LCNG Facilities",
    detail:
      "Liquefaction and compression systems serving industrial loads, logistics depots, and multi-fuel stations."
  },
  {
    title: "Industrial & Transport Solutions",
    detail:
      "Fuel switching programs for public transport, mining, manufacturing, and heavy-duty haulage fleets."
  },
  {
    title: "Operations & Asset Management",
    detail:
      "Dedicated operations teams with SCADA-enabled monitoring, preventive maintenance, and safety compliance."
  },
  {
    title: "Turnkey Infrastructure Delivery",
    detail:
      "Project origination, feasibility, financing, EPC coordination, commissioning, and operator training."
  },
  {
    title: "Government Partnership Advisory",
    detail:
      "PPP structuring support, tariff modeling, and regulatory stakeholder engagement."
  }
];

export default function WhatWeDoPage() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <p className="eyebrow">What We Do</p>
          <h1>End-to-end delivery of CNG and LCNG infrastructure.</h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Sahettima executes projects across the full gas value chain—from gas
            sourcing and compression to distribution, station operations, and
            long-term asset performance.
          </p>
        </div>
        <ParallaxImage
          src="/maksym-kaharlytskyi-u13zBF4r56A-unsplash.jpg"
          alt="Technical team reviewing infrastructure plans"
          sizes="(max-width: 900px) 100vw, 42vw"
          className="image-panel"
          speed={0.16}
        />
      </div>

      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="grid two">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
