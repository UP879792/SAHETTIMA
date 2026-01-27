import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          The page you’re looking for doesn’t exist. Return to the homepage to
          explore Sahettima’s infrastructure platform.
        </p>
        <Link className="button" href="/" style={{ marginTop: "2rem" }}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
