import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SUNANLYTZ | Case Study',
  description: 'Market leadership plan and venture viability case study.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}


