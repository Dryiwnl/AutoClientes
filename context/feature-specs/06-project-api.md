O schema do banco de dados está pronto. Construa apenas as rotas de API backend do projeto.

## Rotas

Crie endpoints REST para:

- `GET /api/projects` — listar os projetos do usuário atual
- `POST /api/projects` — criar projeto
- `PATCH /api/projects/[projectId]` — renomear projeto
- `DELETE /api/projects/[projectId]` — deletar projeto

## Regras

Use o ID do usuário autenticado pelo Clerk como `ownerId`.

Ao criar:

- se o nome do projeto estiver ausente, use `Untitled Project` como padrão
- use a estratégia de ID existente no schema, não adicione IDs sequenciais

Segurança:

- requisições não autenticadas retornam `401`
- apenas o dono do projeto pode renomear ou deletar
- mutações feitas por usuários que não são donos retornam `403`

Mantenha isso apenas no backend. Não conecte com a UI ainda.

## Verificar ao concluir

- rotas existem para listar/criar/renomear/deletar
- verificações de dono são aplicadas ao renomear/deletar
- respostas `401` e `403` são tratadas corretamente
- `npm run build` passa