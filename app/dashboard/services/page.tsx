import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Plus } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-[var(--text-primary)]">Serviços</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Gerencie os serviços oferecidos pelo seu negócio
          </p>
        </div>
        <Button className="bg-[var(--accent-primary)] hover:opacity-90 text-white gap-2">
          <Plus className="h-4 w-4" />
          Novo serviço
        </Button>
      </div>

      <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <Briefcase className="h-10 w-10 text-[var(--text-muted)] mb-4" />
          <p className="text-sm font-medium text-[var(--text-primary)]">
            Nenhum serviço cadastrado
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-1 max-w-xs">
            Cadastre serviços, preços e descrições para que o atendente consiga responder seus clientes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
