import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Lock } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set new password | Civil Engineering Portfolio" },
      {
        name: "description",
        content: "Set a new password for your Civil Engineering Portfolio account.",
      },
      { property: "og:title", content: "Set new password | Civil Engineering Portfolio" },
      {
        property: "og:description",
        content: "Set a new password for your Civil Engineering Portfolio account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResetPasswordPage,
});

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(72, { message: "Password must be less than 72 characters" })
      .regex(/[A-Za-z]/, { message: "Include at least one letter" })
      .regex(/[0-9]/, { message: "Include at least one number" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof passwordSchema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hashChecked, setHashChecked] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setHashChecked(true);
      } else if (event === "SIGNED_IN" && session) {
        setHashChecked(true);
      }
    });

    const hash = window.location.hash;
    if (hash.includes("type=recovery")) {
      setHashChecked(true);
    } else {
      setHashChecked(true);
    }
  }, []);

  function handleChange(name: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFormError(null);
    const result = passwordSchema.safeParse(values);
    if (!result.success) {
      const next: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      password: result.data.password,
    });
    setLoading(false);

    if (error) {
      setFormError(error.message);
      return;
    }

    setSubmitted(true);
    setTimeout(() => navigate({ to: "/" }), 2000);
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
                <Lock className="h-5 w-5" />
              </span>
              <div>
                <h1 className="font-serif text-2xl leading-tight text-foreground">
                  Set new password
                </h1>
                <p className="text-sm text-muted-foreground">
                  Choose a strong password for your account.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-primary/20 bg-secondary/50 p-6 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-medium text-foreground">Password updated</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Redirecting you to the homepage…
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="password">New password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    value={values.password}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="rounded-xl"
                  />
                  {errors.password ? (
                    <p id="password-error" className="text-xs font-medium text-destructive">
                      {errors.password}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm new password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    value={values.confirmPassword}
                    aria-invalid={Boolean(errors.confirmPassword)}
                    aria-describedby={
                      errors.confirmPassword ? "confirmPassword-error" : undefined
                    }
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                    className="rounded-xl"
                  />
                  {errors.confirmPassword ? (
                    <p
                      id="confirmPassword-error"
                      className="text-xs font-medium text-destructive"
                    >
                      {errors.confirmPassword}
                    </p>
                  ) : null}
                </div>

                {formError ? (
                  <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-xs font-medium text-destructive">
                    {formError}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  disabled={loading || !hashChecked}
                  className="w-full rounded-full"
                >
                  {loading ? "Updating…" : "Update password"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
