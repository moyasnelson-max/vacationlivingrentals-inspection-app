import GlassCard from './components/GlassCard'
import PrimaryButton from './components/PrimaryButton'

export default function Home() {
  return (
    <div className="home-root">
      <section className="hero-area lux-hero" role="region" aria-label="hero">
        <div className="hero-content">
          <h1>Operational control<br/>for luxury properties</h1>
          <p>Real-time inspections, executive oversight and risk visibility — designed for owners who demand absolute control.</p>

          <div className="primary-actions">
            <PrimaryButton variant="primary">Owner Dashboard</PrimaryButton>
            <PrimaryButton variant="ghost">Inspector Login</PrimaryButton>
            <PrimaryButton variant="ghost">Guest Access</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="cards-row executive-panels" aria-label="Primary features">
        <GlassCard title="Luxury Command Center" desc="Portfolio-level visibility and executive dashboards." cta="Enter Executive Dashboard →" />
        <GlassCard title="Operations & Inspections" desc="Perform inspections, document issues and upload photo evidence." cta="Operations Access →" />
        <GlassCard title="System Administration" desc="Configuration, users and operational standards." cta="Admin Access →" />
        <GlassCard title="Guest Issue Report" desc="No login required. Report issues instantly." cta="Submit Issue Securely →" />
      </section>
    </div>
  )
}


