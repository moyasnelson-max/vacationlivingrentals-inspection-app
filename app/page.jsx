import GlassCard from './components/GlassCard'
import PrimaryButton from './components/PrimaryButton'

export default function Home() {
  return (
    <div className="home-root">
      <section className="hero-area lux-hero" role="region" aria-label="hero">
        <div className="hero-content">
          <h1>Effortless operational control<br/>for exceptional properties</h1>
          <p>Clarity, oversight and peace of mind — designed for property owners who expect excellence.</p>
          <span className="hero-trust-line">Operational precision across every detail, every stay.</span>

          <div className="primary-actions">
            <div className="action-group-internal">
              <PrimaryButton variant="primary" subtitle="Manage properties & view reports">Owner Dashboard</PrimaryButton>
              <PrimaryButton variant="secondary" subtitle="Access inspection tools">Inspector Login</PrimaryButton>
            </div>
            <div className="action-group-guest">
              <PrimaryButton variant="tertiary" subtitle="Report issues instantly">Guest Access</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-row executive-panels" aria-label="Primary features">
        <GlassCard title="Housekeeping Reports" desc="Report damages, missing items and cleaning completion with photo or video evidence — ensuring every property is guest-ready." cta="Login" />
        <GlassCard title="Owner Guidance & Metrics" desc="Comprehensive reports, real-time visibility across your portfolio, and actionable insights that empower confident decision-making. Know the state of every property, anticipate needs, and maintain exceptional standards effortlessly." />
        <GlassCard title="Inspection & Reporting" desc="Field inspectors document property conditions with structured checklists, photo evidence, and detailed annotations. Every inspection generates comprehensive reports that track maintenance needs, verify standards, and ensure accountability across your portfolio." />
        <GlassCard title="Guest Support & Issue Reporting" desc="Guests report concerns effortlessly without creating accounts or remembering passwords. Instant issue submission with photo uploads ensures rapid response times and seamless communication, maintaining trust and satisfaction throughout their stay." />
      </section>
    </div>
  )
}


