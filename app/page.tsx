"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  ClipboardList,
  HeartPulse,
  LockKeyhole,
  MessageCircle,
  PawPrint,
  Receipt,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

const hospitalUrl = process.env.NEXT_PUBLIC_HOSPITAL_APP_URL ?? "http://localhost:3000/login";
const petParentUrl = process.env.NEXT_PUBLIC_PET_PARENT_APP_URL ?? "#pet-parent";

const features = [
  "Live Dashboard",
  "Queue Management",
  "Appointments",
  "Pet Records",
  "Billing",
  "Clinical Notes",
  "Lab Results",
  "Pet Parent Access",
];

const modules = [
  {
    icon: Stethoscope,
    title: "360 degree consultation panel",
    text: "SOAP notes, vitals, prescriptions, lab orders, and shared pet history in one clinic workflow.",
  },
  {
    icon: Users,
    title: "Real-time queue",
    text: "Walk-ins, check-ins, call/start/complete transitions, and front-desk visibility for busy clinic days.",
  },
  {
    icon: ClipboardList,
    title: "Smart prescriptions",
    text: "Drafts, finalization, templates, and controlled sharing with pet parents from the care team.",
  },
  {
    icon: Receipt,
    title: "Billing and analytics",
    text: "Invoices, void approval, revenue tracking, and owner-scoped pet-parent billing access.",
  },
  {
    icon: HeartPulse,
    title: "Diagnostics workflow",
    text: "Lab ordering, sample status, report metadata, and guarded result sharing in one place.",
  },
  {
    icon: LockKeyhole,
    title: "Role-based access",
    text: "Clinic admin, veterinarian, reception, technician, lab, and pet-parent roles enforced by the API.",
  },
];

const specialties = [
  "Wellness",
  "Vaccination",
  "Surgery",
  "Dermatology",
  "Dental",
  "Diagnostics",
  "Emergency",
  "Grooming",
  "Telemedicine",
  "Pet Parent Care",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a className="flex items-center gap-3 text-2xl font-bold" href="#">
            <span className="grid size-11 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
              <PawPrint size={24} />
            </span>
            PawIt
          </a>
          <div className="hidden items-center gap-8 text-base font-medium text-slate-600 md:flex">
            <a className="hover:text-blue-600" href="#product">
              Product
            </a>
            <a className="hover:text-blue-600" href="#features">
              Features
            </a>
            <a className="hover:text-blue-600" href="#specialties">
              Specialties
            </a>
            <a className="hover:text-blue-600" href="#about">
              About
            </a>
            <a className="hover:text-blue-600" href="#contact">
              Contact
            </a>
          </div>
          <PortalDialog />
        </nav>
      </header>

      <section
        className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2,6,23,.92), rgba(15,23,42,.82) 42%, rgba(15,23,42,.44)), url('https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-10 px-5 py-16 text-white md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              Veterinary HMS and pet-parent portal
            </p>
            <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">The Complete VetCare Platform</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Hospital management, clinical workflows, billing, diagnostics, and pet-parent access built for modern
              veterinary clinics.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 font-semibold text-slate-950" href="#contact">
                Request demo <ArrowRight size={18} />
              </a>
              <a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 font-semibold backdrop-blur" href="#features">
                Explore features
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/95 p-5 text-slate-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">app.pawit.us/dashboard</p>
                <h2 className="mt-1 text-2xl font-bold">Today&apos;s Clinic</h2>
              </div>
              <ShieldCheck className="text-blue-600" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Patients", "47", "+12% today"],
                ["Queue", "8", "Avg wait: 12 min"],
                ["Revenue", "$12.4k", "+8% this week"],
              ].map(([label, value, delta]) => (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4" key={label}>
                  <p className="text-sm font-semibold text-slate-500">{label}</p>
                  <p className="mt-2 text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-green-600">{delta}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-slate-200 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">Active Queue</h3>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">Live</span>
              </div>
              {[
                ["M", "Milo", "In Consultation"],
                ["B", "Bruno", "Waiting"],
                ["L", "Luna", "Checked In"],
              ].map(([initial, name, status]) => (
                <div className="flex items-center gap-3 border-t border-slate-100 py-3 first:border-t-0" key={name}>
                  <span className="grid size-9 place-items-center rounded-full bg-blue-600 font-bold text-white">{initial}</span>
                  <span className="font-semibold">{name}</span>
                  <span className="ml-auto text-sm text-slate-500">{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50" id="product">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-4 md:px-8">
          {[
            ["Owner scoped", "Pet-parent access"],
            ["40+", "Workflow actions"],
            ["10+", "Care modules"],
            ["24/7", "Cloud-ready API"],
          ].map(([value, label]) => (
            <div className="rounded-lg bg-white p-5 text-center shadow-sm" key={label}>
              <p className="text-3xl font-bold text-blue-600">{value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8" id="features">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Two portals, one ecosystem</p>
          <h2 className="mt-3 text-4xl font-bold">Everything Your Practice Needs</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            A hospital system and pet-parent experience connected through one secure, role-based PawIt API.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((item) => (
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {modules.map(({ icon: Icon, title, text }) => (
            <article className="rounded-lg border border-slate-200 p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md" key={title}>
              <Icon className="text-blue-600" size={26} />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white" id="specialties">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Specialty modules</p>
              <h2 className="mt-3 text-4xl font-bold">Purpose-built for veterinary care.</h2>
              <p className="mt-4 leading-8 text-slate-300">
                PawIt adapts Docran-style operational navigation to veterinary specialties, pet guardians, and clinic workflows.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {specialties.map((item) => (
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 font-semibold" key={item}>
                  <BadgeCheck className="mb-3 text-green-300" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8" id="about">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Built for trust</p>
          <h2 className="mt-3 text-4xl font-bold">Security first, clinic friendly.</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Tenant isolation, role-based workflows, audit logs, Cloud Run deployment, PostgreSQL migrations, and guarded pet-parent
            access are built into the PawIt platform path.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["JWT sessions", "HttpOnly cookies", "Audited mutations", "PostgreSQL first"].map((item) => (
            <div className="rounded-lg border border-slate-200 p-5" key={item}>
              <LockKeyhole className="text-blue-600" />
              <p className="mt-3 font-bold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50" id="contact">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Contact us</p>
            <h2 className="mt-3 text-4xl font-bold">Ready to modernize your clinic?</h2>
            <p className="mt-4 leading-8 text-slate-600">Start with the hospital portal, then connect pet-parent access as your clinic workflow grows.</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="h-12 rounded-lg border border-slate-300 px-3" placeholder="First name" />
              <input className="h-12 rounded-lg border border-slate-300 px-3" placeholder="Last name" />
              <input className="h-12 rounded-lg border border-slate-300 px-3 sm:col-span-2" placeholder="Email" />
              <input className="h-12 rounded-lg border border-slate-300 px-3 sm:col-span-2" placeholder="Clinic or organization" />
              <textarea className="min-h-28 rounded-lg border border-slate-300 p-3 sm:col-span-2" placeholder="Message" />
            </div>
            <button className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 font-semibold text-white">
              Send message <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <a
        className="fixed bottom-6 right-6 grid size-16 place-items-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30"
        href="#contact"
        aria-label="Contact PawIt"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
}

function PortalDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-blue-600 px-5 font-semibold text-white shadow-lg shadow-blue-600/25">
          Sign In <ArrowRight size={18} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[92vh] w-[calc(100vw-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                <PawPrint size={24} />
              </span>
              <div>
                <Dialog.Title className="text-2xl font-bold">Sign In to PawIt</Dialog.Title>
                <Dialog.Description className="mt-1 text-slate-500">Choose your portal to continue</Dialog.Description>
              </div>
            </div>
            <Dialog.Close className="grid size-10 place-items-center rounded-lg text-slate-500 hover:bg-slate-100" aria-label="Close">
              <X size={22} />
            </Dialog.Close>
          </div>
          <div className="grid gap-4 p-6 sm:grid-cols-2">
            <PortalCard
              href={hospitalUrl}
              icon={Building2}
              tone="blue"
              title="Hospital Portal"
              text="Access the veterinary hospital management system for staff, doctors, and administrators"
              urlLabel="pawit.us/hospital"
            />
            <PortalCard
              href={petParentUrl}
              icon={HeartPulse}
              tone="green"
              title="Pet Parent Portal"
              text="Access pet records, appointments, billing, and shared care updates"
              urlLabel="pawit.us/pet-parent"
            />
          </div>
          <div className="border-t border-slate-200 px-6 py-5 text-center text-sm text-slate-500">
            Don&apos;t have an account? <a className="font-semibold text-blue-600 underline" href="#contact">Contact us</a> to get started
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function PortalCard({
  href,
  icon: Icon,
  tone,
  title,
  text,
  urlLabel,
}: {
  href: string;
  icon: typeof Building2;
  tone: "blue" | "green";
  title: string;
  text: string;
  urlLabel: string;
}) {
  const color = tone === "blue" ? "border-blue-200 text-blue-600 hover:border-blue-400" : "border-emerald-200 text-emerald-600 hover:border-emerald-400";
  const iconColor = tone === "blue" ? "bg-blue-600" : "bg-emerald-600";

  return (
    <a className={`flex min-h-80 flex-col items-center justify-center rounded-lg border-2 p-6 text-center transition hover:shadow-lg ${color}`} href={href}>
      <span className={`grid size-20 place-items-center rounded-2xl text-white shadow-lg ${iconColor}`}>
        <Icon size={36} />
      </span>
      <h3 className="mt-6 text-2xl font-bold text-slate-950">{title}</h3>
      <p className="mt-4 max-w-xs leading-7 text-slate-600">{text}</p>
      <span className="mt-6 inline-flex items-center gap-2 font-semibold">
        Sign In <ArrowRight size={18} />
      </span>
      <span className="mt-5 text-sm text-slate-500">{urlLabel}</span>
    </a>
  );
}
