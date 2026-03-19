"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useFont } from "@/app/providers";
import Step0Content from "@/components/steps/Step0Content";
import Step1Engine from "@/components/steps/Step1Engine";
import Step2Foundation from "@/components/steps/Step2Foundation";
import Step3Typography from "@/components/steps/Step3Typography";
import Step4UIComponents from "@/components/steps/Step4UIComponents";
import Step5Atmosphere from "@/components/steps/Step5Atmosphere";
import Step6AI from "@/components/steps/Step6AI";
import Step7Final from "@/components/steps/Step7Final";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const { setFont } = useFont();
  const { setTheme } = useTheme();

  const nextStep = () => {
    if (currentStep < 7) {
      const next = currentStep + 1;
      setCurrentStep(next);

      if (next === 3) {
        setFont("geist");
      }
      if (next === 5) {
        setTimeout(() => {
          setTheme("dark");
        }, 1000);
      }

      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  const steps = [
    <Step0Content
      key="0"
      onNext={nextStep}
      isCompleted={currentStep > 0}
      isStyled={currentStep >= 2}
    />,
    <Step1Engine
      key="1"
      onNext={nextStep}
      isCompleted={currentStep > 1}
      isStyled={currentStep >= 2}
    />,
    <Step2Foundation key="2" onNext={nextStep} isCompleted={currentStep > 2} />,
    <Step3Typography key="3" onNext={nextStep} isCompleted={currentStep > 3} />,
    <Step4UIComponents
      key="4"
      onNext={nextStep}
      isCompleted={currentStep > 4}
    />,
    <Step5Atmosphere key="5" onNext={nextStep} isCompleted={currentStep > 5} />,
    <Step6AI key="6" onNext={nextStep} isCompleted={currentStep > 6} />,
    <Step7Final key="7" />,
  ];

  const containerClass =
    currentStep >= 2 ? "container mx-auto px-4 py-8 max-w-3xl" : "p-4";

  return (
    <main className={`min-h-screen transition-all ${containerClass}`}>
      {/* <LanguageSwitcher /> */}
      <div className="flex flex-col gap-12 pb-24">
        <AnimatePresence>
          {steps.slice(0, currentStep + 1).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {step}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
