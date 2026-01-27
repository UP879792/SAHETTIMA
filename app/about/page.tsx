import ParallaxImage from "@/components/ParallaxImage";

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <p className="eyebrow">About Sahettima</p>
          <h1>Developer, investor, and long-term operator of gas infrastructure.</h1>
          <p className="lead">
            Sahettima delivers clean-energy systems that replace high-emission
            fuels across Nigeria’s transport and industrial corridors.
          </p>
        </div>
        <div className="card">
          <h3>Company Overview</h3>
          <p>
            We originate projects, mobilize capital, oversee EPC execution, and
            operate CNG/LCNG assets on behalf of public-sector partners. Our PPP
            structures are designed for affordability, operational continuity,
            and local capacity building.
          </p>
          <div style={{ marginTop: "1.5rem", display: "grid", gap: "0.8rem" }}>
            <div className="badge">National-scale delivery</div>
            <div className="badge">5+ year operational horizon</div>
            <div className="badge">Regulatory-aligned governance</div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "3.5rem" }}>
        <div className="split">
          <ParallaxImage
            src="/martin-adams-a_PDPUPuNZ8-unsplash.jpg"
            alt="Operations team coordinating energy infrastructure"
            sizes="(max-width: 900px) 100vw, 45vw"
            className="image-panel"
            speed={0.15}
          />
          <div className="grid three">
            <div className="card">
              <h3>Vision</h3>
              <p>
                To build Nigeria’s most reliable clean-energy infrastructure
                platform, enabling affordable gas access for every state.
              </p>
            </div>
            <div className="card">
              <h3>Mission</h3>
              <p>
                Accelerate the national transition to gas by delivering scalable
                CNG and LCNG systems that reduce diesel and petrol dependence.
              </p>
            </div>
            <div className="card">
              <h3>Focus Regions</h3>
              <p>
                Strategic concentration on Nigeria and underserved
                regions where infrastructure gaps are most acute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
