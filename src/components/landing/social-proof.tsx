"use client";

import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

export function SocialProof() {
  const testimonials = placeholderImages.filter(p => p.imageHint.includes("testimonial"));

  return (
    <section className="w-full py-14 md:py-20">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Quem usa, aprova
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Veja o que nossos clientes estão dizendo sobre o impacto do pack.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-3 md:gap-8 justify-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full max-w-sm mx-auto"
              >
                <div className="aspect-[9/16] relative">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.description}
                    fill
                    className="object-contain rounded-lg"
                    data-ai-hint={testimonial.imageHint}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
