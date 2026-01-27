const pipeline = [
  {
    title: "North Central CNG Corridor",
    status: "Feasibility complete",
    detail: "Multi-state compression hubs and 28 daughter stations."
  },
  {
    title: "Kaduna LCNG Industrial Hub",
    status: "PPP negotiations",
    detail: "LCNG facility serving industrial estates and transport depots."
  },
  {
    title: "North East Public Transport Conversion",
    status: "Pre-development",
    detail: "Fleet conversion and station rollout across key transport nodes."
  },
  {
    title: "Northern Nigeria Gas Backbone",
    status: "Pipeline",
    detail: "Integrated network linking CNG and LCNG assets across corridors."
  }
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Projects & Pipeline</p>
        <h1>Active developments across Nigeria’s priority corridors.</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          Sahettima’s pipeline reflects phased, bankable projects developed with
          state partners and anchored by long-term offtake demand.
        </p>
      </div>

      <div className="container" style={{ marginTop: "3rem" }}>
        <div className="timeline">
          {pipeline.map((project) => (
            <div key={project.title} className="timeline-item">
              <p className="eyebrow">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
