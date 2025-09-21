import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 border-t">
      <div className="container mx-auto max-w-[1100px] px-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} StoryBoost. Todos os direitos reservados.
        </p>
        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Suporte e Contato
        </Link>
      </div>
    </footer>
  );
}
