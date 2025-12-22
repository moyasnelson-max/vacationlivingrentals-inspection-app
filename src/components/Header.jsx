export default function Header({ lang = "en" }) {
  const t = {
    en: { home: "Home", insp: "Inspections", rep: "Reports", own: "Owners" },
    es: { home: "Inicio", insp: "Inspecciones", rep: "Reportes", own: "Dueños" },
  }[lang];

  return (
    <header>
      <div className="nav">
        <strong>Vacation Living</strong>
        <nav className="nav-links">
          <a>{t.home}</a>
          <a>{t.insp}</a>
          <a>{t.rep}</a>
          <a>{t.own}</a>
        </nav>
        <div className="lang-login">
          <span className="lang">{lang.toUpperCase()}</span>
          <span className="login">Login</span>
        </div>
      </div>
    </header>
  );
}
