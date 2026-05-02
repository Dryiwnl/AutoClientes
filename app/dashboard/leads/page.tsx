import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">Leads</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Contatos captados pelo seu atendente automático
        </p>
      </div>

      <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <Users className="h-10 w-10 text-[var(--text-muted)] mb-4" />
          <p className="text-sm font-medium text-[var(--text-primary)]">
            Nenhum lead encontrado
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-1 max-w-xs">
            Os contatos interessados aparecerão aqui assim que conversarem com seu atendente.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
