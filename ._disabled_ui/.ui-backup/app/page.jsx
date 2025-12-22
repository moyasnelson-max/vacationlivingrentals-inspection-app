export default function Home() {
  return (
    <main style={{
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "96px 48px"
    }}>
      <h1 style={{
        fontSize: "60px",
        fontWeight: 300,
        lineHeight: 1.08,
        maxWidth: "720px"
      }}>
        Operational control<br />for luxury properties
      </h1>

      <p style={{
        maxWidth: "620px",
        marginTop: "26px",
        color: "var(--text-muted)",
        fontSize: "16px"
      }}>
        Real-time inspections, executive oversight and risk visibility — designed for owners who demand absolute control.
      </p>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "28px",
        marginTop: "72px"
      }}>
        {[
          {
            title: "Luxury Command Center",
            text: "Portfolio-level visibility, executive dashboards and strategic control.",
            action: "Enter Executive Dashboard →"
          },
          {
            title: "Operations & Inspections",
            text: "Perform inspections, document issues and upload photo evidence.",
            action: "Operations Access →"
          },
          {
            title: "System Administration",
            text: "Full system access, configuration, users and standards.",
            action: "Admin Access →"
          },
          {
            title: "Guest Issue Report",
            text: "Report an issue instantly. No login required.",
            action: "Submit Issue Securely →"
          }
        ].map((card, i) => (
          <div key={i} style={{
            background: "var(--card-bg)",
            backdropFilter: "var(--card-blur)",
            border: "1px solid var(--border-soft)",
            borderRadius: "18px",
            padding: "30px",
            boxShadow: "var(--shadow-soft), var(--shadow-ambient)"
          }}>
            <h3 style={{ marginTop: 0, fontWeight: 500 }}>
              {card.title}
            </h3>
            <p style={{
              color: "var(--text-muted)",
              fontSize: "14.5px",
              lineHeight: 1.6
            }}>
              {card.text}
            </p>
            <div style={{
              color: "var(--gold)",
              marginTop: "16px",
              fontSize: "14px"
            }}>
              {card.action}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
