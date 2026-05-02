# Padrões de Código

## Geral

- Mantenha os componentes pequenos e com uma única responsabilidade.
- Resolva as causas raízes dos problemas, não empilhe *workarounds* (gambiarras).
- Não misture a lógica de consumo da IA com a lógica de renderização da UI no mesmo componente.

## TypeScript

- O modo Strict (`strict: true`) é obrigatório em todo o projeto.
- Evite o uso de `any` — use interfaces explícitas, tipos primitivos ou `unknown` seguido de validação (type guards).
- Valide dados externos (inputs de usuários, webhooks) nos limites do sistema utilizando bibliotecas como Zod.

## Next.js (App Router)

- O padrão inicial deve ser Server Components (RSC) para melhor performance e SEO.
- Adicione a diretiva `"use client"` apenas no nível da árvore onde a interatividade do navegador (hooks, eventos) é estritamente necessária.
- Server Actions devem ser usadas prioritariamente para mutações (formulários de configuração do lojista), com tratamento adequado de erros e validação de sessão.

## Estilização

- Use as variáveis CSS definidas em `ui-context.md` em conjunto com classes utilitárias do Tailwind.
- Siga a escala de `border-radius` estipulada.
- Evite escrever CSS personalizado bruto; prefira compor com Tailwind.

## Tratamento de Dados e API

- Parse e valide a entrada do request com Zod antes da execução da lógica da API.
- Reforce a verificação de autenticação e propriedade de locatário (Tenant/Lojista) antes de qualquer mutação no banco de dados.
- Mantenha respostas previsíveis. APIs devem retornar objetos consistentes, ex: `{ data: T }` ou `{ error: string }`.

## Organização de Arquivos

- `app/` — Rotas, páginas (page.tsx) e layouts (layout.tsx).
- `components/ui/` — Componentes reaproveitáveis de baixo nível (botões, inputs, modais - via shadcn).
- `components/features/` ou `components/dashboard/` — Componentes complexos específicos de domínio.
- `lib/` — Utilitários, instâncias (ex: `prisma.ts`, `stripe.ts`), auxiliares de formatação.
- `actions/` — Server Actions do Next.js separadas por domínio (ex: `lead-actions.ts`, `store-actions.ts`).