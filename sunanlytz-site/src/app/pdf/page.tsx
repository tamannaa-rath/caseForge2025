export const metadata = {
  title: 'Case Study PDF – SUNANLYTZ'
};

export default function PdfPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto container-max px-4 py-12">
        <h1 className="text-3xl font-extrabold tracking-tight">Case Study PDF</h1>
        <p className="mt-2 text-slate-600">Drop your PDF file into <code className="px-1 rounded bg-slate-200">public/case-study.pdf</code>. It will render below if present.</p>
        <div className="mt-6 rounded-lg border bg-white shadow-sm overflow-hidden">
          <object data="/case-study.pdf" type="application/pdf" className="w-full" style={{ height: '80vh' }}>
            <p className="p-6">PDF failed to load. <a className="underline" href="/case-study.pdf">Download instead</a>.</p>
          </object>
        </div>
      </div>
    </main>
  );
}


