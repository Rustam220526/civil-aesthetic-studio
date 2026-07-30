import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Info, Wallet, Zap } from "lucide-react";

type CreditsWidgetProps = {
  dailyRemaining: number;
  dailyTotal: number;
  monthlyAllowance: number;
  remainingTotal: number;
  usedThisPeriod: number;
  periodLabel: string;
};

export function CreditsWidget({
  dailyRemaining,
  dailyTotal,
  monthlyAllowance,
  remainingTotal,
  usedThisPeriod,
  periodLabel,
}: CreditsWidgetProps) {
  const dailyPct = Math.min(100, Math.round((dailyRemaining / dailyTotal) * 100));
  const remainingPct = Math.min(
    100,
    Math.round((remainingTotal / monthlyAllowance) * 100)
  );

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Remaining total
            </CardTitle>
            <Wallet className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="font-heading text-3xl font-bold text-foreground">
              {remainingTotal.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">credits left</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Daily credits
            </CardTitle>
            <Zap className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="font-heading text-3xl font-bold text-foreground">
              {dailyRemaining.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              of {dailyTotal.toFixed(2)} today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly allowance
            </CardTitle>
            <Calendar className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="font-heading text-3xl font-bold text-foreground">
              {monthlyAllowance.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">credits this period</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Credit breakdown</CardTitle>
          <CardDescription>{periodLabel}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">Daily credits</span>
              <span className="text-muted-foreground">
                {dailyRemaining.toFixed(2)} / {dailyTotal.toFixed(2)}
              </span>
            </div>
            <Progress value={dailyPct} />
            <p className="mt-1 text-xs text-muted-foreground">
              {dailyPct}% of today&apos;s credits remaining
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium text-foreground">Monthly allowance</span>
              <span className="text-muted-foreground">
                {remainingTotal.toFixed(2)} / {monthlyAllowance.toFixed(2)} remaining
              </span>
            </div>
            <Progress value={remainingPct} />
            <p className="mt-1 text-xs text-muted-foreground">
              {remainingPct}% of this period&apos;s allowance left
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-secondary/50 p-4 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <p>
              Used this period:{" "}
              <strong className="text-foreground">
                {usedThisPeriod.toFixed(2)} credits
              </strong>
              . These values reflect the latest workspace balance snapshot.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
