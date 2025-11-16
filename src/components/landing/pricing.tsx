"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const basicFeatures = [
  "Figurinhas essenciais",
  "Download imediato",
  "Suporte por e-mail",
  "Garantia de 7 dias",
];

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

export function Pricing() {
  const handleRedirect = (baseUrl: string) => {
    const url = baseUrl + (window.location.search || '');
    window.location.href = url;
  };

  return (
    <section id="oferta" className="w-full py-14 md:py-20">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Escolha o plano ideal para você
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Acesso imediato para transformar seus Stories hoje mesmo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start lg:gap-12">
          {/* Premium Plan */}
          <Card className="flex flex-col h-full border-2 border-primary relative shadow-2xl shadow-primary/20 text-center items-center">
            <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground hover:bg-primary">
              Mais Vendido
            </Badge>
            <CardHeader className="items-center">
              <Image
                src="https://imgur.com/ivzeRIi.png"
                alt="Pack Premium"
                width={300}
                height={300}
                className="mb-4"
                priority
              />
              <CardTitle>Pack Premium</CardTitle>
              <CardDescription>O pacote completo para decolar.</CardDescription>
              <div className="pt-4">
                <span className="text-5xl font-bold text-primary">R$ 19,90</span>
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
            <CardFooter className="w-full">
              <Button
                className="w-full font-bold text-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-glow !text-white py-7 animate-pulse-scale"
                onClick={() => handleRedirect('https://pay.cakto.com.br/tmdmuk9_596873')}
              >
                Quero o Premium
              </Button>
            </CardFooter>
          </Card>

          {/* Basic Plan */}
          <Card className="flex flex-col h-full items-center text-center">
            <CardHeader className="items-center text-center">
              <Image
                src="https://i.imgur.com/AVnLVip.png"
                alt="Pack Básico"
                width={250}
                height={250}
                className="mb-4"
              />
              <CardTitle>Pack Básico</CardTitle>
              <CardDescription>Para começar com o essencial.</CardDescription>
              <div className="pt-4">
                <span className="text-5xl font-bold">R$ 10,00</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 flex flex-col items-center">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="w-full">
              <Button asChild className="w-full font-bold text-lg !text-white px-10">
                <Link href="/oferta-especial">Quero o Básico</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
