import heroAsset from "@/assets/conejo-2.jpg";
import oceanAsset from "@/assets/conejo-4.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image"><img src={heroAsset} alt="Family spending time together on a California beach" /></div>
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Online &amp; in-person counseling in Newbury<br className="desktop-break" /> Park &amp; across CA</p>
          <div className="hero-copy"><h1 id="hero-title">Rebuild your foundation<br className="wide-break" /> on solid ground and finally<br className="wide-break" /> begin to <span className="script">thrive</span>.</h1>
            <p>Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.</p>
            <Button asChild variant="outline" className="oval-button"><a href="#contact">Get started</a></Button>
          </div>
        </div>
        <img className="hero-side-image" src={oceanAsset} alt="" aria-hidden="true" />
      </section>
  );
}
