import { useFont } from "@/app/providers";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step3Typography({ onNext, isCompleted }: StepProps) {
  const { font, setFont } = useFont();
  const t = useTranslations("Step3");
  const locale = useLocale();
  const p2Suffix = t("p2_2").trim();

  return (
    <section className="space-y-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")}
      </h2>
      <p className="text-lg text-muted-foreground">
        {t("p1")}{" "}
        <a
          href="https://nextjs.org/docs/app/getting-started/fonts"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          next/font
        </a>{" "}
        {t("p1_2")}
      </p>

      <div className="flex flex-wrap gap-2 my-6">
        <Button
          size="sm"
          variant="outline"
          className="font-serif"
          onClick={() => setFont("serif")}
        >
          {t("serif")}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="font-geist"
          onClick={() => setFont("geist")}
        >
          {t("geist")}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="font-mono"
          onClick={() => setFont("mono")}
        >
          {t("mono")}
        </Button>
      </div>

      <p className="text-lg text-muted-foreground">
        {t("p2")}
        {p2Suffix ? (
          <>
            {" "}
            <strong>sans-serif</strong> {t("p2_2")}{" "}
          </>
        ) : null}
        <span
          onClick={!isCompleted ? onNext : undefined}
          className={cn(
            isCompleted
              ? "cursor-default"
              : "underline underline-offset-2 cursor-pointer text-blue-600 hover:text-blue-800",
          )}
        >
          {t("button")}
        </span>
      </p>
    </section>
  );
}
