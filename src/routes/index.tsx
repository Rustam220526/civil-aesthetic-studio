import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  HardHat,
  Ruler,
  Building2,
  PenTool,
  ClipboardCheck,
  Leaf,
  Mail,
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Briefcase,
  FileText,
  Calendar,
  MapPin,
  LogIn,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import heroImage from "../assets/hero-engineering.jpg";
import multistoreyBuilding from "../assets/multistorey-building.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Civil Engineering Graduate | Portfolio",
      },
      {
        name: "description",
        content:
          "Portfolio of a Civil Engineering graduate specializing in structural design, sustainable infrastructure, and project management.",
      },
      {
        property: "og:title",
        content: "Civil Engineering Graduate | Portfolio",
      },
      {
        property: "og:description",
        content:
          "Portfolio of a Civil Engineering graduate specializing in structural design, sustainable infrastructure, and project management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://civil-aesthetic-studio.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://civil-aesthetic-studio.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Civil Engineering Graduate",
          jobTitle: "Civil Engineer",
          description:
            "Civil Engineering graduate specializing in structural design, sustainable infrastructure, and project management.",
          url: "https://civil-aesthetic-studio.lovable.app/",
          knowsAbout: [
            "Structural Analysis",
            "BIM",
            "Project Management",
            "AutoCAD",
            "Sustainable Design",
            "Site Supervision",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Civil Engineering Portfolio",
          url: "https://civil-aesthetic-studio.lovable.app/",
        }),
      },
    ],
  }),
  component: Index,
});

const skills = [
  {
    icon: Ruler,
    title: "Structural Analysis",
    description:
      "Design and analyze load-bearing systems using modern methods and industry-standard software.",
  },
  {
    icon: Building2,
    title: "Infrastructure Design",
    description:
      "Plan roads, bridges, and utilities with attention to safety, longevity, and community impact.",
  },
  {
    icon: PenTool,
    title: "AutoCAD & BIM",
    description:
      "Produce precise technical drawings and building information models for complex projects.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "Coordinate timelines, budgets, and stakeholders to deliver projects on scope and on schedule.",
  },
  {
    icon: HardHat,
    title: "Site Supervision",
    description:
      "Oversee construction operations with a focus on quality control, safety, and regulatory compliance.",
  },
  {
    icon: Leaf,
    title: "Sustainable Engineering",
    description:
      "Integrate green materials, energy efficiency, and resilient design into every solution.",
  },
];

const projects = [
  {
    title: "Smart Traffic and Mobility Analysis",
    category: "Transportation Engineering",
    year: "2024",
    description:
      "Uses IoT sensors and data tools to study urban congestion and plan safer roads for Indian cities.",
    details: {
      overview:
        "A data-driven study of urban traffic patterns using IoT sensor data to identify congestion hotspots and propose safer, more efficient road designs for Indian metropolitan areas.",
      approach:
        "Collected real-time traffic volume, speed, and incident data from IoT sensors. Analyzed peak-hour congestion patterns and correlated them with road geometry, intersection design, and pedestrian movement.",
      outcomes: [
        "Mapped high-congestion corridors with 85% spatial accuracy",
        "Proposed signal-timing and lane-width improvements for key intersections",
        "Recommended safer pedestrian crossings and dedicated cycle lanes",
      ],
      tools: ["Python", "GIS", "Excel", "MATLAB"],
    },
  },
  {
    title: "Recycled Plastic in Flexible Pavements",
    category: "Pavement Engineering",
    year: "2024",
    description:
      "Tests the strength and cost benefits of mixing shredded plastic waste into asphalt road layers.",
    details: {
      overview:
        "An experimental investigation into using shredded plastic waste as a partial aggregate replacement in flexible pavement bituminous mixes.",
      approach:
        "Prepared Marshall specimens with varying plastic content percentages. Tested stability, flow, density, and air voids to determine optimum binder content and mix performance.",
      outcomes: [
        "Improved Marshall stability by up to 15% with 8% plastic content",
        "Reduced bitumen requirement and overall material cost",
        "Demonstrated a viable waste-management pathway for plastic refuse",
      ],
      tools: ["Marshall Stability Apparatus", "Bitumen Testing", "Excel", "AutoCAD"],
    },
  },
  {
    title: "Seismic Vulnerability and Retrofitting",
    category: "Structural Analysis",
    year: "2023",
    description:
      "Analyzes multi-story concrete structures using software like ETABS to design steel bracings or shear walls for earthquake safety.",
    details: {
      overview:
        "Seismic performance assessment of a multi-story reinforced concrete frame and design of retrofit measures using steel bracing and reinforced concrete shear walls.",
      approach:
        "Modeled the existing building in ETABS, performed response spectrum analysis, identified weak stories and torsional irregularities, then designed steel X-bracing and shear-wall upgrades.",
      outcomes: [
        "Reduced inter-story drift by 30% with added shear walls",
        "Improved lateral load resistance by approximately 40%",
        "Prepared retrofit drawings and a detailed cost estimate",
      ],
      tools: ["ETABS", "AutoCAD", "Excel", "IS 1893"],
    },
  },
  {
    title: "BIM for Construction Management",
    category: "Construction Management",
    year: "2023",
    description:
      "Applies digital 3D modeling to track material waste, cut costs, and optimize timelines on building sites.",
    details: {
      overview:
        "A Building Information Modeling study to improve construction site management through clash detection, automated quantity takeoffs, and 4D construction scheduling.",
      approach:
        "Developed a detailed 3D model of a mid-rise building, performed clash detection between structural and MEP elements, extracted BOQ, and linked model components to construction schedules.",
      outcomes: [
        "Identified and resolved 12 major clashes before construction",
        "Reduced estimated material waste by 18% through accurate quantity takeoffs",
        "Optimized construction timeline through 4D simulation and sequencing",
      ],
      tools: ["Revit", "Navisworks", "AutoCAD", "MS Project"],
    },
  },
  {
    title: "Low-Cost Wastewater Treatment Systems",
    category: "Environmental Engineering",
    year: "2022",
    description:
      "Focuses on decentralized sewage treatment, biochar filters, and greywater recycling for local communities.",
    details: {
      overview:
        "Design of a decentralized, low-cost wastewater treatment system using biochar filters and greywater recycling for rural and peri-urban communities.",
      approach:
        "Characterized influent wastewater quality, designed horizontal subsurface-flow constructed wetlands with biochar media, and evaluated treated-water reuse potential for irrigation.",
      outcomes: [
        "Achieved 75% BOD and COD reduction in pilot-scale tests",
        "Produced reusable greywater meeting local irrigation standards",
        "Estimated 40% lower lifecycle cost than conventional sewage treatment plants",
      ],
      tools: ["Water Quality Testing Kits", "Excel", "AutoCAD", "EPA SWMM"],
    },
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#internships" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-[60] px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`
          container-tight relative mx-auto overflow-hidden rounded-2xl border border-green-200/60 bg-green-100/80 shadow-sm backdrop-blur-md transition-all duration-300
          ${scrolled ? "shadow-lg shadow-green-900/5" : ""}
        `}
      >
        <nav className="flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-heading text-sm font-bold text-primary-foreground">
                CE
              </span>
            </div>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden font-sans text-[10px] font-medium uppercase tracking-widest text-muted-foreground sm:inline">
              Portfolio
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-secondary hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/login"
              className="group ml-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-card px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all hover:border-primary/40 hover:bg-secondary hover:text-accent"
            >
              <LogIn className="h-3.5 w-3.5" />
              Log in
            </Link>
            <Link
              to="/signup"
              className="group ml-2 inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              <UserPlus className="h-3.5 w-3.5" />
              Sign up
            </Link>
            <a
              href="#contact"
              className="group ml-2 inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Get in touch
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="sm:hidden">
              <button
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-secondary/60 transition-colors hover:bg-secondary"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <span
                  className={cn(
                    "absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    mobileOpen
                      ? "translate-y-0 rotate-45"
                      : "-translate-y-1"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 rounded-full bg-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    mobileOpen
                      ? "w-5 translate-y-0 -rotate-45"
                      : "w-3 translate-y-1"
                  )}
                />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              closeButton={false}
              className="menu-offset rounded-t-2xl border-b border-green-200 bg-green-100/95 backdrop-blur-xl"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-bold text-primary transition-colors hover:bg-secondary hover:text-accent"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    to="/login"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-card px-4 py-3 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:bg-secondary hover:text-accent"
                  >
                    <LogIn className="h-4 w-4" />
                    Log in
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    <UserPlus className="h-4 w-4" />
                    Sign up
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/10 bg-card px-4 py-3 text-sm font-semibold text-primary transition-all hover:bg-secondary"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>

        {/* Structural detail bar */}
        <div className="flex h-1 w-full border-t border-border/40">
          <div className="h-full w-1/3 bg-primary/10" />
          <div className="h-full w-px bg-border" />
          <div className="h-full flex-1" />
        </div>

        {/* Subtle bottom glow */}
        <div
          className="pointer-events-none absolute -bottom-5 left-1/2 h-5 w-1/2 -translate-x-1/2 rounded-full blur-2xl"
          style={{ background: "oklch(0.55 0.075 240 / 0.12)" }}
        />
      </div>
    </header>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header />

      {/* Hero */}
      <section className="container-tight grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Civil Engineering Graduate
          </p>
          <h1 className="text-balance font-heading text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Building resilient structures for a sustainable future.
          </h1>
          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted-foreground">
            I design infrastructure that balances technical precision with environmental responsibility — from structural analysis to sustainable construction.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-muted-foreground">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-navy-900/10">
            <img
              src={heroImage}
              alt="Abstract architectural concrete and steel composition"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-card py-20 lg:py-28">
        <div className="container-tight grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Engineering with purpose.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-foreground">
              I recently graduated with a degree in Civil Engineering, where I developed a deep appreciation for the systems that shape our cities. My work sits at the intersection of structural integrity, environmental stewardship, and human-centered design.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether modeling forces in a high-rise or optimizing drainage for a new development, I approach every problem with curiosity, rigor, and a commitment to public safety. I am now seeking opportunities to contribute to projects that leave a lasting positive impact.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <a
                href="#projects"
                className="group rounded-xl border border-border bg-background p-5 transition-all hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <p className="font-heading text-3xl font-bold text-primary transition-colors group-hover:text-accent">5+</p>
                <p className="mt-1 text-sm text-muted-foreground">Academic projects</p>
              </a>
              <a
                href="#internships"
                className="group rounded-xl border border-border bg-background p-5 transition-all hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <p className="font-heading text-3xl font-bold text-primary transition-colors group-hover:text-accent">2</p>
                <p className="mt-1 text-sm text-muted-foreground">Internships</p>
              </a>
              <a
                href="#publications"
                className="group rounded-xl border border-border bg-background p-5 transition-all hover:border-accent/30 hover:bg-accent/5 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <p className="font-heading text-3xl font-bold text-primary transition-colors group-hover:text-accent">1</p>
                <p className="mt-1 text-sm text-muted-foreground">Published paper</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Structure */}
      <section className="container-tight py-12 lg:py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-navy-900/10">
          <div className="aspect-[16/9] w-full">
            <img
              src={multistoreyBuilding}
              alt="Modern multistorey building with glass and concrete facade"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
              Featured Structure
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-primary-foreground sm:text-3xl">
              Multistorey Design Excellence
            </h3>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container-tight py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Expertise
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Technical foundation.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A blend of analytical tools, design software, and field knowledge.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-navy-900/5"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent">
                <skill.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internships */}
      <section id="internships" className="container-tight py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Internships that grounded me.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hands-on exposure to design offices and construction sites.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-navy-900/5 sm:p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
              Structural Design Intern
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Engineering Consultancy Firm
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                Summer 2023
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                On-site / Remote
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Assisted senior engineers in load calculations, structural modeling, and preparation of working drawings for residential and commercial projects using ETABS and AutoCAD.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-navy-900/5 sm:p-8">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent">
              <HardHat className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
              Site Engineering Intern
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Construction & Infrastructure Company
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                Winter 2023
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                Site-based
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Shadowed site supervisors during foundation and superstructure works, coordinated with subcontractors, and maintained daily quality and safety inspection logs.
            </p>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-secondary/50 py-20 lg:py-28">
        <div className="container-tight">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Academic Projects
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Projects that shaped me.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
            >
              Discuss a project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-navy-900/5 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <Tabs defaultValue="overview" className="mt-5 flex-grow">
                  <TabsList className="grid w-full grid-cols-4 bg-secondary">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="approach">Approach</TabsTrigger>
                    <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.details.overview}
                  </TabsContent>
                  <TabsContent value="approach" className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.details.approach}
                  </TabsContent>
                  <TabsContent value="outcomes" className="mt-4">
                    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {project.details.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="tools" className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.details.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="bg-card py-20 lg:py-28">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Publications
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Research output.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A published contribution to sustainable civil engineering.
            </p>
          </div>
          <div className="mt-14 max-w-3xl mx-auto">
            <article className="rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-navy-900/5 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                    Recycled Plastic in Flexible Pavements: Strength and Cost Implications
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Co-authored research paper exploring the use of shredded plastic waste as a partial aggregate replacement in bituminous mixes, evaluating Marshall stability, flow, and economic viability.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      2024
                    </span>
                    <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-medium text-secondary-foreground">
                      Sustainable Materials
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container-tight py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 lg:py-24">
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              Get in touch
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
              Let&apos;s build something lasting.
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              I am open to graduate roles, internships, and collaborations in structural and infrastructure engineering.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary-foreground/90"
              >
                <Mail className="h-4 w-4" />
                hello@example.com
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10">
        <div className="container-tight flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-heading text-lg font-bold text-primary">CE.</span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Civil Engineering Graduate. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-muted-foreground">
            <Link
              to="/dashboard"
              className="text-sm font-medium transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
