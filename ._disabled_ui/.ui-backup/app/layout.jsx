import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Vacation Living · Inspection & Operations Platform",
  description: "Luxury inspection & operations platform designed to hotel-level standards."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
