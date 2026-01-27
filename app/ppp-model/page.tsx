const valuePoints = [
  "State governments retain strategic oversight and policy alignment.",
  "Sahettima provides equity, raises long-term financing, and oversees delivery.",
  "EPC partners execute to global safety and performance standards.",
  "End users receive dependable, cost-effective gas supply."
];

export default function PPPModelPage() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <p className="eyebrow">PPP Model</p>
          <h1>Structured partnerships that share risk and secure long-term value.</h1>
          <p className="lead">
            Our PPP framework aligns state priorities with private-sector
            execution, ensuring transparent governance, bankable revenue
            structures, and operational sustainability.
          </p>
        </div>
        <div className="card">
          <h3>Why PPP Works</h3>
          <p>
            By combining public policy leadership with private capital and
            operational expertise, each project benefits from risk-sharing,
            performance accountability, and protected long-term service levels.
          </p>
          <ul className="list" style={{ marginTop: "1.2rem" }}>
            {valuePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container" style={{ marginTop: "3rem" }}>
        <h2>Project Flow</h2>
        <div className="flow" style={{ marginTop: "1.5rem" }}>
          <div className="flow-step">
            <h3>Government</h3>
            <p>Policy mandate, land access, permitting, and regulatory support.</p>
          </div>
          <div className="flow-step">
            <h3>Sahettima</h3>
            <p>Equity investment, project structuring, and operational governance.</p>
          </div>
          <div className="flow-step">
            <h3>EPC Partners</h3>
            <p>Engineering, procurement, construction, and commissioning.</p>
          </div>
          <div className="flow-step">
            <h3>End Users</h3>
            <p>Public transport, industry, and commercial offtakers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
