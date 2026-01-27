import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Engage with Sahettima’s PPP delivery team.</h1>
          <p className="lead">
            We partner with governments, regulators, DFIs, and industrial
            offtakers to deliver reliable CNG and LCNG infrastructure at scale.
          </p>
          <div style={{ marginTop: "2rem", display: "grid", gap: "0.5rem" }}>
            <p>
              <strong>Partnerships:</strong> partnerships@sahettima.com
            </p>
            <p>
              <strong>Investment:</strong> investors@sahettima.com
            </p>
            <p>
              <strong>Head Office:</strong> Abuja, Nigeria
            </p>
          </div>
        </div>
        <div className="card">
          <h3>Formal Enquiry</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
