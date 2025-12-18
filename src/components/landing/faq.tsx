"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como recebo o acesso?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para baixar as figurinhas e acessar o canal do Telegram."
  },
  {
    question: "Funciona em iPhone e Android?",
    answer: "Sim! As figurinhas são arquivos de imagem com fundo transparente (PNG), compatíveis com os Stories do Instagram em qualquer celular."
  },
  {
    question: "Posso usar as figurinhas para meus clientes?",
    answer: "O Plano Básico concede uma licença de uso pessoal. Para usar as figurinhas em projetos de clientes, você precisa adquirir o Plano Premium, que inclui a licença de uso comercial."
  },
  {
    question: "Terei atualizações?",
    answer: "Sim! O Plano Premium garante acesso vitalício e atualizações semanais com novas figurinhas, sem custo adicional."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos Cartão de Crédito, PIX e Boleto Bancário. O acesso é liberado mais rapidamente com pagamentos via Cartão ou PIX."
  }
];

export function FAQ() {
  const handleClick = (url: string) => {
    const search = window.location.search;
    if (url.startsWith("#")) {
        const element = document.getElementById(url.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        const separator = url.includes("?") ? "&" : "?";
        window.location.href = url + (search ? (url.startsWith("/") ? search : separator + search.substring(1)) : "");
    }
  };

  return (
    <section id="faq" className="w-full py-14 md:py-20 bg-card/50">
      <div className="container mx-auto max-w-[1100px] px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 text-center">
          <Button onClick={() => handleClick("#oferta")} size="lg" className="px-8 font-bold transition-transform duration-300 hover:scale-[1.03] hover:shadow-glow">
            Quero garantir minha vaga
          </Button>
        </div>
      </div>
    </section>
  );
}
