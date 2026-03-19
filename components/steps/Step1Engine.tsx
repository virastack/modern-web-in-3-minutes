import { React as ReactIcon } from "@/components/icons/react";
import { Nextjs } from "@/components/icons/nextjs";
import { TanStack } from "@/components/icons/tanstack";
import { useTranslations } from "next-intl";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
  isStyled?: boolean;
}

export default function Step1Engine({ onNext, isCompleted, isStyled }: StepProps) {
  const t = useTranslations("Step1");

  if (!isStyled) {
    return (
      <section style={{ fontFamily: '"Times New Roman", Times, serif', color: '#000', lineHeight: 'normal' }}>
        <hr style={{ margin: '2em 0', border: '1px solid #ccc' }} />
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '0.83em 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t("title")} <ReactIcon style={{ width: '24px', height: '24px' }} /> <Nextjs style={{ width: '24px', height: '24px' }} />
        </h2>
        <p style={{ margin: '1em 0' }}>
          {t("p1")} <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>React</a> {t("and")} <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>Next.js</a>. 
          <em> ({t("alt")} <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><TanStack style={{ width: '16px', height: '16px' }} /> <a href="https://tanstack.com/start" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>TanStack Start</a></span> {t("alt2")}).</em>
        </p>
        <p style={{ margin: '1em 0' }}>
          {t("p2")} <button onClick={onNext} disabled={isCompleted} style={{ color: isCompleted ? 'purple' : 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: isCompleted ? 'default' : 'pointer' }}>{t("button")}</button>
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <hr className="my-10 border-gray-300 dark:border-gray-700" />
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")} <ReactIcon className="w-8 h-8" /> <Nextjs className="w-8 h-8 dark:invert" />
      </h2>
      <p className="text-base">
        {t("p1")} <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-blue-600 transition-colors">React</a> {t("and")} <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-blue-600 transition-colors">Next.js</a>. 
        <em className="flex items-center gap-2 mt-2 text-muted-foreground"> ({t("alt")} <TanStack className="w-5 h-5" /> <a href="https://tanstack.com/start" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 transition-colors">TanStack Start</a> {t("alt2")}).</em>
      </p>
      <p className="text-base">
        {t("p2")} <button onClick={onNext} disabled={isCompleted} className={`underline underline-offset-2 cursor-pointer ${isCompleted ? 'text-gray-500 cursor-default' : 'text-blue-600 hover:text-blue-800'}`}>{t("button")}</button>
      </p>
    </section>
  );
}
