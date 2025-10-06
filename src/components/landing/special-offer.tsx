"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";

const premiumFeatures = [
  "Acesso ao drive com muitas figurinhas",
  "Bônus: Como perder o medo de gravar vídeo",
  "Bônus: Como automatizar mensagens no Instagram",
  "Bônus: Do seu celular à sua primeira venda",
  "Atualizações semanais",
  "Acesso vitalício",
  "Figurinhas de sombra",
  "Comunidade no Telegram",
  "Templates de frases para instagram",
  "Garantia de 7 dias",
];

export function SpecialOffer() {
  const handleRedirect = (baseUrl: string) => {
    const url = baseUrl + (window.location.search || '');
    window.location.href = url;
  };

  return (
    <section className="w-full py-14 md:py-20">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Espere! Última chance...
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Leve o Pack Premium com um desconto exclusivo. Não perca essa oportunidade!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:max-w-xl md:mx-auto">
          <Card className="flex flex-col h-full border-2 border-primary relative shadow-2xl shadow-primary/20 text-center items-center">
            <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground hover:bg-primary">
              Oferta Especial
            </Badge>
            <CardHeader className="items-center">
              <Image
                src="https://imgur.com/ivzeRIi.png"
                alt="Pack Premium"
                width={250}
                height={250}
                className="mb-4"
              />
              <CardTitle>Pack Premium</CardTitle>
              <CardDescription>O pacote completo para decolar, com desconto.</CardDescription>
              <div className="pt-4 flex flex-col items-center">
                <span className="text-3xl font-bold line-through text-muted-foreground/80">R$ 19,90</span>
                <span className="text-5xl font-bold text-primary">R$ 15,90</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 flex flex-col items-center">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 w-fit">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-4 w-full">
              <Button
                asChild
                className="w-full font-bold text-base md:text-lg animate-pulse-scale !text-white"
              >
                <a
                  href="https://pay.adesivosmagneticos.shop/checkout-white-7136/?add-to-cart=7136"
                  target="_blank"
                  rel="noopener"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRedirect('https://pay.adesivosmagneticos.shop/checkout-white-7136/?add-to-cart=7136');
                  }}
                >
                  Sim, quero o Premium por R$ 15,90
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full font-bold"
              >
                <a
                  href="https://pay.adesivosmagneticos.shop/checkout-white-7080/?add-to-cart=7080"
                  target="_blank"
                  rel="noopener"
                   onClick={(e) => {
                    e.preventDefault();
                    handleRedirect('https://pay.adesivosmagneticos.shop/checkout-white-7080/?add-to-cart=7080');
                  }}
                >
                  Não, quero apenas o Básico por R$ 10,00
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
