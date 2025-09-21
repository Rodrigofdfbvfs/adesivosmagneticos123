import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, LayoutGrid, Share2 } from "lucide-react";

const steps = [
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: "Receba por e-mail",
    description: "Acesso imediato ao pack completo assim que o pagamento for confirmado."
  },
  {
    icon: <Send className="w-8 h-8 text-primary" />,
    title: "Entre no Telegram",
    description: "Faça parte da nossa comunidade e receba atualizações semanais."
  },
  {
    icon: <LayoutGrid className="w-8 h-8 text-primary" />,
    title: "Escolha suas figurinhas",
    description: "Navegue por categorias e encontre a figurinha perfeita para seu objetivo."
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: "Use nos Stories",
    description: "É simples: arraste, cole no seu Story e veja a mágica acontecer."
  }
];

export function HowItWorks() {
  return (
    <section className="w-full py-14 md:py-20 bg-card/50">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Comece a usar em 4 passos simples
            </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shrink-0">
                <span className="text-xl font-bold text-primary">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
