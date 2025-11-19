"use client";

import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { placeholderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export function SocialProof() {
  const testimonials = placeholderImages.filter(p => p.imageHint.includes("testimonial"));
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])


  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

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
        <div className="mt-12 flex flex-col items-center gap-6">
            <Carousel setApi={setApi} className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
             <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    current === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2 md:hidden">Arraste para o lado</p>
        </div>
      </div>
    </section>
  );
}
