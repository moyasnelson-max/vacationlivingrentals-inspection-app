export default function PrimaryButton({ children, variant = 'primary', role = 'button', subtitle }) {
  const variantClasses = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    tertiary: 'btn btn-tertiary',
    ghost: 'btn btn-ghost'
  }
  
  const cls = variantClasses[variant] || variantClasses.primary
  
  return (
    <button className={cls} type="button" role={role}>
      <span className="btn-content">
        <span className="btn-main-text">{children}</span>
        {subtitle && <span className="btn-subtitle">{subtitle}</span>}
      </span>
    </button>
  )
}
