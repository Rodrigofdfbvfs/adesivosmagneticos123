import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

export function SocialProof() {
  const testimonials = placeholderImages.filter(p => p.imageHint.includes("testimonial"));

  return (
    <section className="w-full py-14 md:py-20">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Quem usa, aprova
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Veja o que nossos clientes estão dizendo sobre o impacto do pack.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-2 items-start justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-1 justify-self-center ${
                  index === testimonials.length - 1 ? 'sm:col-span-2 sm:w-1/2' : 'w-3/4 sm:w-1/2'
                }`}
              >
                <div className="aspect-[9/16] relative">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.description}
                    fill
                    className="object-contain rounded-lg"
                    data-ai-hint={testimonial.imageHint}
                    sizes="(max-width: 640px) 75vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
