"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-[1100px] items-center justify-between px-5">
        <Link href="/" className="font-bold text-lg">
          StoryBoost
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#vsl" className="transition-colors hover:text-primary">
            Vídeo
          </Link>
          <Link href="#oferta" className="transition-colors hover:text-primary">
            Planos
          </Link>
          <Link href="#faq" className="transition-colors hover:text-primary">
            FAQ
          </Link>
        </nav>
        <Button asChild className="hidden sm:inline-flex">
          <Link href="#oferta">Quero o Pack</Link>
        </Button>
      </div>
    </header>
  );
}
