import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, CalendarCheck, FileText } from "lucide-react";

const metrics = [
  { title: "Leads recebidos", value: "0", icon: Users },
  { title: "Conversas iniciadas", value: "0", icon: MessageSquare },
  { title: "Agendamentos solicitados", value: "0", icon: CalendarCheck },
  { title: "Orçamentos pedidos", value: "0", icon: FileText },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">Dashboard</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">Visão geral do seu negócio</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(({ title, value, icon: Icon }) => (
          <Card key={title} className="bg-[var(--bg-surface)] border-[var(--border-default)]">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[var(--text-muted)]">
                {title}
              </CardTitle>
              <Icon className="h-4 w-4 text-[var(--text-muted)]" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-[var(--text-primary)]">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-base font-semibold text-[var(--text-primary)] mb-4">Últimos leads</h2>
        <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <Users className="h-10 w-10 text-[var(--text-muted)] mb-4" />
            <p className="text-sm font-medium text-[var(--text-primary)]">
              Nenhum lead recebido ainda
            </p>
            <p className="text-sm text-[var(--text-muted)] mt-1 max-w-xs">
              Quando clientes conversarem com seu atendente automático, eles aparecerão aqui.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
