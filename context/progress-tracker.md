# Rastreador de Progresso

Atualize este arquivo após cada mudança de implementação significativa.

## Fase Atual
- [x] Planejamento / Contexto da IA criado
- [x] Configuração do Projeto Inicial
- [x] Desenvolvimento do Dashboard (MVP)
- [ ] Desenvolvimento do Chat Público (MVP)
- [ ] Integração com IA e Geração de Leads

## Meta Atual
- Configurar banco de dados e autenticação; conectar formulário de atendente ao backend.

## Concluído
- Documentação de contexto e arquitetura base criada.
- Next.js inicializado com Tailwind CSS v4, App Router e TypeScript strict.
- Boilerplate limpo (página mínima, globals.css reduzido).
- **Design System:** shadcn/ui configurado com Tailwind v4. Componentes adicionados: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea. `lucide-react` instalado. `lib/utils.ts` com `cn()` criado. Tokens de tema do projeto (`--bg-base`, `--bg-surface`, etc.) e dark mode definidos em `globals.css`. Build passa sem erros.
- **Layout do Dashboard:** `DashboardNavbar`, `DashboardSidebar` (com `usePathname` para item ativo) e `DashboardShell` criados em `components/dashboard/`. `app/dashboard/layout.tsx` aplica o shell globalmente. Dark mode ativado via classe `dark` no `<html>`.
- **Páginas do Dashboard (UI, sem backend):**
  - `app/dashboard/page.tsx` — Cards de métricas + seção de últimos leads com estado vazio.
  - `app/dashboard/assistant/page.tsx` — Formulário visual de configuração do negócio (sem salvar).
  - `app/dashboard/services/page.tsx` — Estado vazio + botão "Novo serviço".
  - `app/dashboard/faqs/page.tsx` — Estado vazio + botão "Nova pergunta".
  - `app/dashboard/leads/page.tsx` — Estado vazio para leads.
  - `app/dashboard/chat-link/page.tsx` — Exibe link placeholder + botão de cópia visual.
- **Página Pública do Atendente:** `app/a/[slug]/page.tsx` — Interface de chat responsiva com header fixo, área de mensagens e input fixo na base. Mensagem de boas-vindas estática.

## Em Progresso
- *Nenhum no momento.*

## Próximos Passos
1. Configurar o banco de dados (Prisma + PostgreSQL) e criar o Schema inicial (User, Store, Lead).
2. Configurar a biblioteca de autenticação (Clerk ou Supabase Auth).
3. Conectar o formulário de `assistant/page.tsx` a uma Server Action para salvar no banco.
4. Implementar a criação real de leads durante o chat.

## Questões Abertas
- Qual provedor de LLM vamos utilizar como padrão inicial (OpenAI `gpt-4o-mini` por custo-benefício ou Anthropic `claude-haiku-4-5`)?
- A coleta do nome e telefone do lead no chat será feita por preenchimento natural na conversa com a IA, ou através de um formulário renderizado pela IA (UI generativa)?

## Decisões de Arquitetura
- **Decisão:** Uso do Next.js App Router.
  **Motivo:** Facilita a criação de rotas dinâmicas para o chat das empresas e lida bem com Server Actions para o painel do lojista de forma segura.
- **Decisão:** shadcn/ui com Tailwind CSS v4 (CSS variables mode).
  **Motivo:** Integração nativa com Tailwind v4, sem tailwind.config.ts, variáveis de tema geridas pelo globals.css.
- **Decisão:** Dark mode sempre ativo via classe `dark` no `<html>`.
  **Motivo:** O produto é voltado a tema escuro. Sem toggle de tema por enquanto.
- **Decisão:** `DashboardSidebar` é Client Component (`"use client"`) para usar `usePathname()`.
  **Motivo:** Necessário para destacar o item de navegação ativo sem duplicar lógica.
- **Decisão:** Rota pública do chat em `app/a/[slug]/page.tsx` (não `app/[storeSlug]/`).
  **Motivo:** Evita conflito com outras rotas raiz futuras; prefixo `/a/` isola o namespace do chat público.

## Notas da Sessão
- Spec `02-editor.md` implementada integralmente. Apenas UI, sem backend, autenticação ou IA.
