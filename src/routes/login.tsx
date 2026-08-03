import { createFileRoute } from "@tanstack/react-router";
import { AuthPanel } from "@/components/AuthPanel";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in | Civil Engineering Portfolio" },
      {
        name: "description",
        content:
          "Log in to follow structural engineering projects, research notes and academic updates.",
      },
      { property: "og:title", content: "Log in | Civil Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Log in to follow structural engineering projects, research notes and academic updates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <AuthPanel initialMode="login" />,
});