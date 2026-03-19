"use client";

import { useEffect } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin, Star, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Step7Final() {
  const t = useTranslations("Step7");

  useEffect(() => {
    const end = Date.now() + 1 * 1500;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <section className="space-y-8 pb-12">
      <hr className="my-10 border-gray-300 dark:border-gray-700" />

      <div className="space-y-4">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
        <p className="text-lg text-muted-foreground">{t("p1")}</p>
      </div>

      <div className="p-6 border rounded-xl bg-card space-y-6">
        <div className="flex items-center gap-4 border-b pb-4">
          <Image
            src="/virastack.svg"
            alt="ViraStack Logo"
            width={64}
            height={64}
          />
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              ViraStack
              <a
                href="https://github.com/virastack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">
              {t("virastack_subtitle")}
            </p>
          </div>
        </div>

        <p className="text-base">
          {t("virastack_desc")}
          <strong className="block mt-2">{t("virastack_star")}</strong>
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="https://github.com/virastack/nextjs-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 border rounded-lg hover:border-primary/50 transition-colors flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold group-hover:text-primary transition-colors">
                nextjs-boilerplate
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{t("nextjs_desc")}</p>
          </a>

          <a
            href="https://github.com/virastack/ai-rules"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 border rounded-lg hover:border-primary/50 transition-colors flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold group-hover:text-primary transition-colors">
                ai-rules
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("ai_rules_desc")}
            </p>
          </a>

          <a
            href="https://github.com/virastack/input-mask"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 border rounded-lg hover:border-primary/50 transition-colors flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold group-hover:text-primary transition-colors">
                input-mask
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("input_mask_desc")}
            </p>
          </a>

          <a
            href="https://github.com/virastack/password-toggle"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 border rounded-lg hover:border-primary/50 transition-colors flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold group-hover:text-primary transition-colors">
                password-toggle
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("password_desc")}
            </p>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-6 pt-8">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{t("author_title")}</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/omergulcicek"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            <Github className="w-4 h-4" />
            {t("follow_github")}
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(t("share_text"))}&url=https://github.com/omergulcicek/modern-web-in-3-minutes`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "gap-2 text-[#1DA1F2] hover:text-[#1DA1F2]",
            )}
          >
            <Twitter className="w-4 h-4" />
            {t("share_twitter")}
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/omergulcicek/modern-web-in-3-minutes"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "gap-2 text-[#0A66C2] hover:text-[#0A66C2]",
            )}
          >
            <Linkedin className="w-4 h-4" />
            {t("share_linkedin")}
          </a>
        </div>
      </div>
    </section>
  );
}
