import GlassCard from './components/GlassCard'
import PrimaryButton from './components/PrimaryButton'

export default function Home() {
  return (
    <div className="home-root">
      <section className="hero-area lux-hero" role="region" aria-label="hero">
        <div className="hero-content">
          <h1>Effortless operational control<br/>for exceptional properties</h1>
          <p>Clarity, control and peace of mind — designed for owners who expect excellence.</p>

          <div className="primary-actions">
            <PrimaryButton variant="primary">Owner Dashboard</PrimaryButton>
            <PrimaryButton variant="secondary">Inspector Login</PrimaryButton>
            <PrimaryButton variant="tertiary">Guest Access</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="cards-row executive-panels" aria-label="Primary features">
        <GlassCard title="Your Portfolio Command Center" desc="Real-time visibility across every property. Make informed decisions with confidence." cta="Enter Dashboard →" />
        <GlassCard title="Field Operations Excellence" desc="Streamlined inspections and documentation. Quality assurance made effortless." cta="Operations Portal →" />
        <GlassCard title="Platform Administration" desc="Complete control over users, properties and operational standards." cta="System Settings →" />
        <GlassCard title="Guest Care Made Simple" desc="Instant issue reporting. No login required. Immediate attention guaranteed." cta="Report an Issue →" />
      </section>
    </div>
  )
}


