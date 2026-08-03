import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Mail,
  User,
} from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import buildingImage from "@/assets/multistorey-building.jpg";

const emailField = z
  .string()
  .trim()
  .email({ message: "Enter a valid email address" })
  .max(255, { message: "Email must be less than 255 characters" });

const passwordField = z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(72, { message: "Password must be less than 72 characters" })
  .regex(/[A-Za-z]/, { message: "Include at least one letter" })
  .regex(/[0-9]/, { message: "Include at least one number" });

const signUpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Enter your full name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: emailField,
  password: passwordField,
});

const loginSchema = z.object({
  email: emailField,
  password: z.string().min(1, { message: "Enter your password" }),
});

type Mode = "signup" | "login";
type Errors = Partial<Record<"name" | "email" | "password", string>>;

export function AuthPanel({ initialMode }: { initialMode: Mode }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>(initialMode);
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  function switchMode(next: Mode) {
    setMode(next);
    setErrors({});
    setFormError(null);
    setCheckEmail(false);
  }

  function handleChange(name: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setFormError(null);

    const schema = mode === "signup" ? signUpSchema : loginSchema;
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setLoading(true);

    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email: values.email.trim(),
        password: values.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: { full_name: values.name.trim() },
        },
      });
      setLoading(false);
      if (error) {
        setFormError(error.message);
        return;
      }
      if (data.session) {
        navigate({ to: "/" });
        return;
      }
      setCheckEmail(true);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: values.email.trim(),
      password: values.password,
    });
    setLoading(false);
    if (error) {
      setFormError(error.message);
      return;
    }
    navigate({ to: "/" });
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Form side */}
        <div className="relative flex items-center justify-center px-6 py-14">
          <div className="absolute -left-24 top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative w-full max-w-md">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              ← Back to portfolio
            </Link>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
              {/* Tabs */}
              <div className="grid grid-cols-2 border-b border-border/60">
                {(["signup", "login"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => switchMode(tab)}
                    className={cn(
                      "relative py-5 font-serif text-xl transition-colors",
                      mode === tab
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary/80"
                    )}
                  >
                    {tab === "signup" ? "Signup" : "Login"}
                    {mode === tab ? (
                      <span className="absolute inset-x-8 bottom-0 h-0.5 rounded-full bg-primary" />
                    ) : null}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {checkEmail ? (
                  <div className="rounded-2xl border border-primary/20 bg-secondary/50 p-6 text-center">
                    <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-primary" />
                    <p className="font-medium text-foreground">Almost there!</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We sent a confirmation link to {values.email}.
                    </p>
                  </div>
                ) : (
                  <form noValidate onSubmit={handleSubmit} className="space-y-4">
                    {mode === "signup" ? (
                      <Field
                        icon={<User className="h-4 w-4" />}
                        error={errors.name}
                      >
                        <Input
                          id="name"
                          type="text"
                          placeholder="Name"
                          autoComplete="name"
                          value={values.name}
                          aria-label="Name"
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="h-12 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0"
                        />
                      </Field>
                    ) : null}

                    <Field icon={<Mail className="h-4 w-4" />} error={errors.email}>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        autoComplete="email"
                        value={values.email}
                        aria-label="Email Address"
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="h-12 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0"
                      />
                    </Field>

                    <Field
                      icon={<KeyRound className="h-4 w-4" />}
                      error={errors.password}
                      trailing={
                        <button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="px-3 text-muted-foreground transition-colors hover:text-primary"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      }
                    >
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        autoComplete={
                          mode === "signup" ? "new-password" : "current-password"
                        }
                        value={values.password}
                        aria-label="Password"
                        onChange={(e) => handleChange("password", e.target.value)}
                        className="h-12 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0"
                      />
                    </Field>

                    <div className="flex justify-end">
                      <Link
                        to="/forgot-password"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    {formError ? (
                      <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-xs font-medium text-destructive">
                        {formError}
                      </p>
                    ) : null}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="group h-12 w-full rounded-xl text-base font-semibold"
                    >
                      {loading
                        ? mode === "signup"
                          ? "Creating account…"
                          : "Logging in…"
                        : mode === "signup"
                          ? "Signup"
                          : "Login"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      {mode === "signup" ? (
                        <>
                          Already have an account?{" "}
                          <button
                            type="button"
                            onClick={() => switchMode("login")}
                            className="font-semibold text-primary hover:underline"
                          >
                            Login
                          </button>
                        </>
                      ) : (
                        <>
                          Don&apos;t have an account?{" "}
                          <button
                            type="button"
                            onClick={() => switchMode("signup")}
                            className="font-semibold text-primary hover:underline"
                          >
                            Register
                          </button>
                        </>
                      )}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className="relative hidden overflow-hidden bg-primary lg:block">
          <img
            src={buildingImage}
            alt="Multi-storey concrete and glass structure"
            className="h-full w-full object-cover opacity-80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute bottom-12 left-12 right-12 text-primary-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-80">
              Civil Engineering Portfolio
            </p>
            <p className="mt-3 font-serif text-3xl leading-snug">
              Structures, research and field work — in one place.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({
  icon,
  error,
  trailing,
  children,
}: {
  icon: React.ReactNode;
  error?: string;
  trailing?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div
        className={cn(
          "flex items-center overflow-hidden rounded-xl border bg-background transition-colors focus-within:border-primary/50",
          error ? "border-destructive/50" : "border-border/70"
        )}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center border-r border-border/70 bg-secondary/60 text-muted-foreground">
          {icon}
        </span>
        <div className="flex-1">{children}</div>
        {trailing}
      </div>
      {error ? (
        <p className="text-xs font-medium text-destructive">{error}</p>
      ) : null}
    </div>
  );
}