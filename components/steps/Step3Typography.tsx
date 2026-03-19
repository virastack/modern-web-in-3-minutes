import { useFont } from "@/app/providers";
import { useLocale, useTranslations } from "next-intl";
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
    <section className="space-y-4">
      <hr className="my-10 border-gray-300 dark:border-gray-700" />
      <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
      <p className="text-base">
        {t("p1")}{" "}
        <a
          href="https://nextjs.org/docs/app/getting-started/fonts"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-blue-600 transition-colors"
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
          {locale === "tr" ? t("geist") : "Geist"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="font-mono"
          onClick={() => setFont("mono")}
        >
          {locale === "tr" ? t("mono") : "JetBrains Mono"}
        </Button>
      </div>

      <p className="text-base">
        {t("p2")}
        {p2Suffix ? (
          <>
            {" "}
            <strong>sans-serif</strong> {t("p2_2")}{" "}
          </>
        ) : null}
        <button
          onClick={onNext}
          disabled={isCompleted}
          className={`underline cursor-pointer ${isCompleted ? "text-gray-500 cursor-default" : "text-blue-600 hover:text-blue-800"}`}
        >
          {t("button")}
        </button>
      </p>
    </section>
  );
}
