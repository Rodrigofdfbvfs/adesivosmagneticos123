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
  return (
    <section id="oferta" className="w-full py-14 md:py-20">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Escolha o plano ideal para você
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Acesso imediato para transformar seus Stories hoje mesmo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start lg:gap-12">
          {/* Premium Plan */}
          <Card className="flex flex-col h-full border-2 border-primary relative shadow-2xl shadow-primary/20">
            <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground hover:bg-primary">
              Mais Vendido
            </Badge>
            <CardHeader>
              <CardTitle>Pack Premium</CardTitle>
              <CardDescription>O pacote completo para decolar.</CardDescription>
              <div className="pt-4">
                <span className="text-5xl font-bold text-primary">R$ 19,90</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full font-bold text-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-glow !text-white">
                <Link href="#">Quero o Premium</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Basic Plan */}
          <Card className="flex flex-col h-full items-center text-center">
            <CardHeader className="items-center text-center">
              <Image
                src="https://i.imgur.com/AVnLVip.png"
                alt="Pack Básico"
                width={300}
                height={300}
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
            <CardFooter>
              <Button asChild className="w-full font-bold !text-white">
                <Link href="/oferta-especial">Quero o Básico</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}