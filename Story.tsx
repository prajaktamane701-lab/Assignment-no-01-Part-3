import oceanAsset from "@/assets/conejo-4.jpg";

export default function Story() {
  return (
    <section className="hope-section" id="about" aria-labelledby="hope-title">
        <div className="hope-copy"><h2 id="hope-title">You’re holding onto hope that life<br className="wide-break" /> can be better than it is right now.</h2>
          <div className="two-copy-columns"><div><p className="eyebrow">At Conejo Valley Family Counseling<br /> we want to make that hope a reality.</p><p>Whether you’re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.</p></div>
            <p>First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.</p>
          </div>
        </div><img className="hope-image" src={oceanAsset} alt="Gentle waves meeting the shore" />
      </section>
  );
}
