import { React as ReactIcon } from "@/components/icons/react";
import { Nextjs } from "@/components/icons/nextjs";
import { TypeScript } from "@/components/icons/typescript";
import { TanStack } from "@/components/icons/tanstack";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
  isStyled?: boolean;
}

export default function Step1Engine({
  onNext,
  isCompleted,
  isStyled,
}: StepProps) {
  const t = useTranslations("Step1");

  if (!isStyled) {
    return (
      <section className="font-serif text-black leading-normal">
        <h2 className="text-3xl font-bold my-6 flex items-center gap-3">
          {t("title")} <ReactIcon className="w-6 h-6" />{" "}
          <Nextjs className="w-6 h-6" /> <TypeScript className="w-6 h-6" />
        </h2>
        <p className="my-[1em]">
          {t("p1")}{" "}
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            React
          </a>{" "}
          {", "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Next.js
          </a>{" "}
          {t("and")}{" "}
          <a
            href="https://typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            TypeScript
          </a>
          .
          <em>
            {" "}
            ({t("alt")}{" "}
            <span className="inline-flex items-center gap-1">
              <TanStack className="w-4 h-4" />{" "}
              <a
                href="https://tanstack.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                TanStack Start
              </a>
            </span>{" "}
            {t("alt2")}).
          </em>
        </p>
        <p className="my-[1em]">
          {t("p2")}{" "}
          <span
            onClick={!isCompleted ? onNext : undefined}
            className={cn(
              isCompleted
                ? "cursor-default"
                : "text-blue-600 underline cursor-pointer",
            )}
          >
            {t("button")}
          </span>
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")} <ReactIcon className="w-8 h-8" />{" "}
        <Nextjs className="w-8 h-8 dark:invert" />{" "}
        <TypeScript className="w-8 h-8" />
      </h2>
      <p className="text-lg text-muted-foreground">
        {t("p1")}{" "}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          React
        </a>{" "}
        {t("and")}{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          Next.js
        </a>{" "}
        {", "}
        <a
          href="https://typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          TypeScript
        </a>
        .
        <em className="flex items-center gap-2 mt-2 text-muted-foreground">
          {" "}
          ({t("alt")} <TanStack className="w-5 h-5" />{" "}
          <a
            href="https://tanstack.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary hover:text-primary/80 transition-colors"
          >
            TanStack Start
          </a>{" "}
          {t("alt2")}).
        </em>
      </p>
      <p className="text-lg text-muted-foreground">
        {t("p2")}{" "}
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
