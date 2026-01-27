const impacts = [
  {
    title: "Emissions Reduction",
    detail:
      "CNG and LCNG displace high-emission fuels, delivering significant CO₂ and particulate reductions for fleets and industries."
  },
  {
    title: "Cleaner Transport",
    detail:
      "Gas-powered public transport reduces noise and urban pollution while lowering operating costs for state systems."
  },
  {
    title: "Local Capacity Building",
    detail:
      "We establish technical training programs and long-term operational roles in host communities."
  },
  {
    title: "Reliable Energy Access",
    detail:
      "Stable gas supply improves industrial productivity and supports resilient public infrastructure."
  }
];

export default function SustainabilityPage() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <p className="eyebrow">Sustainability & Impact</p>
          <h1>Measurable outcomes aligned with national energy transition goals.</h1>
          <p className="lead">
            Sahettima’s infrastructure is designed to deliver real-world impact:
            reduced emissions, cleaner transport, and durable economic benefits.
          </p>
        </div>
        <div className="card">
          <h3>ESG Governance</h3>
          <p>
            We align reporting with global infrastructure standards, tracking
            emissions avoided, safety metrics, and socio-economic outcomes across
            each concession area.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="grid two">
          {impacts.map((impact) => (
            <div key={impact.title} className="card">
              <h3>{impact.title}</h3>
              <p>{impact.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
