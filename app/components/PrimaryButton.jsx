export default function PrimaryButton({ children, variant = 'primary', role = 'button' }) {
  const variantClasses = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    tertiary: 'btn btn-tertiary',
    ghost: 'btn btn-ghost'
  }
  
  const cls = variantClasses[variant] || variantClasses.primary
  
  return (
    <button className={cls} type="button" role={role}>{children}</button>
  )
}
