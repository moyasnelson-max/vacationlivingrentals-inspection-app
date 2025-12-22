export default function PrimaryButton({ children, variant = 'primary' }) {
  const cls = variant === 'primary' ? 'btn btn-primary' : 'btn btn-ghost'
  return (
    <button className={cls} type="button">{children}</button>
  )
}
