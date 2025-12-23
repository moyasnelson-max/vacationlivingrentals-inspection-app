import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand">
          <Image
            src="/Public/brand/logo.png"
            alt="Vacation Living"
            width={48}
            height={48}
            priority
            className="brand-logo"
          />
          <div className="brand-text">
            <strong className="brand-title">Vacation Living</strong>
            <span className="brand-sub">Inspection & Operations Platform</span>
          </div>
        </div>

        <div className="header-actions">
          <span className="langs">EN / ES</span>
          <a href="/login" className="btn btn-outline login">Secure Login</a>
        </div>
      </div>
    </header>
  );
}
