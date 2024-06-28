// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-900 ">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
