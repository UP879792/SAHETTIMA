import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container split">
        <div>
          <div className="logo footer-logo">
            <Image
              src="/sahettima_logo.png"
              alt="Sahettima"
              width={48}
              height={48}
              className="logo-mark"
            />
            <div className="logo-text">
              Sahettima
              <span>Clean Energy Infrastructure</span>
            </div>
          </div>
          <p>
            National-scale clean energy infrastructure developer and long-term
            operator delivering CNG and LCNG systems through structured PPPs.
          </p>
        </div>
        <div className="grid two">
          <div>
            <p className="eyebrow">Head Office</p>
            <p>Abuja, Nigeria</p>
            <p>Public–Private Partnerships • Energy Infrastructure</p>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <p>partnerships@sahettima.com</p>
            <p>+234 (0) 1 555 0133</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <p>© 2026 Sahettima Infrastructure Holdings.</p>
        <div className="nav">
          <Link href="/ppp-model">PPP Framework</Link>
          <Link href="/sustainability">Sustainability</Link>
          <Link href="/contact">Engage With Us</Link>
        </div>
      </div>
    </footer>
  );
}
