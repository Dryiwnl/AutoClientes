# Regras de Fluxo de Trabalho da IA

## Abordagem

Construa este projeto incrementalmente utilizando um fluxo de trabalho guiado por especificações. Os arquivos de contexto definem o que construir, como construir e o estado atual do progresso. Sempre implemente com base nessas especificações — não deduza ou invente comportamentos do zero.

## Regras de Escopo

- Trabalhe em uma unidade de funcionalidade por vez.
- Prefira incrementos pequenos e verificáveis em vez de mudanças especulativas grandes.
- Não combine limites de sistemas não relacionados em uma única etapa de implementação.

## Quando Dividir o Trabalho

Divida uma etapa de implementação se ela combinar:
- Mudanças de UI e alterações pesadas na lógica do banco de dados ao mesmo tempo.
- Múltiplas rotas de API não relacionadas.
- Comportamentos não definidos claramente nos arquivos de contexto.
Se uma alteração não puder ser testada de ponta a ponta rapidamente, o escopo é muito amplo — divida-o.

## Lidando com Requisitos Ausentes

- Não invente comportamentos de produto que não estão definidos nos arquivos de contexto.
- Se um requisito for ambíguo, resolva-o no arquivo de contexto correspondente antes de implementar.
- Se um requisito estiver faltando, adicione-o como uma "Questão Aberta" em `progress-tracker.md` antes de continuar.

## Arquivos Protegidos

Não modifique os seguintes arquivos/diretórios a menos que explicitamente instruído:
- `components/ui/*` — componentes da biblioteca de UI gerados pelo shadcn.
- Arquivos de configuração de bibliotecas de terceiros depois de estabilizados.

## Mantendo a Documentação Atualizada

Atualize o arquivo de contexto relevante sempre que a implementação mudar:
- Decisões de arquitetura de sistema ou limites.
- Decisões de modelagem de dados/banco de dados.
- Convenções ou padrões de código.
- Escopo de funcionalidades.

## Antes de Passar para a Próxima Unidade

1. A unidade atual funciona de ponta a ponta dentro do seu escopo definido.
2. Nenhum invariante definido em `architecture.md` foi violado.
3. `progress-tracker.md` reflete o trabalho concluído.
4. O comando `npm run build` passa sem erros.