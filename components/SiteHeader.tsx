import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/ppp-model", label: "PPP Model" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image
            src="/sahettima_logo.png"
            alt="Sahettima"
            width={44}
            height={44}
            className="logo-mark"
            priority
          />
          <div className="logo-text">
            Sahettima
            <span>Clean Energy Infrastructure</span>
          </div>
        </Link>
        <nav className="nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
