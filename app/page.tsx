import Link from "next/link";
import ParallaxImage from "@/components/ParallaxImage";

const stats = [
  { value: "12+", label: "State partnerships under development" },
  { value: "850M", label: "scf/day gas processing capacity (pipeline)" },
  { value: "180", label: "CNG/LCNG stations planned" },
  { value: "30K", label: "Projected direct & indirect jobs" }
];

const offerings = [
  {
    title: "CNG Mother Stations",
    detail:
      "High-capacity compression hubs that anchor corridor supply and long-haul transport conversion."
  },
  {
    title: "LCNG Facilities",
    detail:
      "Integrated liquefaction and compression for industrial clusters, logistics fleets, and urban demand."
  },
  {
    title: "PPP Development",
    detail:
      "Structured concession frameworks with state governments aligned to shared risk and long-term value."
  },
  {
    title: "Turnkey Delivery",
    detail:
      "End-to-end origination, financing, EPC oversight, commissioning, and operations management."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <div className="container split">
          <div className="hero-content animate-in">
            <p className="eyebrow">Clean Energy Infrastructure at National Scale</p>
            <h1 className="hero-title serif">
              Nigeria’s clean energy infrastructure, built to last.
            </h1>
            <p className="lead">
              We are a developer, anchor investor, and long-term operator of CNG
              and LCNG infrastructure—delivering turnkey PPP solutions that
              replace petrol and diesel across transport, industry, and public
              utilities.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link className="button" href="/contact">
                Engage with Sahettima
              </Link>
              <Link className="button secondary" href="/ppp-model">
                View PPP Framework
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <ParallaxImage
              src="/he-junhui-7BL3ry7EewE-unsplash.jpg"
              alt="Gas infrastructure facility at dusk"
              sizes="(max-width: 900px) 100vw, 42vw"
              priority
              className="hero-image"
              speed={0.25}
            />
            <div className="hero-visual">
              <div className="badge">National Infrastructure Platform</div>
              <h3>Integrated gas supply and delivery network</h3>
              <ul>
                <li>
                  Gas sourcing <span>Midstream partnerships</span>
                </li>
                <li>
                  Compression & liquefaction <span>CNG + LCNG</span>
                </li>
                <li>
                  Distribution corridors <span>Multi-state offtake</span>
                </li>
                <li>
                  Operations <span>25+ year asset lifecycle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid three">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`card stat reveal delay-${Math.min(index + 1, 3)}`}
              >
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">What We Deliver</p>
            <h2>Turnkey CNG and LCNG infrastructure aligned to public priorities.</h2>
          </div>
          <p className="lead">
            Sahettima structures, finances, and operates essential energy assets
            in collaboration with state governments—ensuring long-term service
            continuity, transparent pricing, and resilient supply.
          </p>
        </div>
        <div className="container" style={{ marginTop: "3rem" }}>
          <div className="split">
            <ParallaxImage
              src="/haberdoedas-FM2vo18e2SY-unsplash.jpg"
              alt="Industrial pipeline network"
              sizes="(max-width: 900px) 100vw, 45vw"
              className="image-panel"
              speed={0.18}
            />
            <div className="grid two">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className={`card reveal delay-${Math.min(index + 1, 3)}`}
              >
                <h3>{offering.title}</h3>
                <p>{offering.detail}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Institutional Credibility</p>
            <h2>Built to meet the standards of governments, DFIs, and investors.</h2>
          </div>
          <div className="grid two">
            <div className="card">
              <h3>Long-term operations</h3>
              <p>
                We operate infrastructure assets for multi-decade lifecycles,
                with transparent performance reporting and regulatory alignment.
              </p>
            </div>
            <div className="card">
              <h3>PPP governance</h3>
              <p>
                Structured frameworks align public goals with private-sector
                execution, ensuring accountability across the value chain.
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "3rem" }}>
          <ParallaxImage
            src="/leo-sokolovsky-pPfYIEcXVpY-unsplash.jpg"
            alt="Gas station infrastructure at night"
            sizes="100vw"
            className="image-panel wide"
            speed={0.12}
          />
        </div>
      </section>
    </>
  );
}
