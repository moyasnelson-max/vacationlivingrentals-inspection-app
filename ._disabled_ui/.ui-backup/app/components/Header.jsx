import Image from "next/image";

export default function Header() {
  return (
    <header style={{
      padding: "28px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid rgba(255,255,255,0.04)",
      backdropFilter: "blur(6px)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <Image
          src="/brand/logo-gold.svg"
          alt="Vacation Living"
          width={42}
          height={42}
        />
        <div>
          <div style={{ fontWeight: 500, letterSpacing: "0.04em" }}>
            Vacation Living
          </div>
          <div style={{
            fontSize: "11px",
            opacity: 0.55,
            letterSpacing: "0.18em"
          }}>
            INSPECTION & OPERATIONS PLATFORM
          </div>
        </div>
      </div>

      <div style={{ fontSize: "13px", opacity: 0.75 }}>
        EN / ES &nbsp; · &nbsp; Secure Login
      </div>
    </header>
  );
}
