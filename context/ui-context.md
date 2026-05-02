# Contexto de UI

## Tema

O painel do Lojista deve passar confiança, sendo limpo e profissional. A interface pública do Chat deve ser extremamente simples, focada na conversação, assemelhando-se a aplicativos de mensagens populares, com suporte prioritário para mobile.

## Cores

Definição de tokens de cores usando variáveis CSS. Todos os componentes devem usar esses tokens (sem valores hexadecimais *hardcoded* no código).

| Papel | Variável CSS | Valor (Exemplo) |
| ------ | ------ | ------ |
| Fundo da Página (Dashboard) | `--bg-base` | `#F9FAFB` (Gray 50) |
| Superfície (Cards/Sidebar) | `--bg-surface` | `#FFFFFF` (White) |
| Fundo do Chat | `--bg-chat` | `#EFEAE2` (WhatsApp bg style) |
| Texto Principal | `--text-primary` | `#111827` (Gray 900) |
| Texto Secundário | `--text-muted` | `#6B7280` (Gray 500) |
| Destaque Principal | `--accent-primary` | `#2563EB` (Blue 600) |
| Borda Padrão | `--border-default` | `#E5E7EB` (Gray 200) |
| Sucesso (Leads) | `--state-success` | `#10B981` (Emerald 500) |

## Tipografia

| Papel | Fonte | Variável |
| ------ | ------ | ------ |
| Texto da UI | Inter / Geist Sans | `--font-sans` |
| Código/Mono | Geist Mono | `--font-mono` |

## Border Radius

| Contexto | Classe Tailwind |
| ------ | ------ |
| Botões e Inputs | `rounded-md` |
| Cards e Painéis | `rounded-lg` |
| Balões de Chat | `rounded-2xl` |

## Biblioteca de Componentes

Utilizar `shadcn/ui` por cima do Tailwind CSS. Componentes residem em `components/ui/`. Use o CLI do shadcn para adicionar novos componentes em vez de escrevê-los do zero.

## Padrões de Layout

- **Dashboard:** Menu lateral (Sidebar) fixo à esquerda para navegação (Leads, Configurações, Plano), e área de conteúdo principal rolável à direita.
- **Chat Público:** Layout 100% da altura da tela (100dvh). Cabeçalho fixo com o nome e logo do negócio, área central de mensagens rolável e barra de input fixa na parte inferior.
- **Modais:** Sobreposições centralizadas com fundo desfocado (`backdrop-blur`) para adicionar serviços/preços no dashboard.

## Ícones

Utilizar `lucide-react`. Apenas ícones com base em traço (stroke). 
Tamanhos padrão: `h-4 w-4` para inline, `h-5 w-5` para botões e sidebar.