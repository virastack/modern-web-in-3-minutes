"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { MicIcon } from "lucide-react";
import { useHeader } from "@/app/providers";

import {
  PromptInput,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  PromptInputModelSelect,
  PromptInputModelSelectItem,
} from "@/components/ui/prompt-input";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

const models = [
  { id: "auto", name: "Auto" },
  { id: "claude", name: "Claude 4.6 Sonnet" },
  { id: "gemini", name: "Gemini 3.1 Pro" },
  { id: "gpt", name: "GPT-5.4" },
];

export default function Step6AI({ onNext, isCompleted }: StepProps) {
  const [text, setText] = useState("");
  const [model, setModel] = useState("auto");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">(
    "ready",
  );
  const t = useTranslations("Step6");
  const { setShowHeader } = useHeader();

  const handleSubmit = (message: { text?: string; files?: unknown[] }) => {
    if (!message.text?.trim() && !message.files?.length) {
      return;
    }

    setStatus("submitted");
    setTimeout(() => {
      setStatus("streaming");
      setShowHeader(true);
      setTimeout(() => {
        setStatus("ready");
      }, 1500);
    }, 1000);
  };

  useEffect(() => {
    const promptToType = t("prompt");
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= promptToType.length) {
        setText(promptToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setIsSelectOpen(true);

          setTimeout(() => {
            setModel("gemini");
            setIsSelectOpen(false);

            setTimeout(() => {
              handleSubmit({ text: promptToType });
            }, 500);
          }, 1000);
        }, 500);
      }
    }, 20);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="space-y-4 mb-20">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")}
      </h2>
      <p className="text-lg text-muted-foreground">{t("description")}</p>

      <div className="my-6 p-6 border rounded-lg overflow-hidden relative bg-card">
        <PromptInput
          onSubmit={handleSubmit}
          className="relative"
          disableResetOnSubmit
        >
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder={t("placeholder")}
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputButton
                type="button"
                className="cursor-pointer hover:bg-transparent hover:text-inherit"
              >
                <MicIcon className="size-4" />
              </PromptInputButton>
              <PromptInputModelSelect
                isOpen={isSelectOpen}
                onOpenChange={setIsSelectOpen}
                selectedKey={model}
                onSelectionChange={(key) => setModel(key as string)}
                items={models}
              >
                {(item) => (
                  <PromptInputModelSelectItem id={item.id}>
                    {item.name}
                  </PromptInputModelSelectItem>
                )}
              </PromptInputModelSelect>
            </PromptInputTools>
            <PromptInputSubmit
              className="cursor-pointer"
              isDisabled={!text && status === "ready"}
              status={status}
            />
          </PromptInputFooter>
        </PromptInput>
      </div>

      <p className="text-lg text-muted-foreground mt-6">
        {t("p2")}
        <br />
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
