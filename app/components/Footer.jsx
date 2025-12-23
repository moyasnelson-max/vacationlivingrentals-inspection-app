import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="luxury-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo-section">
            <Image
              src="/Public/brand/logo.png"
              alt="Vacation Living"
              width={40}
              height={40}
              className="footer-logo"
            />
            <div className="footer-brand-text">
              <strong>Vacation Living</strong>
              <span>Rentals & Operations</span>
            </div>
          </div>
          <p className="footer-tagline">Excellence in property management</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Platform</h4>
            <a href="/dashboard">Owner Dashboard</a>
            <a href="/operations">Operations</a>
            <a href="/admin">Administration</a>
          </div>
          
          <div className="footer-column">
            <h4>Support</h4>
            <a href="/help">Help Center</a>
            <a href="/contact">Contact Us</a>
            <a href="/terms">Terms of Service</a>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/security">Security</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-version">
          <span className="version-badge">v1.0.0</span>
          <span className="copyright">© {currentYear} Vacation Living Rentals. All rights reserved.</span>
        </div>
        
        <div className="footer-partner">
          <span className="partner-label">Developed by</span>
          <div className="partner-logo-container">
            <Image
              src="/brand/digitalhive/logo.png"
              alt="Digital Hive"
              width={24}
              height={24}
              className="partner-logo"
            />
            <span className="partner-name">Digital Hive</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
