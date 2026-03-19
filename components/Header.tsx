"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  RotateCcw,
  Box,
  Sparkles,
  TextCursorInput,
  Key,
  Globe,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <div className="flex h-16 items-center justify-center px-4 relative">
        {/* Left: ViraStack Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl px-2 py-1"
          >
            <Image
              src="/virastack.svg"
              alt="ViraStack Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <div className="flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {/* ViraStack Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>ViraStack</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[220px] gap-1 p-2">
                    <ListItem
                      href="https://github.com/virastack/nextjs-boilerplate"
                      title="Nextjs Boilerplate"
                    />
                    <ListItem
                      href="https://github.com/virastack/ai-rules"
                      title="AI Rules"
                    />
                    <ListItem
                      href="https://github.com/virastack/input-mask"
                      title="Input Mask"
                    />
                    <ListItem
                      href="https://github.com/virastack/password-toggle"
                      title="Password Toggle"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Ömer Gülçiçek Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Ömer Gülçiçek</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[200px] gap-1 p-2">
                    <ListItem
                      href="https://omergulcicek.com"
                      title="Kişisel Blog"
                    />
                    <ListItem
                      href="https://github.com/omergulcicek"
                      title="GitHub"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </motion.header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
ListItem.displayName = "ListItem";
