import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";

const bonuses = [
  {
    title: "Como perder o medo de gravar vídeo",
    description: "Um guia prático para você destravar sua comunicação e aparecer com confiança nos Stories."
  },
  {
    title: "Como automatizar mensagens no Instagram",
    description: "Aprenda a configurar respostas automáticas e economize tempo no seu dia a dia."
  },
  {
    title: "Do seu celular à sua primeira venda",
    description: "O passo a passo para criar uma oferta irresistível e realizar sua primeira venda usando apenas o celular."
  }
];

export function Bonuses() {
  return (
    <section className="w-full py-14 md:py-20 bg-card/50">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            E ainda tem mais...
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Comprando o Plano Premium, você leva 3 bônus exclusivos para acelerar seus resultados.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Badge className="w-fit bg-primary text-primary-foreground hover:bg-primary">
                  BÔNUS
                </Badge>
                <CardTitle className="pt-2">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
