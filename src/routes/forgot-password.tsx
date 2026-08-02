import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password | Civil Engineering Portfolio" },
      {
        name: "description",
        content: "Request a password reset for your Civil Engineering Portfolio account.",
      },
      { property: "og:title", content: "Reset password | Civil Engineering Portfolio" },
      {
        property: "og:description",
        content: "Request a password reset for your Civil Engineering Portfolio account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ForgotPasswordPage,
});

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
});

type FormValues = z.infer<typeof emailSchema>;

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setLoading(true);
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      result.data.email,
      {
        redirectTo: `${window.location.origin}/reset-password`,
      },
    );
    setLoading(false);

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container-tight py-10">
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to sign up
        </Link>

        <div className="mx-auto mt-10 max-w-md">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <h1 className="font-serif text-2xl leading-tight text-foreground">
                  Reset password
                </h1>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll email you a link to set a new password.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-primary/20 bg-secondary/50 p-6 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-medium text-foreground">Check your inbox</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  If an account exists for {email}, you&apos;ll receive a reset link shortly.
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    autoComplete="email"
                    value={email}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "email-error" : undefined}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl"
                  />
                  {error ? (
                    <p id="email-error" className="text-xs font-medium text-destructive">
                      {error}
                    </p>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full"
                >
                  {loading ? "Sending link…" : "Send reset link"}
                </Button>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
