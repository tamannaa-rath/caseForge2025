"use client";
import Link from 'next/link';

const sections = [
  { href: '#market', label: 'Market Context' },
  { href: '#viability', label: 'Viability Matrix' },
  { href: '#execution', label: 'Execution Plan' },
  { href: '#swot', label: 'SWOT' },
  { href: '#pdf', label: 'PDF' }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto container-max px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-tight">
          SUNANLYTZ
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="hover:text-brand-700">
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-brand-600 text-white px-4 py-2 text-sm font-semibold hover:bg-brand-700"
        >
          Contact
        </a>
      </div>
    </header>
  );
}


