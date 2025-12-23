import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand-text">
          <strong className="brand-title">Vacation Living</strong>
          <span className="brand-sub">Inspection & Operations Platform</span>
        </div>
        
        <div className="brand-logo-wrapper">
          <img
            src="/brand/vacationliving/logo-optimized.svg"
            alt="Vacation Living"
            className="brand-logo"
          />
        </div>

        <div className="header-actions">
          <button className="langs" aria-label="Change language">EN / ES</button>
        </div>
      </div>
    </header>
  );
}
