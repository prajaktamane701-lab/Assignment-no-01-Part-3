
const specialties = [
  ["Dissociation", "Trauma", "Family Conflict", "Special Needs Parenting", "Depression", "Marriage"],
  ["Anxiety", "Relationships", "Children", "Teens", "Intimacy & Connection", "...and more."],
];

export default function Specialties() {
  return (
    <section className="expertise-section" id="specialties" aria-labelledby="expertise-title"><h2 id="expertise-title">Our areas of<br /><span className="script">expertise</span></h2>
        {specialties.map((column, i) => <ul key={i}>{column.map(name => <li key={name}>{name}</li>)}</ul>)}
      </section>
  );
}
