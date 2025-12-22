export default function Home() {
  return (
    <main>
      <h1>Operational control<br />for luxury properties</h1>
      <p>
        Real-time inspections, executive oversight and risk visibility —
        designed for owners who demand absolute control.
      </p>

      <section className="grid">
        <div className="card card--primary">
          <h3>Luxury Command Center</h3>
          <p>Portfolio-level visibility and executive dashboards.</p>
          <a className="action" href="#">Enter Executive Dashboard →</a>
        </div>

        <div className="card">
          <h3>Operations & Inspections</h3>
          <p>Perform inspections and upload photo evidence.</p>
          <a className="action" href="#">Operations Access →</a>
        </div>

        <div className="card">
          <h3>System Administration</h3>
          <p>Configuration, users and operational standards.</p>
          <a className="action" href="#">Admin Access →</a>
        </div>

        <div className="card">
          <h3>Guest Issue Report</h3>
          <p>No login required. Report issues instantly.</p>
          <a className="action" href="#">Submit Issue Securely →</a>
        </div>
      </section>
    </main>
  );
}
