import dancingAsset from "@/assets/conejo-9.jpg";

export default function HowWeWork() {
  return (
    <section className="methods-section" id="methods" aria-labelledby="methods-title"><div className="methods-copy"><p className="eyebrow">How we work</p><h2 id="methods-title">We’re here to make a difference.</h2><div className="two-copy-columns">
        <div><p className="eyebrow">The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.</p><p>Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.</p></div>
        <p>Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.</p>
      </div></div><img src={dancingAsset} alt="Family enjoying a joyful moment on the beach" loading="lazy" /></section>
  );
}
