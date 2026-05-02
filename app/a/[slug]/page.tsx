import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface PublicChatPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PublicChatPage({ params }: PublicChatPageProps) {
  const { slug } = await params;

  return (
    <div className="flex flex-col h-dvh bg-[var(--bg-chat)]">
      <header className="shrink-0 h-14 flex items-center px-4 bg-[var(--bg-surface)] border-b border-[var(--border-default)] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white text-xs font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] leading-none">
              Atendente Automático
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{slug}</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <div className="flex justify-start">
          <div className="max-w-[80%] bg-[var(--bg-surface)] rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm">
            <p className="text-sm text-[var(--text-primary)]">
              Olá! Sou o atendente automático deste negócio. Posso te ajudar com preços, horários, serviços ou orçamento.
            </p>
          </div>
        </div>
      </div>

      <div className="shrink-0 px-4 py-3 bg-[var(--bg-surface)] border-t border-[var(--border-default)]">
        <div className="flex gap-2 items-center">
          <Input
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-[var(--bg-base)] border-[var(--border-default)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)]"
          />
          <Button
            size="icon"
            className="shrink-0 bg-[var(--accent-primary)] hover:opacity-90 text-white"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Enviar</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
