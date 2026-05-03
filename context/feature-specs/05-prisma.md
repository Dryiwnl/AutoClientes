O Prisma já está instalado. Adicione os modelos de dados do projeto, o singleton do Prisma Client e a primeira migration.

## Models

Crie `prisma/models/project.prisma`.

Adicione `Project`:

- ID do dono mapeado para o usuário do Clerk
- nome
- descrição opcional
- enum de status: `DRAFT`, `ARCHIVED`
- `canvasJsonPath` para armazenamento futuro do blob do canvas
- timestamps
- índices no ID do dono e na data de criação

Adicione `ProjectCollaborator`:

- relação com projeto usando delete em cascata
- e-mail do colaborador
- timestamp de criação
- constraint única em projeto/e-mail
- índices em e-mail e projeto/data

Não adicione campos extras, exceto se forem exigidos pelo Prisma.

## Prisma Client

Crie `lib/prisma.ts` como um singleton em cache.

Faça uma ramificação com base em `DATABASE_URL`:

- se começar com `prisma+postgres://`, use Accelerate
- caso contrário, use diretamente `@prisma/adapter-pg`

Faça cache do client em `global` durante o desenvolvimento para hot reloads.

## Migration

Execute a migration e gere o client.

## Dependências

Já instaladas:

- `prisma`
- `@prisma/client`
- `@prisma/adapter-pg`
- `pg`

## Verificar ao concluir

- schema possui os dois models com relações e índices corretos
- `lib/prisma.ts` exporta uma instância Prisma em cache
- migration roda com sucesso
- `npm run build` passa