import sandAsset from "@/assets/conejo-11.jpg";
import handsAsset from "@/assets/conejo-12.jpg";
import { Button } from "@/components/ui/button";

export default function Appointment() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title"><img className="contact-image-left" src={sandAsset} alt="" aria-hidden="true" loading="lazy" /><div className="contact-copy"><p className="eyebrow">Take the first step</p><h2 id="contact-title">Honoring where you’ve been &amp; helping shape where you’re <span className="script">headed</span>.</h2><p>We want to make getting started simple. Reach out and we’ll help you find the support that feels right for you.</p><Button asChild variant="outline" className="oval-button"><a href="mailto:info@conejovalleycounseling.com">Book now</a></Button></div><img className="contact-image-right" src={handsAsset} alt="Hands making marks in the sand" loading="lazy" /></section>
  );
}
