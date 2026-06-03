import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  FileText,
  HeartPulse,
  LockKeyhole,
  PawPrint,
  Receipt,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

const portalLinks = [
  { label: "Clinic portal", href: process.env.NEXT_PUBLIC_HOSPITAL_APP_URL ?? "#clinic" },
  { label: "Pet parent app", href: process.env.NEXT_PUBLIC_PET_PARENT_APP_URL ?? "#parents" },
  { label: "Book a visit", href: process.env.NEXT_PUBLIC_BOOKING_URL ?? "#booking" },
];

const modules = [
  {
    icon: CalendarCheck,
    label: "Appointments",
    text: "Staff scheduling, pet-parent requests, cancellation policies, and telemedicine links.",
  },
  {
    icon: Users,
    label: "Queue",
    text: "Walk-ins, check-in flow, call/start/complete transitions, and front-desk visibility.",
  },
  {
    icon: PawPrint,
    label: "Pet Records",
    text: "Dog and cat profiles, guardians, documents, vaccination status, and clinical history.",
  },
  {
    icon: Stethoscope,
    label: "Clinical",
    text: "SOAP notes, prescriptions, templates, lab orders, diagnostic reports, and sharing controls.",
  },
  {
    icon: Receipt,
    label: "Billing",
    text: "Draft and issued invoices, void approval, Stripe-ready payments, and invoice analytics.",
  },
  {
    icon: FileText,
    label: "Reporting",
    text: "Clinic dashboards for species mix, appointment status, revenue, diagnoses, and feedback.",
  },
];

const proofPoints = [
  "Tenant-scoped API boundary",
  "Role-based clinic workflows",
  "Audited clinical and billing mutations",
  "PostgreSQL-first data model",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="min-h-[92vh] bg-[linear-gradient(rgba(15,23,42,.58),rgba(15,23,42,.34)),url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
          <a className="flex items-center gap-3 text-xl font-bold" href="#">
            <PawPrint aria-hidden="true" />
            <span>PawIt VetCare</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a className="text-white/85 hover:text-white" href="#platform">
              Platform
            </a>
            <a className="text-white/85 hover:text-white" href="#clinic">
              Clinic
            </a>
            <a className="text-white/85 hover:text-white" href="#parents">
              Pet parents
            </a>
          </div>
          <a className="rounded-lg bg-white px-5 py-3 font-semibold text-slate-950" href="#booking">
            Book demo
          </a>
        </nav>

        <div className="mx-auto max-w-6xl px-6 pt-20 text-white md:pt-28">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">PawIt VetCare</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              A secure veterinary hospital management platform for appointments, queue, pet records, prescriptions,
              diagnostics, billing, and pet-parent self-service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white"
                href="#clinic"
              >
                Start clinic setup <ArrowRight size={18} />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur"
                href="#parents"
              >
                Explore parent app
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14" id="platform">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-blue-600">Platform</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Built around the clinic day.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            PawIt connects front desk, veterinarians, lab workflow, billing, and pet parents through one contract-backed
            API and consistent portal experience.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {modules.map(({ icon: Icon, label, text }) => (
            <div className="rounded-lg border border-slate-200 p-6" key={label}>
              <Icon className="text-blue-600" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">{label}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50" id="clinic">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase text-blue-600">Clinic portal</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Operational screens for repeated use.</h2>
            <p className="mt-4 leading-8 text-slate-600">
              The hospital portal is already wired to generated API types and includes billing data integration, with
              appointment, queue, records, clinical, analytics, and staff modules queued behind the same contract.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Billing dashboard", "Appointment shell", "Contract-typed API", "Cloud Run-ready backend"].map((item) => (
              <div className="rounded-lg border border-slate-200 bg-white p-5" key={item}>
                <BadgeCheck className="text-green-600" aria-hidden="true" />
                <p className="mt-3 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2" id="parents">
        <div className="rounded-lg border border-slate-200 p-6">
          <HeartPulse className="text-green-600" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold">Pet-parent portal</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Pet parents can view visits, pets, and billing through a typed API client with loading and unavailable states
            ready for real backend data.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 p-6">
          <ClipboardList className="text-violet-600" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold">Booking boundary</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Public slot search and booking confirmation sit behind a separate Go service, now aligned with the platform
            runtime and ready for the next booking workflow slice.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <ShieldCheck className="text-blue-300" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-bold">Designed for sensitive clinic data.</h2>
            <p className="mt-4 leading-8 text-slate-300">
              PawIt follows a production path built around tenant isolation, explicit roles, audited mutations, and
              private managed infrastructure.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofPoints.map((item) => (
              <div className="rounded-lg border border-white/10 bg-white/5 p-5" key={item}>
                <LockKeyhole className="text-blue-300" aria-hidden="true" />
                <p className="mt-3 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14" id="booking">
        <div className="rounded-lg border border-slate-200 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Choose where to start.</h2>
              <p className="mt-3 leading-8 text-slate-600">
                Route clinics, pet parents, and booking traffic to the right PawIt surface as each deployment goes live.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              {portalLinks.map((link) => (
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white"
                  href={link.href}
                  key={link.label}
                >
                  {link.label} <ArrowRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
