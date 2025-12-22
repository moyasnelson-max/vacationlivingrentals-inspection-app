export default function Hero({ lang = "en" }) {
  const c = {
    en: {
      title: "Vacation Living",
      subtitle: "Luxury Inspection & Operations Platform",
      desc: "Hotel-level standards for high-end homes worldwide.",
    },
    es: {
      title: "Vacation Living",
      subtitle: "Plataforma de Inspección y Operaciones de Lujo",
      desc: "Estándares hoteleros para residencias de alto nivel en todo el mundo.",
    },
  }[lang];

  return (
    <section className="hero hero-shell hero-wrap--lead" role="region" aria-label="Hero">
      <div className="hero-frame">
        <div className="hero-card hero-card--lead">
          <h1>{c.title}</h1>
          <h2>{c.subtitle}</h2>
          <p>{c.desc}</p>
        </div>
      </div>
    </section>
  );
}
