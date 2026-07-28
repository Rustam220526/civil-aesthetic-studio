import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
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
  },
  {
    title: "Seismic Retrofit Study",
    category: "Structural Analysis",
    year: "2023",
    description:
      "Assessment and strengthening strategy for a mid-rise reinforced concrete building in a high-risk zone.",
  },
  {
    title: "Stormwater Management Plan",
    category: "Infrastructure",
    year: "2023",
    description:
      "Sustainable drainage design reducing runoff and improving water quality for a mixed-use development.",
  },
  {
    title: "Low-Carbon Housing Model",
    category: "Sustainability",
    year: "2022",
    description:
      "A prototype residential unit minimizing embodied carbon through material selection and passive design.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="container-tight flex items-center justify-between py-6">
        <span className="font-heading text-xl font-bold tracking-tight text-primary">
          CE.
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            About
          </a>
          <a
            href="#skills"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get in touch
          </a>
        </div>
      </nav>

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
                <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </a>
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
