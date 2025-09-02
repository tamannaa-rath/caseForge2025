import { ReactNode } from 'react';

export default function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: ReactNode; }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto container-max px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-slate-600 max-w-3xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}


