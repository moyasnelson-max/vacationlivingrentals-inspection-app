import Image from "next/image";

export default function Header() {
  return (
    <header className="vl-header">
      <div className="vl-header-inner">
        <div className="vl-brand">
          <Image
            src="/brand/vl-logo.png"
            alt="Vacation Living"
            width={36}
            height={36}
            priority
          />
          <div className="vl-brand-text">
            <strong>Vacation Living</strong>
            <span>Inspection & Operations Platform</span>
          </div>
        </div>

        <div className="vl-header-actions">
          <span className="vl-lang">EN / ES</span>
          <a href="/login" className="vl-login">Secure Login</a>
        </div>
      </div>
    </header>
  );
}
