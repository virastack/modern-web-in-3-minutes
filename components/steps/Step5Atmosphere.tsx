import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface StepProps {
  onNext: () => void;
  isCompleted: boolean;
}

export default function Step5Atmosphere({ onNext, isCompleted }: StepProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Step5");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="space-y-4">
      <hr className="my-10 border-gray-300 dark:border-gray-700" />
      <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>
      <p className="text-base">
        {t("p1")} <a href="https://github.com/pacocoursey/next-themes" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-blue-600 transition-colors">next-themes</a> {t("p1_2")}
      </p>

      {mounted && (
        <div className="my-6 p-6 border rounded-lg flex items-center justify-between bg-card text-card-foreground">
          <div>
            <h3 className="text-xl font-semibold">{t("theme_title")}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t("theme_current")} {theme === 'dark' ? t("dark") : t("light")}</p>
          </div>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      )}

      <p className="text-base mt-6">
        {t("p2")} <button onClick={onNext} disabled={isCompleted} className={`underline cursor-pointer ${isCompleted ? 'text-gray-500 cursor-default' : 'text-blue-600 hover:text-blue-800'}`}>{t("button")}</button>
      </p>
    </section>
  );
}
