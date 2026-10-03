import { Brand } from "./Header";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-intro">
      <Brand large />
      <p>We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.</p>
    </div>
    <div className="footer-column"><h3>Navigate</h3><a href="#top">Home</a><a href="#about">About</a><a href="#faqs">FAQs</a><a href="#contact">Contact</a></div>
    <div className="footer-column"><h3>Our Team</h3>{["Jennifer Anderson", "Heather Williams-Baumgart", "Autumn Bodily", "Candace Bletscher", "Samantha Johnson", "Rosa Gomez", "Chad Flores"].map(name => <a key={name} href="#team">{name}</a>)}</div>
    <div className="footer-column footer-contact"><h3>Contact</h3><p>925 Broadbeck Dr<br />Suites 200 and 225<br />Newbury Park, CA 91320</p><a href="mailto:info@conejovalleycounseling.com">info@conejovalleycounseling.com</a><a href="tel:8052423120">805.242.3120</a><p className="service-area">Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley</p></div>
    <div className="footer-bottom">© {new Date().getFullYear()} Conejo Valley Family Counseling</div>
  </footer>;
}
