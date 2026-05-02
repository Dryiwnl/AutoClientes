Leia `AGENTS.md` antes de começar.

Estamos adicionando o design system e os componentes primitivos de UI.

Instale e configure `shadcn/ui`.

Adicione estes componentes do shadcn:
- Button
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

Não modifique os arquivos gerados em `components/ui/*` após a instalação.

Instale também `lucide-react`.

Crie `lib/utils.ts` com um helper reutilizável `cn()` para mesclar classes do Tailwind.

Garanta que todos os componentes combinem com o tema escuro existente em `globals.css`.

### Verificar ao concluir
- Todos os componentes importam sem erros
- `cn()` funciona corretamente
- Nenhum estilo claro padrão aparece