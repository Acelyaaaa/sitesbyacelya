import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight, Code2, Search, ShieldCheck,
  Star, Mail, MessageCircle, ArrowUpRight,
  Palette, CalendarCheck, Globe,
  Smartphone, TrendingUp, MapPin, Nfc, QrCode,
} from "lucide-react";


const placeholder = (label: string) =>
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#ece6f7"/><text x="50%" y="50%" font-family="system-ui, sans-serif" font-size="34" fill="#8b7bb8" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`,
  );

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const EASE = [0.2, 0.7, 0.2, 1] as const;

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <ReviewCard />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}


function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}


function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-electric text-primary-foreground font-bold text-sm">A</span>
          <span className="font-semibold tracking-tight">Acelya<span className="text-electric">.</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:bg-electric after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric text-primary-foreground text-sm font-medium hover:shadow-glow transition-shadow"
        >
          Hire me <ArrowRight className="w-4 h-4" />
        </a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const headline = "I Build Websites That Get You Found on Google";
  const words = headline.split(" ");
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-10">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 -left-24 w-96 h-96 rounded-full bg-electric/20 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-electric-soft/20 blur-3xl animate-float-slower" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block mr-[0.25em]">
              <span
                className="word-in inline-block"
                style={{
                  animationDelay: `${i * 100}ms`,
                  color: w === "Found" || w === "Google" ? "var(--electric)" : undefined,
                }}
              >
                {w}
              </span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.85, duration: 0.6, ease: EASE }}
        >
          <p className="mt-7 text-lg text-muted-foreground max-w-xl">
            CS Graduate specialising in websites for local businesses across London.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-electric text-primary-foreground font-medium hover:shadow-glow-lg transition-all hover:-translate-y-0.5">
              See My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card hover:border-electric/40 transition-all font-medium">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>
        <div className="max-w-3xl">
          <Reveal delay={0.05}>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Engineering websites that <span className="text-electric">earn attention</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science graduate with a deep love for the craft of
                building for the web. I help local businesses turn their online
                presence into a real growth channel — fast sites, sharp design,
                and SEO baked in from day one.
              </p>
              <p>
                Based in <span className="text-foreground font-medium">London</span>,
                I work with hairdressers, lash techs, trades and independent shops
                who want a site that actually shows up on Google — and converts
                when it does.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-12 flex items-center gap-3">
      <div className="h-px w-10 bg-electric" />
      <span className="text-xs uppercase tracking-[0.25em] text-electric font-medium">{children}</span>
    </div>
  );
}


const DEV_PROJECTS = [
  { name: "Apple Store Clone", desc: "Pixel-faithful rebuild of the Apple storefront with product configurator.", tags: ["Next.js", "Tailwind", "Stripe"], image: placeholder("Apple Store Clone") },
  { name: "ReviseCards", desc: "Spaced-repetition flashcard app for students. PWA with offline sync.", tags: ["React", "IndexedDB", "PWA"], image: placeholder("ReviseCards") },
  { name: "Car Gallery", desc: "Luxury car marketplace with rich filtering and image-first browsing.", tags: ["Next.js", "Supabase", "Framer"], image: placeholder("Car Gallery") },
  { name: "StudyMatch", desc: "Match students with study partners by course, schedule and goals.", tags: ["TypeScript", "Node", "Postgres"], image: placeholder("StudyMatch") },
];

const TEMPLATES = [
  { name: "Lash Tech", desc: "Booking-ready template for lash artists.", image: placeholder("Lash Tech") },
  { name: "Nail Tech", desc: "Elegant salon template with price list and gallery.", image: placeholder("Nail Tech") },
  { name: "Hairdresser", desc: "Modern barber & salon site with online booking.", image: placeholder("Hairdresser") },
];

function Projects() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl">
              Development and shipped work.
            </h2>
            <p className="text-muted-foreground max-w-md">
              A look at what I've built from full apps to industry templates
              you can have live in a week.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-5 h-5 text-electric" />
            <h3 className="text-xl font-semibold">Projects for local businesses</h3>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {DEV_PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <article className="group h-full rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-electric/50 hover:shadow-card">
                <div className="aspect-[16/9] bg-muted border-b border-border overflow-hidden">
                  <img src={p.image} alt={`${p.name} project preview`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-xl font-semibold">{p.name}</h4>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-electric transition-all" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-electric/10 text-electric text-xs border border-electric/20">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a href="#" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-electric text-primary-foreground text-xs font-medium hover:shadow-glow transition-shadow">
                      <ArrowUpRight className="w-3.5 h-3.5" /> Live Demo
                    </a>
                    <a href="#" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border hover:border-electric/40 text-xs font-medium transition-colors">
                      View Project
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-5 h-5 text-electric" />
            <h3 className="text-xl font-semibold">Business Website Templates</h3>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {TEMPLATES.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <article className="group h-full rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-electric/50 hover:shadow-card">
                <div className="aspect-[4/3] bg-muted border-b border-border overflow-hidden">
                  <img src={t.image} alt={`${t.name} template preview`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-electric/10 text-electric text-[10px] uppercase tracking-wider border border-electric/20 mb-4">
                    Available for your business
                  </span>
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t.desc}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-electric/40 text-electric text-xs font-medium hover:bg-electric hover:text-primary-foreground transition-all">
                    View Template <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


const SERVICES = [
  { icon: Palette, title: "Web Design", desc: "Thoughtful, on-brand designs shaped around your customers and how they actually browse." },
  { icon: Code2, title: "Development", desc: "Fast, mobile-first builds with clean code — smooth on every device, built to last." },
  { icon: Search, title: "SEO Optimisation", desc: "On-page SEO and Google Business Profile setup so locals actually find your business." },
  { icon: ShieldCheck, title: "Maintenance", desc: "Hosting, updates, backups and small content tweaks each month — quietly looked after." },
  { icon: CalendarCheck, title: "Booking Systems", desc: "Let clients book and pay online with a simple, automated calendar that fits your hours." },
  { icon: Globe, title: "Domains", desc: "Help choosing, buying and connecting the right domain — set up properly the first time." },
];

function Services() {
  return (
    <section id="services" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl">
              Everything you need to grow online.
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-electric/50">
                <div className="w-11 h-11 rounded-xl bg-electric/10 border border-electric/25 grid place-items-center text-electric group-hover:bg-electric group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard() {
  const steps = [
    { icon: Smartphone, title: "Tap or scan", desc: "Your customer taps the card with their phone or scans the QR — no app needed." },
    { icon: Star, title: "Straight to Google", desc: "They land directly on your Google review page, ready to leave a star rating." },
    { icon: TrendingUp, title: "Rank higher locally", desc: "More recent 5-star reviews push you up Google's local results over time." },
  ];
  return (
    <section id="reviews" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Google Reviews</SectionLabel>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs border border-electric/20 mb-6">
                <MapPin className="w-3.5 h-3.5" /> London only — set up in person
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                Turn happy customers into <span className="text-electric">5-star reviews</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                A tap-to-review card for your counter. Customers tap their phone or
                scan the QR and go straight to your Google review page — the easiest
                way to grow the reviews that win you local trust.
              </p>
            </Reveal>
            <div className="mt-10 space-y-5">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={0.12 + i * 0.08}>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-electric/10 border border-electric/25 grid place-items-center text-electric">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.36}>
              <a href="#contact" className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-electric text-primary-foreground font-medium hover:shadow-glow-lg transition-all hover:-translate-y-0.5">
                Add a review card <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
          </div>

          
          <Reveal delay={0.1}>
            <div className="relative grid place-items-center">
              <div className="absolute w-72 h-72 rounded-full bg-electric/20 blur-3xl" />
              <div className="relative w-[300px] rounded-3xl border border-electric/30 bg-card p-8 shadow-card pulse-glow">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-electric text-primary-foreground font-bold">G</span>
                  <Nfc className="w-6 h-6 text-electric" />
                </div>
                <p className="mt-6 text-sm text-muted-foreground">Leave us a review</p>
                <div className="flex gap-1 text-electric my-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-electric" />
                  ))}
                </div>
                <div className="mt-4 grid place-items-center rounded-2xl bg-muted border border-border p-6">
                  <QrCode className="w-24 h-24 text-foreground" />
                </div>
                <p className="mt-4 text-center text-xs text-muted-foreground">Tap or scan to review</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


const STEPS = [
  { title: "Initial conversation", desc: "We chat about the type of website you want, your goals, and the main features you need — no pressure, no jargon." },
  { title: "Sign the agreement", desc: "Once we've agreed the scope, we sign a simple contract so we're both clear on exactly what's included, the timeline and the price." },
  { title: "Set up payment", desc: "A small deposit gets the project officially booked in and design work started." },
  { title: "First draft", desc: "I share the first version of your site so you can see your brand, content and layout coming to life." },
  { title: "Revisions", desc: "We refine the details together — colours, copy, imagery, sections — until it feels exactly right." },
  { title: "Go live", desc: "When you're completely happy, we launch your site, connect your domain, and get you ready to grow." },
];

function Process() {
  return (
    <section id="process" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Process</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl">
              How we get started.
            </h2>
            <p className="text-muted-foreground max-w-md">
              A calm, simple process from first message to launch day.
            </p>
          </div>
        </Reveal>
        <ol className="grid gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 0.06, 0.3)}>
              <li className="group grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start p-6 sm:p-8 rounded-3xl border border-border bg-card hover:border-electric/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-semibold text-electric/80 tabular-nums w-12 sm:w-16">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">{s.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}


function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <Reveal delay={0.05}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                Got a project in mind? <br />
                <span className="text-electric">Let's talk.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground max-w-md">
                Drop a message — replies usually within an hour, or reach me
                directly on WhatsApp.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              <Reveal delay={0.12}>
                <a href="https://wa.me/447810670091" className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-electric/50 hover:shadow-glow transition-all">
                  <span className="w-11 h-11 rounded-xl bg-electric/10 border border-electric/30 grid place-items-center text-electric group-hover:bg-electric group-hover:text-primary-foreground transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                    <div className="font-medium">+44 7810 670091</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-electric transition-colors" />
                </a>
              </Reveal>
              <Reveal delay={0.16}>
                <a href="mailto:sitesbyacelya@gmail.com" className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-electric/50 transition-all">
                  <span className="w-11 h-11 rounded-xl bg-electric/10 border border-electric/30 grid place-items-center text-electric">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                    <div className="font-medium">sitesbyacelya@gmail.com</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-electric transition-colors" />
                </a>
              </Reveal>
              <Reveal delay={0.2}>
                <a href="https://instagram.com/sitesbyacelya" className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-electric/50 transition-all">
                  <span className="w-11 h-11 rounded-xl bg-electric/10 border border-electric/30 grid place-items-center text-electric">
                    <InstagramIcon className="w-5 h-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Instagram</div>
                    <div className="font-medium">@sitesbyacelya</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-electric transition-colors" />
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card p-8 space-y-5">
              <Field label="Name" type="text" placeholder="your name" />
              <Field label="Email" type="email" placeholder="your email" />
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your business and what you need…"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-electric outline-none focus:ring-2 focus:ring-electric/30 transition resize-none"
                />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-electric text-primary-foreground font-medium hover:shadow-glow-lg transition-all">
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-electric outline-none focus:ring-2 focus:ring-electric/30 transition"
      />
    </div>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-electric text-primary-foreground font-bold text-sm">A</span>
          <span className="font-semibold">Acelya<span className="text-electric">.</span></span>
        </div>
        <p className="text-sm text-muted-foreground">
          Building websites that get local businesses found on Google.
        </p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
