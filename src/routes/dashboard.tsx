import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CreditsWidget } from "@/components/CreditsWidget";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard | Civil Engineering Portfolio" },
      {
        name: "description",
        content:
          "Workspace credits dashboard for the Civil Engineering portfolio.",
      },
      {
        property: "og:title",
        content: "Dashboard | Civil Engineering Portfolio",
      },
      {
        property: "og:description",
        content:
          "Workspace credits dashboard for the Civil Engineering portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Dashboard,
});

const CREDITS = {
  dailyRemaining: 2.1,
  dailyTotal: 5.0,
  monthlyAllowance: 10.0,
  remainingTotal: 2.1,
  usedThisPeriod: 17.98,
  periodLabel: "Jul 1 – Aug 1, 2026",
};

function Dashboard() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-card/80 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8">
        <div className="container-tight flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <span className="font-heading text-lg font-bold text-primary">CE.</span>
        </div>
      </header>

      <section className="container-tight py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Workspace
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Credits dashboard
          </h1>
          <p className="mt-4 text-muted-foreground">
            A quick breakdown of your daily credits, monthly allowance, and
            remaining totals.
          </p>

          <div className="mt-10">
            <CreditsWidget {...CREDITS} />
          </div>
        </div>
      </section>
    </main>
  );
}
