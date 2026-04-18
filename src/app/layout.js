import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>

        <nav className="navbar">
          <h2>✨ InfluencerHub</h2>
          <div>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </nav>

        <div className="fade">{children}</div>

      </body>
    </html>
  );
}