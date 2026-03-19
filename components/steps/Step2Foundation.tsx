import { TailwindCSS } from "@/components/icons/tailwind";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step2Foundation({ onNext, isCompleted }: StepProps) {
  const t = useTranslations("Step2");

  return (
    <section className="space-y-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")} <TailwindCSS className="w-10 h-10" />
      </h2>
      <p className="text-lg text-muted-foreground">
        {t("p1")}{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          Tailwind CSS
        </a>{" "}
        {t("p1_2")}
      </p>
      <p className="text-lg text-muted-foreground">{t("p2")}</p>

      <div className="my-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg overflow-x-auto font-mono text-sm">
        <pre>
          <code>{`<main className="container mx-auto px-4 py-8 max-w-3xl">
  {/* ${t("code_comment")} */}
</main>`}</code>
        </pre>
      </div>

      <p className="text-lg text-muted-foreground">
        {t("p3")}{" "}
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
