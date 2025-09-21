import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

export function StickerGallery() {
  const stickers = placeholderImages.filter(p => p.imageHint.includes("sticker"));

  return (
    <section className="w-full py-14 md:py-20 bg-card/50">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Olha o que você vai ter acesso
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Figurinhas desenhadas para cada momento da sua estratégia de conteúdo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-0">
          {stickers.map((sticker) => (
            <div key={sticker.id} className="group overflow-hidden bg-transparent">
              <div className="aspect-square relative">
                <Image
                  src={sticker.imageUrl}
                  alt={sticker.description}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={sticker.imageHint}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
