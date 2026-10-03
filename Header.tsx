import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  ["About", "#about"], ["Our Team", "#team"], ["Specialties", "#specialties"],
  ["Methods", "#methods"], ["FAQs", "#faqs"],
] as const;

export function Brand({ large = false }: { large?: boolean }) {
  return <a href="#top" className={`brand ${large ? "brand-large" : ""}`} aria-label="Conejo Valley Family Counseling, back to top">
    <span className="brand-name">Conejo Valley</span>
    <span className="brand-subtitle">Family Counseling</span>
  </a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header" id="top">
    <Brand />
    <nav className="desktop-nav" aria-label="Main navigation">
      {navigation.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
      <Button asChild variant="outline" className="oval-button"><a href="#contact">Contact</a></Button>
    </nav>
    <Button variant="ghost" size="icon" className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">
      {open ? <X /> : <Menu />}
    </Button>
    {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
      {navigation.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}
      <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
    </nav>}
  </header>;
}

