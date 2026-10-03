import adultsAsset from "@/assets/conejo-5.jpg";
import couplesAsset from "@/assets/conejo-6.jpg";
import childrenAsset from "@/assets/conejo-7.jpg";
import { ArrowUpRight } from "lucide-react";

const help = [
  { title: "Adults", image: adultsAsset, alt: "Two adults sitting together at the water", description: "A supportive space to process what you’ve been carrying, connect with yourself, and move toward the life you want." },
  { title: "Couples", image: couplesAsset, alt: "A couple embracing on the beach", description: "Find new ways to communicate, deepen connection, and navigate challenges together." },
  { title: "Children & Teens", image: childrenAsset, alt: "Two children playing together by the ocean", description: "Compassionate support for young people as they understand their feelings and find their footing." },
];

export default function WhoWeHelp() {
  return (
    <section className="help-section" id="who-we-help" aria-labelledby="help-title">
        <h2 id="help-title">Who we <span className="script">help</span></h2>
        <div className="help-grid">{help.map(item => <article className="help-item" key={item.title}>
          <img src={item.image} alt={item.alt} loading="lazy" /><h3>{item.title}</h3><p>{item.description}</p><a className="text-link" href="#contact">Learn more <ArrowUpRight aria-hidden="true" size={17} /></a>
        </article>)}</div>
      </section>
  );
}
