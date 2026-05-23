import { ArrowRight, CalendarCheck, HeartPulse, PawPrint } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="min-h-[92vh] bg-[linear-gradient(rgba(15,23,42,.50),rgba(15,23,42,.32)),url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
          <div className="flex items-center gap-3 text-xl font-bold"><PawPrint /> PawIt VetCare</div>
          <button className="rounded-lg bg-white px-5 py-3 font-semibold text-slate-950">Book demo</button>
        </nav>
        <div className="mx-auto max-w-6xl px-6 pt-28 text-white">
          <h1 className="max-w-3xl text-6xl font-bold leading-tight">PawIt VetCare</h1>
          <p className="mt-5 max-w-2xl text-xl text-white/90">A secure veterinary hospital management platform for appointments, queue, pet records, prescriptions, diagnostics, billing, and pet-parent self-service.</p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white">Start clinic setup <ArrowRight size={18} /></button>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {[["Clinic flow", CalendarCheck], ["Pet health", HeartPulse], ["Parent app", PawPrint]].map(([label, Icon]) => (
          <div className="rounded-lg border border-slate-200 p-6" key={String(label)}>
            <Icon className="text-blue-600" />
            <h2 className="mt-4 text-2xl font-bold">{String(label)}</h2>
            <p className="mt-2 text-slate-600">Built for repeat daily workflows, secure data handling, and calm operational clarity.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
