import NavBar from '@/components/NavBar';
import Section from '@/components/Section';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <section className="bg-gradient-to-b from-brand-50 to-white border-b border-slate-200">
        <div className="mx-auto container-max px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Building Bharat's Fintech Leader <span className="text-brand-700">— SUNANLYTZ</span>
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-xl">
              A competition-ready walkthrough of our case study: market urgency,
              disciplined scale, and an execution plan that compounds defensibility.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#market" className="rounded-md bg-brand-600 text-white px-5 py-3 font-semibold hover:bg-brand-700">Explore</a>
              <Link href="/pdf" className="rounded-md border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50">View PDF</Link>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <ul className="space-y-3 text-slate-700">
              <li>• Market Size, Credit Gap, Competitive Pace</li>
              <li>• Venture Viability: Scalability, Niche, Regulation, Stickiness</li>
              <li>• Risk Sensitivity, Partnership Leverage, Tech Moat (ML/AI)</li>
              <li>• Execution Plan and Path to Market Leadership</li>
            </ul>
          </div>
        </div>
      </section>

      <Section id="market" title="Market Urgency & Context" subtitle="Fintech TAM, SME credit gap, and competitive pacing.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Market Size" bullets={["India fintech to $150–156B by 2025; $990B by 2030","RBI easing de-risks MSME space","29% of GDP, 60% workforce but <16% bank lending"]} />
          <Card title="Credit Gap" bullets={["MSME gap ₹20–30 lakh crore","Only 14% MSMEs access formal credit","Data-driven underwriting is key"]} />
          <Card title="Competitive Pace" bullets={["Rails ready via UPI, but credit lagging","Device-led moats raise CAC","Data-first model wins"]} />
        </div>
      </Section>

      <Section id="viability" title="The Venture Viability Matrix" subtitle="Scalability constraints, niche identification, regulatory readiness, and customer stickiness.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Scalability Constraints" bullets={["Capital raise is immediate","AI-ops scales without bloating costs","Regulatory upgrades critical"]} />
          <Card title="Niche Identification" bullets={["Tier II/III SMEs using data-driven lending","Wholesalers: medium GMVs, working capital cycles","GST + txn data X-ray"]} />
          <Card title="Regulatory Readiness" bullets={["NBFC license prep, KYC automation","Monthly reporting & fraud infra","FLDG rule compliance"]} />
          <Card title="Customer Stickiness" bullets={["80k SMEs; ₹5,000 Cr payments","CLV/CAC > 11x","Proprietary low-cost funnel"]} />
        </div>
      </Section>

      <Section id="execution" title="Execution Plan" subtitle="RICE prioritised: Reach × Impact × Confidence ÷ Effort.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="#1 Fortify Credit Risk Moat" bullets={["Keep NPAs near 2.1%","Freeze lending to risky cohorts if drift","Tighten underwriting criteria"]} />
          <Card title="#2 Earn License to Scale" bullets={["NBFC process 12–18 months","Unlock co-lending + securitization","Build operating foundation"]} />
          <Card title="#3 Multiply Through Partnerships" bullets={["Turn ₹125 Cr into ₹2,400 Cr capacity","Slash CAC 40–60%","Pilot then scale co-lending"]} />
        </div>
      </Section>

      <Section id="swot" title="SWOT Analysis" subtitle="Positioned to capture the 60% of MSMEs invisible to banks.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Strengths" bullets={["Proven underwriting moat (2.1% GNPA)","Lean operations, high CLV/CAC","Sustainable unit economics"]} />
          <Card title="Opportunities" bullets={["Massive underserved market","Co-lending as force multiplier","Data monetization via pricing"]} />
          <Card title="Weaknesses" bullets={["Capital constrained currently","Ops & compliance upgrades" ]} />
          <Card title="Threats" bullets={["RBI scrutiny","Competitor cash-burn distorting CAC","Macro downturn raising NPAs"]} />
        </div>
      </Section>

      <footer id="contact" className="border-t border-slate-200">
        <div className="mx-auto container-max px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600">© {new Date().getFullYear()} SUNANLYTZ · Case Competition Showcase</p>
          <div className="flex gap-3 text-sm">
            <a href="/pdf" className="underline">Case Study PDF</a>
            <a href="mailto:contact@example.com" className="underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-4 space-y-2 text-slate-700">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}


