import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-[9/16] relative">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.description}
                      fill
                      className="object-contain rounded-lg"
                      data-ai-hint={testimonial.imageHint}
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
