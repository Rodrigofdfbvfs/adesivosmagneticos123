import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-[1100px] px-5 text-center">
        <div className="flex justify-center mb-4">
            <Image
                src="https://picsum.photos/seed/hero-image/400/150"
                alt="StoryBoost Stickers"
                width={400}
                height={150}
                className="rounded-lg"
                data-ai-hint="sticker collage"
            />
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Deixe seus Stories irresistíveis — pack pensado para{" "}
          <span className="text-primary">criar conexão e vender.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Receba acesso imediato, escolha suas figurinhas e publique em segundos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="px-8 font-bold transition-all duration-300 hover:scale-[1.03] hover:shadow-glow">
            <Link href="#oferta">Quero começar agora</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="border border-primary text-primary hover:bg-primary/10 hover:text-primary px-8 font-bold">
            <Link href="#vsl">Ver vídeo (VSL)</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
