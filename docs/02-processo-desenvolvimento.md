# Seção 2 — Processo de Desenvolvimento

**Projeto:** Family Place  
**Responsável pela Seção:** Pierre Simon  
**Data:** 13/10/2026  

---

## 2.1 Modelo de Processo Adotado

O projeto **Family Place** adota um **Processo de Desenvolvimento Híbrido (Scrum + Kanban)**, estruturado em **ciclos semanais curtos** e apoiado por um **quadro visual de fluxo contínuo no GitHub Projects**.

Essa abordagem combina dois mecanismos complementares da Engenharia de Software:

1. **Cadência e governança do Scrum:** organização do trabalho em ciclos fixos de sete dias (sprints semanais), com metas claras vinculadas aos marcos contratuais da disciplina (M1 a M5) e rituais periódicos de planejamento, revisão e inspeção de qualidade.
2. **Gestão visual e controle de fluxo do Kanban:** monitoramento contínuo das tarefas em colunas de estado, aplicação de limites de trabalho em andamento (WIP — *Work In Progress*) e priorização contínua de desbloqueios entre atividades dependentes de documentação, prototipação e implementação do MVP.

---

## 2.2 Justificativa da Escolha do Modelo Híbrido

A seleção do modelo híbrido fundamenta-se nas restrições concretas do contexto acadêmico e extensionista do projeto: uma equipe reduzida de **quatro estudantes**, prazo fixo de **sete semanas** (de 13/10/2026 a 01/12/2026) e necessidade de validar requisitos junto à comunidade de João Pessoa (PB).

| Critério de Análise | Limitação de Modelos Alternativos | Benefício do Modelo Híbrido (Scrum + Kanban) |
| :--- | :--- | :--- |
| **Prazo fixo e curto (7 semanas)** | Um modelo sequencial puro (Cascata) posterga a validação visual e funcional para o final do cronograma, elevando o risco de retrabalho irreversível próximo a 01/12/2026. | Os ciclos semanais garantem entregas verificáveis a cada marco (M1 a M5), permitindo detectar desvios de escopo ou prazo com semanas de antecedência. |
| **Equipe de 4 integrantes com papéis acumulados** | O Scrum ortodoxo pressupõe papéis exclusivos (*Product Owner*, *Scrum Master* e equipe dedicada em tempo integral), o que não reflete a realidade de quatro estudantes acumulando gestão, requisitos, qualidade e programação. | O Kanban absorve a heterogeneidade das tarefas (redação técnica, pesquisa comunitária, wireframes e código React) sem paralisar o fluxo quando uma dependência precisa de revisão antecipada. |
| **Natureza extensionista e requisitos sensíveis** | Requisitos ligados a acessibilidade física, intelectual/sensorial, estrutura infantil e receptividade pet exigem feedback real da comunidade de João Pessoa antes da especificação final. | A inspeção semanal permite incorporar descobertas da elicitação diretamente no backlog e nos protótipos de baixa fidelidade sem romper o planejamento macro. |
| **Transparência e rastreabilidade acadêmica** | A gestão informal por mensagens dificulta a comprovação do progresso individual e da evolução documental para a disciplina. | O GitHub Projects integrado às *issues* e aos commits documenta de forma objetiva quem executou, revisou e concluiu cada entregável. |

---

## 2.3 Aplicação Prática do Processo

### 2.3.1 Ciclos Semanais de Execução

O horizonte de 13/10/2026 a 01/12/2026 é dividido em **sete ciclos semanais**, sincronizados com o calendário da disciplina e alinhados aos cinco marcos oficiais do projeto:

| Ciclo | Período | Foco Principal da Semana | Marco Vinculado |
| :--- | :--- | :--- | :--- |
| **Ciclo 1** | 13/10/2026 a 20/10/2026 | Estrutura inicial, definição de processo, TAP, Escopo, Viabilidade e PMCanvas. | M1 (20/10/2026) |
| **Ciclo 2** | 21/10/2026 a 27/10/2026 | Elaboração e aplicação dos instrumentos de elicitação com a comunidade de João Pessoa. | — |
| **Ciclo 3** | 28/10/2026 a 03/11/2026 | Síntese da elicitação e elaboração/validação dos protótipos de baixa fidelidade. | M2 (03/11/2026) |
| **Ciclo 4** | 04/11/2026 a 10/11/2026 | Especificação formal de requisitos (RU, RF, NF, RD), EAP, marcos e cronograma. | M3 (10/11/2026) |
| **Ciclo 5** | 11/11/2026 a 17/11/2026 | Personas, histórias de usuário, Definição de Pronto, Planning Poker, Kanban e plano do MVP. | M4 (17/11/2026) |
| **Ciclo 6** | 18/11/2026 a 24/11/2026 | Desenvolvimento do MVP em React (sem banco de dados), Matriz de Rastreabilidade e auditoria de qualidade. | — |
| **Ciclo 7** | 25/11/2026 a 01/12/2026 | Validação final com usuários, ajustes corretivos, fechamento da versão v1.0 e apresentação final. | M5 (01/12/2026) |

### 2.3.2 Quadro Kanban no GitHub Projects

Todo o trabalho da equipe é gerenciado em um quadro Kanban centralizado no **GitHub Projects**, organizado em cinco colunas obrigatórias:

1. **Backlog:** itens identificados e priorizados segundo o método MoSCoW, aguardando refinamento ou entrada em ciclo semanal.
2. **Pronto para Fazer:** tarefas selecionadas para o ciclo corrente, já detalhadas com responsável, identificador associado e critérios de verificação.
3. **Em Andamento:** tarefas em execução ativa. **Política de limite de WIP:** no máximo **2 itens simultâneos por integrante** (teto global de 8 itens na coluna), evitando dispersão e sobrecarga.
4. **Em Revisão:** artefatos concluídos pelo autor aguardando verificação cruzada por ao menos um outro integrante. **Política de limite de WIP:** no máximo **3 itens simultâneos**, garantindo priorização das revisões para não criar gargalos.
5. **Concluído:** entregas aprovadas na revisão cruzada, integradas ao repositório e aderentes à Definição de Pronto.

Cada cartão do quadro utiliza etiquetas padronizadas por categoria (`documentacao`, `elicitacao`, `prototipacao`, `requisitos`, `planejamento`, `backlog`, `mvp` e `qualidade`) e prioridade (`must`, `should`, `could`).

### 2.3.3 Rituais de Alinhamento, Revisão e Controle

Para preservar a disciplina operacional sem gerar burocracia excessiva, a equipe adota três rituais fixos por ciclo semanal:

| Ritual | Frequência e Duração | Participantes | Objetivo Operacional | Saída Verificável |
| :--- | :--- | :--- | :--- | :--- |
| **Planejamento do Ciclo** | Semanal (terças-feiras, 30 min) | Toda a equipe (condução: Pierre Simon) | Definir a meta da semana, mover itens para *Pronto para Fazer* e confirmar dependências entre seções. | Quadro Kanban atualizado e registro de pauta em ata. |
| **Sincronização de Fluxo** | Semanal (quintas-feiras, 15 min) | Toda a equipe | Verificar progresso das tarefas em andamento, remover bloqueios técnicos ou de coleta comunitária e balancear carga de trabalho. | Atualização de status no GitHub Projects e ações de desbloqueio. |
| **Revisão e Retrospectiva** | Semanal (segundas-feiras, 30 min) | Toda a equipe (qualidade: Caio Augusto; coordenação: Pierre Simon) | Inspecionar os artefatos finalizados frente aos padrões da disciplina, aprovar entregas de marco e registrar melhorias de processo. | Ata de reunião em `/artefatos/atas/` e lista de ajustes para o ciclo seguinte. |

### 2.3.4 Controle de Qualidade e Gestão de Configuração

- **Revisão cruzada obrigatória:** nenhum documento ou componente do MVP deve ser marcado como concluído sem a conferência de conformidade linguística, consistência de identificadores (`OBJ`, `RU`, `RF`, `NF`, `RD`, `EAP`, `M`, `H`) e aderência ao escopo por outro integrante.
- **Versionamento em Git:** todas as entregas oficiais são registradas por meio de commits descritivos no repositório, preservando o histórico rastreável de autoria dos quatro integrantes.
- **Gestão de mudanças:** qualquer alteração em objetivos, escopo ou requisitos aprovados após o marco M3 exige análise de impacto no cronograma e atualização imediata na Matriz de Rastreabilidade.

---

## 2.4 Limitações Assumidas pela Equipe

A adoção do processo híbrido reconhece explicitamente cinco limitações estruturais do ambiente acadêmico, acompanhadas de medidas concretas de mitigação:

| ID | Limitação Assumida | Impacto Potencial | Ação de Mitigação Adotada |
| :--- | :--- | :--- | :--- |
| **LIM1** | Dedicação parcial dos quatro integrantes devido às demais disciplinas do curso. | Redução da disponibilidade semanal em períodos de avaliações acadêmicas. | Aplicação da Regra de Sommerville (+50% sobre durações otimistas) no cronograma da Seção 6 e limitação rigorosa de WIP no Kanban. |
| **LIM2** | Acúmulo de papéis de gestão, engenharia de requisitos, qualidade e implementação pelos mesmos integrantes. | Risco de conflito de prioridade entre redigir artefatos e revisar entregas de colegas. | Segregação da revisão cruzada (o autor da seção não aprova sozinho a própria entrega) e reserva de tempo explícita para revisão às segundas-feiras. |
| **LIM3** | MVP implementado em React sem banco de dados remoto ou servidor em produção. | Impossibilidade de executar testes de carga concorrente, autenticação real em servidor ou armazenamento compartilhado em nuvem durante a disciplina. | Uso de conjunto estruturado de dados estáticos locais de estabelecimentos de João Pessoa com armazenamento no navegador para validar 100% dos fluxos *Must*. |
| **LIM4** | Recorte amostral concentrado no município de João Pessoa (PB) no prazo de sete semanas. | Resultados de elicitação e validação refletem a realidade local, não sendo generalizáveis estatisticamente para todo o país. | Foco explícito no caráter extensionista local de João Pessoa, garantindo relevância concreta e verificável junto ao público atendido. |
| **LIM5** | Dependência de disponibilidade externa de moradores e comerciantes para entrevistas e validação. | Possível atraso na obtenção de respostas durante os Ciclos 2 e 7. | Início da abordagem comunitária já no Ciclo 2, combinação de formulários digitais com contatos diretos e definição de meta realista e atingível de participantes. |
