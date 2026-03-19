import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { tr, enUS } from "date-fns/locale";
import { shadcnui as ShadcnIcon } from "@/components/icons/shadcn";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step4UIComponents({ onNext, isCompleted }: StepProps) {
  const [date, setDate] = useState<Date>();
  const t = useTranslations("Step4");
  const locale = useLocale();
  const dateLocale = locale === "tr" ? tr : enUS;

  return (
    <section className="space-y-4">
      <hr className="my-10 border-gray-300 dark:border-gray-700" />
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        {t("title")}{" "}
        <ShadcnIcon className="w-8 h-8 bg-black dark:invert rounded-xs p-1" />
      </h2>
      <p className="text-base">
        {t("p1")}{" "}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-blue-600 transition-colors"
        >
          shadcn/ui
        </a>{" "}
        {t("p1_2")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Standart HTML */}
        <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col gap-4">
          <p className="text-sm text-gray-500 font-medium">{t("html_title")}</p>

          <div className="flex flex-col gap-4 p-4 border border-gray-300 bg-white text-black">
            <h3 className="font-bold m-0">Profil</h3>

            <div className="flex flex-col gap-1">
              <label htmlFor="native-name" className="text-sm">
                {t("html_label")}
              </label>
              <input
                type="text"
                id="native-name"
                className="border border-gray-400 px-2 py-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="native-date" className="text-sm">
                {t("html_date")}
              </label>
              <input
                type="date"
                id="native-date"
                className="border border-gray-400 px-2 py-1"
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="native-check" />
              <label htmlFor="native-check" className="text-sm">
                {t("html_check")}
              </label>
            </div>

            <button className="mt-2 px-4 py-1 bg-gray-200 border border-gray-400 cursor-pointer self-start">
              {t("html_button")}
            </button>
          </div>
        </div>

        {/* Shadcn/UI */}
        <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col gap-4">
          <p className="text-sm text-gray-500 font-medium">
            {t("shadcn_title")}
          </p>

          <Card>
            <CardHeader>
              <CardTitle>{t("shadcn_card_title")}</CardTitle>
              <CardDescription>{t("shadcn_card_desc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Field>
                <FieldLabel>{t("shadcn_label")}</FieldLabel>
                <Input placeholder={t("shadcn_placeholder")} />
              </Field>

              <Field>
                <FieldLabel>{t("shadcn_date")}</FieldLabel>
                <Popover>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                      />
                    }
                  >
                    <CalendarIcon className="h-4 w-4" />
                    {date ? (
                      format(date, "PPP", { locale: dateLocale })
                    ) : (
                      <span>{t("shadcn_date_placeholder")}</span>
                    )}
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={dateLocale}
                    />
                  </PopoverContent>
                </Popover>
              </Field>

              <div className="flex items-center gap-2 mt-4">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="font-normal cursor-pointer">
                  {t("shadcn_check")}
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{t("shadcn_button")}</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <p className="text-base mt-6 whitespace-pre-wrap">
        {t("p2")}{" "}
        <span
          onClick={!isCompleted ? onNext : undefined}
          className={cn(isCompleted ? "cursor-default" : "underline underline-offset-2 cursor-pointer text-blue-600 hover:text-blue-800")}
        >
          {t("button")}
        </span>
      </p>
    </section>
  );
}
