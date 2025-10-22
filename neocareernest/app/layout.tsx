import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NeoCareerNest",
  description: "Neo Organization Career Portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-800/60">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-semibold">NeoCareerNest</Link>
            <div className="flex items-center gap-4">
              <Link href="/jobs" className="hover:underline">Jobs</Link>
              <Link href="/prepare" className="hover:underline">Prepare</Link>
              <Link href="/participate" className="hover:underline">Participate</Link>
              <Link href="/internships" className="hover:underline">Internships</Link>
              <Link href="/login" className="ml-6 btn-primary">Login / Signup</Link>
            </div>
          </nav>
        </header>
        <main className="container py-10 min-h-[70vh]">{children}</main>
        <footer className="border-t border-slate-800/60">
          <div className="container py-8 text-sm text-slate-400">
            © {new Date().getFullYear()} Neo Organizations. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
