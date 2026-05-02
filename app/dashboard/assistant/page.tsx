import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AssistantPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">Meu Atendente</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Configure as informações do seu negócio para o atendente automático
        </p>
      </div>

      <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
            Informações do negócio
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm text-[var(--text-muted)]">Nome do negócio</label>
            <Input placeholder="Ex: Barbearia do João" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-[var(--text-muted)]">Tipo de negócio</label>
            <Input placeholder="Ex: Barbearia, Clínica de estética, Restaurante..." />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-[var(--text-muted)]">Descrição do negócio</label>
            <Textarea
              placeholder="Descreva seu negócio, diferenciais e o que você oferece..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
            Funcionamento e localização
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm text-[var(--text-muted)]">Horário de funcionamento</label>
            <Textarea
              placeholder="Ex: Segunda a sexta, das 9h às 18h. Sábado das 9h às 14h."
              rows={2}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-[var(--text-muted)]">Endereço</label>
            <Input placeholder="Ex: Rua das Flores, 123 – Centro, São Paulo/SP" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[var(--bg-surface)] border-[var(--border-default)]">
        <CardHeader>
          <CardTitle className="text-sm font-semibold text-[var(--text-primary)]">
            Atendimento e contato
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm text-[var(--text-muted)]">Formas de pagamento</label>
            <Input placeholder="Ex: Pix, cartão de crédito, dinheiro" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-[var(--text-muted)]">Link do WhatsApp</label>
            <Input placeholder="https://wa.me/5511999999999" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm text-[var(--text-muted)]">Mensagem de boas-vindas</label>
            <Textarea
              placeholder="Ex: Olá! Bem-vindo ao nosso atendimento automático. Como posso te ajudar hoje?"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="bg-[var(--accent-primary)] hover:opacity-90 text-white">
          Salvar configurações
        </Button>
      </div>
    </div>
  );
}
