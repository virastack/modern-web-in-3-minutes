"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MicIcon } from "lucide-react";

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

export default function Step6Polish({ onNext, isCompleted }: StepProps) {
  const [text, setText] = useState("");
  const [model, setModel] = useState("auto");
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">(
    "ready",
  );
  const t = useTranslations("Step6");

  const handleSubmit = (message: { text?: string; files?: unknown[] }) => {
    if (!message.text?.trim() && !message.files?.length) {
      return;
    }

    setStatus("submitted");
    setTimeout(() => {
      setStatus("streaming");
      setTimeout(() => {
        setStatus("ready");
        setText("");
      }, 2000);
    }, 1000);
  };

  return (
    <section className="space-y-4">
      <hr className="my-10 border-gray-300 dark:border-gray-700" />
      <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
      <p className="text-base">
        {t("p1")}{" "}
        <a
          href="https://taki-ui.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-blue-600 transition-colors"
        >
          taki-ui
        </a>{" "}
        {t("p1_2")}
      </p>

      <div className="my-6 p-6 border rounded-lg overflow-hidden relative bg-card">
        <PromptInput onSubmit={handleSubmit} className="relative">
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
                variant="ghost"
                type="button"
                className="cursor-default hover:bg-transparent hover:text-inherit"
              >
                <MicIcon className="size-4" />
              </PromptInputButton>
              <PromptInputModelSelect
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
              isDisabled={!text && status === "ready"}
              status={status}
            />
          </PromptInputFooter>
        </PromptInput>
      </div>

      <p className="text-base mt-6">
        {t("p2")}{" "}
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
