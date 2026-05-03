# Rastreador de Progresso

Atualize este arquivo após cada mudança de implementação significativa.

## Fase Atual
- [x] Planejamento / Contexto da IA criado
- [x] Configuração do Projeto Inicial
- [x] Desenvolvimento do Dashboard (MVP)
- [x] Autenticação com Clerk
- [x] Banco de Dados (Prisma + PostgreSQL) — Schema e migration inicial
- [x] API REST de Projetos (spec `06-project-api.md`)
- [ ] Desenvolvimento do Chat Público (MVP)
- [ ] Integração com IA e Geração de Leads

## Meta Atual
- Conectar formulário de `assistant/page.tsx` a uma Server Action para salvar no banco.
- API REST de projetos funcional (sem UI conectada ainda).

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
- **Autenticação com Clerk (spec `03-auth.md`):**
  - `@clerk/ui` instalado; `dark` theme de `@clerk/ui/themes` aplicado ao `ClerkProvider`.
  - `proxy.ts` criado na raiz (Next.js 16 renomeou middleware → proxy). Rotas protegidas por padrão; `/sign-in`, `/sign-up` e `/a/(.*)` são públicas.
  - `app/layout.tsx` envolve toda a árvore com `ClerkProvider` com aparência via variáveis CSS do projeto (sem cores hardcoded).
  - `app/sign-in/[[...sign-in]]/page.tsx` e `app/sign-up/[[...sign-up]]/page.tsx` — layout duas colunas (esquerda: logo + tagline + features em texto; direita: formulário Clerk). Apenas formulário em mobile.
  - `app/page.tsx` — redireciona autenticados para `/editor`, não autenticados para `/sign-in`.
  - `app/editor/page.tsx` — bridge temporário que redireciona para `/dashboard`.
  - `components/dashboard/user-menu.tsx` (client component) e `DashboardNavbar` atualizado com `UserButton` do Clerk.
- **Banco de Dados (spec `05-prisma.md`):**
  - `prisma/models/project.prisma` — models `Project` e `ProjectCollaborator` com relações, índices e enum `ProjectStatus`.
  - Migration `20260503004100_init` criada e aplicada no banco Prisma Postgres.
  - `lib/prisma.ts` — singleton com cache em `global` (dev hot reload). Ramifica em `accelerateUrl` para URLs `prisma+postgres://` e `@prisma/adapter-pg` para conexões diretas.
  - Client gerado em `app/generated/prisma/`. Build passa sem erros.
- **API REST de Projetos (spec `06-project-api.md`):**
  - `app/api/projects/route.ts` — `GET` (listar projetos do usuário) e `POST` (criar projeto, nome padrão `Untitled Project`).
  - `app/api/projects/[projectId]/route.ts` — `PATCH` (renomear) e `DELETE` (deletar).
  - Todas as rotas usam `auth()` do Clerk; requisições sem sessão retornam `401`; mutações por não-donos retornam `403`.
  - Entrada validada com Zod. Respostas consistentes: `{ data }` ou `{ error }`.
  - `@prisma/extension-accelerate` instalado (dependência de `lib/prisma.ts` que faltava). Build passa sem erros.

## Em Progresso
- *Nenhum no momento.*

## Próximos Passos
1. Conectar o formulário de `assistant/page.tsx` a uma Server Action para salvar no banco.
2. Implementar a criação real de leads durante o chat.
3. Mover estrutura de rotas de `/dashboard` para rota base (alinhar com `app/(dashboard)/` conforme arquitetura).

## Questões Abertas
- Qual provedor de LLM vamos utilizar como padrão inicial (OpenAI `gpt-4o-mini` por custo-benefício ou Anthropic `claude-haiku-4-5`)?
- A coleta do nome e telefone do lead no chat será feita por preenchimento natural na conversa com a IA, ou através de um formulário renderizado pela IA (UI generativa)?
- O caminho `/editor` deve eventualmente hospedar o dashboard completo (alinhar `app/dashboard/` → `app/editor/`)?

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
- **Decisão:** `proxy.ts` na raiz (não `middleware.ts`).
  **Motivo:** Next.js 16 renomeou middleware para proxy. Mesma funcionalidade, novo nome de arquivo.
- **Decisão:** `UserMenu` como Client Component separado, `DashboardNavbar` permanece Server Component.
  **Motivo:** `UserButton` do Clerk requer contexto client-side; isolar a fronteira no menor componente possível.

## Notas da Sessão
- Spec `02-editor.md` implementada integralmente. Apenas UI, sem backend, autenticação ou IA.
- Spec `03-auth.md` implementada integralmente. Clerk integrado com proxy, ClerkProvider, páginas de auth e UserButton.
- Spec `05-prisma.md` implementada integralmente. Schema multi-arquivo, migration aplicada, singleton Prisma v7 com adapter-pg.
- Spec `06-project-api.md` implementada integralmente. 4 rotas REST (list/create/rename/delete), auth + ownership checks, Zod, sem conexão de UI.
