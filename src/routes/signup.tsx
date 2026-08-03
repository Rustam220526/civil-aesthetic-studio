import { createFileRoute } from "@tanstack/react-router";
import { AuthPanel } from "@/components/AuthPanel";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create an account | Civil Engineering Portfolio" },
      {
        name: "description",
        content:
          "Sign up to follow structural engineering projects, research notes and academic updates.",
      },
      {
        property: "og:title",
        content: "Create an account | Civil Engineering Portfolio",
      },
      {
        property: "og:description",
        content:
          "Sign up to follow structural engineering projects, research notes and academic updates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <AuthPanel initialMode="signup" />,
});
