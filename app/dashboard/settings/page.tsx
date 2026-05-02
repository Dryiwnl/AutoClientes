import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">Configurações</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Gerencie as configurações da sua conta
        </p>
      </div>

      <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <Settings className="h-10 w-10 text-[var(--text-muted)] mb-4" />
          <p className="text-sm font-medium text-[var(--text-primary)]">
            Em breve
          </p>
          <p className="text-sm text-[var(--text-muted)] mt-1 max-w-xs">
            As configurações de conta, plano e integrações estarão disponíveis aqui.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
