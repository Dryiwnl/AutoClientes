O Clerk já está instalado e conectado. Integre ele ao app Next.js: provider, páginas de autenticação, redirecionamentos, proteção de rotas e menu do usuário.

## Design

Use o tema `dark` do Clerk vindo de `@clerk/ui/themes` como base.

Sobrescreva as variáveis de aparência do Clerk usando as variáveis CSS já existentes do app. Não fixe cores manualmente.

Páginas de sign-in e sign-up:

- telas grandes: layout simples em duas colunas
- esquerda: logo compacto, tagline e lista curta de funcionalidades apenas em texto
- direita: formulário do Clerk centralizado
- telas pequenas: apenas formulário
- sem gradientes
- sem seções hero exageradas
- sem cards de funcionalidades
- sem layouts com muito scroll

Mantenha o layout minimalista e profissional.

## Implementação

Envolva o root layout com `ClerkProvider` usando o tema `dark` do Clerk.

Crie páginas de sign-in e sign-up usando componentes do Clerk.

Use `proxy.ts` na raiz do projeto, não `middleware.ts`.

Defina as rotas públicas usando as variáveis de ambiente existentes de sign-in e sign-up. Proteja todo o restante por padrão.

Atualize `/`:

- usuários autenticados redirecionam para `/editor`
- usuários não autenticados redirecionam para `/sign-in`

Adicione o `UserButton` nativo do Clerk na seção direita da navbar do editor para configurações de perfil e logout.

Mantenha o menu padrão de usuário e os fluxos de perfil do Clerk intactos. Não reconstrua nem personalize demais os internos do Clerk.

Use as variáveis de ambiente existentes do Clerk. Não renomeie nem invente novas variáveis.

## Dependências

Instale: `@clerk/ui`.

## Verificar ao concluir

- `proxy.ts` existe na raiz
- todas as rotas estão protegidas, exceto os caminhos públicos de autenticação
- páginas de autenticação usam variáveis CSS sem cores fixas manualmente
- `ClerkProvider` envolve o root layout
- `npm run build` passa