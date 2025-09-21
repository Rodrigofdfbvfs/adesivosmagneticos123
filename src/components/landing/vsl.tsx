export function VSL() {
  return (
    <section id="vsl" className="w-full py-14 md:py-20 bg-black">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl text-white">
            Veja como as figurinhas aumentam seu engajamento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Um vídeo rápido mostrando o poder de um Story bem pensado.
          </p>
        </div>
        <div 
          className="mt-12 mx-auto max-w-4xl w-full overflow-hidden rounded-[14px] border-2 border-transparent"
          dangerouslySetInnerHTML={{ __html: `
            <style>
              wistia-player[media-id='r6wqgoikwe']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/r6wqgoikwe/swatch');
                display: block;
                filter: blur(5px);
                height: 100%;
                width: 100%;
                padding-top: 216.11%;
              }
            </style>
            <script src="https://fast.wistia.com/embed/r6wqgoikwe.js" async type="module"></script>
            <wistia-player media-id="r6wqgoikwe" aspect="0.46272493573264784"></wistia-player>
          `}}
        >
        </div>
      </div>
    </section>
  );
}
