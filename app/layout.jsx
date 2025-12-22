import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata = {
  title: 'Vacation Living • Inspection & Operations Platform',
  description: 'Ultra-luxury inspection & operations platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <header className="site-header" role="banner">
          <div className="header-container">
            <div className="brand">
              <img src="/brand/logo.png" alt="Vacation Living Logo" className="brand-logo" />
              <div className="brand-text">
                <div className="brand-title">Vacation Living</div>
                <div className="brand-sub">Inspection &amp; Operations Platform</div>
              </div>
            </div>
            <div className="header-actions">
              <nav className="langs" aria-label="Language switch">EN <span aria-hidden>│</span> ES</nav>
              <button className="btn btn-outline login" aria-label="Secure Login">Secure Login</button>
            </div>
          </div>
        </header>

        <div className="site-root">
          <main className="app-container">
            <div className="center-shell">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
} 
