import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="luxury-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo-section">
            <img
              src="/brand/vacationliving/logo-optimized.svg"
              alt="Vacation Living"
              className="footer-logo"
            />
            <div className="footer-brand-text">
              <strong>Vacation Living</strong>
              <span>Rentals & Operations</span>
            </div>
          </div>
          <p className="footer-tagline">Excellence in property management</p>
          <p className="footer-trust">Trusted by property owners since 2009. Operational excellence, delivered.</p>
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
          <span className="system-status">
            <span className="status-indicator"></span>
            <span className="status-text">System Operational</span>
          </span>
          <span className="version-badge">v1.0.0</span>
          <span className="copyright">© {currentYear} Vacation Living Rentals. All rights reserved.</span>
        </div>
        
        <div className="footer-partner">
          <span className="partner-label">Developed by</span>
          <div className="partner-logo-container">
            <img
              src="/brand/digitalhive/DigitalHive_Icon_optimized.svg"
              alt="Digital Hive"
              className="partner-logo"
            />
            <span className="partner-name">Digital Hive</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
