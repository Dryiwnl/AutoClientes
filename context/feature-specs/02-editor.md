Precisamos construir a base visual e estrutural do SaaS de atendente automático para pequenos negócios. O sistema será usado por donos de barbearias, clínicas de estética, oficinas, restaurantes e prestadores de serviço para cadastrar informações do negócio, gerar um link de atendimento com IA e acompanhar os leads recebidos.

### Navbar do Painel

Crie `components/dashboard/dashboard-navbar.tsx`.

Requisitos:

- navbar superior com altura fixa
- fundo escuro combinando com o tema global
- borda inferior sutil
- seção esquerda com nome/logo do produto
- seção central opcional para título da página atual
- seção direita com ações do usuário
- botão ou menu para perfil/configurações
- não usar estilos claros padrão

### Sidebar do Painel

Crie `components/dashboard/dashboard-sidebar.tsx`.

Requisitos:

- sidebar lateral fixa à esquerda
- deve conter os principais links do sistema
- fundo escuro com borda lateral sutil
- item ativo destacado visualmente
- deve aceitar estado aberto/fechado futuramente
- deve usar ícones de `lucide-react`
- não deve empurrar ou quebrar o layout principal

Links iniciais da sidebar:

- Dashboard
- Leads
- Meu Atendente
- Serviços
- Perguntas Frequentes
- Link de Atendimento
- Configurações

### Layout Principal do Dashboard

Crie `components/dashboard/dashboard-shell.tsx`.

Requisitos:

- envolver todas as telas internas do painel
- usar a navbar superior
- usar a sidebar lateral
- reservar área principal para o conteúdo da página
- manter espaçamento consistente
- funcionar bem em tema escuro
- evitar duplicação de layout nas páginas internas

Estrutura esperada:

- navbar no topo
- sidebar à esquerda
- conteúdo principal à direita
- área principal com padding confortável
- fundo geral escuro

### Tela Inicial do Dashboard

Crie a página inicial do painel em `app/dashboard/page.tsx`.

Requisitos:

- apresentar um resumo geral do negócio
- mostrar cards com métricas principais
- usar componentes do shadcn/ui quando fizer sentido
- usar cards escuros alinhados ao tema
- não exibir dados reais ainda, apenas placeholders

Cards iniciais:

- Leads recebidos
- Conversas iniciadas
- Agendamentos solicitados
- Orçamentos pedidos

Também incluir uma seção de últimos leads com estado vazio.

Estado vazio sugerido:

- título: `Nenhum lead recebido ainda`
- descrição: `Quando clientes conversarem com seu atendente automático, eles aparecerão aqui.`

### Página de Configuração do Atendente

Crie `app/dashboard/assistant/page.tsx`.

Requisitos:

- permitir cadastrar as informações básicas do negócio
- usar formulário visual, mesmo que ainda sem salvar no banco
- usar `Input`, `Textarea`, `Card` e `Button`
- manter organização clara por seções
- todos os campos devem combinar com o tema escuro

Campos iniciais:

- Nome do negócio
- Tipo de negócio
- Descrição do negócio
- Horário de funcionamento
- Endereço
- Formas de pagamento
- Link do WhatsApp
- Mensagem de boas-vindas

### Página de Serviços

Crie `app/dashboard/services/page.tsx`.

Requisitos:

- permitir listar serviços oferecidos pelo negócio
- mostrar estado vazio inicialmente
- incluir botão `Novo serviço`
- preparar estrutura para futuramente adicionar serviços com nome, preço e descrição
- não implementar modal funcional ainda, apenas o botão visual

Estado vazio sugerido:

- título: `Nenhum serviço cadastrado`
- descrição: `Cadastre serviços, preços e descrições para que o atendente consiga responder seus clientes.`

### Página de Perguntas Frequentes

Crie `app/dashboard/faqs/page.tsx`.

Requisitos:

- permitir listar perguntas frequentes do negócio
- mostrar estado vazio inicialmente
- incluir botão `Nova pergunta`
- preparar estrutura para perguntas e respostas usadas pela IA
- não implementar criação real ainda

Estado vazio sugerido:

- título: `Nenhuma pergunta frequente cadastrada`
- descrição: `Adicione dúvidas comuns para melhorar as respostas do seu atendente automático.`

### Página de Leads

Crie `app/dashboard/leads/page.tsx`.

Requisitos:

- listar leads capturados pelo atendente
- usar tabela ou cards simples
- mostrar estado vazio inicialmente
- preparar campos para nome, telefone, interesse, status e data
- usar visual escuro e limpo

Estado vazio sugerido:

- título: `Nenhum lead encontrado`
- descrição: `Os contatos interessados aparecerão aqui assim que conversarem com seu atendente.`

### Página do Link de Atendimento

Crie `app/dashboard/chat-link/page.tsx`.

Requisitos:

- mostrar o link público do atendente
- incluir botão para copiar link
- incluir orientação para usar o link na bio do Instagram ou enviar pelo WhatsApp
- usar placeholder de link por enquanto
- não implementar cópia funcional ainda se isso exigir lógica adicional

Texto sugerido:

`Use este link na bio do Instagram, no WhatsApp ou em qualquer canal de atendimento para que seus clientes conversem com seu atendente automático.`

### Página Pública do Atendente

Crie `app/a/[slug]/page.tsx`.

Requisitos:

- representar a tela que o cliente final acessa
- mostrar interface simples de chat
- exibir mensagem de boas-vindas
- incluir campo de mensagem e botão de envio visual
- não integrar IA ainda
- não salvar mensagens ainda
- usar visual profissional e responsivo

Mensagem inicial sugerida:

`Olá! Sou o atendente automático deste negócio. Posso te ajudar com preços, horários, serviços ou orçamento.`

### Padrão de Componentes

Use os componentes já instalados de `shadcn/ui` sempre que fizer sentido:

- Button
- Card
- Input
- Textarea
- Tabs
- Dialog
- ScrollArea

Use ícones de `lucide-react`.

Não modifique diretamente arquivos em `components/ui/*`.

Use o helper `cn()` de `lib/utils.ts` para combinar classes quando necessário.

### Tema Visual

Todos os componentes devem respeitar o tema escuro definido em `globals.css`.

Requisitos visuais:

- fundo principal escuro
- cards em tom escuro levemente mais claro
- bordas sutis
- textos com bom contraste
- botões com aparência moderna
- nenhum estilo claro padrão do shadcn deve aparecer
- interface limpa, simples e vendável

### O que não implementar ainda

Não implementar neste momento:

- autenticação real
- banco de dados
- integração com IA
- integração com WhatsApp
- pagamentos
- criação real de leads
- envio real de mensagens
- modais funcionais complexos
- backend/API

O foco desta etapa é apenas criar a estrutura visual reutilizável do produto.

### Verificar ao concluir

- todas as novas páginas compilam sem erros de TypeScript
- não há erros de lint
- navbar e sidebar aparecem corretamente no dashboard
- layout funciona em tema escuro
- páginas principais existem e carregam
- estados vazios aparecem corretamente
- componentes importam sem erros
- nenhum estilo claro padrão aparece
- a página pública do atendente existe em `app/a/[slug]/page.tsx`
- `context/progress-tracker.md` foi atualizado após a implementação