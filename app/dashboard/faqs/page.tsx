import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Plus } from "lucide-react";

export default function FaqsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-[var(--text-primary)]">Perguntas Frequentes</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Ensine seu atendente a responder as dúvidas mais comuns
          </p>
        </div>
        <Button className="bg-[var(--accent-primary)] hover:opacity-90 text-white gap-2">
          <Plus className="h-4 w-4" />
          Nova pergunta
        </Button>
      </div>

      <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <HelpCircle className="h-10 w-10 text-[var(--text-muted)] mb-4" />
          <p className="text-sm font-medium text-[var(--text-primary)]">
            Nenhuma pergunta frequente cadastrada
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-1 max-w-xs">
            Adicione dúvidas comuns para melhorar as respostas do seu atendente automático.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
