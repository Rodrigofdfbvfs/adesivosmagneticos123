import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-[1100px] px-5 text-center">
        <div className="relative flex justify-center mb-4">
            <Image
                src="https://i.imgur.com/h4rXQE4.png"
                alt="StoryBoost Stickers"
                width={400}
                height={150}
                className="rounded-lg"
                data-ai-hint="sticker collage"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Deixe seus Stories irresistíveis. pack pensado para{" "}
          <span className="text-primary">criar conexão e vender.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Receba acesso imediato, escolha suas figurinhas e publique em segundos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <Button asChild size="lg" className="px-10 py-6 text-lg font-bold transition-transform duration-300 hover:scale-[1.03] animate-pulse-scale !text-white uppercase">
            <Link href="#oferta">Quero começar agora</Link>
          </Button>
          <p className="text-base text-muted-foreground">
            por apenas <span className="font-bold">R$ 10,00</span>
          </p>
        </div>
      </div>
    </section>
  );
}
