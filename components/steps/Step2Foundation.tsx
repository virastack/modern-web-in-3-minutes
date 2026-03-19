import { TailwindCSS } from "@/components/icons/tailwind";
import { useTranslations } from "next-intl";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step2Foundation({ onNext, isCompleted }: StepProps) {
  const t = useTranslations("Step2");

  return (
    <section className="space-y-4">
      <hr className="my-10 border-gray-300 dark:border-gray-700" />
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")} <TailwindCSS className="w-10 h-10" />
      </h2>
      <p className="text-base">
        {t("p1")} <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-blue-600 transition-colors">Tailwind CSS</a> {t("p1_2")}
      </p>
      <p className="text-base">
        {t("p2")}
      </p>

      <div className="my-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg overflow-x-auto font-mono text-sm">
        <pre>
          <code>{`<main className="container mx-auto px-4 py-8 max-w-3xl">
  {/* ${t("code_comment")} */}
</main>`}</code>
        </pre>
      </div>

      <p className="text-base">
        {t("p3")} <button onClick={onNext} disabled={isCompleted} className={`underline cursor-pointer ${isCompleted ? 'text-gray-500 cursor-default' : 'text-blue-600 hover:text-blue-800'}`}>{t("button")}</button>
      </p>
    </section>
  );
}
