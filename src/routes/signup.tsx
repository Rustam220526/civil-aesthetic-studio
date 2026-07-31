import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, UserPlus } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  component: SignUpPage,
});

const signUpSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, { message: "Please enter your full name" })
      .max(100, { message: "Name must be less than 100 characters" }),
    email: z
      .string()
      .trim()
      .email({ message: "Enter a valid email address" })
      .max(255, { message: "Email must be less than 255 characters" }),
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

type FormValues = z.infer<typeof signUpSchema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const fields = [
  { name: "fullName", label: "Full name", type: "text", placeholder: "Jane Doe", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@example.com", autoComplete: "email" },
  { name: "password", label: "Password", type: "password", placeholder: "At least 8 characters", autoComplete: "new-password" },
  { name: "confirmPassword", label: "Confirm password", type: "password", placeholder: "Re-enter your password", autoComplete: "new-password" },
] as const;

function SignUpPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(name: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const result = signUpSchema.safeParse(values);
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
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container-tight py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <div className="mx-auto mt-10 max-w-md">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <UserPlus className="h-5 w-5" />
              </span>
              <div>
                <h1 className="font-serif text-2xl leading-tight text-foreground">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Follow new projects and research updates.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-primary/20 bg-secondary/50 p-6 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-medium text-foreground">
                  Details look good, {values.fullName.split(" ")[0]}!
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your form passed validation. Account creation isn&apos;t
                  connected to a backend yet.
                </p>
                <Button
                  variant="outline"
                  className="mt-5 rounded-full"
                  onClick={() => {
                    setSubmitted(false);
                    setValues(initialValues);
                  }}
                >
                  Start over
                </Button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                {fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name}>{field.label}</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      value={values[field.name]}
                      aria-invalid={Boolean(errors[field.name])}
                      aria-describedby={
                        errors[field.name] ? `${field.name}-error` : undefined
                      }
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="rounded-xl"
                    />
                    {errors[field.name] ? (
                      <p
                        id={`${field.name}-error`}
                        className="text-xs font-medium text-destructive"
                      >
                        {errors[field.name]}
                      </p>
                    ) : null}
                  </div>
                ))}

                <Button type="submit" className="group w-full rounded-full">
                  Create account
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signup" className="font-medium text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
