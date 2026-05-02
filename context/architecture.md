# Contexto de Arquitetura

## Stack Tecnológico

| Camada | Tecnologia | Papel |
| ------ | ------ | ------ |
| Framework | Next.js (App Router) + TypeScript | Roteamento, SSR, Server Actions, API |
| UI | Tailwind CSS + shadcn/ui | Estilização e componentes acessíveis |
| Autenticação | Supabase Auth ou Clerk | Login seguro para Lojistas |
| Banco de Dados | PostgreSQL (via Prisma ou Drizzle) | Armazenamento relacional de lojas e leads |
| IA | API da OpenAI (ou Claude/Gemini) | Geração de respostas para o Chat |

## Limites do Sistema

- `app/(dashboard)/` — Área restrita aos lojistas. Gerencia a listagem de leads, edição da base de conhecimento e assinatura.
- `app/[storeSlug]/` — Rota pública dinâmica onde o chat do cliente final acontece. Não requer autenticação do cliente.
- `app/api/chat/` — Endpoint responsável por se comunicar com o modelo de IA, injetando o contexto do lojista específico na requisição.
- `lib/` — Serviços utilitários, instâncias de banco de dados e clientes de API de terceiros.

## Modelo de Armazenamento

- **Banco de Dados (PostgreSQL):** - `Lojista (Owner)`: Dados de autenticação e plano.
  - `Empresa (Store)`: Slug exclusivo, nome, configurações, prompt base, serviços, preços.
  - `Lead`: Dados coletados pelo chat (Nome, Telefone, Resumo do Pedido/Interesse, Status).
- **Armazenamento de Arquivos (Blob):** Logotipos das empresas e avatares do atendente virtual.

## Modelo de Autenticação e Acesso

- Todo **Lojista** faz login na plataforma via email/senha ou OAuth para acessar o Dashboard.
- A **Empresa** pertence a um único Lojista (neste MVP não há múltiplos usuários por empresa).
- As mutações de dados da empresa e de leitura dos leads requerem verificação de sessão do dono.
- O **Cliente Final** é anônimo; interage apenas com a rota pública de Chat da respectiva empresa.

## Invariantes

1. As respostas da IA devem obrigatoriamente usar o System Prompt gerado a partir dos dados cadastrados da empresa e possuir uma instrução estrita para não inventar serviços, horários ou preços não listados.
2. Um cliente final não pode, sob nenhuma circunstância, acessar ou visualizar conversas e leads de outros clientes.
3. As rotas de API do dashboard devem validar a propriedade do recurso (Ownership) antes de qualquer operação de leitura ou escrita.