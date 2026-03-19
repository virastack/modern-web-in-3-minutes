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
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (nextLocale: string | null) => {
    if (!nextLocale) return;
    startTransition(() => {
      // Replace the current locale in the pathname with the new one
      const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
      router.push(newPathname);
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Select
        defaultValue={locale}
        onValueChange={onSelectChange}
        disabled={isPending}
      >
        <SelectTrigger className="w-[140px] bg-background">
          <SelectValue placeholder="Dil Seçin">
            {locale === "de" && t("de")}
            {locale === "en" && t("en")}
            {locale === "es" && t("es")}
            {locale === "pt" && t("pt")}
            {locale === "tr" && t("tr")}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="de">{t("de")}</SelectItem>
          <SelectItem value="en">{t("en")}</SelectItem>
          <SelectItem value="es">{t("es")}</SelectItem>
          <SelectItem value="pt">{t("pt")}</SelectItem>
          <SelectItem value="tr">{t("tr")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
