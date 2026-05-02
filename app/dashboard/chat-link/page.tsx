import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const PLACEHOLDER_LINK = "https://autoclient.app/a/meu-negocio";

export default function ChatLinkPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">Link de Atendimento</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Compartilhe este link para que seus clientes conversem com seu atendente automático
        </p>
      </div>

      <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
            Seu link público
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              readOnly
              value={PLACEHOLDER_LINK}
              className="bg-white/5 text-[var(--text-muted)] cursor-default"
            />
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 border-[var(--border-default)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copiar link</span>
            </Button>
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            Use este link na bio do Instagram, no WhatsApp ou em qualquer canal de atendimento
            para que seus clientes conversem com seu atendente automático.
          </p>

          <a
            href={PLACEHOLDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "gap-2 border-[var(--border-default)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            )}
          >
            <ExternalLink className="h-4 w-4" />
            Visualizar atendente
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
