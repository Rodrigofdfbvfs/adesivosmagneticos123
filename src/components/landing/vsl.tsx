export function VSL() {
  return (
    <section id="vsl" className="w-full py-14 md:py-20">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Veja como as figurinhas aumentam seu engajamento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Um vídeo rápido mostrando o poder de um Story bem pensado.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl aspect-video w-full overflow-hidden rounded-lg border-2">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=x_i4v3b6p3L2n1Yj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
