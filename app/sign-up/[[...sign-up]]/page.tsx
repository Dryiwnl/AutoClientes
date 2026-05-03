import { SignUp } from "@clerk/nextjs";
import { Bot, Zap, Settings2 } from "lucide-react";

const features = [
  {
    icon: Bot,
    color: "bg-emerald-500/15 text-emerald-400",
    title: "Atendimento com IA",
    description:
      "Seu atendente virtual responde clientes 24h com base nos dados do seu negócio.",
  },
  {
    icon: Zap,
    color: "bg-blue-500/15 text-blue-400",
    title: "Captura de Leads Automática",
    description:
      "Coleta nome e contato dos clientes durante a conversa, sem formulários extras.",
  },
  {
    icon: Settings2,
    color: "bg-orange-500/15 text-orange-400",
    title: "Configuração em Minutos",
    description:
      "Cadastre seus serviços, preços e horários. O atendente aprende sozinho.",
  },
];

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex">
      {/* Coluna esquerda — levemente mais clara */}
      <div className="hidden lg:flex flex-col w-1/2 bg-[var(--bg-surface)] px-14 py-10">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-[var(--accent-primary)] flex items-center justify-center">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <span className="text-base font-semibold text-[var(--text-primary)]">
            AutoClient
          </span>
        </div>

        {/* Conteúdo central */}
        <div className="flex flex-col justify-center flex-1 max-w-md gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-[1.15] tracking-tight">
              Comece a automatizar seu atendimento hoje mesmo.
            </h1>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              Crie sua conta gratuitamente e configure seu atendente virtual com IA em minutos.
            </p>
          </div>

          <ul className="flex flex-col gap-6">
            {features.map(({ icon: Icon, color, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <div
                  className={`mt-0.5 h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${color}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    {title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-0.5">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Rodapé */}
        <p className="text-xs text-[var(--text-muted)]">
          © 2026 AutoClient. Todos os direitos reservados.
        </p>
      </div>

      {/* Coluna direita — mais escura */}
      <div className="flex flex-1 lg:w-1/2 items-center justify-center bg-[var(--bg-base)] px-4 py-10">
        <SignUp />
      </div>
    </div>
  );
}
