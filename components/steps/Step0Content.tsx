import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
  isStyled?: boolean;
}

export default function Step0Content({ onNext, isCompleted, isStyled }: StepProps) {
  const t = useTranslations("Step0");

  if (!isStyled) {
    return (
      <section style={{ fontFamily: '"Times New Roman", Times, serif', color: '#000', lineHeight: 'normal' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', margin: '0.67em 0' }}>{t("title")}</h1>
        <p style={{ margin: '1em 0' }}>
          {t("p1")}
        </p>
        <p style={{ margin: '1em 0' }}>
          {t("p2")} <span onClick={!isCompleted ? onNext : undefined} style={isCompleted ? { cursor: 'default' } : { color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{t("button")}</span>
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      <p className="text-base">
        {t("p1")}
      </p>
      <p className="text-base">
        {t("p2")} <span onClick={!isCompleted ? onNext : undefined} className={cn(isCompleted ? "cursor-default" : "underline underline-offset-2 cursor-pointer text-blue-600 hover:text-blue-800")}>{t("button")}</span>
      </p>
    </section>
  );
}
