"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export function SpecialOfferHeader() {
  const handleClick = (url: string) => {
    const search = window.location.search;
    window.location.href = url + search;
  };

  return (
    <header className="w-full py-4 border-b">
      <div className="container mx-auto max-w-[1100px] px-5 flex justify-between items-center">
        <Image
            src="https://i.imgur.com/rIXDB7D.png"
            alt="StoryBoost Stickers"
            width={160}
            height={60}
            className="rounded-lg"
        />
        <button onClick={() => handleClick('/#oferta')} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a oferta principal
        </button>
      </div>
    </header>
  );
}
