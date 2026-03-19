"use client";

import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransition } from "react";
import { setLocale } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (nextLocale: string | null) => {
    if (!nextLocale) return;
    startTransition(async () => {
      await setLocale(nextLocale);
      router.refresh();
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Select defaultValue={locale} onValueChange={onSelectChange} disabled={isPending}>
        <SelectTrigger className="w-[140px] bg-background">
          <SelectValue placeholder="Dil Seçin">
            {locale === "tr" && t("tr")}
            {locale === "en" && t("en")}
            {locale === "es" && t("es")}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tr">{t("tr")}</SelectItem>
          <SelectItem value="en">{t("en")}</SelectItem>
          <SelectItem value="es">{t("es")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
