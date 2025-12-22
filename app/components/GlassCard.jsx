export default function GlassCard({ title, desc, cta }) {
  return (
    <article className="glass-card" tabIndex={0} role="article" aria-label={title}>
      <div className="glass-card-body">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="glass-card-footer">
        <a className="card-cta" href="#">{cta}</a>
      </div>
    </article>
  )
}
