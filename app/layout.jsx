import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <Header />
        
        <div className="site-root">
          <main className="app-container">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
} 
