import './globals.css';

export const metadata = {
  title: 'Vacation Living • Inspection Platform',
  description: 'Luxury Inspection & Operations Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
