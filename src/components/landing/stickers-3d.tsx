import Image from "next/image";

export function Stickers3D() {
  return (
    <section className="w-full bg-black">
      <div className="container mx-auto max-w-[1100px] px-5 py-10 md:py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Você também terá acesso às{" "}
              <span className="text-primary">Figurinhas 3D</span>
            </h2>
            <p className="mt-4 text-lg text-white font-light md:text-xl">
              Mais estilo e impacto para os seus stories.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://i.imgur.com/83QvGrt.png"
              alt="Figurinhas 3D"
              fill
              className="rounded-lg object-contain shadow-lg"
              data-ai-hint="3d sticker"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
