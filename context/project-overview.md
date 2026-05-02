# [Auto Client]

## Visão Geral

Este aplicativo é um SaaS de atendente automático com IA voltado para pequenos negócios (barbearias, clínicas, restaurantes, oficinas). Ele resolve o problema de perda de clientes devido à demora no atendimento por WhatsApp ou redes sociais. O dono do negócio cadastra informações básicas (serviços, preços, horários) e o sistema gera um link público (para a bio do Instagram ou envio manual via WhatsApp). Através desse link, os clientes interagem com um chat de IA 24/7 que tira dúvidas, ajuda na escolha do serviço, coleta dados do lead (nome, telefone, interesse) e direciona para o agendamento final, enquanto o proprietário acompanha tudo em um painel simples.

## Objetivos

1. Oferecer um painel de configuração intuitivo onde o lojista possa preencher os dados do seu negócio em menos de 10 minutos.
2. Disponibilizar um chat de IA rápido e responsivo (focado em mobile) que consiga converter conversas em leads qualificados.
3. Possibilitar planos de assinatura acessíveis (R$ 49 a R$ 149/mês) gerenciados automaticamente na plataforma.

## Fluxo Principal do Usuário (Core User Flow)

1. **Lojista** se cadastra no SaaS.
2. **Lojista** preenche os dados do negócio (nome, endereço, horários, serviços, preços, FAQs).
3. O sistema gera um link exclusivo (ex: `app.com/chat/nomedonegocio`).
4. **Lojista** compartilha o link na bio do Instagram ou envia pelo WhatsApp.
5. **Cliente Final** acessa o link e conversa com a IA.
6. A IA responde dúvidas e coleta Nome + Telefone + Interesse.
7. O **Lojista** recebe o lead no seu painel (Dashboard) para seguir com o fechamento/agendamento.

## Funcionalidades

### Painel do Lojista (Dashboard)
- Cadastro e edição do perfil da empresa e base de conhecimento da IA.
- Visualização em tabela/kanban dos leads recebidos (Nome, Telefone, Histórico da conversa).
- Gestão de assinatura e cobrança.

### Interface do Cliente Final (Chat Público)
- Interface de chat amigável, focada em dispositivos móveis.
- Integração com IA (LLM configurado com o contexto do lojista) para responder de forma natural.
- Formulário ou fluxo de conversação para coleta de dados do lead no final do atendimento.

## Escopo

### Dentro do Escopo
- Autenticação e gestão de contas de Lojistas.
- Dashboard de gestão de leads e configurações da empresa.
- Interface de web chat pública gerada dinamicamente por lojista.
- Integração com API de LLM (ex: OpenAI, Anthropic ou Gemini) limitando o contexto aos dados do lojista.
- Sistema básico de cobrança/assinaturas.

### Fora do Escopo
- Integração nativa e oficial com a API do WhatsApp num primeiro momento (o foco é gerar o link web primeiro).
- Calendário complexo de agendamentos nativo (neste MVP, a IA captura o lead e o lojista agenda, ou a IA envia um link externo de agendamento como Calendly).

## Critérios de Sucesso

1. Um Lojista consegue criar uma conta, cadastrar seus dados e obter um link funcional sem ajuda do suporte.
2. Um Cliente Final acessa o link de um Lojista, conversa com a IA e seus dados aparecem corretamente no dashboard do Lojista.
3. A IA não inventa informações (alucinações) e restringe suas respostas aos dados cadastrados pelo Lojista.