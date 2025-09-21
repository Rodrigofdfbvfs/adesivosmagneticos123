import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {stickers.map((sticker) => (
            <Card key={sticker.id} className="overflow-hidden bg-background">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src={sticker.imageUrl}
                    alt={sticker.description}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={sticker.imageHint}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </CardContent>
              <CardFooter className="p-4 justify-center bg-card">
                <p className="font-bold text-sm text-center w-full text-foreground">{sticker.description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
