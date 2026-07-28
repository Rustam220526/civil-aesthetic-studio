import { createFileRoute } from "@tanstack/react-router";
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
  Menu,
  X,
} from "lucide-react";
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
    title: "Pedestrian Bridge Concept",
    category: "Structural Design",
    year: "2024",
    description:
      "A tension-efficient footbridge design optimizing material use and pedestrian flow for an urban corridor.",
    details: {
      overview:
        "This concept explores a cable-stayed footbridge spanning 42 m across a busy urban corridor. The design prioritizes slender deck profiles, clear sightlines, and minimal ground intervention.",
      approach:
        "Developed parametric models to iterate deck depth and cable spacing. Performed hand calculations for ultimate and serviceability limit states, then validated with a finite-element model.",
      outcomes: [
        "Reduced estimated steel tonnage by 18% versus the initial truss scheme",
        "Maintained a vertical frequency above 5 Hz for pedestrian comfort",
        "Produced construction-stage drawings and a cost estimate",
      ],
      tools: ["SAP2000", "AutoCAD", "Excel", "Grasshopper"],
    },
  },
  {
    title: "Seismic Retrofit Study",
    category: "Structural Analysis",
    year: "2023",
    description:
      "Assessment and strengthening strategy for a mid-rise reinforced concrete building in a high-risk zone.",
    details: {
      overview:
        "A condition assessment and retrofit proposal for a 7-story RC frame built in the 1980s, located in a high seismicity region with soft soil conditions.",
      approach:
        "Reviewed existing drawings, conducted a vulnerability walkthrough, and modeled the building in ETABS. Evaluated jacketing, shear-wall addition, and base-isolation options.",
      outcomes: [
        "Identified weak-column-strong-beam mechanisms at three levels",
        "Proposed a concrete jacketing scheme improving ductility by 35%",
        "Estimated retrofit cost within 12% of typical regional benchmarks",
      ],
      tools: ["ETABS", "AutoCAD", "Python", "Excel"],
    },
  },
  {
    title: "Stormwater Management Plan",
    category: "Infrastructure",
    year: "2023",
    description:
      "Sustainable drainage design reducing runoff and improving water quality for a mixed-use development.",
    details: {
      overview:
        "A site-wide drainage strategy for a 4-hectare mixed-use development, integrating green infrastructure with conventional conveyance.",
      approach:
        "Analyzed rainfall intensity-duration-frequency curves, delineated catchments, and sized bioswales, permeable paving, and detention basins using the curve-number method.",
      outcomes: [
        "Reduced peak runoff by 40% compared to pre-development conditions",
        "Improved water-quality capture for 90% of annual rainfall events",
        "Created maintenance schedules and inspection checklists",
      ],
      tools: ["HEC-HMS", "AutoCAD Civil 3D", "EPA SWMM", "Excel"],
    },
  },
  {
    title: "Low-Carbon Housing Model",
    category: "Sustainability",
    year: "2022",
    description:
      "A prototype residential unit minimizing embodied carbon through material selection and passive design.",
    details: {
      overview:
        "A single-family:house prototype designed to minimize embodied carbon while meeting thermal comfort targets without mechanical cooling.",
      approach:
        "Compared timber, straw-insulated, and conventional masonry assemblies using whole-life carbon factors. Ran dynamic thermal simulations to optimize orientation, glazing ratio, and shading.",
      outcomes: [
        "Achieved 45% lower embodied carbon than a comparable masonry unit",
        "Predicted overheating hours below 5% without air conditioning",
        "Developed a bill of quantities and procurement recommendations",
      ],
      tools: ["DesignBuilder", "One Click LCA", "AutoCAD", "Excel"],
    },
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
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
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`
          container-tight mx-auto overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-sm backdrop-blur-md transition-all duration-300
          ${scrolled ? "shadow-lg shadow-navy-900/5" : ""}
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
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Get in touch
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="sm:hidden">
              <button
                className="inline-flex flex-col items-end gap-1.5 p-2"
                aria-label="Open menu"
              >
                <span className="h-0.5 w-5 rounded-full bg-foreground" />
                <span className="h-0.5 w-3 rounded-full bg-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="border-b border-border bg-card/95 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
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
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="font-heading text-3xl font-bold text-primary">5+</p>
                <p className="mt-1 text-sm text-muted-foreground">Academic projects</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="font-heading text-3xl font-bold text-primary">2</p>
                <p className="mt-1 text-sm text-muted-foreground">Internships</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5">
                <p className="font-heading text-3xl font-bold text-primary">1</p>
                <p className="mt-1 text-sm text-muted-foreground">Published paper</p>
              </div>
            </div>
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

      {/* Projects */}
      <section id="projects" className="bg-secondary/50 py-20 lg:py-28">
        <div className="container-tight">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Selected Work
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
