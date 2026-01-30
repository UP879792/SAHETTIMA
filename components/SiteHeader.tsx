 "use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="nav-toggle-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="3" y="6" width="18" height="2" rx="1" />
            <rect x="3" y="11" width="18" height="2" rx="1" />
            <rect x="3" y="16" width="18" height="2" rx="1" />
          </svg>
        </button>
        <nav id="site-nav" className={`nav ${isOpen ? "is-open" : ""}`}>
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
