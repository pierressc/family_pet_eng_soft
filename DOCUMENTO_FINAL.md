# FAMILY PLACE — DOCUMENTAÇÃO DE ENGENHARIA DE SOFTWARE

**Curso:** Ciência da Computação  
**Disciplina:** Engenharia de Software  
**Professor Responsável:** Prof. Fernando Marlon Soares Figueiredo  
**Recorte Extensionista:** Município de João Pessoa (PB)  
**Período de Execução:** 13/10/2026 a 01/12/2026  
**Entrega e Apresentação Final:** 01/12/2026  
**Processo de Desenvolvimento:** Híbrido (Scrum + Kanban)  
**Versão Consolidada:** v1.0 (Homologação Final)  

---

## Equipe e Responsabilidades

| Integrante | Papel no Projeto | Seções sob Responsabilidade |
| :--- | :--- | :--- |
| **Pierre Simon** | Gerente de Projeto / Coordenação e Planejamento | Seções 1, 2, 3 (TAP e Escopo), 6 (EAP, Marcos e Cronograma), PMCanvas e Atas |
| **Kewy Huang** | Engenharia de Requisitos (Elicitação e Prototipação) | Seção 3 (Estudo de Viabilidade) e Seção 4 (Elicitação e Protótipos de Baixa Fidelidade) |
| **Caio Augusto** | Engenharia de Requisitos (Especificação) e Qualidade | Seção 5 (Especificação de Requisitos) e Seção 9 (Rastreabilidade, Referências, Anexos e Qualidade) |
| **Renan Mendes** | Gestão de Backlog e Estimativas | Seção 7 (Personas, Histórias, DoD, Planning Poker e Kanban) e Seção 8 (Organização do MVP) |

---

## Controle de Versões do Documento Consolidado

| Versão | Data | Responsável(is) | Descrição das Alterações | Marco |
| :---: | :---: | :--- | :--- | :---: |
| **v0.1** | 13/10/2026 | Pierre Simon | Abertura do repositório, estrutura de diretórios, Seção 1 e Seção 2. | Abertura |
| **v0.2** | 20/10/2026 | Pierre Simon; Kewy Huang | Consolidação da Seção 3 (TAP, Escopo e Viabilidade) e PMCanvas. | M1 |
| **v0.3** | 03/11/2026 | Kewy Huang | Inclusão da Seção 4 (Elicitação em João Pessoa e Protótipos de Baixa Fidelidade). | M2 |
| **v0.4** | 10/11/2026 | Caio Augusto; Pierre Simon | Publicação da Seção 5 (Especificação de Requisitos) e da Seção 6 (EAP, Marcos e Cronograma Sommerville). | M3 |
| **v0.5** | 17/11/2026 | Renan Mendes | Inclusão da Seção 7 (Backlog, Personas, Planning Poker e Kanban) e da Seção 8 (Organização do MVP). | M4 |
| **v0.9** | 24/11/2026 | Caio Augusto; Equipe | Publicação da Seção 9 (Matriz de Rastreabilidade, Referências, Anexos e Declaração de Uso de IA) e revisão integrada. | Pré-entrega |
| **v1.0** | 01/12/2026 | Pierre Simon; Kewy Huang; Caio Augusto; Renan Mendes | Versão final homologada, entrega consolidada e apresentação na disciplina. | M5 |

---

## Sumário

1. [Seção 1 — Identificação do Projeto](#secao-1) *(Responsável: Pierre Simon)*
2. [Seção 2 — Processo de Desenvolvimento](#secao-2) *(Responsável: Pierre Simon)*
3. [Seção 3 — Termo de Abertura do Projeto (TAP), Escopo e Estudo de Viabilidade](#secao-3) *(Responsáveis: Pierre Simon e Kewy Huang)*
4. [Seção 4 — Elicitação de Requisitos e Protótipos de Baixa Fidelidade](#secao-4) *(Responsável: Kewy Huang)*
5. [Seção 5 — Especificação de Requisitos](#secao-5) *(Responsável: Caio Augusto)*
6. [Seção 6 — Estrutura Analítica do Projeto (EAP), Marcos e Cronograma](#secao-6) *(Responsável: Pierre Simon)*
7. [Seção 7 — Backlog do Produto, Personas, Histórias de Usuário, Estimativas e Kanban](#secao-7) *(Responsável: Renan Mendes)*
8. [Seção 8 — Organização do MVP (Produto Mínimo Viável)](#secao-8) *(Responsável: Renan Mendes)*
9. [Seção 9 — Matriz de Rastreabilidade, Referências, Anexos e Declaração de Uso de IA](#secao-9) *(Responsável: Caio Augusto)*

---

<a id="secao-1"></a>

## Seção 1 — Identificação do Projeto

**Projeto:** Family Place  
**Responsável pela Seção:** Pierre Simon  
**Versão:** 1.0 (Linha de Base Estrutural)  
**Data de Criação:** 13/10/2026  

---

### 1.1 Dados Gerais do Projeto

| Campo | Descrição |
| :--- | :--- |
| **Nome do Projeto** | Family Place |
| **Natureza do Projeto** | Plataforma web comunitária de caráter extensionista (com potencial evolutivo para aplicativo mobile) |
| **Recorte Geográfico Primário** | Município de João Pessoa (PB) |
| **Curso** | Ciência da Computação |
| **Disciplina** | Engenharia de Software |
| **Professor Responsável** | Prof. Fernando Marlon Soares Figueiredo |
| **Período de Execução** | 13/10/2026 a 01/12/2026 |
| **Data de Entrega e Apresentação Final** | 01/12/2026 |
| **Processo de Desenvolvimento** | Híbrido (Scrum + Kanban), com ciclos semanais curtos e gestão visual no GitHub Projects |

---

### 1.2 Síntese do Propósito

O **Family Place** é uma plataforma web comunitária voltada à cidade de João Pessoa (PB) com a finalidade de auxiliar famílias, tutores de animais de estimação, pessoas idosas, pessoas com deficiência (física ou intelectual) e pessoas neurodivergentes a localizar estabelecimentos comerciais acolhedores, seguros e preparados para suas necessidades específicas. Simultaneamente, o projeto promove a visibilidade de estabelecimentos locais inclusivos sem intermediar pagamentos online ou entregas próprias.

---

### 1.3 Equipe e Divisão de Responsabilidades

A equipe é composta por quatro integrantes do curso de Ciência da Computação, atuando com papéis acumulados de gestão, engenharia de requisitos, prototipação, planejamento, qualidade e implementação do MVP:

| Integrante | Papel Principal e Papéis Acumulados | Seções e Artefatos sob Responsabilidade |
| :--- | :--- | :--- |
| **Pierre Simon** | Gerente de Projeto / Coordenação e Planejamento | Seção 1 (Identificação), Seção 2 (Processo de Desenvolvimento), Seção 3 (TAP e Escopo), Seção 6 (EAP, Marcos e Cronograma), PMCanvas e Atas de Reunião. |
| **Kewy Huang** | Engenharia de Requisitos (Elicitação e Prototipação) | Seção 3 (Estudo de Viabilidade) e Seção 4 (Elicitação de Requisitos e Protótipos de Baixa Fidelidade). |
| **Caio Augusto** | Engenharia de Requisitos (Especificação) e Qualidade | Seção 5 (Especificação de Requisitos) e Seção 9 (Matriz de Rastreabilidade, Referências, Anexos e Revisão de Qualidade). |
| **Renan Mendes** | Gestão de Backlog e Estimativas | Seção 7 (Personas, Histórias de Usuário, Definição de Pronto, Planning Poker e Kanban) e Seção 8 (Organização do MVP). |

Embora cada seção possua um responsável nominal pela redação e consolidação técnica, todos os artefatos passam por revisão cruzada entre os integrantes antes da incorporação aos marcos oficiais do projeto.

---

### 1.4 Organização da Documentação no Repositório

A estrutura oficial do repositório separa a documentação textual numerada (`/docs`) dos artefatos visuais, planilhas, protótipos e registros complementares (`/artefatos`):

| Caminho no Repositório | Finalidade |
| :--- | :--- |
| `/README.md` | Apresentação geral do projeto e índice navegável do repositório. |
| `/DOCUMENTO_FINAL.md` | Documento mestre consolidado com capa, controle de versões, sumário e Seções 1 a 9. |
| `/docs/01-identificacao.md` | Identificação do projeto, equipe, responsabilidades e controle de versões. |
| `/docs/02-processo-desenvolvimento.md` | Definição e justificativa do processo híbrido (Scrum + Kanban) e limitações assumidas. |
| `/docs/03-tap-escopo-viabilidade.md` | Termo de Abertura do Projeto (TAP), declaração de escopo e estudo de viabilidade. |
| `/docs/04-elicitacao-prototipos.md` | Plano e resultados da elicitação comunitária em João Pessoa e validação dos protótipos de baixa fidelidade. |
| `/docs/05-especificacao-requisitos.md` | Especificação formal de requisitos (`RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`). |
| `/docs/06-eap-marcos-cronograma.md` | EAP hierárquica, marcos verificáveis (`M1`–`M5`) e cronograma com Regra de Sommerville (+50%). |
| `/docs/07-backlog-estimativas.md` | Personas, epics, histórias de usuário (`H01`–`H15`), Definição de Pronto, Planning Poker e Kanban. |
| `/docs/08-mvp.md` | Organização do MVP em React sem banco de dados, instruções de execução e roteiro de demonstração. |
| `/docs/09-referencias-anexos-ia.md` | Matriz de Rastreabilidade completa, referências bibliográficas, anexos e Declaração de Uso de IA. |
| `/artefatos/pmcanvas/` | Project Model Canvas (`pmcanvas.html`) em formato visual autônomo. |
| `/artefatos/elicitacao/` | Questionário, roteiro de entrevista e consolidação dos resultados em João Pessoa (PB). |
| `/artefatos/wireframes/` | Protótipos de baixa fidelidade das quatro telas essenciais (`wireframes.html`). |
| `/artefatos/requisitos/` | Catálogo tabular consolidado dos 33 requisitos (`requisitos.csv`). |
| `/artefatos/planejamento/` | Diagrama da EAP (`eap.html`), cronograma (`cronograma.csv`) e gráfico Gantt (`gantt.html`). |
| `/artefatos/backlog/` | Quadro Kanban visual (`kanban.html`) e planilha de histórias (`backlog.csv`). |
| `/artefatos/rastreabilidade/` | Matriz de rastreabilidade bidirecional completa (`matriz_rastreabilidade.csv`). |
| `/artefatos/atas/` | Atas formais dos sete ciclos semanais de reuniões (`atas-reunioes.md`). |

---

### 1.5 Controle de Versões da Documentação

A tabela a seguir registra a linha evolutiva planejada e controlada das versões do conjunto documental do projeto *Family Place* ao longo do período de 13/10/2026 a 01/12/2026:

| Versão | Data | Responsável(is) | Descrição das Alterações | Marco Associado |
| :--- | :--- | :--- | :--- | :--- |
| **v0.1** | 13/10/2026 | Pierre Simon | Abertura formal do repositório, criação da estrutura de diretórios, elaboração da Seção 1 (Identificação) e da Seção 2 (Processo de Desenvolvimento). | Abertura do Projeto |
| **v0.2** | 20/10/2026 | Pierre Simon; Kewy Huang | Consolidação da Seção 3 (TAP, Escopo e Estudo de Viabilidade) e geração do artefato visual PMCanvas. | M1 |
| **v0.3** | 03/11/2026 | Kewy Huang | Inclusão da Seção 4 (Elicitação de Requisitos com a comunidade de João Pessoa e Protótipos de Baixa Fidelidade). | M2 |
| **v0.4** | 10/11/2026 | Caio Augusto; Pierre Simon | Publicação da Seção 5 (Especificação Formal de Requisitos: RU, RF, NF e RD) e da Seção 6 (EAP, Marcos e Cronograma com Regra de Sommerville). | M3 |
| **v0.5** | 17/11/2026 | Renan Mendes | Inclusão da Seção 7 (Personas, Histórias de Usuário, Definição de Pronto, Planning Poker e Kanban) e da Seção 8 (Organização do MVP). | M4 |
| **v0.9** | 24/11/2026 | Caio Augusto; Equipe | Publicação da Seção 9 (Matriz de Rastreabilidade ponta a ponta, Referências, Anexos e Revisão de Qualidade) e validação integrada do MVP em React. | Pré-entrega |
| **v1.0** | 01/12/2026 | Pierre Simon; Kewy Huang; Caio Augusto; Renan Mendes | Homologação final de toda a documentação, verificação integral de rastreabilidade e entrega para apresentação na disciplina. | M5 |

---

<a id="secao-2"></a>

## Seção 2 — Processo de Desenvolvimento

**Projeto:** Family Place  
**Responsável pela Seção:** Pierre Simon  
**Data:** 13/10/2026  

---

### 2.1 Modelo de Processo Adotado

O projeto **Family Place** adota um **Processo de Desenvolvimento Híbrido (Scrum + Kanban)**, estruturado em **ciclos semanais curtos** e apoiado por um **quadro visual de fluxo contínuo no GitHub Projects**.

Essa abordagem combina dois mecanismos complementares da Engenharia de Software:

1. **Cadência e governança do Scrum:** organização do trabalho em ciclos fixos de sete dias (sprints semanais), com metas claras vinculadas aos marcos contratuais da disciplina (M1 a M5) e rituais periódicos de planejamento, revisão e inspeção de qualidade.
2. **Gestão visual e controle de fluxo do Kanban:** monitoramento contínuo das tarefas em colunas de estado, aplicação de limites de trabalho em andamento (WIP — *Work In Progress*) e priorização contínua de desbloqueios entre atividades dependentes de documentação, prototipação e implementação do MVP.

---

### 2.2 Justificativa da Escolha do Modelo Híbrido

A seleção do modelo híbrido fundamenta-se nas restrições concretas do contexto acadêmico e extensionista do projeto: uma equipe reduzida de **quatro estudantes**, prazo fixo de **sete semanas** (de 13/10/2026 a 01/12/2026) e necessidade de validar requisitos junto à comunidade de João Pessoa (PB).

| Critério de Análise | Limitação de Modelos Alternativos | Benefício do Modelo Híbrido (Scrum + Kanban) |
| :--- | :--- | :--- |
| **Prazo fixo e curto (7 semanas)** | Um modelo sequencial puro (Cascata) posterga a validação visual e funcional para o final do cronograma, elevando o risco de retrabalho irreversível próximo a 01/12/2026. | Os ciclos semanais garantem entregas verificáveis a cada marco (M1 a M5), permitindo detectar desvios de escopo ou prazo com semanas de antecedência. |
| **Equipe de 4 integrantes com papéis acumulados** | O Scrum ortodoxo pressupõe papéis exclusivos (*Product Owner*, *Scrum Master* e equipe dedicada em tempo integral), o que não reflete a realidade de quatro estudantes acumulando gestão, requisitos, qualidade e programação. | O Kanban absorve a heterogeneidade das tarefas (redação técnica, pesquisa comunitária, wireframes e código React) sem paralisar o fluxo quando uma dependência precisa de revisão antecipada. |
| **Natureza extensionista e requisitos sensíveis** | Requisitos ligados a acessibilidade física, intelectual/sensorial, estrutura infantil e receptividade pet exigem feedback real da comunidade de João Pessoa antes da especificação final. | A inspeção semanal permite incorporar descobertas da elicitação diretamente no backlog e nos protótipos de baixa fidelidade sem romper o planejamento macro. |
| **Transparência e rastreabilidade acadêmica** | A gestão informal por mensagens dificulta a comprovação do progresso individual e da evolução documental para a disciplina. | O GitHub Projects integrado às *issues* e aos commits documenta de forma objetiva quem executou, revisou e concluiu cada entregável. |

---

### 2.3 Aplicação Prática do Processo

#### 2.3.1 Ciclos Semanais de Execução

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

#### 2.3.2 Quadro Kanban no GitHub Projects

Todo o trabalho da equipe é gerenciado em um quadro Kanban centralizado no **GitHub Projects**, organizado em cinco colunas obrigatórias:

1. **Backlog:** itens identificados e priorizados segundo o método MoSCoW, aguardando refinamento ou entrada em ciclo semanal.
2. **Pronto para Fazer:** tarefas selecionadas para o ciclo corrente, já detalhadas com responsável, identificador associado e critérios de verificação.
3. **Em Andamento:** tarefas em execução ativa. **Política de limite de WIP:** no máximo **2 itens simultâneos por integrante** (teto global de 8 itens na coluna), evitando dispersão e sobrecarga.
4. **Em Revisão:** artefatos concluídos pelo autor aguardando verificação cruzada por ao menos um outro integrante. **Política de limite de WIP:** no máximo **3 itens simultâneos**, garantindo priorização das revisões para não criar gargalos.
5. **Concluído:** entregas aprovadas na revisão cruzada, integradas ao repositório e aderentes à Definição de Pronto.

Cada cartão do quadro utiliza etiquetas padronizadas por categoria (`documentacao`, `elicitacao`, `prototipacao`, `requisitos`, `planejamento`, `backlog`, `mvp` e `qualidade`) e prioridade (`must`, `should`, `could`).

#### 2.3.3 Rituais de Alinhamento, Revisão e Controle

Para preservar a disciplina operacional sem gerar burocracia excessiva, a equipe adota três rituais fixos por ciclo semanal:

| Ritual | Frequência e Duração | Participantes | Objetivo Operacional | Saída Verificável |
| :--- | :--- | :--- | :--- | :--- |
| **Planejamento do Ciclo** | Semanal (terças-feiras, 30 min) | Toda a equipe (condução: Pierre Simon) | Definir a meta da semana, mover itens para *Pronto para Fazer* e confirmar dependências entre seções. | Quadro Kanban atualizado e registro de pauta em ata. |
| **Sincronização de Fluxo** | Semanal (quintas-feiras, 15 min) | Toda a equipe | Verificar progresso das tarefas em andamento, remover bloqueios técnicos ou de coleta comunitária e balancear carga de trabalho. | Atualização de status no GitHub Projects e ações de desbloqueio. |
| **Revisão e Retrospectiva** | Semanal (segundas-feiras, 30 min) | Toda a equipe (qualidade: Caio Augusto; coordenação: Pierre Simon) | Inspecionar os artefatos finalizados frente aos padrões da disciplina, aprovar entregas de marco e registrar melhorias de processo. | Ata de reunião em `/artefatos/atas/` e lista de ajustes para o ciclo seguinte. |

#### 2.3.4 Controle de Qualidade e Gestão de Configuração

- **Revisão cruzada obrigatória:** nenhum documento ou componente do MVP deve ser marcado como concluído sem a conferência de conformidade linguística, consistência de identificadores (`OBJ`, `RU`, `RF`, `NF`, `RD`, `EAP`, `M`, `H`) e aderência ao escopo por outro integrante.
- **Versionamento em Git:** todas as entregas oficiais são registradas por meio de commits descritivos no repositório, preservando o histórico rastreável de autoria dos quatro integrantes.
- **Gestão de mudanças:** qualquer alteração em objetivos, escopo ou requisitos aprovados após o marco M3 exige análise de impacto no cronograma e atualização imediata na Matriz de Rastreabilidade.

---

### 2.4 Limitações Assumidas pela Equipe

A adoção do processo híbrido reconhece explicitamente cinco limitações estruturais do ambiente acadêmico, acompanhadas de medidas concretas de mitigação:

| ID | Limitação Assumida | Impacto Potencial | Ação de Mitigação Adotada |
| :--- | :--- | :--- | :--- |
| **LIM1** | Dedicação parcial dos quatro integrantes devido às demais disciplinas do curso. | Redução da disponibilidade semanal em períodos de avaliações acadêmicas. | Aplicação da Regra de Sommerville (+50% sobre durações otimistas) no cronograma da Seção 6 e limitação rigorosa de WIP no Kanban. |
| **LIM2** | Acúmulo de papéis de gestão, engenharia de requisitos, qualidade e implementação pelos mesmos integrantes. | Risco de conflito de prioridade entre redigir artefatos e revisar entregas de colegas. | Segregação da revisão cruzada (o autor da seção não aprova sozinho a própria entrega) e reserva de tempo explícita para revisão às segundas-feiras. |
| **LIM3** | MVP implementado em React sem banco de dados remoto ou servidor em produção. | Impossibilidade de executar testes de carga concorrente, autenticação real em servidor ou armazenamento compartilhado em nuvem durante a disciplina. | Uso de conjunto estruturado de dados estáticos locais de estabelecimentos de João Pessoa com armazenamento no navegador para validar 100% dos fluxos *Must*. |
| **LIM4** | Recorte amostral concentrado no município de João Pessoa (PB) no prazo de sete semanas. | Resultados de elicitação e validação refletem a realidade local, não sendo generalizáveis estatisticamente para todo o país. | Foco explícito no caráter extensionista local de João Pessoa, garantindo relevância concreta e verificável junto ao público atendido. |
| **LIM5** | Dependência de disponibilidade externa de moradores e comerciantes para entrevistas e validação. | Possível atraso na obtenção de respostas durante os Ciclos 2 e 7. | Início da abordagem comunitária já no Ciclo 2, combinação de formulários digitais com contatos diretos e definição de meta realista e atingível de participantes. |

---

<a id="secao-3"></a>

## Seção 3 — Termo de Abertura do Projeto (TAP), Escopo e Estudo de Viabilidade

**Projeto:** Family Place  
**Responsáveis pela Seção:** Pierre Simon (Seções 3.1 e 3.2) e Kewy Huang (Seção 3.3)  
**Data:** 20/10/2026  

---

### 3.1 Termo de Abertura do Projeto (TAP)

#### 3.1.1 Propósito e Justificativa Comunitária (Extensão)

O projeto **Family Place** tem como propósito conceber, especificar e prototipar uma plataforma web comunitária voltada ao município de **João Pessoa (PB)**, dedicada a conectar pessoas a estabelecimentos comerciais realmente preparados para o acolhimento inclusivo de famílias e animais de estimação.

A justificativa comunitária decorre de uma lacuna prática enfrentada diariamente por cinco grupos da população local:

1. **Famílias com crianças:** dificuldade em verificar previamente a existência de infraestrutura segura e adequada, como trocadores, cadeirões, espaços infantis monitorados e áreas protegidas.
2. **Tutores de animais de estimação (pets):** ausência de regras claras e verificáveis sobre aceitação por porte do animal, disponibilidade de áreas cobertas permitidas e oferta de água para pets.
3. **Pessoas idosas:** carência de informações confiáveis sobre conforto físico, acessibilidade sem obstáculos, assentos adequados e níveis controlados de ruído ambiental.
4. **Pessoas com Deficiência (PCD — física ou intelectual):** falta de detalhamento objetivo sobre rampas, banheiros adaptados, sinalização tátil, circulação interna e comunicação acessível.
5. **Pessoas neurodivergentes (ex.: autismo e TDAH):** necessidade crítica de previsibilidade ambiental antes do deslocamento, envolvendo nível de ruído, iluminação e condições sensoriais do espaço.

Atualmente, diretórios genéricos de mapas e avaliações concentram-se em uma nota única e subjetiva, omitindo critérios objetivos de acessibilidade, conforto sensorial, estrutura infantil e receptividade pet. Ao disponibilizar filtros combinados e um sistema de avaliação multicritério em quatro pilares, o Family Place reduz a incerteza antes de sair de casa e amplia a visibilidade de comércios locais inclusivos de João Pessoa, fortalecendo o vínculo extensionista entre a universidade e a comunidade.

---

#### 3.1.2 Objetivos SMART

Os objetivos do projeto seguem os critérios **SMART** (Específico, Mensurável, Atingível, Relevante e Temporal), todos vinculados ao prazo limite de **01/12/2026**:

| ID | Objetivo SMART | Critério de Verificação (Métrica) | Prazo |
| :--- | :--- | :--- | :--- |
| **OBJ1** | Disponibilizar uma plataforma web responsiva em React (MVP sem banco de dados) com catálogo inicial de ao menos **15 estabelecimentos de João Pessoa (PB)** e mecanismo de busca com combinação simultânea de pelo menos **4 categorias de filtros** (tipo de local, estrutura infantil, acessibilidade física/intelectual/sensorial e receptividade pet). | Mínimo de 15 locais cadastrados no catálogo do MVP, 4 categorias combináveis operacionais e taxa mínima de **90%** de conclusão bem-sucedida nas tarefas de busca durante os testes de validação com usuários. | 01/12/2026 |
| **OBJ2** | Implementar o sistema de avaliação multicritério segmentado em **4 pilares independentes** (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) em escala de **1 a 5 estrelas** com comentário textual, integrado ao recurso de listas de favoritos organizadas por critério. | Cálculo automático das médias em 100% dos 4 pilares exibidos na página de cada estabelecimento e criação/consulta funcional de listas de favoritos por critério sem falhas bloqueantes. | 01/12/2026 |
| **OBJ3** | Estruturar vitrines informativas com destaque para itens **"Favoritos da Casa"** e redirecionamento direto para canais externos oficiais (WhatsApp ou site) em **100%** dos estabelecimentos do MVP, operando sem pagamentos online, checkout financeiro ou delivery próprio, além de especificar integralmente os módulos evolutivos (gestão do estabelecimento, Clube de Fidelidade, seguidores/timeline e assistente virtual). | 100% dos perfis do MVP exibindo vitrine informativa e link direto funcional para contato externo, 0 transações financeiras internas e 100% dos módulos evolutivos formalmente especificados na Seção 5. | 01/12/2026 |
| **OBJ4** | Entregar a documentação completa de Engenharia de Software (**Seções 1 a 9**) e validar o protótipo funcional do MVP junto a, no mínimo, **12 moradores** e **3 representantes de estabelecimentos locais de João Pessoa (PB)**, assegurando coerência documental ponta a ponta. | 9 seções documentais aprovadas na revisão interna, registros de validação com ao menos 15 participantes externos (12 moradores + 3 estabelecimentos) e **100%** de cobertura na Matriz de Rastreabilidade sem células órfãs. | 01/12/2026 |

---

#### 3.1.3 Partes Interessadas (Stakeholders)

| Stakeholder | Categoria | Papel no Projeto | Principais Expectativas |
| :--- | :--- | :--- | :--- |
| **Prof. Fernando Marlon Soares Figueiredo** | Interno (Patrocinador Acadêmico) | Docente orientador e avaliador da disciplina de Engenharia de Software. | Documentação rigorosa, rastreável e coerente, adesão às boas práticas da disciplina e entrega do MVP até 01/12/2026. |
| **Pierre Simon** | Interno (Equipe) | Gerente de Projeto, Coordenação, Planejamento, TAP, Escopo, EAP, Cronograma e Atas. | Cumprimento dos marcos M1 a M5, alinhamento semanal da equipe e controle de escopo e prazos. |
| **Kewy Huang** | Interno (Equipe) | Engenharia de Requisitos (Elicitação, Estudo de Viabilidade e Prototipação). | Captura fiel das dores reais da comunidade de João Pessoa e protótipos de baixa fidelidade validados. |
| **Caio Augusto** | Interno (Equipe) | Especificação de Requisitos, Rastreabilidade e Garantia da Qualidade. | Requisitos claros, objetivos e verificáveis, ausência de termos vagos e Matriz de Rastreabilidade sem lacunas. |
| **Renan Mendes** | Interno (Equipe) | Gestão de Backlog, Estimativas (Planning Poker), Kanban e Organização do MVP. | Backlog priorizado, histórias de usuário bem estruturadas e escopo do MVP executável dentro do prazo. |
| **Moradores de João Pessoa (Famílias, Tutores de Pets, Idosos, PCD e Neurodivergentes)** | Externo (Usuários Clientes) | Público-alvo principal, participantes da elicitação e da validação do MVP. | Informações confiáveis, filtragem combinada precisa e avaliações segmentadas antes de visitar um local. |
| **Estabelecimentos Comerciais Locais de João Pessoa** | Externo (Usuários Parceiros) | Restaurantes, cafeterias, parques privados, clínicas e espaços de lazer da cidade. | Divulgação transparente de sua estrutura inclusiva, vitrine informativa e contato direto sem comissões sobre vendas. |

---

#### 3.1.4 Gerente de Projeto e Nível de Autoridade

- **Gerente de Projeto Designado:** **Pierre Simon**.
- **Nível de Autoridade:**
  - Conduzir o planejamento semanal, acompanhar o quadro Kanban no GitHub Projects e redistribuir tarefas operacionais mediante acordo com os integrantes;
  - Convocar reuniões de alinhamento e revisão, registrando deliberações nas atas oficiais;
  - Consolidar e liberar as entregas correspondentes aos marcos M1 a M5 após validação de qualidade;
  - Propor ajustes de escopo ou cronograma diante de riscos concretizados, respeitando o prazo final de 01/12/2026.
- **Limites de Autoridade:** alterações estruturais nos objetivos SMART ou nas exigências avaliativas dependem de consenso da equipe e alinhamento com o docente da disciplina; não há autorização para contratação de serviços pagos, visto que o orçamento financeiro do projeto é zero.

---

#### 3.1.5 Marcos de Alto Nível (M1 a M5)

Todos os marcos do projeto são definidos exclusivamente como **entregas verificáveis**:

| ID | Marco | Data-Alvo | Entrega Verificável | Responsável Principal |
| :--- | :--- | :--- | :--- | :--- |
| **M1** | Aprovação do TAP, Escopo, Viabilidade e PMCanvas | 20/10/2026 | Seções 1, 2 e 3 publicadas no repositório e artefato `pmcanvas.html` revisado pela equipe. | Pierre Simon e Kewy Huang |
| **M2** | Conclusão da Elicitação e Protótipos de Baixa Fidelidade | 03/11/2026 | Relatório de elicitação comunitária em João Pessoa e conjunto completo de wireframes de baixa fidelidade validados. | Kewy Huang |
| **M3** | Linha de Base de Requisitos e Planejamento Detalhado | 10/11/2026 | Especificação formal (RU, RF, NF, RD) auditada quanto à qualidade e Seção 6 (EAP, marcos e cronograma com Regra de Sommerville) publicada. | Caio Augusto e Pierre Simon |
| **M4** | Consolidação do Backlog, Estimativas e Plano do MVP | 17/11/2026 | Personas, histórias de usuário, Definição de Pronto, resultados do Planning Poker, quadro Kanban ativo e definição final do MVP. | Renan Mendes |
| **M5** | Entrega Final da Documentação Integrada e Apresentação do MVP | 01/12/2026 | Versão v1.0 das Seções 1 a 9, Matriz de Rastreabilidade com 100% de cobertura, protótipo funcional do MVP em React validado e apresentação final na disciplina. | Toda a Equipe |

---

#### 3.1.6 Premissas e Restrições

**Premissas:**
- **PRE1:** Os quatro integrantes possuem computadores próprios e acesso regular à internet para trabalho colaborativo remoto e presencial.
- **PRE2:** Moradores e representantes de estabelecimentos de João Pessoa (PB) estarão disponíveis para participar das etapas de elicitação e validação dentro do calendário acadêmico.
- **PRE3:** Ferramentas gratuitas de versionamento, documentação e desenvolvimento (GitHub, Visual Studio Code, Node.js e React) permanecerão disponíveis sem custos durante todo o semestre.
- **PRE4:** A validação do MVP da disciplina pode ocorrer por meio de aplicação web em React com conjunto de dados estáticos locais, sem exigência de servidor de banco de dados em produção.

**Restrições:**
- **RES1 (Prazo):** A entrega integral e a apresentação final devem ocorrer impreterivelmente em **01/12/2026**.
- **RES2 (Orçamento):** O orçamento financeiro direto é estritamente de **R$ 0,00**, vedando licenças comerciais, hospedagens pagas ou APIs tarifadas.
- **RES3 (Equipe):** A força de trabalho é fixa em **quatro estudantes** com dedicação parcial.
- **RES4 (Escopo Negativo):** O sistema não deve incluir processamento de pagamentos online, checkout financeiro, delivery próprio, aplicativo mobile nativo ou avaliação individual por item do cardápio.
- **RES5 (Conformidade e Privacidade):** Qualquer dado coletado na pesquisa comunitária deve respeitar anonimização e consentimento prévio conforme os princípios da Lei Geral de Proteção de Dados (LGPD).

---

#### 3.1.7 Riscos Iniciais em Alto Nível

| ID | Descrição do Risco | Probabilidade | Impacto | Estratégia de Mitigação |
| :--- | :--- | :--- | :--- | :--- |
| **RSK1** | Baixa adesão de moradores ou estabelecimentos de João Pessoa na etapa de elicitação e validação. | Média | Alto | Iniciar a divulgação dos formulários no Ciclo 2, combinar canais digitais com contatos diretos locais e trabalhar com metas objetivas (12 moradores e 3 estabelecimentos). |
| **RSK2** | Expansão descontrolada de escopo (*scope creep*) com inclusão de recursos financeiros ou complexidade excessiva no MVP. | Média | Alto | Aplicar rigorosamente a priorização MoSCoW e a lista explícita de Escopo Negativo definida na Seção 3.2. |
| **RSK3** | Sobrecarga acadêmica dos integrantes em semanas de provas de outras disciplinas. | Alta | Médio | Incorporar margem de +50% da Regra de Sommerville no cronograma e limitar o trabalho em andamento (WIP) no Kanban. |
| **RSK4** | Divergência entre requisitos especificados, protótipos de baixa fidelidade e implementação do MVP. | Média | Alto | Conduzir revisão cruzada semanal e atualizar continuamente a Matriz de Rastreabilidade antes do fechamento de cada marco. |
| **RSK5** | Descrição superficial ou imprecisa de critérios de acessibilidade física e sensorial. | Média | Médio | Consultar diretamente representantes dos públicos atendidos e referenciar normas reconhecidas de acessibilidade (ex.: ABNT NBR 9050 e diretrizes WCAG). |
| **RSK6** | Atraso na finalização da revisão de qualidade e integração documental próxima a 01/12/2026. | Baixa | Alto | Antecipar a pré-entrega consolidada (v0.9) para 24/11/2026, reservando a última semana exclusivamente para validação final e ajustes. |

---

#### 3.1.8 Orçamento Preliminar e Subprodutos

##### Orçamento Preliminar (Recursos Financeiros e Esforço)

O projeto opera com **custo financeiro direto de R$ 0,00**, baseado integralmente em ferramentas gratuitas e recursos computacionais próprios da equipe:

| Item / Recurso | Finalidade | Modelo de Licenciamento | Custo Financeiro (R$) |
| :--- | :--- | :--- | :--- |
| GitHub e GitHub Projects | Repositório Git, controle de versão e quadro Kanban | Plano gratuito | R$ 0,00 |
| Visual Studio Code | Edição de documentação Markdown, HTML e código React | Gratuito | R$ 0,00 |
| Node.js, React e Vite | Desenvolvimento e execução local do MVP web | Código aberto (gratuito) | R$ 0,00 |
| Navegadores Web e Ferramentas de Formulário | Coleta de elicitação, validação e visualização de artefatos | Gratuito | R$ 0,00 |
| Equipamentos Pessoais da Equipe (4 notebooks) | Execução das atividades técnicas e acadêmicas | Recursos próprios | R$ 0,00 |
| **Total Financeiro Direto** | — | — | **R$ 0,00** |

Como referência de esforço acadêmico, estima-se dedicação média de 6 horas semanais por integrante ao longo de 7 semanas, totalizando **168 horas-homem** distribuídas entre gestão, elicitação, prototipação, especificação, planejamento, desenvolvimento do MVP e garantia da qualidade.

##### Subprodutos (Entregas Principais)

1. Conjunto documental de Engenharia de Software (Seções 1 a 9 em `/docs`).
2. Project Model Canvas autônomo (`/artefatos/pmcanvas/pmcanvas.html`).
3. Registros de elicitação comunitária e protótipos de baixa fidelidade (`/artefatos/elicitacao` e `/artefatos/wireframes`).
4. Estrutura Analítica do Projeto (EAP), marcos e cronograma com Regra de Sommerville (`/artefatos/planejamento`).
5. Backlog, personas, histórias de usuário, Planning Poker e evidências do quadro Kanban (`/artefatos/backlog`).
6. Matriz de Rastreabilidade bidirecional completa (`/artefatos/rastreabilidade`).
7. Atas formais das reuniões de acompanhamento (`/artefatos/atas`).
8. Protótipo funcional do MVP web em React (sem banco de dados) validado com a comunidade.

---

### 3.2 Declaração de Escopo

#### 3.2.1 O que o Sistema FAZ (Escopo Positivo)

O produto **Family Place** organiza suas funcionalidades em dois perfis de usuário (**Cliente** e **Estabelecimento**), priorizadas pelo método **MoSCoW** com distribuição aproximada de **60% Must**, **20% Should**, **15% Could** e **5% Won't**.

##### Núcleo Essencial — MVP em React sem Banco de Dados (*Must* — ~60%)
1. **Busca com Filtros Combinados em João Pessoa:** pesquisa e filtragem simultânea de estabelecimentos por múltiplas necessidades (categoria do estabelecimento, estrutura infantil, acessibilidade física/intelectual/sensorial e receptividade pet).
2. **Página Detalhada do Estabelecimento:** apresentação completa das tags de infraestrutura e acolhimento, endereço e horários em João Pessoa, vitrine informativa de produtos e serviços com destaque para itens **"Favoritos da Casa"** e redirecionamento direto para o WhatsApp ou site oficial do comércio.
3. **Sistema de Avaliação Multicritério (4 Pilares):** atribuição e consulta de notas independentes de 1 a 5 estrelas acompanhadas de comentário textual nos pilares:
   - *Pilar 1 — Estrutura Infantil (Kids):* trocador, espaço kids, cadeirão, segurança e recreação;
   - *Pilar 2 — Acessibilidade e Conforto:* rampas, banheiros adaptados, piso tátil, baixo ruído, iluminação confortável, cardápio/comunicação acessível e assentos adequados para idosos, PCD e neurodivergentes;
   - *Pilar 3 — Receptividade Pet (Pet Friendly):* área coberta permitida, disponibilidade de água e suporte por porte de animal;
   - *Pilar 4 — Atendimento e Custo-Benefício:* cordialidade, preparo da equipe para acolhimento inclusivo e transparência de preços.
4. **Favoritos Organizados por Critério:** salvamento e consulta de estabelecimentos favoritos em listas personalizadas segundo a necessidade do usuário (ex.: *"Melhores para ir com meu Avô"*, *"Melhores para levar o Cachorro"*, *"Melhores Espaços Kids"* e *"Locais com Baixo Ruído"*).

##### Módulos Importantes Especificados (*Should* — ~20%)
5. **Cadastro e Autenticação Simples:** criação e acesso de contas diferenciadas para Clientes e Estabelecimentos.
6. **Painel de Gestão do Estabelecimento:** administração do perfil comercial, marcação de tags de infraestrutura inclusiva e atualização da vitrine informativa e dos itens "Favoritos da Casa".
7. **Clube de Fidelidade e Cupons:** área de disponibilização e resgate de cupons promocionais para apresentação presencial nos estabelecimentos parceiros.

##### Módulos Desejáveis Especificados (*Could* — ~15%)
8. **Comunidade (Seguidores e Timeline):** possibilidade de seguir estabelecimentos e acompanhar atualizações em linha do tempo contendo obrigatoriamente texto curto, 1 imagem e 1 tag de categoria (*Evento*, *Promoção* ou *Novidade*).
9. **Assistente Virtual de Recomendação:** interface conversacional ou fluxo guiado de perguntas para sugerir locais compatíveis sem exigência de seleção manual de múltiplos filtros.

---

#### 3.2.2 O que o Sistema NÃO FAZ (Escopo Negativo — *Won't* — ~5%)

Para preservar o foco comunitário, a simplicidade operacional e a exequibilidade até 01/12/2026, ficam **explicitamente excluídos do escopo**:

1. **Pagamentos online e checkout financeiro:** o sistema não processa cartões, Pix, boletos, carrinho de compras ou cobranças de qualquer natureza.
2. **Serviço próprio de delivery ou logística:** o sistema não gerencia entregas, motoboys, rastreamento de pedidos ou taxas de frete; qualquer reserva ou compra ocorre diretamente nos canais externos do estabelecimento.
3. **Aplicativo mobile nativo (iOS ou Android):** o sistema será entregue exclusivamente como aplicação web responsiva acessível por navegador.
4. **Avaliação individual por item do cardápio:** descartada por regra de negócio para evitar complexidade excessiva na coleta e leitura de notas; a vitrine limita-se à exposição informativa com marcação de itens "Favoritos da Casa".
5. **Infraestrutura de produção com banco de dados remoto no MVP:** a versão demonstrativa da disciplina opera em React com dados estáticos locais e armazenamento no navegador, sem contratação de servidores em nuvem.

---

#### 3.2.3 Números Declarados do Escopo

| Parâmetro de Escopo | Valor Declarado |
| :--- | :--- |
| Pilares do sistema de avaliação multicritério | 4 pilares independentes |
| Escala de pontuação por pilar | 1 a 5 estrelas (inteiros) |
| Estabelecimentos de João Pessoa no catálogo do MVP | Mínimo de 15 locais |
| Categorias combináveis de filtros na busca | Mínimo de 4 categorias simultâneas |
| Composição máxima de publicação na Timeline | 1 texto curto + 1 imagem + 1 tag de categoria |
| Proporção alvo de priorização MoSCoW | ~60% Must / ~20% Should / ~15% Could / ~5% Won't |
| Participantes externos mínimos na validação comunitária | 12 moradores + 3 representantes de estabelecimentos (total >= 15) |
| Marcos verificáveis do projeto | 5 marcos (M1 a M5) |
| Horizonte de execução | 7 semanas (13/10/2026 a 01/12/2026) |
| Orçamento financeiro direto | R$ 0,00 |

---

#### 3.2.4 Limitações de Escopo e Fatores Mitigantes

| Limitação Declarada | Efeito no Produto | Fator Mitigante Aplicado |
| :--- | :--- | :--- |
| Ausência de banco de dados remoto no MVP | Avaliações criadas e listas de favoritos ficam armazenadas apenas localmente no navegador do usuário durante a demonstração. | Estruturação limpa da camada de dados em arquivos JSON locais e `localStorage`, preparando a migração direta para API REST em fase pós-disciplina. |
| Ausência de transações financeiras e checkout | O usuário não conclui reservas ou compras dentro da própria plataforma. | Redirecionamento em um clique para WhatsApp ou site oficial do estabelecimento com mensagem contextualizada, reduzindo atrito sem custos regulatórios ou financeiros. |
| Curadoria inicial manual de estabelecimentos | O catálogo inicial depende de levantamento realizado pela equipe em João Pessoa. | Definição de lista inicial enxuta e verificada de ao menos 15 locais representativos de bairros distintos da cidade (ex.: Manaíra, Tambaú, Cabo Branco, Bancários e Bessa). |
| Módulos *Should* e *Could* fora do código obrigatório do MVP | Autenticação em servidor, painel completo do estabelecimento, Clube de Fidelidade, Timeline e Assistente Virtual não bloqueiam a entrega funcional mínima. | Especificação completa desses módulos nas Seções 5 e 7, com inclusão opcional apenas após a conclusão e verificação integral de 100% dos itens *Must*. |

---

### 3.3 Estudo de Viabilidade

**Responsável pela Subseção:** Kewy Huang

#### 3.3.1 Viabilidade Comunitária e Operacional

O município de João Pessoa (PB) apresenta forte setor gastronômico, turístico e de lazer frequentado por moradores e visitantes, porém carece de um diretório local unificado que informe de maneira verificável a infraestrutura destinada a crianças, animais de estimação, idosos, pessoas com deficiência (física ou intelectual) e pessoas neurodivergentes.

Do ponto de vista operacional:
- **Adesão do público Cliente:** o modelo de busca por filtros combinados e avaliação em quatro pilares responde diretamente à dor cotidiana de descobrir, antes de sair de casa, se o ambiente comporta um carrinho de bebê, um cão de porte médio, uma cadeira de rodas ou uma pessoa com sensibilidade auditiva.
- **Adesão do público Estabelecimento:** como o Family Place não cobra comissões, não exige integração financeira e direciona interessados diretamente para o WhatsApp ou site oficial do local, a barreira de adesão comercial é mínima.
- **Sustentabilidade extensionista:** a proposta gera impacto social mensurável para grupos frequentemente invisibilizados no comércio local, cumprindo o papel extensionista da universidade.

Conclui-se que o projeto é **comunitária e operacionalmente viável**.

---

#### 3.3.2 Viabilidade Técnica

A solução técnica definida para o MVP consiste em uma **aplicação web responsiva desenvolvida em React**, executável diretamente em navegadores modernos (desktop e dispositivos móveis), sem dependência de banco de dados remoto ou servidores pagos nesta primeira entrega.

A avaliação técnica confirma os seguintes pontos:
- **Domínio da pilha tecnológica:** os integrantes do curso de Ciência da Computação possuem base em HTML, CSS, JavaScript e componentização em React, permitindo construir a busca combinada, a exibição dos quatro pilares, o cálculo de médias, a vitrine informativa e as listas de favoritos com baixo risco técnico.
- **Adequação da ausência de banco de dados no MVP:** o uso de dados estáticos estruturados de estabelecimentos de João Pessoa combinado ao armazenamento local do navegador (`localStorage`) possibilita demonstrar e validar integralmente a experiência do usuário nos fluxos *Must*, eliminando complexidades de hospedagem, segurança de credenciais e administração de servidores dentro do prazo de sete semanas.
- **Portabilidade e acessibilidade web:** o uso de HTML semântico, contraste adequado e desenho responsivo atende usuários em smartphones e computadores sem necessidade de publicar aplicativos nativos em lojas oficiais.
- **Evolução arquitetural:** a separação entre interface e camada de dados assegura que, em ciclos futuros pós-disciplina, os dados locais possam ser substituídos por serviços backend e banco de dados sem reconstruir a interface.

Conclui-se que o projeto é **tecnicamente viável**.

---

#### 3.3.3 Viabilidade Econômica e de Recursos

Todas as ferramentas selecionadas para gestão, documentação, prototipação e desenvolvimento do MVP possuem licenciamento gratuito ou código aberto, resultando em **custo financeiro direto de R$ 0,00**. A equipe dispõe de equipamentos próprios e acesso regular à internet, não havendo dependência de financiamento externo ou aquisições.

Conclui-se que o projeto é **economicamente viável**.

---

#### 3.3.4 Viabilidade de Prazo (13/10/2026 a 01/12/2026)

O período disponível compreende **sete semanas corridas (50 dias)** entre 13/10/2026 e 01/12/2026. A análise de cronograma demonstra viabilidade mediante três salvaguardas estruturais:

1. **Divisão clara de responsabilidades:** os quatro integrantes atuam em frentes complementares definidas na Seção 1, evitando ociosidade e sobreposição de esforços.
2. **Recorte disciplinado via MoSCoW:** o código do MVP restringe-se aos requisitos *Must* (~60%), enquanto os itens *Should* e *Could* ficam formalmente especificados sem comprometer a entrega funcional mínima.
3. **Margem de contingência no planejamento:** o cronograma detalhado da Seção 6 aplicará a **Regra de Sommerville (+50% sobre a duração otimista: 30% para imprevistos e 20% para aspectos não previstos)**, absorvendo oscilações da rotina acadêmica e garantindo margem de revisão entre 24/11/2026 e 01/12/2026.

Conclui-se que o projeto é **viável dentro do prazo estabelecido**.

---

#### 3.3.5 Síntese Comparativa da Viabilidade

| Dimensão Avaliada | Principais Fatores Analisados | Risco Residual | Parecer |
| :--- | :--- | :--- | :--- |
| **Comunitária e Operacional** | Dor real comprovável em João Pessoa, 5 públicos atendidos e baixa barreira para comércios locais. | Baixo | Viável |
| **Técnica** | Aplicação web responsiva em React sem banco de dados remoto no MVP e arquitetura preparada para evolução. | Baixo | Viável |
| **Econômica e de Recursos** | Orçamento de R$ 0,00 com ferramentas gratuitas e equipamentos próprios da equipe. | Muito Baixo | Viável |
| **Prazo (até 01/12/2026)** | 7 semanas organizadas em 5 marcos verificáveis, priorização MoSCoW e contingência pela Regra de Sommerville. | Médio (controlado) | Viável |

---

#### 3.3.6 Recomendação Formal de Prosseguimento

Com base na análise comunitária, operacional, técnica, econômica e temporal conduzida nesta seção, **recomenda-se formalmente o prosseguimento imediato do projeto Family Place**, condicionando sua execução ao cumprimento estrito do escopo negativo declarado, à priorização do núcleo *Must* no MVP em React sem banco de dados e ao monitoramento semanal dos marcos M1 a M5 até a entrega final em **01/12/2026**.

**Aprovação Interna:**  
- **Kewy Huang** — Responsável pelo Estudo de Viabilidade  
- **Pierre Simon** — Gerente de Projeto e Coordenação  
- **Data:** 20/10/2026

---

<a id="secao-4"></a>

## Seção 4 — Elicitação de Requisitos e Protótipos de Baixa Fidelidade

**Projeto:** Family Place  
**Responsável pela Seção:** Kewy Huang  
**Marco Associado:** M2 (03/11/2026)  
**Data de Consolidação:** 03/11/2026  

---

### 4.1 Plano de Elicitação de Requisitos

A etapa de elicitação teve como objetivo levantar, junto à comunidade de **João Pessoa (PB)**, as necessidades reais, barreiras de acesso e expectativas operacionais dos dois perfis de usuário do *Family Place* (**Cliente** e **Estabelecimento**), garantindo alinhamento direto aos objetivos `OBJ1` a `OBJ4` definidos na Seção 3.

#### 4.1.1 Stakeholders Envolvidos e Interessados

| Grupo de Stakeholders | Papel na Elicitação | Interesse Principal no Produto |
| :--- | :--- | :--- |
| **Famílias com crianças (João Pessoa)** | Respondentes do questionário e validadores de protótipo | Verificar previamente trocadores, espaços kids seguros e cadeirões. |
| **Tutores de animais de estimação (João Pessoa)** | Respondentes do questionário, entrevistado (`ENT-02`) e validadores | Confirmar portes aceitos, área coberta permitida e água para pets. |
| **Pessoas idosas e cuidadores (João Pessoa)** | Respondentes do questionário, entrevistada (`ENT-03`) e validadores | Garantir acessibilidade física, assentos adequados, baixo ruído e legibilidade da interface. |
| **Pessoas com Deficiência física ou intelectual — PCD (João Pessoa)** | Respondentes do questionário e acompanhante (`ENT-03`) | Validar critérios objetivos de rampas, banheiros adaptados, circulação e comunicação acessível. |
| **Pessoas neurodivergentes e familiares (João Pessoa)** | Respondentes do questionário e entrevistada (`ENT-01`) | Obter previsibilidade sensorial (nível de ruído, iluminação e área reservada). |
| **Gestores de estabelecimentos locais (João Pessoa)** | Entrevistado (`ENT-04`) | Divulgar infraestrutura inclusiva, reduzir dúvidas repetitivas e receber clientes via contato direto sem comissões. |
| **Equipe do Projeto (4 integrantes)** | Planejamento, aplicação, consolidação e tradução em requisitos | Transformar evidências comunitárias em protótipos e especificações rastreáveis. |

#### 4.1.2 Justificativa da Escolha das Técnicas

Foram selecionadas **duas técnicas complementares** de elicitação, adequadas ao prazo de sete semanas, ao orçamento de R$ 0,00 e ao perfil heterogêneo dos usuários:

1. **Questionário Estruturado (`artefatos/elicitacao/questionario.md`):** escolhido por possibilitar alcance quantitativo em diferentes bairros de João Pessoa (Manaíra, Tambaú, Bancários, Bessa e Cabo Branco) em curto intervalo de tempo, mensurando a prioridade percebida das funcionalidades e a frequência das dores relatadas.
2. **Entrevista Semiestruturada (`artefatos/elicitacao/roteiro-entrevista.md`):** escolhida para aprofundamento qualitativo de situações sensíveis que respostas fechadas não capturam integralmente — como sobrecarga sensorial de crianças neurodivergentes, obstáculos práticos enfrentados por idosos cadeirantes, limitações de porte para cães e rotina operacional de um comércio local.

#### 4.1.3 Cronograma e Responsáveis pelos Contatos

| Atividade | Período | Responsável Principal | Apoio |
| :--- | :--- | :--- | :--- |
| Elaboração do questionário e do roteiro de entrevista | 20/10/2026 a 21/10/2026 | Kewy Huang | Caio Augusto (revisão de redação) |
| Aplicação do questionário online em João Pessoa (n = 28) | 21/10/2026 a 28/10/2026 | Kewy Huang | Pierre Simon, Caio Augusto e Renan Mendes |
| Condução das 4 entrevistas individuais semiestruturadas | 26/10/2026 a 30/10/2026 | Kewy Huang | Pierre Simon (anotações estruturadas) |
| Consolidação dos resultados e mapeamento de requisitos | 30/10/2026 a 31/10/2026 | Kewy Huang | Caio Augusto |
| Elaboração e validação dos protótipos de baixa fidelidade | 31/10/2026 a 02/11/2026 | Kewy Huang | Renan Mendes e Pierre Simon |

---

### 4.2 Síntese dos Achados e Cuidados Éticos (LGPD)

Os instrumentos aplicados e os dados completos encontram-se registrados nos seguintes artefatos oficiais do repositório:
- Instrumento do questionário: `/artefatos/elicitacao/questionario.md` (14 perguntas fechadas e 2 abertas);
- Roteiro de entrevistas: `/artefatos/elicitacao/roteiro-entrevista.md` (Blocos A e B);
- Consolidação detalhada e origem dos requisitos: `/artefatos/elicitacao/resumo-resultados-elicitacao.md`.

#### 4.2.1 Principais Evidências Obtidas

- **Amplitude comunitária:** o questionário obteve **28 respostas anônimas** de moradores de Manaíra (21,4%), Bancários (21,4%), Tambaú (17,9%), Bessa (17,9%), Cabo Branco (14,3%) e outros bairros de João Pessoa (7,1%), complementadas por **4 entrevistas individuais** (`ENT-01`: mãe de criança neurodivergente; `ENT-02`: tutor de cães; `ENT-03`: cuidadora de idoso cadeirante; `ENT-04`: proprietário de cafeteria local).
- **Sobreposição de necessidades:** **60,7%** dos respondentes acumulam dois ou mais perfis (por exemplo, família com criança e pet ou idoso e criança), e **92,9%** classificaram a busca com filtros combinados como essencial ou muito importante — originando diretamente `RU01` e `RF001` a `RF003`.
- **Demanda pela avaliação em 4 pilares:** **82,1%** já deixaram de visitar locais por falta de informações prévias confiáveis, e **92,9%** validaram a substituição da nota única pelas notas segmentadas nos quatro pilares (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) — originando `RU03`, `RF007`, `RF008` e `RD002`.
- **Validação dos favoritos categorizados:** **85,7%** apontaram utilidade frequente ou regular em salvar estabelecimentos em listas por critério (como *"Melhores para ir com meu Avô"* e *"Locais com Baixo Ruído"*) — originando `RU04`, `RF009` e `RF010`.
- **Confirmação do escopo negativo e da vitrine informativa:** **89,3%** dos respondentes e o gestor entrevistado (`ENT-04`) aprovaram a vitrine informativa com **"Favoritos da Casa"** e redirecionamento direto para WhatsApp ou site oficial sem pagamentos online, delivery próprio ou nota individual por item do cardápio — consolidando `RU02`, `RF004` a `RF006`, `RF016` (Won't) e `RD003`.
- **Módulos evolutivos (Should e Could):** o gestor (`ENT-04`) demandou painel próprio de atualização de perfil, tags e vitrine (`RU05`, `RF011`, `RF012`); **78,6%** mostraram interesse no Clube de Fidelidade (`RU06`, `RF013`); **67,9%** aprovaram a timeline curta (`RU07`, `RF014`); e **64,3%** indicaram utilidade para o assistente virtual de recomendação (`RU08`, `RF015`).
- **Exigências de acessibilidade e desempenho:** os relatos de `ENT-01`, `ENT-03` e das respostas abertas (`Q16`) fundamentaram diretamente o contraste mínimo WCAG 2.1 AA (`NF002`), responsividade (`NF003`), carregamento em até 3 segundos (`NF001`) e usabilidade em poucos passos (`NF005`).

#### 4.2.2 Cuidados Éticos e Conformidade com a LGPD

Em estrita aderência à **Lei Geral de Proteção de Dados (Lei nº 13.709/2018)** e à regra de domínio `RD001`, a condução da elicitação seguiu quatro salvaguardas obrigatórias:

1. **Consentimento prévio informado:** todos os participantes foram informados previamente sobre a finalidade exclusivamente acadêmica e extensionista da coleta.
2. **Minimização de dados:** não foram solicitados nome civil completo, CPF, telefone, e-mail pessoal, endereço residencial exato ou laudos/diagnósticos nominais.
3. **Anonimização estrita:** respostas do questionário foram agregadas estatisticamente e os entrevistados foram identificados exclusivamente pelos códigos `ENT-01` a `ENT-04`.
4. **Proteção de dados sensíveis:** relatos relacionados a saúde, deficiência ou neurodivergência foram tratados apenas em nível funcional de necessidade de ambiente (ruído, iluminação, rampa, banheiro adaptado), sem vínculo a identidades civis.

---

### 4.3 Protótipos de Baixa Fidelidade (Wireframes)

A partir dos achados da elicitação e antes do congelamento da especificação formal de requisitos (Marco M3), foram elaborados os protótipos de baixa fidelidade das **quatro telas essenciais (*Must*)** no artefato autônomo `/artefatos/wireframes/wireframes.html`.

Adotou-se representação propositalmente em preto, branco e tons de cinza, com blocos estruturais simples e marcações de fluxo, a fim de concentrar o feedback dos participantes na organização das informações e nos passos de navegação, sem desviar a atenção para escolhas estéticas finais.

| Código | Tela Prototipada | Requisitos Relacionados | Elementos Principais Representados |
| :--- | :--- | :--- | :--- |
| **WF-01** | Tela Inicial de Busca com Filtros Combinados | `RU01`, `RF001`, `RF002`, `RF003`, `NF003`, `NF005` | Barra de busca textual em João Pessoa, botão de limpeza de filtros, 5 grupos de filtros combináveis (tipo, infantil, pet, idosos/PCD e sensorial/neurodivergentes), contador de resultados e cartões com médias nos 4 pilares. |
| **WF-02** | Tela de Detalhes do Estabelecimento | `RU02`, `RU03`, `RF004`, `RF005`, `RF006`, `RF007`, `RF016`, `RD002`, `RD003` | Identificação do local em João Pessoa, tags de infraestrutura agrupadas, painel de notas nos 4 pilares com barras comparativas, vitrine informativa com selo "Favoritos da Casa", links externos para WhatsApp/site oficial e comentários recentes. |
| **WF-03** | Tela/Modal de Avaliação Multicritério nos 4 Pilares | `RU03`, `RF008`, `NF005`, `NF006`, `RD001`, `RD002` | Quatro seletores obrigatórios de nota inteira de 1 a 5 (com descrição objetiva de cada pilar), identificação opcional de exibição, campo de comentário (até 500 caracteres) e aviso de privacidade LGPD. |
| **WF-04** | Tela de Favoritos Organizados por Critério | `RU04`, `RF009`, `RF010`, `NF006` | Formulário de criação de nova lista por critério, navegação entre listas personalizadas (*"Melhores para ir com meu Avô"*, *"Melhores para levar o Cachorro"*, *"Melhores Espaços Kids"*, *"Locais com Baixo Ruído"*), ações de renomear/excluir e cartões com acesso direto à tela de detalhes. |

---

### 4.4 Registro Resumido da Validação dos Protótipos

Entre **31/10/2026 e 02/11/2026**, os quatro wireframes (`WF-01` a `WF-04`) foram validados em sessões curtas de inspeção guiada com **4 representantes do público-alvo** (os perfis correspondentes às entrevistas `ENT-01` a `ENT-04`, em João Pessoa), com foco em clareza estrutural, aderência às necessidades levantadas e número de passos para concluir busca, avaliação e salvamento em favoritos.

| Tela Validada | Percepção dos Participantes | Ajustes Incorporados Antes da Especificação Final |
| :--- | :--- | :--- |
| **WF-01 (Busca)** | Aprovação unânime da combinação simultânea de filtros e da exibição das 4 notas diretamente nos cartões. | Inclusão explícita do contador de locais encontrados, do comando **"Limpar Filtros"** em destaque e da mensagem orientativa para o estado de zero resultados (`RF003`). |
| **WF-02 (Detalhes)** | Clareza na separação entre tags, vitrine informativa e links de WhatsApp/site; confirmação da ausência de pagamento interno. | Inclusão da legenda objetiva de `RD002` (exibição de `"Sem avaliações"` quando `N = 0`) e do aviso explícito de que a vitrine é meramente informativa (`RD003`). |
| **WF-03 (Avaliação)** | O agrupamento dos 4 pilares em uma única tela foi concluído sem dúvidas em menos de 1 minuto pelos avaliadores. | Acréscimo de uma linha explicativa sob cada pilar para orientar o avaliador sobre quais critérios considerar e inclusão do aviso de privacidade (`RD001`) acima do botão de envio. |
| **WF-04 (Favoritos)** | Forte aprovação da criação de listas por critério; participantes confirmaram que um local pode atender a mais de um critério. | Confirmação explícita do suporte à inclusão do mesmo estabelecimento em múltiplas listas simultaneamente (`RF010`) e definição de mensagem orientativa para lista vazia. |

A conclusão bem-sucedida da elicitação e da validação dos wireframes encerra o **Marco M2 (03/11/2026)** e fornece entrada formal verificada para a Especificação de Requisitos na Seção 5.

---

<a id="secao-5"></a>

## Seção 5 — Especificação de Requisitos

**Projeto:** Family Place  
**Responsável pela Seção:** Caio Augusto  
**Marco Associado:** M3 (10/11/2026)  
**Data de Consolidação:** 10/11/2026  
**Artefato Tabular Complementar:** `/artefatos/requisitos/requisitos.csv`  

---

### 5.1 Convenções de Redação e Priorização

Esta especificação adota rigorosamente as convenções da Engenharia de Software definidas para o projeto *Family Place*:

- **Verbos normativos:** emprega-se **"deve"** para requisitos obrigatórios (requisitos *Must*, *Should*, Requisitos Não Funcionais e Regras de Domínio) e **"deveria"** para requisitos desejáveis (classe *Could*). Requisitos da classe *Won't* descrevem explicitamente escopo excluído da entrega atual.
- **Identificadores padronizados:** `RU` (Requisitos de Usuário), `RF` (Requisitos Funcionais), `NF` (Requisitos Não Funcionais) e `RD` (Regras de Domínio), conectados diretamente aos objetivos SMART (`OBJ1` a `OBJ4`) e às evidências de elicitação da Seção 4.
- **Verificabilidade objetiva:** todos os requisitos são redigidos sem adjetivos subjetivos ou jargões informais, com entradas, saídas ou métricas objetivamente testáveis.
- **Priorização MoSCoW dos Requisitos Funcionais (`RF001` a `RF016`):**

| Classe MoSCoW | Quantidade | Percentual | Composição no Produto |
| :--- | :---: | :---: | :--- |
| **Must (Essencial)** | 10 (`RF001` a `RF010`) | 62,50% | Compõe obrigatoriamente o MVP web em React (sem banco de dados). |
| **Should (Importante)** | 3 (`RF011` a `RF013`) | 18,75% | Especificado para a primeira evolução pós-MVP. |
| **Could (Desejável)** | 2 (`RF014` e `RF015`) | 12,50% | Especificado para expansão comunitária e conversacional. |
| **Won't (Agora não)** | 1 (`RF016`) | 6,25% | Escopo negativo formalmente excluído do ciclo atual. |
| **Total** | **16** | **100,00%** | — |

---

### 5.2 Requisitos de Usuário (`RU01` a `RU08`)

Os Requisitos de Usuário expressam, em linguagem de negócio orientada aos perfis **Cliente** e **Estabelecimento**, as capacidades esperadas da plataforma em João Pessoa (PB):

| ID | Objetivo SMART | Origem na Elicitação | Enunciado do Requisito de Usuário |
| :--- | :---: | :--- | :--- |
| **RU01** | `OBJ1` | Questionário (`Q01`–`Q08`, `Q15`); Entrevistas (`ENT-01`, `ENT-02`, `ENT-03`) | O cliente **deve** localizar estabelecimentos comerciais em João Pessoa (PB) combinando simultaneamente múltiplos critérios de estrutura infantil, acessibilidade física, conforto intelectual/sensorial e receptividade pet em uma única pesquisa. |
| **RU02** | `OBJ1`, `OBJ3` | Questionário (`Q06`–`Q08`, `Q11`); Entrevistas (`ENT-03`, `ENT-04`) | O cliente **deve** consultar, na página de cada estabelecimento, as comodidades inclusivas declaradas, a vitrine informativa de produtos e serviços com itens destacados como "Favoritos da Casa" e os links diretos para canais externos (WhatsApp ou site oficial), sem realizar pagamentos ou contratações de entrega dentro da plataforma. |
| **RU03** | `OBJ2` | Questionário (`Q09`, `Q15`, `Q16`); Entrevistas (`ENT-01` a `ENT-04`) | O cliente **deve** consultar e registrar avaliações segmentadas em quatro pilares independentes (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) em escala de 1 a 5 estrelas acompanhadas de comentário textual. |
| **RU04** | `OBJ2` | Questionário (`Q10`); Entrevistas (`ENT-01`, `ENT-02`, `ENT-03`) | O cliente **deve** salvar estabelecimentos em listas de favoritos organizadas por critérios personalizados de necessidade (como passeios com idosos, crianças, animais de estimação ou locais com baixo ruído) para consulta recorrente. |
| **RU05** | `OBJ3` | Entrevista (`ENT-04`); Questionário (`Q16`) | Clientes e gestores de estabelecimentos **devem** dispor de cadastro e acesso autenticados por perfil, permitindo ao estabelecimento administrar seu perfil comercial, marcar comodidades inclusivas e atualizar sua vitrine informativa. |
| **RU06** | `OBJ3` | Questionário (`Q12`); Entrevistas (`ENT-02`, `ENT-04`) | O cliente **deve** visualizar e resgatar cupons promocionais disponibilizados por estabelecimentos parceiros no Clube de Fidelidade para apresentação presencial no comércio local. |
| **RU07** | `OBJ3` | Questionário (`Q13`); Entrevistas (`ENT-02`, `ENT-04`) | O cliente **deveria** seguir estabelecimentos de interesse e acompanhar uma timeline comunitária com atualizações contendo texto curto, uma imagem e uma categoria de aviso (*Evento*, *Promoção* ou *Novidade*). |
| **RU08** | `OBJ3` | Questionário (`Q14`); Entrevista (`ENT-03`) | O cliente **deveria** interagir com um assistente virtual de recomendação por fluxo guiado de perguntas ou linguagem natural para receber sugestões de estabelecimentos em João Pessoa sem selecionar filtros manualmente. |

---

### 5.3 Requisitos Funcionais (`RF001` a `RF016`)

#### Grupo Must — Essencial (MVP em React sem Banco de Dados)

##### RF001 — Listagem e busca textual de estabelecimentos em João Pessoa
- **ID:** `RF001`
- **Nome:** Listagem e busca textual de estabelecimentos em João Pessoa
- **RU de Origem:** `RU01` (Objetivo SMART: `OBJ1`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** exibir o catálogo de ao menos 15 estabelecimentos cadastrados no município de João Pessoa (PB) e permitir busca textual insensível a maiúsculas, minúsculas e acentos por nome, bairro ou categoria comercial.
- **Entradas / Pré-condições:** Carregamento inicial do catálogo estático de estabelecimentos de João Pessoa; termo textual opcional inserido pelo cliente.
- **Saídas / Pós-condições:** Lista de cartões de estabelecimentos compatíveis exibindo nome, bairro, categoria, tags resumidas e médias dos quatro pilares, ordenada por relevância ou média geral.

##### RF002 — Filtragem combinada por múltiplos critérios inclusivos
- **ID:** `RF002`
- **Nome:** Filtragem combinada por múltiplos critérios inclusivos
- **RU de Origem:** `RU01` (Objetivo SMART: `OBJ1`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** permitir a seleção simultânea (conjunção lógica E) de múltiplos filtros pertencentes a, no mínimo, quatro categorias combináveis: tipo de estabelecimento, estrutura infantil (espaço kids monitorado, trocador, cadeirão), acessibilidade física e conforto/sensorial (rampa, banheiro adaptado, piso tátil, assentos confortáveis, baixo ruído, iluminação controlada) e receptividade pet (porte aceito, área coberta permitida e potes de água).
- **Entradas / Pré-condições:** Catálogo carregado (`RF001`); um ou mais filtros marcados pelo cliente nas categorias disponíveis.
- **Saídas / Pós-condições:** Listagem atualizada exibindo exclusivamente os estabelecimentos que satisfazem todas as condições marcadas simultaneamente e a eventual busca textual ativa.

##### RF003 — Contador de resultados, limpeza de filtros e estado sem correspondência
- **ID:** `RF003`
- **Nome:** Contador de resultados, limpeza de filtros e estado sem correspondência
- **RU de Origem:** `RU01` (Objetivo SMART: `OBJ1`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** atualizar o contador numérico de estabelecimentos compatíveis a cada alteração de busca ou filtro, disponibilizar comando único para limpar todos os critérios ativos e exibir mensagem orientativa quando a combinação aplicada retornar zero estabelecimentos.
- **Entradas / Pré-condições:** Alteração de termo textual ou filtro (`RF001`, `RF002`), ou acionamento do comando de limpeza.
- **Saídas / Pós-condições:** Exibição da contagem exata de resultados; restauração da listagem completa quando os filtros forem limpos; ou exibição de aviso orientativo com opção de limpeza quando o total for igual a zero.

##### RF004 — Exibição da página detalhada do estabelecimento e tags de infraestrutura
- **ID:** `RF004`
- **Nome:** Exibição da página detalhada do estabelecimento e tags de infraestrutura
- **RU de Origem:** `RU02` (Objetivos SMART: `OBJ1`, `OBJ3`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** apresentar a página detalhada do estabelecimento selecionado contendo nome, categoria, endereço e bairro em João Pessoa (PB), horário de funcionamento, descrição institucional e relação completa das tags de infraestrutura agrupadas por estrutura infantil, acessibilidade física/intelectual/sensorial e receptividade pet.
- **Entradas / Pré-condições:** Seleção de um estabelecimento válido a partir da listagem de busca (`RF001`) ou de uma lista de favoritos (`RF010`).
- **Saídas / Pós-condições:** Exibição completa dos dados institucionais e das tags inclusivas do estabelecimento, com link de retorno à busca anterior.

##### RF005 — Exibição da vitrine informativa com destaque "Favoritos da Casa"
- **ID:** `RF005`
- **Nome:** Exibição da vitrine informativa com destaque "Favoritos da Casa"
- **RU de Origem:** `RU02` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** exibir na página detalhada do estabelecimento uma vitrine informativa de produtos e serviços contendo nome, descrição breve e faixa de preço informativa, identificando visualmente os itens destacados como "Favoritos da Casa", em conformidade com `RD003` (sem carrinho, sem checkout e sem pontuação individual por item).
- **Entradas / Pré-condições:** Estabelecimento aberto na página detalhada (`RF004`) contendo ao menos um item cadastrado na vitrine.
- **Saídas / Pós-condições:** Exibição estruturada da vitrine com destaque explícito dos "Favoritos da Casa" e aviso de caráter exclusivamente informativo.

##### RF006 — Redirecionamento direto para canais externos de contato
- **ID:** `RF006`
- **Nome:** Redirecionamento direto para canais externos de contato
- **RU de Origem:** `RU02` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** disponibilizar, em 100% dos perfis cadastrados, links externos diretos para o WhatsApp oficial ou site do estabelecimento, abrindo em nova aba com segurança (`rel="noopener noreferrer"`) e incluindo mensagem inicial contextualizada no redirecionamento para WhatsApp.
- **Entradas / Pré-condições:** Página detalhada do estabelecimento aberta (`RF004`) com ao menos um canal externo válido configurado (URL de WhatsApp ou site oficial).
- **Saídas / Pós-condições:** Abertura externa do canal oficial do estabelecimento sem intermediação de pagamento ou coleta de dados bancários pela plataforma.

##### RF007 — Consulta das notas segmentadas nos quatro pilares e comentários
- **ID:** `RF007`
- **Nome:** Consulta das notas segmentadas nos quatro pilares e comentários
- **RU de Origem:** `RU03` (Objetivo SMART: `OBJ2`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** apresentar na página detalhada do estabelecimento as médias calculadas separadamente para cada um dos quatro pilares (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) conforme `RD002`, o número total de avaliações recebidas e a listagem cronológica decrescente dos comentários registrados pela comunidade.
- **Entradas / Pré-condições:** Página detalhada do estabelecimento aberta (`RF004`) e conjunto de avaliações iniciais e locais carregado.
- **Saídas / Pós-condições:** Exibição das quatro médias independentes com 1 casa decimal (ou `"Sem avaliações"` se `N = 0`), quantidade de avaliações e comentários ordenados do mais recente ao mais antigo.

##### RF008 — Submissão de avaliação multicritério nos quatro pilares
- **ID:** `RF008`
- **Nome:** Submissão de avaliação multicritério nos quatro pilares
- **RU de Origem:** `RU03` (Objetivo SMART: `OBJ2`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** permitir ao cliente registrar uma nova avaliação para um estabelecimento informando obrigatoriamente uma nota inteira de 1 a 5 estrelas para cada um dos quatro pilares, apelido público opcional (padrão `"Visitante Anônimo"`) e comentário textual opcional de até 500 caracteres, bloqueando o envio caso falte nota em qualquer pilar e recalculando imediatamente as médias conforme `RD002`.
- **Entradas / Pré-condições:** Página detalhada do estabelecimento aberta (`RF004`); quatro notas inteiras válidas no intervalo `[1, 5]`; apelido opcional e comentário com até 500 caracteres.
- **Saídas / Pós-condições:** Registro da avaliação no armazenamento local do navegador (`NF006`), recálculo imediato das médias dos quatro pilares, exibição da nova avaliação no topo da lista de comentários e confirmação visual ao usuário.

##### RF009 — Criação, renomeação e exclusão de listas de favoritos por critério
- **ID:** `RF009`
- **Nome:** Criação, renomeação e exclusão de listas de favoritos por critério
- **RU de Origem:** `RU04` (Objetivo SMART: `OBJ2`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** permitir ao cliente criar listas de favoritos nomeadas por critério personalizado (como *"Melhores para ir com meu Avô"*, *"Melhores para levar o Cachorro"*, *"Melhores Espaços Kids"* e *"Locais com Baixo Ruído"*), impedir nomes vazios ou duplicados, renomear listas existentes e excluir listas mediante confirmação explícita.
- **Entradas / Pré-condições:** Acesso à área de favoritos ou ao seletor de salvamento; nome válido entre 2 e 60 caracteres para criação ou renomeação; confirmação explícita para exclusão.
- **Saídas / Pós-condições:** Atualização imediata do conjunto de listas no armazenamento local do navegador (`NF006`) e exibição da lista atualizada na interface.

##### RF010 — Inclusão, remoção e consulta de estabelecimentos em listas de favoritos
- **ID:** `RF010`
- **Nome:** Inclusão, remoção e consulta de estabelecimentos em listas de favoritos
- **RU de Origem:** `RU04` (Objetivo SMART: `OBJ2`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** permitir ao cliente adicionar ou remover qualquer estabelecimento em uma ou mais listas de favoritos simultaneamente e consultar, na área de favoritos, todos os locais agrupados pela lista selecionada com acesso direto à respectiva página detalhada (`RF004`).
- **Entradas / Pré-condições:** Existência de ao menos uma lista de favoritos (`RF009`) e seleção de um estabelecimento válido.
- **Saídas / Pós-condições:** Vínculo ou desvínculo registrado no armazenamento local (`NF006`), atualização do contador de locais da lista e exibição dos cartões correspondentes (ou mensagem orientativa caso a lista esteja vazia).

---

#### Grupo Should — Importante (Especificados para Evolução Pós-MVP)

##### RF011 — Cadastro e autenticação simples por perfil de usuário
- **ID:** `RF011`
- **Nome:** Cadastro e autenticação simples por perfil de usuário
- **RU de Origem:** `RU05` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Should (Importante)
- **Descrição:** O sistema **deve** permitir o cadastro e a autenticação por e-mail e senha distintos para os perfis Cliente e Estabelecimento, exigindo aceite explícito do termo de privacidade (`RD001`) e validando permissões de acesso às áreas restritas.
- **Entradas / Pré-condições:** Formulário preenchido com e-mail válido, senha com ao menos 8 caracteres, tipo de perfil e confirmação de aceite da política de privacidade.
- **Saídas / Pós-condições:** Conta criada ou sessão autenticada vinculada ao perfil informado, concedendo acesso às funções correspondentes e bloqueando acessos não autorizados.

##### RF012 — Painel de gerenciamento do estabelecimento (perfil, tags e vitrine)
- **ID:** `RF012`
- **Nome:** Painel de gerenciamento do estabelecimento (perfil, tags e vitrine)
- **RU de Origem:** `RU05` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Should (Importante)
- **Descrição:** O sistema **deve** disponibilizar ao perfil Estabelecimento autenticado um painel de gerenciamento para cadastrar e atualizar dados institucionais, marcar ou desmarcar tags de infraestrutura inclusiva, incluir/editar/remover itens da vitrine informativa e selecionar quais itens recebem o selo "Favoritos da Casa".
- **Entradas / Pré-condições:** Usuário autenticado com perfil Estabelecimento (`RF011`); dados válidos de perfil, tags e itens da vitrine.
- **Saídas / Pós-condições:** Alterações refletidas na página pública do estabelecimento (`RF004`, `RF005`) e nos resultados da busca combinada (`RF002`).

##### RF013 — Clube de Fidelidade e resgate de cupons presenciais
- **ID:** `RF013`
- **Nome:** Clube de Fidelidade e resgate de cupons presenciais
- **RU de Origem:** `RU06` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Should (Importante)
- **Descrição:** O sistema **deve** oferecer uma área de Clube de Fidelidade onde estabelecimentos parceiros disponibilizam cupons com título, descrição do benefício, regras de uso e data de validade, e clientes resgatam códigos únicos para apresentação presencial no local sem qualquer transação financeira na plataforma (`RD003`).
- **Entradas / Pré-condições:** Existência de cupons ativos dentro da data de validade; seleção de resgate pelo cliente autenticado (`RF011`).
- **Saídas / Pós-condições:** Geração e exibição do comprovante/código do cupom resgatado associado ao cliente, bloqueando resgate de cupons expirados.

---

#### Grupo Could — Desejável (Especificados para Expansão Futura)

##### RF014 — Seguidores e Timeline de atualizações dos estabelecimentos
- **ID:** `RF014`
- **Nome:** Seguidores e Timeline de atualizações dos estabelecimentos
- **RU de Origem:** `RU07` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Could (Desejável)
- **Descrição:** O sistema **deveria** permitir ao cliente seguir e deixar de seguir estabelecimentos e consultar uma timeline cronológica contendo publicações dos estabelecimentos seguidos compostas estritamente por texto curto (até 280 caracteres), 1 imagem e 1 tag de categoria (*Evento*, *Promoção* ou *Novidade*).
- **Entradas / Pré-condições:** Cliente autenticado (`RF011`) seguindo ao menos um estabelecimento; publicações válidas criadas por estabelecimentos parceiros dentro do limite de formato.
- **Saídas / Pós-condições:** Exibição da timeline filtrada pelos estabelecimentos seguidos em ordem cronológica decrescente, rejeitando publicações sem tag de categoria ou acima de 280 caracteres.

##### RF015 — Assistente virtual de recomendação de estabelecimentos
- **ID:** `RF015`
- **Nome:** Assistente virtual de recomendação de estabelecimentos
- **RU de Origem:** `RU08` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Could (Desejável)
- **Descrição:** O sistema **deveria** disponibilizar um assistente virtual baseado em fluxo guiado de perguntas ou entrada textual em linguagem natural capaz de identificar critérios de público (crianças, pets, idosos, PCD ou neurodivergentes) e bairro em João Pessoa, recomendando até 5 estabelecimentos compatíveis acompanhados das tags atendidas.
- **Entradas / Pré-condições:** Consulta textual ou respostas fornecidas pelo cliente nas etapas do fluxo guiado do assistente.
- **Saídas / Pós-condições:** Lista ordenada de até 5 estabelecimentos recomendados com link direto para suas páginas detalhadas (`RF004`) ou sugestão de flexibilização de critérios quando não houver correspondência.

---

#### Grupo Won't — Agora Não (Escopo Negativo Formalizado)

##### RF016 — Pagamentos online, checkout financeiro, delivery próprio, app nativo e nota por item
- **ID:** `RF016`
- **Nome:** Pagamentos online, checkout financeiro, delivery próprio, app nativo e avaliação individual por item
- **RU de Origem:** `RU02` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Won't (Agora não — Escopo Negativo)
- **Descrição:** Item registrado formalmente como excluído do escopo atual do projeto: a plataforma não processa pagamentos online nem checkout financeiro, não oferece serviço próprio de entregas (delivery), não prevê desenvolvimento de aplicativo mobile nativo (iOS/Android) e não permite avaliação individual de itens isolados do cardápio (substituída pela marcação "Favoritos da Casa" em `RF005`).
- **Entradas / Pré-condições:** Não aplicável na entrega atual (deliberação formal de controle de escopo definida na Seção 3.2 e validada na Seção 4).
- **Saídas / Pós-condições:** Garantia verificável de zero fluxos financeiros internos, zero carrinhos de compra e direcionamento exclusivo para canais externos oficiais (`RF006`, `RD003`).

---

### 5.4 Requisitos Não Funcionais (`NF001` a `NF006`)

Todos os Requisitos Não Funcionais são obrigatórios (**deve**) e definidos com critérios numéricos objetivamente mensuráveis:

| ID | Categoria | Enunciado Verificável | Método de Verificação |
| :--- | :--- | :--- | :--- |
| **NF001** | Desempenho | O sistema **deve** concluir o carregamento completo das telas principais do MVP (busca com filtros, detalhes do estabelecimento, avaliação nos quatro pilares e favoritos) em até **3,0 segundos** em conexão móvel simulada 4G (10 Mbps de download, latência de 100 ms) em, no mínimo, **95% dos acessos**. | Execução de 20 medições por tela com limitação de rede 4G no Chrome DevTools / Lighthouse, verificando percentil 95 <= 3,0 s. |
| **NF002** | Acessibilidade (WCAG 2.1 AA) | O sistema **deve** atender à razão de contraste mínima de **4,5:1** para textos normais e **3,0:1** para textos grandes (>= 18 pt ou >= 14 pt em negrito) e elementos interativos, em conformidade com as diretrizes **WCAG 2.1 Nível AA**, utilizando tamanho base de fonte >= 16 px e rótulos textuais explícitos em 100% dos campos e controles para pessoas idosas e usuários com baixa visão. | Auditoria automatizada (Lighthouse Accessibility e verificador de contraste WCAG) aliada à inspeção manual em 100% das telas do MVP. |
| **NF003** | Responsividade | O sistema **deve** adaptar integralmente sua grade, controles de filtro, cartões e modais para larguras de tela entre **360 px e 1440 px**, apresentando **0 pixels** de rolagem horizontal indesejada, sem sobreposição textual ou corte de botões em 100% das telas do MVP. | Testes de visualização responsiva nas larguras de 360 px, 768 px, 1024 px e 1440 px em ferramentas de inspeção do navegador. |
| **NF004** | Compatibilidade | O sistema **deve** executar todas as funcionalidades *Must* (`RF001` a `RF010`) sem erros de execução no console ou distorções funcionais nas **duas últimas versões estáveis** dos navegadores Google Chrome, Mozilla Firefox, Microsoft Edge e Safari (desktop e móvel). | Execução de roteiro de testes funcionais ponta a ponta nas versões estáveis dos quatro navegadores citados. |
| **NF005** | Usabilidade Mensurável | O sistema **deve** possibilitar que, no mínimo, **90% dos participantes** nos testes de validação comunitária concluam sem auxílio externo: (a) uma busca combinada com ao menos 3 filtros em até **45 segundos** e no máximo **4 interações**; e (b) o envio completo de uma avaliação nos quatro pilares em até **60 segundos** e no máximo **6 interações**. | Testes moderados cronometrados com participantes do público-alvo em João Pessoa, registrando taxa de conclusão, tempo em segundos e contagem de cliques/toques. |
| **NF006** | Confiabilidade Local (MVP) | O sistema **deve** gravar no armazenamento local do navegador (`localStorage`) **100%** das avaliações submetidas e das listas de favoritos criadas no MVP, recuperando integralmente esses dados após recarregamento da página e exibindo aviso informativo em até **1,0 segundo** caso o armazenamento local esteja indisponível ou bloqueado pelo navegador. | Teste de recarregamento após gravação de avaliações e listas + teste simulado com `localStorage` desabilitado no navegador. |

---

### 5.5 Regras de Domínio (`RD001` a `RD003`)

| ID | Nome da Regra | Especificação Formal da Regra de Domínio | Requisitos Impactados |
| :--- | :--- | :--- | :--- |
| **RD001** | Conformidade com a LGPD (Lei nº 13.709/2018) | Toda coleta, exibição ou tratamento de informações de usuários em pesquisas, cadastros e avaliações **deve** cumprir os princípios da Lei Geral de Proteção de Dados (Lei nº 13.709/2018): consentimento explícito, minimização de dados, proibição de exposição pública de dados pessoais sensíveis (como diagnóstico médico, CPF, telefone pessoal ou endereço residencial) e anonimização nos relatórios comunitários. | `RF008`, `RF011`, `RF014`, `NF006` |
| **RD002** | Fórmula Objetiva de Cálculo das Médias nos Quatro Pilares | Para cada estabelecimento e para cada pilar $p \in \{1, 2, 3, 4\}$, a média exibida **deve** ser calculada como a média aritmética simples das $N$ notas inteiras válidas $n_{i,p} \in \{1, 2, 3, 4, 5\}$ registradas para aquele pilar, arredondada para **1 casa decimal**: $\text{Média}_p = \frac{1}{N}\sum_{i=1}^{N} n_{i,p}$ quando $N \ge 1$. Quando $N = 0$, o sistema **deve** exibir o texto `"Sem avaliações"` em substituição ao valor numérico, vedando a exibição de `0,0`. | `RF001`, `RF007`, `RF008` |
| **RD003** | Não Intermediação Financeira e Vitrine Informativa | A plataforma **deve** operar exclusivamente como diretório comunitário informativo em João Pessoa (PB), proibindo cobranças, comissões, pagamentos online, carrinho de compras, delivery próprio e avaliações individuais por item do cardápio. Os preços constantes na vitrine possuem caráter exclusivamente informativo e toda negociação comercial ocorre fora da plataforma pelos canais oficiais do estabelecimento. | `RF005`, `RF006`, `RF013`, `RF016` |

---

### 5.6 Auditoria Interna de Qualidade da Especificação

Antes da publicação da linha de base no Marco M3 (10/11/2026), todos os enunciados (`RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006` e `RD001`–`RD003`) foram auditados segundo os critérios da disciplina:

- Emprego consistente de **"deve"** para obrigatoriedade e **"deveria"** para desejabilidade;
- Ausência integral de termos subjetivos ou vagos e de jargões técnicos informais;
- Verificabilidade numérica garantida em 100% dos Requisitos Não Funcionais e Regras de Domínio;
- Alinhamento integral com o catálogo tabular `/artefatos/requisitos/requisitos.csv`, com os wireframes da Seção 4 e com os objetivos `OBJ1` a `OBJ4` da Seção 3.

---

<a id="secao-6"></a>

## Seção 6 — Estrutura Analítica do Projeto (EAP), Marcos e Cronograma

**Projeto:** Family Place  
**Responsável pela Seção:** Pierre Simon  
**Marco Associado:** M3 (10/11/2026)  
**Data de Consolidação:** 10/11/2026  
**Artefatos Complementares:** `/artefatos/planejamento/eap.html`, `/artefatos/planejamento/cronograma.csv` e `/artefatos/planejamento/gantt.html`  

---

### 6.1 Estrutura Analítica do Projeto (EAP)

A Estrutura Analítica do Projeto (EAP) decompõe 100% do escopo aprovado do **Family Place** em **quatro grandes pacotes de trabalho** (`1. Gestão`, `2. Requisitos`, `3. Planejamento` e `4. Entrega e MVP`), desdobrados em 16 subitens executáveis e diretamente vinculados aos objetivos (`OBJ1`–`OBJ4`), requisitos (`RU`, `RF`, `NF`, `RD`) e entregáveis do repositório. A representação gráfica completa encontra-se em `/artefatos/planejamento/eap.html`.

#### Pacote 1 — Gestão
- **1.1 Estruturação do Repositório, Identificação e Processo Híbrido** *(Responsável: Pierre Simon)*
  - Entregáveis: estrutura de diretórios (`/docs` e `/artefatos`), Seção 1 (`/docs/01-identificacao.md`) e Seção 2 (`/docs/02-processo-desenvolvimento.md`).
  - Vínculo: `OBJ4`.
- **1.2 Elaboração do TAP, Declaração de Escopo e PMCanvas** *(Responsável: Pierre Simon)*
  - Entregáveis: Seção 3.1 e 3.2 (`/docs/03-tap-escopo-viabilidade.md`) e `/artefatos/pmcanvas/pmcanvas.html`.
  - Vínculo: `OBJ1`, `OBJ2`, `OBJ3`, `OBJ4`, `RF016` (Won't), `RD003`.
- **1.3 Estudo de Viabilidade Técnica, Comunitária e de Prazo** *(Responsável: Kewy Huang)*
  - Entregáveis: Seção 3.3 (`/docs/03-tap-escopo-viabilidade.md`) com parecer formal de prosseguimento.
  - Vínculo: `OBJ1`, `OBJ4`.
- **1.4 Coordenação de Rituais Semanais e Registro de Atas** *(Responsável: Pierre Simon)*
  - Entregáveis: atas de planejamento, sincronização e revisão em `/artefatos/atas/` e acompanhamento contínuo dos ciclos semanais.
  - Vínculo: `OBJ4`.

#### Pacote 2 — Requisitos
- **2.1 Plano e Instrumentos de Elicitação Comunitária** *(Responsável: Kewy Huang)*
  - Entregáveis: `/artefatos/elicitacao/questionario.md` e `/artefatos/elicitacao/roteiro-entrevista.md`.
  - Vínculo: `OBJ4`, `RD001`.
- **2.2 Aplicação da Pesquisa Comunitária e Entrevistas em João Pessoa** *(Responsável: Kewy Huang)*
  - Entregáveis: consolidação das 28 respostas do questionário e das 4 entrevistas (`ENT-01` a `ENT-04`) em `/artefatos/elicitacao/resumo-resultados-elicitacao.md`.
  - Vínculo: `OBJ1`, `OBJ2`, `OBJ3`, `OBJ4`, `RU01`–`RU08`, `RD001`.
- **2.3 Protótipos de Baixa Fidelidade e Validação com Público-Alvo** *(Responsável: Kewy Huang)*
  - Entregáveis: `/artefatos/wireframes/wireframes.html` (`WF-01` a `WF-04`) e Seção 4 (`/docs/04-elicitacao-prototipos.md`).
  - Vínculo: `RU01`–`RU04`, `RF001`–`RF010`, `NF002`, `NF003`, `NF005`.
- **2.4 Especificação Formal de Requisitos e Catálogo Tabular** *(Responsável: Caio Augusto)*
  - Entregáveis: Seção 5 (`/docs/05-especificacao-requisitos.md`) e `/artefatos/requisitos/requisitos.csv`.
  - Vínculo: `RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`.

#### Pacote 3 — Planejamento
- **3.1 EAP, Marcos e Cronograma com Regra de Sommerville** *(Responsável: Pierre Simon)*
  - Entregáveis: Seção 6 (`/docs/06-eap-marcos-cronograma.md`), `/artefatos/planejamento/eap.html`, `cronograma.csv` e `gantt.html`.
  - Vínculo: `OBJ4`, `M1`–`M5`.
- **3.2 Personas, Epics, Histórias de Usuário e Definição de Pronto** *(Responsável: Renan Mendes)*
  - Entregáveis: personas derivadas de `ENT-01`–`ENT-04`, `EP01`–`EP05`, `H01`–`H15` e Definição de Pronto na Seção 7 (`/docs/07-backlog-estimativas.md`).
  - Vínculo: `RF001`–`RF015`, `NF001`–`NF006`, `RD001`–`RD003`.
- **3.3 Sessão de Planning Poker, Quadro Kanban e Backlog CSV** *(Responsável: Renan Mendes)*
  - Entregáveis: registro de Planning Poker na Seção 7, `/artefatos/backlog/kanban.html` e `/artefatos/backlog/backlog.csv`.
  - Vínculo: `OBJ4`, `H01`–`H15`.
- **3.4 Organização e Arquitetura do MVP em React sem Banco de Dados** *(Responsável: Renan Mendes)*
  - Entregáveis: Seção 8 (`/docs/08-mvp.md`) com estrutura de componentes, dados estáticos de 15 locais de João Pessoa e critérios de demonstração.
  - Vínculo: `OBJ1`, `OBJ2`, `OBJ3`, `RF001`–`RF010`, `NF001`–`NF006`.

#### Pacote 4 — Entrega e MVP
- **4.1 Implementação MVP: Catálogo, Busca Combinada, Detalhes e Vitrine** *(Responsável: Pierre Simon)*
  - Entregáveis: módulos React de listagem de 15 estabelecimentos de João Pessoa, filtros combinados, página detalhada, tags, vitrine com "Favoritos da Casa" e links externos de WhatsApp/site.
  - Vínculo: `OBJ1`, `OBJ3`, `RF001`–`RF006`, `NF001`–`NF004`, `RD003`.
- **4.2 Implementação MVP: Avaliação nos 4 Pilares e Listas de Favoritos** *(Responsável: Renan Mendes)*
  - Entregáveis: módulos React de consulta/submissão de notas nos 4 pilares (`RD002`), gestão de listas de favoritos por critério e gravação em `localStorage` (`NF006`).
  - Vínculo: `OBJ2`, `RF007`–`RF010`, `NF005`, `NF006`, `RD001`, `RD002`.
- **4.3 Matriz de Rastreabilidade, Auditoria de Qualidade e Seção 9** *(Responsável: Caio Augusto)*
  - Entregáveis: Seção 9 (`/docs/09-referencias-anexos-ia.md`), matriz bidirecional completa em `/artefatos/rastreabilidade/matriz_rastreabilidade.csv`, referências e revisão de qualidade.
  - Vínculo: `OBJ4`, `RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`.
- **4.4 Validação Comunitária, Homologação v1.0 e Apresentação Final** *(Responsável: Pierre Simon)*
  - Entregáveis: registros de testes com ao menos 12 moradores e 3 representantes de estabelecimentos de João Pessoa, documentação homologada na versão v1.0 e apresentação final na disciplina.
  - Vínculo: `OBJ1`, `OBJ2`, `OBJ3`, `OBJ4`, `NF005`.

---

### 6.2 Marcos Verificáveis do Projeto (`M1` a `M5`)

Os cinco marcos do projeto coincidem integralmente com as datas definidas na Seção 3 e representam exclusivamente **saídas formais objetivamente verificáveis**:

| ID | Marco | Data-Alvo | Saída Formal Verificável | Responsável Principal |
| :--- | :--- | :---: | :--- | :--- |
| **M1** | Aprovação do TAP, Escopo, Viabilidade e PMCanvas | **20/10/2026** | Documentos `/docs/01-identificacao.md`, `/docs/02-processo-desenvolvimento.md`, `/docs/03-tap-escopo-viabilidade.md` e `/artefatos/pmcanvas/pmcanvas.html` revisados e integrados ao repositório Git. | Pierre Simon e Kewy Huang |
| **M2** | Conclusão da Elicitação e Protótipos de Baixa Fidelidade | **03/11/2026** | Artefatos em `/artefatos/elicitacao/` (28 respostas e 4 entrevistas consolidadas), `/artefatos/wireframes/wireframes.html` (`WF-01` a `WF-04`) e `/docs/04-elicitacao-prototipos.md` validados e aprovados. | Kewy Huang |
| **M3** | Linha de Base de Requisitos e Planejamento Detalhado | **10/11/2026** | Documentos `/docs/05-especificacao-requisitos.md`, `/artefatos/requisitos/requisitos.csv`, `/docs/06-eap-marcos-cronograma.md` e artefatos em `/artefatos/planejamento/` (`eap.html`, `cronograma.csv`, `gantt.html`) auditados e publicados. | Caio Augusto e Pierre Simon |
| **M4** | Consolidação do Backlog, Estimativas e Plano do MVP | **17/11/2026** | Documentos `/docs/07-backlog-estimativas.md`, `/docs/08-mvp.md` e artefatos em `/artefatos/backlog/` (`kanban.html` e `backlog.csv`) com sessão de Planning Poker registrada e escopo do MVP fechado. | Renan Mendes |
| **M5** | Entrega Final da Documentação Integrada e Apresentação do MVP | **01/12/2026** | Versão v1.0 das Seções 1 a 9, Matriz de Rastreabilidade com cobertura integral sem células órfãs, MVP funcional em React validado junto à comunidade de João Pessoa e apresentação realizada em sala. | Toda a Equipe (coord. Pierre Simon) |

---

### 6.3 Metodologia de Estimativa Temporal — Regra de Sommerville

Para proteger o calendário acadêmico contra desvios recorrentes em projetos de software, todas as durações do cronograma aplicam explicitamente a **Regra de Sommerville (+50% sobre a duração otimista)**:

$$\text{Duração Planejada} = D_{\text{otimista}} + 0{,}30 \cdot D_{\text{otimista}} + 0{,}20 \cdot D_{\text{otimista}} = 1{,}50 \cdot D_{\text{otimista}}$$

Onde:
- **Duração Otimista ($D_{\text{otimista}}$):** tempo mínimo necessário em condições ideais sem interrupções;
- **+30% (Imprevistos conhecidos):** absorção de atrasos em respostas de pesquisas comunitárias, conflitos com avaliações de outras disciplinas e ajustes de revisão cruzada;
- **+20% (Aspectos não previstos):** absorção de refinamentos de acessibilidade WCAG, correções de compatibilidade entre navegadores e ajustes descobertos na validação final.

---

### 6.4 Cronograma Detalhado (13/10/2026 a 01/12/2026)

As datas a seguir correspondem a dias corridos inclusivos (`Fim = Início + Duração Total - 1`), sincronizadas com `/artefatos/planejamento/cronograma.csv` e `/artefatos/planejamento/gantt.html`:

| ID EAP | Atividade | Dependência | Responsável | Otimista (dias) | Imprevistos +30% | Não Previstos +20% | Margem Total (+50%) | Duração Total (dias) | Início | Fim | Marco |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1.1** | Estruturação do repositório, identificação e processo híbrido | — | Pierre Simon | 2 | 0,6 | 0,4 | 1 | **3** | 13/10/2026 | 15/10/2026 | M1 |
| **1.2** | Elaboração do TAP, declaração de escopo e PMCanvas | 1.1 | Pierre Simon | 4 | 1,2 | 0,8 | 2 | **6** | 15/10/2026 | 20/10/2026 | M1 |
| **1.3** | Estudo de viabilidade técnica, comunitária e de prazo | 1.1 | Kewy Huang | 2 | 0,6 | 0,4 | 1 | **3** | 18/10/2026 | 20/10/2026 | M1 |
| **1.4** | Coordenação de rituais semanais e registro de atas | 1.1 | Pierre Simon | 32 | 9,6 | 6,4 | 16 | **48** | 14/10/2026 | 30/11/2026 | M5 |
| **2.1** | Plano e instrumentos de elicitação comunitária | 1.2 | Kewy Huang | 2 | 0,6 | 0,4 | 1 | **3** | 20/10/2026 | 22/10/2026 | M2 |
| **2.2** | Aplicação do questionário e entrevistas em João Pessoa | 2.1 | Kewy Huang | 6 | 1,8 | 1,2 | 3 | **9** | 22/10/2026 | 30/10/2026 | M2 |
| **2.3** | Protótipos de baixa fidelidade (WF-01 a WF-04) e validação | 2.2 | Kewy Huang | 4 | 1,2 | 0,8 | 2 | **6** | 29/10/2026 | 03/11/2026 | M2 |
| **2.4** | Especificação formal de requisitos e planilha CSV | 2.3 | Caio Augusto | 4 | 1,2 | 0,8 | 2 | **6** | 04/11/2026 | 09/11/2026 | M3 |
| **3.1** | EAP, marcos, cronograma Sommerville e gráfico Gantt | 2.3 | Pierre Simon | 4 | 1,2 | 0,8 | 2 | **6** | 05/11/2026 | 10/11/2026 | M3 |
| **3.2** | Personas, epics, histórias de usuário e Definição de Pronto | 2.4 | Renan Mendes | 2 | 0,6 | 0,4 | 1 | **3** | 11/11/2026 | 13/11/2026 | M4 |
| **3.3** | Sessão de Planning Poker, quadro Kanban e backlog CSV | 3.2 | Renan Mendes | 2 | 0,6 | 0,4 | 1 | **3** | 14/11/2026 | 16/11/2026 | M4 |
| **3.4** | Organização e arquitetura do MVP em React sem banco | 3.2 | Renan Mendes | 2 | 0,6 | 0,4 | 1 | **3** | 15/11/2026 | 17/11/2026 | M4 |
| **4.1** | Implementação MVP: catálogo, filtros combinados, detalhes e vitrine | 3.4 | Pierre Simon | 4 | 1,2 | 0,8 | 2 | **6** | 18/11/2026 | 23/11/2026 | M5 |
| **4.2** | Implementação MVP: avaliação nos 4 pilares e favoritos locais | 3.4 | Renan Mendes | 4 | 1,2 | 0,8 | 2 | **6** | 19/11/2026 | 24/11/2026 | M5 |
| **4.3** | Matriz de rastreabilidade, auditoria de qualidade e Seção 9 | 3.3; 3.4 | Caio Augusto | 4 | 1,2 | 0,8 | 2 | **6** | 21/11/2026 | 26/11/2026 | M5 |
| **4.4** | Validação comunitária, homologação v1.0 e apresentação final | 4.1; 4.2; 4.3 | Pierre Simon | 4 | 1,2 | 0,8 | 2 | **6** | 26/11/2026 | 01/12/2026 | M5 |

#### Caminho Crítico Identificado

O caminho crítico sequencial do projeto percorre a cadeia **`1.1 -> 1.2 -> 2.1 -> 2.2 -> 2.3 -> 2.4 -> 3.2 -> 3.4 -> 4.2 -> 4.4`**, cobrindo integralmente o intervalo de **13/10/2026 a 01/12/2026** (50 dias corridos). Qualquer atraso superior à folga da Regra de Sommerville nessas atividades impacta diretamente a data limite de entrega final (`M5`).

---

### 6.5 Riscos de Prazo e Ações de Mitigação

| ID | Risco de Prazo | Atividades Afetadas | Probabilidade | Impacto | Ação Preventiva e Plano de Contingência |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **RP01** | Atraso na obtenção de respostas de moradores e comerciantes em João Pessoa. | `2.2`, `4.4` | Média | Alto | Iniciar a coleta logo após `M1`, utilizar divulgação coordenada pelos quatro integrantes e acionar contatos diretos locais caso a amostra fique abaixo de 50% na metade da janela prevista. |
| **RP02** | Gargalo na revisão cruzada entre especificação de requisitos e planejamento. | `2.4`, `3.1`, `3.2` | Média | Médio | Respeitar o limite de WIP de no máximo 3 itens em `Em Revisão` no Kanban e reservar bloco fixo de revisão às segundas-feiras. |
| **RP03** | Sobrecarga acadêmica em semanas de provas de outras disciplinas de Ciência da Computação. | `3.2`–`3.4`, `4.1`–`4.2` | Alta | Alto | Operar com a margem de +50% da Regra de Sommerville já incorporada no cronograma e redistribuir histórias *Must* entre os quatro integrantes nos check-ins de quinta-feira. |
| **RP04** | Tentativa de implementar requisitos *Should* ou *Could* antes de concluir 100% dos requisitos *Must*. | `4.1`, `4.2` | Média | Alto | Travar o código do MVP exclusivamente em `RF001`–`RF010` até a aprovação integral nos testes de validação; módulos *Should* e *Could* permanecem restritos à especificação até que todos os itens *Must* estejam em `Concluído`. |
| **RP05** | Descoberta tardia de inconsistências de rastreabilidade ou não conformidade WCAG próxima a 01/12/2026. | `4.3`, `4.4` | Baixa | Alto | Antecipar a pré-entrega consolidada (`v0.9`) para 24/11/2026 e iniciar a atividade `4.3` em paralelo à reta final da implementação do MVP, preservando 6 dias finais para validação comunitária e ajustes. |

---

<a id="secao-7"></a>

## Seção 7 — Backlog do Produto, Personas, Histórias de Usuário, Estimativas e Kanban

**Projeto:** Family Place  
**Responsável pela Seção:** Renan Mendes  
**Marco Associado:** M4 (17/11/2026)  
**Data de Consolidação:** 17/11/2026  
**Artefatos Complementares:** `/artefatos/backlog/kanban.html` e `/artefatos/backlog/backlog.csv`  

---

### 7.1 Personas do Projeto (Derivadas de `ENT-01` a `ENT-04`)

As quatro personas abaixo sintetizam os perfis reais levantados nas entrevistas semiestruturadas da Seção 4 (`ENT-01` a `ENT-04`), preservando o anonimato dos entrevistados (conformidade com `RD001`):

#### P1 — Camila Ferreira (34 anos) — *Derivada de `ENT-01`*
- **Perfil em João Pessoa (PB):** Analista administrativa, moradora do bairro Bancários, mãe de um menino de 6 anos no espectro autista (TEA).
- **Rotina:** Pesquisa restaurantes e espaços familiares aos fins de semana para sair com o filho e familiares próximos.
- **Dor Principal:** Já interrompeu passeios em João Pessoa ao encontrar música em volume alto, iluminação excessiva ou falta de estrutura infantil não informados previamente em aplicativos de mapas genéricos.
- **Objetivo no Family Place:** Combinar filtros de estrutura infantil e conforto sensorial (baixo ruído, iluminação controlada), consultar notas separadas por pilar e organizar listas próprias de locais seguros para o filho.

#### P2 — Rafael Medeiros (29 anos) — *Derivado de `ENT-02`*
- **Perfil em João Pessoa (PB):** Designer gráfico, morador do bairro Bessa, tutor de dois cães (um de porte pequeno e outro de porte médio).
- **Rotina:** Frequenta a orla do Bessa e de Manaíra com os animais e busca cafeterias e restaurantes para refeições após os passeios.
- **Dor Principal:** Frustra-se com estabelecimentos anunciados genericamente como *pet friendly* que recusam cães de porte médio ou disponibilizam apenas mesas externas descobertas sob sol ou chuva.
- **Objetivo no Family Place:** Filtrar locais pelo porte aceito e existência de área coberta com potes de água, avaliar a receptividade pet de forma independente, guardar favoritos para passeios com os cães e aproveitar cupons presenciais e novidades de eventos pet.

#### P3 — Dona Lúcia Nogueira (72 anos) e Beatriz (41 anos) — *Derivada de `ENT-03`*
- **Perfil em João Pessoa (PB):** Professora aposentada cadeirante, moradora do bairro Manaíra, acompanhada nos passeios por sua cuidadora familiar Beatriz.
- **Rotina:** Planejam almoços semanais em restaurantes da cidade e costumam verificar previamente as condições físicas de acesso pelo smartphone.
- **Dor Principal:** Deparam-se com degraus na entrada, banheiros sem barras de apoio e circulação estreita entre mesas, além de interfaces digitais com letras pequenas e baixo contraste que dificultam a leitura por idosos.
- **Objetivo no Family Place:** Consultar informações confiáveis sobre rampa, banheiro adaptado e assentos confortáveis, acionar contato direto no WhatsApp do local para reservar mesa térrea e, em ciclos futuros, utilizar recomendações por perguntas guiadas.

#### P4 — Marcos Vinícius Andrade (38 anos) — *Derivado de `ENT-04`*
- **Perfil em João Pessoa (PB):** Proprietário de uma cafeteria familiar inclusiva no bairro Tambaú equipada com rampa de acesso, cadeirão infantil e varanda coberta para pets.
- **Rotina:** Gerencia o atendimento presencial e responde diariamente a mensagens de clientes em redes sociais e WhatsApp.
- **Dor Principal:** Consome horas repetindo informações básicas sobre acessibilidade e regras pet e evita plataformas comerciais que cobram comissões sobre vendas ou exigem entrega própria.
- **Objetivo no Family Place:** Divulgar as comodidades inclusivas do estabelecimento, expor uma vitrine informativa com destaque para "Favoritos da Casa", receber interessados diretamente no WhatsApp oficial, administrar seu perfil comercial e publicar cupons presenciais e novidades curtas.

---

### 7.2 Epics do Produto (`EP01` a `EP05`)

| ID Epic | Nome do Epic | Requisitos Associados (Seção 5) | Histórias Vinculadas | Foco Principal |
| :--- | :--- | :--- | :--- | :--- |
| **EP01** | Descoberta Inclusiva e Busca Combinada | `RF001`, `RF002`, `RF003`, `NF001`, `NF003`, `NF005` | `H01`, `H02`, `H03` | Localização de estabelecimentos em João Pessoa com filtros combinados simultâneos (MVP). |
| **EP02** | Perfil do Estabelecimento, Vitrine e Contato Direto | `RF004`, `RF005`, `RF006`, `NF002`, `RD003` | `H04`, `H05`, `H06` | Tags de infraestrutura, vitrine com "Favoritos da Casa" e contato externo sem pagamentos (MVP). |
| **EP03** | Avaliação Multicritério nos Quatro Pilares | `RF007`, `RF008`, `NF005`, `NF006`, `RD001`, `RD002` | `H07`, `H08` | Consulta e envio de avaliações independentes de 1 a 5 estrelas nos 4 pilares (MVP). |
| **EP04** | Curadoria Pessoal de Favoritos por Critério | `RF009`, `RF010`, `NF006` | `H09`, `H10` | Criação de listas temáticas por necessidade e organização de locais salvos (MVP). |
| **EP05** | Gestão do Parceiro, Fidelidade e Comunidade | `RF011`, `RF012`, `RF013`, `RF014`, `RF015`, `RD001`, `RD003` | `H11`, `H12`, `H13`, `H14`, `H15` | Autenticação, painel do estabelecimento, Clube de Fidelidade, timeline e assistente virtual (Should/Could). |

*Nota de escopo negativo:* o requisito `RF016` (pagamentos online, checkout financeiro, delivery próprio, aplicativo mobile nativo e avaliação individual por item) pertence à classe **Won't** e não origina histórias no backlog implementável.

---

### 7.3 Histórias de Usuário (`H01` a `H15`)

Todas as histórias seguem estritamente o formato **"Como [persona], eu quero [intenção], para que [benefício]."** sem menção a elementos de interface gráfica nos enunciados e com vínculo direto aos requisitos da Seção 5.

#### Histórias Must — Essenciais (Compõem o MVP — 44 pontos)

##### H01 — Catálogo e busca textual em João Pessoa
- **ID:** `H01` | **Epic:** `EP01` | **Prioridade:** Must | **Pontos (Fibonacci):** `3`
- **Requisitos Vinculados:** `RF001`, `NF001`, `NF003`, `NF004`
- **Enunciado:** Como Camila Ferreira (mãe de criança neurodivergente), eu quero pesquisar estabelecimentos cadastrados em João Pessoa por nome, bairro ou categoria comercial, para que eu encontre opções na minha região de interesse sem depender de consultas dispersas.
- **Critérios de Aceite:**
  1. O catálogo inicial contém ao menos 15 estabelecimentos situados em bairros de João Pessoa (PB).
  2. A busca textual ignora diferenças de maiúsculas, minúsculas e acentuação.
  3. Cada resultado exibe nome, bairro, categoria, tags resumidas e as médias separadas dos quatro pilares.
  4. O carregamento completo ocorre em até 3,0 segundos em conexão 4G simulada (`NF001`).

##### H02 — Filtragem combinada por critérios inclusivos
- **ID:** `H02` | **Epic:** `EP01` | **Prioridade:** Must | **Pontos (Fibonacci):** `8`
- **Requisitos Vinculados:** `RF002`, `NF003`, `NF005`
- **Enunciado:** Como Camila Ferreira (mãe de criança neurodivergente), eu quero combinar simultaneamente critérios de estrutura infantil, acessibilidade física, conforto sensorial e receptividade pet em uma mesma consulta, para que eu identifique apenas locais que atendam a todas as necessidades da minha família ao mesmo tempo.
- **Critérios de Aceite:**
  1. É possível combinar simultaneamente ao menos quatro categorias de filtros (tipo de local, estrutura infantil, acessibilidade física/conforto sensorial e receptividade pet).
  2. A aplicação simultânea utiliza conjunção lógica E, exibindo somente estabelecimentos que atendem a 100% dos critérios marcados.
  3. A filtragem opera em conjunto com eventual pesquisa textual ativa (`RF001`).
  4. Usuários em validação concluem uma busca com ao menos 3 filtros em até 45 segundos e no máximo 4 interações (`NF005`).

##### H03 — Contagem de locais, limpeza de critérios e aviso de ausência
- **ID:** `H03` | **Epic:** `EP01` | **Prioridade:** Must | **Pontos (Fibonacci):** `2`
- **Requisitos Vinculados:** `RF003`, `NF005`
- **Enunciado:** Como Beatriz (cuidadora de idoso cadeirante), eu quero saber quantos estabelecimentos correspondem aos critérios escolhidos, redefinir todos os filtros de uma só vez e receber orientação quando não houver correspondência, para que eu ajuste minha pesquisa sem confusão.
- **Critérios de Aceite:**
  1. O contador de estabelecimentos compatíveis atualiza-se automaticamente após qualquer adição ou remoção de filtro.
  2. O comando de limpeza remove todos os filtros e o texto pesquisado em uma única ação, restaurando os 15 ou mais estabelecimentos do catálogo.
  3. Quando a combinação resultar em zero estabelecimentos, uma mensagem orientativa sugere flexibilizar ou limpar os critérios ativos.

##### H04 — Detalhes do estabelecimento e tags de infraestrutura
- **ID:** `H04` | **Epic:** `EP02` | **Prioridade:** Must | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF004`, `NF002`, `NF003`
- **Enunciado:** Como Dona Lúcia Nogueira (idosa cadeirante), eu quero consultar o endereço em João Pessoa, o horário de funcionamento e o detalhamento das comodidades inclusivas de um estabelecimento, para que eu confirme previamente a existência de rampa, banheiro adaptado e circulação segura antes de sair de casa.
- **Critérios de Aceite:**
  1. São exibidos nome, categoria, endereço, bairro em João Pessoa, horário de funcionamento e descrição institucional do local selecionado.
  2. As tags de infraestrutura são agrupadas separadamente em Estrutura Infantil, Acessibilidade e Conforto (idosos, PCD e neurodivergentes) e Receptividade Pet.
  3. Todos os textos normais respeitam contraste mínimo de 4,5:1 e fonte base >= 16 px (`NF002`), sem rolagem horizontal entre 360 px e 1440 px (`NF003`).

##### H05 — Vitrine informativa com destaque Favoritos da Casa
- **ID:** `H05` | **Epic:** `EP02` | **Prioridade:** Must | **Pontos (Fibonacci):** `3`
- **Requisitos Vinculados:** `RF005`, `RD003`
- **Enunciado:** Como Rafael Medeiros (tutor de cães), eu quero visualizar os principais produtos e serviços oferecidos pelo estabelecimento com faixas de preço informativas e destaque para os Favoritos da Casa, para que eu avalie se a proposta do local atende às expectativas da visita sem precisar realizar compras na plataforma.
- **Critérios de Aceite:**
  1. 100% dos estabelecimentos do catálogo exibem uma vitrine informativa com nome do item, descrição breve e faixa de preço informativa.
  2. Itens destacados exibem identificação clara de "Favoritos da Casa".
  3. A vitrine não apresenta carrinho de compras, checkout financeiro nem avaliação individual por item, exibindo aviso explícito de caráter informativo (`RD003`).

##### H06 — Redirecionamento direto para WhatsApp e site oficial
- **ID:** `H06` | **Epic:** `EP02` | **Prioridade:** Must | **Pontos (Fibonacci):** `2`
- **Requisitos Vinculados:** `RF006`, `RD003`
- **Enunciado:** Como Beatriz (cuidadora de idoso cadeirante), eu quero iniciar contato diretamente com o WhatsApp ou site oficial do estabelecimento escolhido, para que eu confirme disponibilidade de mesa térrea ou tire dúvidas sem intermediação financeira.
- **Critérios de Aceite:**
  1. 100% dos estabelecimentos possuem ao menos um link externo válido para WhatsApp oficial ou site institucional.
  2. O redirecionamento abre externamente em nova aba com atributos de segurança (`rel="noopener noreferrer"`).
  3. O redirecionamento para WhatsApp inclui mensagem inicial contextualizada mencionando o estabelecimento consultado no Family Place.

##### H07 — Consulta de médias nos quatro pilares e comentários
- **ID:** `H07` | **Epic:** `EP03` | **Prioridade:** Must | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF007`, `NF002`, `RD002`
- **Enunciado:** Como Camila Ferreira (mãe de criança neurodivergente), eu quero consultar as médias separadas nos quatro pilares de acolhimento e os comentários ordenados por data de um estabelecimento, para que eu julgue cada dimensão de forma independente sem ser induzida por uma nota genérica única.
- **Critérios de Aceite:**
  1. São exibidas separadamente as médias dos quatro pilares (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) com arredondamento para 1 casa decimal (`RD002`).
  2. Quando o total de avaliações for igual a zero (`N = 0`), cada pilar exibe o texto `"Sem avaliações"` em vez de `0,0`.
  3. Os comentários da comunidade aparecem em ordem cronológica decrescente, acompanhados da data e das quatro notas atribuídas.

##### H08 — Registro de avaliação multicritério nos quatro pilares
- **ID:** `H08` | **Epic:** `EP03` | **Prioridade:** Must | **Pontos (Fibonacci):** `8`
- **Requisitos Vinculados:** `RF008`, `NF005`, `NF006`, `RD001`, `RD002`
- **Enunciado:** Como Rafael Medeiros (tutor de cães), eu quero atribuir notas de 1 a 5 estrelas para cada um dos quatro pilares acompanhadas de um comentário opcional sobre minha visita, para que minha experiência atualize imediatamente as médias do estabelecimento e ajude outros moradores de João Pessoa.
- **Critérios de Aceite:**
  1. O envio exige seleção obrigatória de nota inteira entre 1 e 5 para todos os quatro pilares, bloqueando submissão incompleta com mensagem explicativa.
  2. O comentário textual aceita até 500 caracteres e exibe aviso de privacidade proibindo exposição de dados pessoais sensíveis (`RD001`).
  3. Após o envio, as quatro médias são recalculadas imediatamente (`RD002`), o comentário aparece no topo da listagem e o registro permanece gravado após recarregamento da página (`NF006`).
  4. Usuários em validação concluem a avaliação em até 60 segundos e no máximo 6 interações (`NF005`).

##### H09 — Criação e gestão de listas de favoritos por critério
- **ID:** `H09` | **Epic:** `EP04` | **Prioridade:** Must | **Pontos (Fibonacci):** `3`
- **Requisitos Vinculados:** `RF009`, `NF006`
- **Enunciado:** Como Camila Ferreira (mãe de criança neurodivergente), eu quero criar, renomear e remover listas de favoritos identificadas pelo critério que mais importa em cada ocasião, para que eu organize separadamente locais de baixo ruído, espaços infantis e opções acessíveis.
- **Critérios de Aceite:**
  1. É possível criar listas com nomes de 2 a 60 caracteres, bloqueando nomes vazios ou duplicados.
  2. Listas existentes podem ser renomeadas sem perder os estabelecimentos já vinculados.
  3. A exclusão de uma lista exige confirmação explícita antes da remoção definitiva.
  4. Todas as alterações permanecem salvas no armazenamento local após recarregamento (`NF006`).

##### H10 — Inclusão, remoção e consulta de locais nas listas de favoritos
- **ID:** `H10` | **Epic:** `EP04` | **Prioridade:** Must | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF010`, `NF006`
- **Enunciado:** Como Beatriz (cuidadora de idoso cadeirante), eu quero incluir ou remover um estabelecimento em uma ou mais listas de favoritos e consultar com objetividade os locais salvos em cada grupo, para que eu reutilize recomendações aprovadas sempre que planejar novos passeios.
- **Critérios de Aceite:**
  1. Um mesmo estabelecimento pode ser incluído simultaneamente em duas ou mais listas de favoritos distintas.
  2. A remoção de um estabelecimento em uma lista não afeta sua presença nas demais listas.
  3. Cada lista exibe o contador atualizado de locais, permite acesso direto aos detalhes de qualquer estabelecimento salvo e apresenta orientação clara quando estiver vazia.

---

#### Histórias Should — Importantes (Evolução Pós-MVP — 18 pontos)

##### H11 — Cadastro e autenticação por perfil de usuário
- **ID:** `H11` | **Epic:** `EP05` | **Prioridade:** Should | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF011`, `RD001`
- **Enunciado:** Como Marcos Vinícius Andrade (proprietário de cafeteria local), eu quero cadastrar e acessar minha conta com perfil de estabelecimento mediante aceite explícito de privacidade, para que apenas representantes autorizados administrem as informações do meu negócio.
- **Critérios de Aceite:**
  1. O cadastro diferencia os perfis Cliente e Estabelecimento, validando formato de e-mail e senha com no mínimo 8 caracteres.
  2. A criação da conta exige confirmação explícita da política de privacidade em conformidade com a LGPD (`RD001`).
  3. Contas de perfil Cliente não conseguem acessar funções administrativas reservadas ao perfil Estabelecimento.

##### H12 — Painel de gestão de perfil, tags e vitrine do estabelecimento
- **ID:** `H12` | **Epic:** `EP05` | **Prioridade:** Should | **Pontos (Fibonacci):** `8`
- **Requisitos Vinculados:** `RF012`, `RD003`
- **Enunciado:** Como Marcos Vinícius Andrade (proprietário de cafeteria local), eu quero atualizar os dados institucionais, as comodidades inclusivas, a vitrine informativa e os itens destacados como Favoritos da Casa, para que os moradores de João Pessoa consultem informações sempre atuais sem precisar perguntar repetidamente pelo WhatsApp.
- **Critérios de Aceite:**
  1. Somente usuários autenticados com perfil Estabelecimento conseguem alterar o perfil do próprio local.
  2. Tags de infraestrutura marcadas ou desmarcadas refletem-se na busca combinada (`RF002`) e na visualização pública (`RF004`).
  3. Itens da vitrine podem ser incluídos, editados, removidos e marcados como "Favoritos da Casa" sem opção de pagamento interno (`RD003`).

##### H13 — Clube de Fidelidade e resgate de cupons presenciais
- **ID:** `H13` | **Epic:** `EP05` | **Prioridade:** Should | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF013`, `RD003`
- **Enunciado:** Como Rafael Medeiros (tutor de cães), eu quero resgatar cupons promocionais válidos oferecidos por estabelecimentos parceiros no Clube de Fidelidade, para que eu obtenha benefícios ao apresentá-los presencialmente no local sem efetuar pagamentos online.
- **Critérios de Aceite:**
  1. Cada cupom exibe título, estabelecimento parceiro, regras de uso e data limite de validade.
  2. O resgate gera um código identificável vinculado ao cliente para apresentação presencial sem cobrança online (`RD003`).
  3. Cupons fora da data de validade têm o resgate automaticamente bloqueado.

---

#### Histórias Could — Desejáveis (Expansão Futura — 21 pontos)

##### H14 — Seguidores e timeline de novidades dos estabelecimentos
- **ID:** `H14` | **Epic:** `EP05` | **Prioridade:** Could | **Pontos (Fibonacci):** `8`
- **Requisitos Vinculados:** `RF014`, `RD001`
- **Enunciado:** Como Rafael Medeiros (tutor de cães), eu quero seguir meus estabelecimentos preferidos e acompanhar atualizações curtas acompanhadas de uma imagem e categoria do aviso, para que eu fique informado sobre eventos pet, promoções e novidades em João Pessoa.
- **Critérios de Aceite:**
  1. O cliente pode seguir e deixar de seguir qualquer estabelecimento cadastrado.
  2. A timeline exibe em ordem cronológica decrescente somente publicações dos estabelecimentos seguidos.
  3. Cada publicação contém estritamente texto de até 280 caracteres, 1 imagem e 1 tag obrigatória (*Evento*, *Promoção* ou *Novidade*).

##### H15 — Assistente virtual de recomendação de estabelecimentos
- **ID:** `H15` | **Epic:** `EP05` | **Prioridade:** Could | **Pontos (Fibonacci):** `13`
- **Requisitos Vinculados:** `RF015`, `NF005`
- **Enunciado:** Como Dona Lúcia Nogueira (idosa cadeirante), eu quero descrever minhas necessidades de passeio em linguagem natural ou responder a perguntas guiadas para receber sugestões de estabelecimentos compatíveis em João Pessoa, para que eu descubra locais adequados sem precisar configurar múltiplos filtros manualmente.
- **Critérios de Aceite:**
  1. O assistente aceita entrada textual livre ou sequência guiada de perguntas sobre público atendido e região de João Pessoa.
  2. Retorna até 5 estabelecimentos compatíveis ordenados por aderência, explicitando quais tags inclusivas foram atendidas.
  3. Quando não existir correspondência exata, propõe flexibilização objetiva de critérios ou alternativas próximas.

---

### 7.4 Definição de Pronto (Definition of Done — DoD)

Uma história de usuário ou entregável documental somente pode ser movido para a coluna **`Concluído`** no quadro Kanban quando atender cumulativamente a 100% dos critérios abaixo:

1. **Critérios de aceite cumpridos:** todos os critérios de aceite específicos da história foram verificados sem falhas bloqueantes.
2. **Aderência aos requisitos não funcionais e regras:** verificação confirmada de contraste WCAG 2.1 AA (`NF002`), responsividade entre 360 px e 1440 px (`NF003`), ausência de erros no console (`NF004`), conformidade LGPD (`RD001`), fórmula de cálculo (`RD002`) e política de não intermediação financeira (`RD003`).
3. **Revisão cruzada obrigatória:** inspeção concluída por ao menos um integrante distinto do autor original (sem autoaprovação).
4. **Rastreabilidade atualizada:** vínculos com `OBJ`, `RU`, `RF`, `NF`, `RD` e `EAP` conferidos e sincronizados com as planilhas do repositório.
5. **Versionamento limpo:** alterações integradas ao repositório Git com commit descritivo, sem arquivos temporários ou rastros indevidos.

---

### 7.5 Registro da Sessão de Planning Poker

- **Data da Sessão:** 14/11/2026 (Ciclo 5 — atividade `3.3` da EAP)
- **Duração:** 65 minutos
- **Participantes (4 integrantes):** Renan Mendes (facilitador), Pierre Simon, Kewy Huang e Caio Augusto
- **Baralho Fibonacci Adotado:** `1`, `2`, `3`, `5`, `8`, `13`
- **História de Referência (Âncora):** `H01` (*Catálogo e busca textual em João Pessoa*) calibrada em **3 pontos**, representando complexidade baixa-moderada sobre dados estáticos locais em React.
- **Regra de Consenso:** em toda divergência, o integrante de **maior voto** e o integrante de **menor voto** expuseram suas justificativas técnicas e de risco antes de uma nova rodada simultânea, **vedando-se expressamente o cálculo de média aritmética**.

#### 7.5.1 Tabela Final de Pontuação das Histórias

| ID | Título Resumido | Epic | Prioridade | RF Vinculado | Rodada 1 (P / K / C / R) | Pontos Finais (Consenso) |
| :--- | :--- | :---: | :---: | :--- | :---: | :---: |
| **H01** | Catálogo e busca textual em João Pessoa | EP01 | Must | `RF001` | 3 / 3 / 3 / 3 (âncora) | **3** |
| **H02** | Filtragem combinada por critérios inclusivos | EP01 | Must | `RF002` | 5 / 8 / 13 / 5 *(debate)* | **8** |
| **H03** | Contagem de locais, limpeza de critérios e aviso de ausência | EP01 | Must | `RF003` | 2 / 2 / 2 / 2 | **2** |
| **H04** | Detalhes do estabelecimento e tags de infraestrutura | EP02 | Must | `RF004` | 5 / 5 / 5 / 3 → 5 | **5** |
| **H05** | Vitrine informativa com destaque Favoritos da Casa | EP02 | Must | `RF005` | 3 / 3 / 3 / 3 | **3** |
| **H06** | Redirecionamento direto para WhatsApp e site oficial | EP02 | Must | `RF006` | 2 / 2 / 2 / 2 | **2** |
| **H07** | Consulta de médias nos quatro pilares e comentários | EP03 | Must | `RF007` | 5 / 5 / 5 / 5 | **5** |
| **H08** | Registro de avaliação multicritério nos quatro pilares | EP03 | Must | `RF008` | 8 / 13 / 8 / 5 *(debate)* | **8** |
| **H09** | Criação e gestão de listas de favoritos por critério | EP04 | Must | `RF009` | 3 / 3 / 3 / 3 | **3** |
| **H10** | Inclusão, remoção e consulta de locais nas listas | EP04 | Must | `RF010` | 5 / 5 / 5 / 5 | **5** |
| **H11** | Cadastro e autenticação por perfil de usuário | EP05 | Should | `RF011` | 5 / 5 / 5 / 5 | **5** |
| **H12** | Painel de gestão de perfil, tags e vitrine do estabelecimento | EP05 | Should | `RF012` | 8 / 8 / 8 / 8 | **8** |
| **H13** | Clube de Fidelidade e resgate de cupons presenciais | EP05 | Should | `RF013` | 5 / 5 / 5 / 5 | **5** |
| **H14** | Seguidores e timeline de novidades dos estabelecimentos | EP05 | Could | `RF014` | 8 / 8 / 8 / 8 | **8** |
| **H15** | Assistente virtual de recomendação de estabelecimentos | EP05 | Could | `RF015` | 8 / 13 / 13 / 8 *(debate)* | **13** |
| **Total** | **15 Histórias (44 Must + 18 Should + 21 Could)** | — | — | `RF001`–`RF015` | — | **83 pontos** |

*(Legenda da coluna Rodada 1: P = Pierre Simon; K = Kewy Huang; C = Caio Augusto; R = Renan Mendes.)*

#### 7.5.2 Relato Detalhado das Divergências Debatidas

1. **Divergência 1 — `H02` (Filtragem combinada por critérios inclusivos):**
   - **Votos da Rodada 1:** Caio Augusto (`13`), Kewy Huang (`8`), Pierre Simon (`5`) e Renan Mendes (`5`).
   - **Debate (do maior para o menor):** Caio Augusto (`13`) justificou a estimativa alta pela combinação lógica E entre cinco agrupamentos distintos de tags (incluindo portes de pets e critérios sensoriais), aliada às exigências de responsividade (`NF003`) e usabilidade em até 4 interações (`NF005`). Pierre Simon e Renan Mendes (`5`) contrapuseram que a consulta no MVP atua sobre uma coleção local de 15 estabelecimentos em memória, eliminando latência de rede e consultas SQL complexas, mas concordaram que o agrupamento responsivo dos filtros em telas de 360 px e a normalização semântica das tags aumentam o esforço frente à âncora `H01`.
   - **Rodada 2 (Consenso):** todos os quatro integrantes escolheram **`8` pontos**, sem uso de média aritmética.

2. **Divergência 2 — `H08` (Registro de avaliação multicritério nos quatro pilares):**
   - **Votos da Rodada 1:** Kewy Huang (`13`), Pierre Simon (`8`), Caio Augusto (`8`) e Renan Mendes (`5`).
   - **Debate (do maior para o menor):** Kewy Huang (`13`) alertou para o acúmulo de requisitos ligados à submissão: validação obrigatória dos quatro pilares, limite de 500 caracteres, aviso LGPD (`RD001`), recálculo imediato (`RD002`), gravação local com tratamento de falha (`NF006`) e limite de 60 segundos/6 interações (`NF005`). Renan Mendes (`5`) argumentou que a fórmula aritmética de `RD002` é determinística e que o fluxo já estava validado no wireframe `WF-03`, reduzindo ambiguidades. Após reconhecer o esforço adicional de testes de acessibilidade (`NF002`) e recuperação de erro no `localStorage`, o grupo alinhou a percepção de complexidade.
   - **Rodada 2 (Consenso):** consenso unânime em **`8` pontos**.

3. **Divergência 3 — `H15` (Assistente virtual de recomendação de estabelecimentos):**
   - **Votos da Rodada 1:** Kewy Huang (`13`), Caio Augusto (`13`), Pierre Simon (`8`) e Renan Mendes (`8`).
   - **Debate (do maior para o menor):** Kewy Huang e Caio Augusto (`13`) ressaltaram a incerteza envolvida na interpretação de linguagem natural livre combinada com o retorno justificado de até cinco locais em João Pessoa. Pierre Simon e Renan Mendes (`8`) indicaram que um fluxo guiado por perguntas reduziria o esforço, mas reconheceram que o requisito `RF015` prevê suporte tanto ao fluxo guiado quanto a consultas textuais abertas, justificando classificá-la no topo da escala adotada.
   - **Rodada 2 (Consenso):** consenso unânime em **`13` pontos** (mantida como *Could* no Backlog).

---

### 7.6 Quadro Kanban e Acompanhamento de Fluxo

O quadro visual consolidado em `/artefatos/backlog/kanban.html` e a planilha `/artefatos/backlog/backlog.csv` refletem exatamente as **cinco colunas e políticas de WIP definidas na Seção 2**, em recorte de acompanhamento do Ciclo 6 (**23/11/2026**):

| Coluna do Kanban | Política de WIP (Seção 2) | Histórias na Coluna | Qtd. Cartões | Soma de Pontos |
| :--- | :--- | :--- | :---: | :---: |
| **Backlog** | Sem limite | `H12`, `H13`, `H14`, `H15` | 4 | **34** |
| **Pronto para Fazer** | Sem limite | `H10`, `H11` | 2 | **10** |
| **Em Andamento** | Máx. 2/integrante (teto global 8) — *atual: 2/8* | `H08` (Renan Mendes), `H09` (Kewy Huang) | 2 | **11** |
| **Em Revisão** | Máx. 3 itens — *atual: 2/3* | `H06` (Pierre Simon), `H07` (Caio Augusto) | 2 | **7** |
| **Concluído** | Sem limite | `H01`, `H02`, `H03`, `H04`, `H05` | 5 | **21** |
| **Total Geral** | — | **`H01` a `H15`** | **15** | **83** |

- **Percentual Geral Concluído (Backlog Completo — 83 pontos):** **25,3%** (21 de 83 pontos; 5 de 15 histórias = 33,3%).
- **Progresso do Núcleo MVP (Must — 44 pontos):** **47,7%** concluído (21 pontos), **15,9%** em revisão (7 pontos) e **25,0%** em andamento (11 pontos), restando apenas `H10` (5 pontos) na fila imediata para fechamento integral do MVP.

---

<a id="secao-8"></a>

## Seção 8 — Organização do MVP (Produto Mínimo Viável)

**Projeto:** Family Place  
**Responsável pela Seção:** Renan Mendes  
**Marco Associado:** M4 (17/11/2026)  
**Data de Consolidação:** 17/11/2026  

---

### 8.1 Visão e Recorte Técnico do MVP

Como entrega opcional complementar da disciplina de Engenharia de Software (bônus avaliativo de até 0,5 ponto), o **MVP do Family Place** consiste em uma **aplicação web responsiva em React** construída sem dependência de banco de dados remoto ou servidor pago, voltada integralmente à validação comunitária dos fluxos essenciais (*Must*) em **João Pessoa (PB)**.

- **Pilha tecnológica adotada:** React + Vite + HTML5 semântico + CSS3 responsivo (360 px a 1440 px) com contraste WCAG 2.1 Nível AA (`NF002`, `NF003`, `NF004`).
- **Camada de dados local:** catálogo estático estruturado em arquivo JSON contendo **ao menos 15 estabelecimentos representativos de bairros de João Pessoa (PB)** (como Manaíra, Tambaú, Cabo Branco, Bessa e Bancários), somado ao armazenamento local do navegador (`localStorage`) para gravar avaliações submetidas e listas de favoritos criadas durante o uso (`NF006`).
- **Escopo negativo preservado:** o MVP não realiza pagamentos online, checkout financeiro, delivery próprio, autenticação em servidor remoto nem avaliação individual por item do cardápio (`RF016`, `RD003`).
- **Repositório e Ambiente de Demonstração:** `[INSERIR LINK DO REPOSITÓRIO E DEPLOY DO MVP]`

---

### 8.2 Requisitos e Histórias Integrantes do MVP (100% dos Itens *Must*)

O escopo funcional do MVP abrange exclusivamente os **10 Requisitos Funcionais *Must* (`RF001` a `RF010`)**, as **10 Histórias de Usuário correspondentes (`H01` a `H10`, totalizando 44 pontos Fibonacci)**, os seis requisitos não funcionais (`NF001` a `NF006`) e as três regras de domínio (`RD001` a `RD003`):

| RF Vinculado | História | Epic | Pontos | Tela Prototipada | Entrega Funcional no MVP em React |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **RF001** | `H01` | `EP01` | 3 | `WF-01` | Carregamento do catálogo com >= 15 locais de João Pessoa e busca textual insensível a acentos e caixa por nome, bairro ou categoria. |
| **RF002** | `H02` | `EP01` | 8 | `WF-01` | Combinação simultânea (lógica E) de filtros de tipo de local, estrutura infantil, acessibilidade física/sensorial e receptividade pet. |
| **RF003** | `H03` | `EP01` | 2 | `WF-01` | Contador dinâmico de resultados compatíveis, comando único de limpeza de filtros e mensagem orientativa para zero resultados. |
| **RF004** | `H04` | `EP02` | 5 | `WF-02` | Página detalhada do estabelecimento com endereço em João Pessoa, horário, descrição e tags inclusivas agrupadas. |
| **RF005** | `H05` | `EP02` | 3 | `WF-02` | Vitrine informativa de produtos e serviços com faixas de preço e destaque visual "Favoritos da Casa", sem checkout nem nota por item. |
| **RF006** | `H06` | `EP02` | 2 | `WF-02` | Links externos seguros (`rel="noopener noreferrer"`) para WhatsApp oficial (com mensagem contextualizada) e site institucional. |
| **RF007** | `H07` | `EP03` | 5 | `WF-02` | Exibição das médias independentes dos quatro pilares (1 casa decimal ou `"Sem avaliações"` se `N = 0`) e comentários cronológicos (`RD002`). |
| **RF008** | `H08` | `EP03` | 8 | `WF-03` | Formulário de avaliação exigindo notas de 1 a 5 nos quatro pilares, comentário até 500 caracteres, aviso LGPD (`RD001`), recálculo imediato e gravação em `localStorage`. |
| **RF009** | `H09` | `EP04` | 3 | `WF-04` | Criação, renomeação e exclusão (com confirmação) de listas de favoritos nomeadas por critério no navegador (`NF006`). |
| **RF010** | `H10` | `EP04` | 5 | `WF-04` | Inclusão e remoção de qualquer estabelecimento em uma ou mais listas simultaneamente e consulta agrupada com link para detalhes. |

*Observação:* os requisitos *Should* (`RF011`–`RF013` / `H11`–`H13`) e *Could* (`RF014`–`RF015` / `H14`–`H15`) permanecem documentados no backlog para evolução futura pós-disciplina.

---

### 8.3 Instruções de Execução Local

Pré-requisitos de ambiente: **Node.js (versão LTS >= 18)** e **npm** instalados localmente.

```bash
# 1. Clonar o repositório do MVP e acessar o diretório do projeto
git clone [INSERIR LINK DO REPOSITÓRIO E DEPLOY DO MVP]
cd family-place-mvp

# 2. Instalar as dependências do projeto React
npm install

# 3. Iniciar o servidor local de desenvolvimento
npm run dev
```

Após o início do servidor, acessar a URL local exibida no terminal (por padrão `http://localhost:5173`) em navegador atualizado (Chrome, Firefox, Edge ou Safari) para operar todas as funcionalidades *Must* sem necessidade de configuração de banco de dados.

---

### 8.4 Roteiro Resumido de Demonstração das Quatro Telas Essenciais (`WF-01` a `WF-04`)

O roteiro abaixo padroniza a validação comunitária (atividade `4.4` da EAP) e a apresentação final na disciplina em **01/12/2026**:

1. **Etapa 1 — Busca com Filtros Combinados (`WF-01` | `RF001`–`RF003`):**
   - Exibir a listagem inicial com os 15 ou mais estabelecimentos de João Pessoa;
   - Pesquisar por bairro (ex.: *"Manaíra"* ou *"Bessa"*) e marcar simultaneamente filtros de pelo menos três categorias (ex.: *Espaço Kids* + *Banheiro Adaptado* + *Baixo Ruído* + *Aceita Pet Porte Médio*);
   - Demonstrar a atualização do contador, uma combinação sem correspondência (aviso orientativo) e a restauração completa pelo comando de limpeza de filtros.
2. **Etapa 2 — Detalhes, Vitrine e Contato Direto (`WF-02` | `RF004`–`RF007`):**
   - Abrir um estabelecimento compatível, evidenciando as tags agrupadas de acessibilidade, conforto sensorial, estrutura infantil e receptividade pet;
   - Mostrar as quatro médias independentes dos pilares e a vitrine informativa destacando itens **"Favoritos da Casa"** com aviso de ausência de checkout/delivery (`RD003`);
   - Acionar o link externo de contato via WhatsApp oficial, confirmando a abertura segura em nova aba com mensagem contextualizada.
3. **Etapa 3 — Avaliação Multicritério nos Quatro Pilares (`WF-03` | `RF008`, `RD001`, `RD002`):**
   - Abrir o formulário de avaliação, tentar submeter sem preencher todos os pilares para demonstrar a validação obrigatória;
   - Selecionar notas de 1 a 5 estrelas para cada um dos quatro pilares, inserir comentário breve respeitando o aviso LGPD e enviar;
   - Evidenciar o recálculo imediato das médias (`RD002`), o surgimento do comentário no topo e sua preservação após recarregamento da página (`NF006`).
4. **Etapa 4 — Favoritos Organizados por Critério (`WF-04` | `RF009`, `RF010`):**
   - Criar uma nova lista temática (ex.: *"Melhores para ir com meu Avô"* ou *"Locais com Baixo Ruído"*), adicionar dois estabelecimentos (incluindo um local em duas listas simultâneas) e renomear a lista;
   - Recarregar o navegador para comprovar a manutenção dos dados em `localStorage` e navegar de volta à página de detalhes de um estabelecimento salvo.

---

<a id="secao-9"></a>

## Seção 9 — Matriz de Rastreabilidade, Referências, Anexos e Declaração de Uso de IA

**Projeto:** Family Place  
**Responsável pela Seção:** Caio Augusto  
**Marco Associado:** M5 (01/12/2026)  
**Data de Consolidação:** 26/11/2026  
**Artefato Tabular Complementar:** `/artefatos/rastreabilidade/matriz_rastreabilidade.csv`  

---

### 9.1 Matriz de Rastreabilidade Bidirecional

A Matriz de Rastreabilidade conecta ponta a ponta todas as necessidades comunitárias levantadas em João Pessoa (PB), os quatro objetivos SMART (`OBJ1`–`OBJ4`), os oito requisitos de usuário (`RU01`–`RU08`), todos os requisitos funcionais implementáveis (`RF001`–`RF015`), os requisitos não funcionais (`NF001`–`NF006`), as regras de domínio (`RD001`–`RD003`), os pacotes da EAP (`1.1`–`4.4`), os marcos verificáveis (`M1`–`M5`) e as 15 histórias de usuário (`H01`–`H15`, somando **83 pontos Fibonacci**).

A tabela a seguir encontra-se 100% sincronizada com `/artefatos/rastreabilidade/matriz_rastreabilidade.csv`, sem células vazias ou requisitos órfãos:

| Necessidade da Comunidade (Elicitação) | Objetivo SMART | Requisito de Usuário | Requisito de Sistema (`RF`, `NF`, `RD`) | Item da EAP e Marco | História de Usuário | Pontos |
| :--- | :---: | :---: | :--- | :--- | :---: | :---: |
| Localizar estabelecimentos em bairros de João Pessoa (`Q01`–`Q04`; `ENT-01` a `ENT-03`) | `OBJ1`; `OBJ4` | `RU01` | `RF001`; `NF001`; `NF003`; `NF004` | `EAP 2.2, 2.4, 4.1, 4.4` (`M2, M3, M5`) | `H01` | 3 |
| Combinar múltiplos filtros inclusivos em uma consulta (`Q02`, `Q05`–`Q08`; `ENT-01` a `ENT-03`) | `OBJ1`; `OBJ4` | `RU01` | `RF002`; `NF003`; `NF005` | `EAP 2.2, 2.3, 2.4, 4.1, 4.4` (`M2, M3, M5`) | `H02` | 8 |
| Visualizar contagem, limpar filtros e tratar busca vazia (`Q05`, `Q16`; `WF-01`) | `OBJ1` | `RU01` | `RF003`; `NF005` | `EAP 2.3, 2.4, 4.1` (`M2, M3, M5`) | `H03` | 2 |
| Verificar previamente tags de infraestrutura inclusiva (`Q06`–`Q08`; `ENT-01` a `ENT-04`) | `OBJ1`; `OBJ3`; `OBJ4` | `RU02` | `RF004`; `NF002`; `NF003` | `EAP 2.2, 2.3, 2.4, 4.1` (`M2, M3, M5`) | `H04` | 5 |
| Consultar vitrine informativa com Favoritos da Casa sem compras internas (`Q11`; `ENT-04`) | `OBJ3` | `RU02` | `RF005`; `RD003` | `EAP 1.2, 2.3, 2.4, 4.1` (`M1, M2, M3, M5`) | `H05` | 3 |
| Acionar contato direto por WhatsApp ou site sem intermediação financeira (`Q11`; `ENT-03`, `ENT-04`) | `OBJ3` | `RU02` | `RF006`; `RD003` | `EAP 1.2, 2.4, 4.1` (`M1, M3, M5`) | `H06` | 2 |
| Consultar médias independentes nos 4 pilares e comentários (`Q09`, `Q16`; `ENT-01` a `ENT-04`) | `OBJ2`; `OBJ4` | `RU03` | `RF007`; `NF002`; `RD002` | `EAP 2.2, 2.3, 2.4, 4.2` (`M2, M3, M5`) | `H07` | 5 |
| Registrar avaliação de 1 a 5 estrelas nos 4 pilares com privacidade (`Q09`, `Q16`; `ENT-01` a `ENT-03`) | `OBJ2`; `OBJ4` | `RU03` | `RF008`; `NF005`; `NF006`; `RD001`; `RD002` | `EAP 2.3, 2.4, 4.2, 4.4` (`M2, M3, M5`) | `H08` | 8 |
| Organizar favoritos em listas temáticas personalizadas por critério (`Q10`; `ENT-01` a `ENT-03`) | `OBJ2` | `RU04` | `RF009`; `NF006` | `EAP 2.3, 2.4, 4.2` (`M2, M3, M5`) | `H09` | 3 |
| Salvar um mesmo local em várias listas e consultar favoritos (`Q10`; `WF-04`) | `OBJ2`; `OBJ4` | `RU04` | `RF010`; `NF006` | `EAP 2.3, 2.4, 4.2, 4.3` (`M2, M3, M5`) | `H10` | 5 |
| Autenticar contas distintas de clientes e estabelecimentos com LGPD (`ENT-04`; `Q16`) | `OBJ3` | `RU05` | `RF011`; `RD001` | `EAP 2.4, 3.2, 3.3` (`M3, M4`) | `H11` | 5 |
| Permitir ao estabelecimento atualizar perfil, tags e vitrine (`ENT-04`) | `OBJ3` | `RU05` | `RF012`; `RD003` | `EAP 2.4, 3.2, 3.3` (`M3, M4`) | `H12` | 8 |
| Disponibilizar e resgatar cupons presenciais no Clube de Fidelidade (`Q12`; `ENT-02`, `ENT-04`) | `OBJ3` | `RU06` | `RF013`; `RD003` | `EAP 2.4, 3.2, 3.3` (`M3, M4`) | `H13` | 5 |
| Seguir estabelecimentos e acompanhar timeline curta com foto e categoria (`Q13`; `ENT-02`, `ENT-04`) | `OBJ3` | `RU07` | `RF014`; `RD001` | `EAP 2.4, 3.2, 3.3` (`M3, M4`) | `H14` | 8 |
| Receber recomendações por fluxo guiado ou linguagem natural (`Q14`; `ENT-03`) | `OBJ3` | `RU08` | `RF015`; `NF005` | `EAP 2.4, 3.2, 3.3` (`M3, M4`) | `H15` | 13 |
| **Total do Backlog Implementável (10 Must = 44 pts; 3 Should = 18 pts; 2 Could = 21 pts)** | **`OBJ1`–`OBJ4`** | **`RU01`–`RU08`** | **`RF001`–`RF015`; `NF001`–`NF006`; `RD001`–`RD003`** | **`EAP 1.1`–`4.4` (`M1`–`M5`)** | **`H01`–`H15`** | **83** |

#### 9.1.1 Controle Formal do Escopo Negativo (`RF016` — *Won't*)

O item **`RF016`** (*Pagamentos online, checkout financeiro, delivery próprio, aplicativo mobile nativo e avaliação individual por item do cardápio*) está formalmente classificado como **Won't (Agora não)**. Por não integrar o backlog implementável, ele não gera história de usuário nem pontuação Fibonacci e, consequentemente, não ocupa linha com células vazias em `matriz_rastreabilidade.csv`. Sua governança é rastreada diretamente pelos artefatos de controle de escopo:

- **Origem:** Seção 3.2 (Declaração de Escopo Negativo), Questionário (`Q11`), Entrevista (`ENT-04`), `OBJ3`, `RU02` e Regra de Domínio `RD003`.
- **Verificação:** auditoria documental e inspeção funcional do MVP (`EAP 1.2`, `2.4`, `4.1`, `4.3` — Marcos `M1`, `M3` e `M5`) comprovando ausência integral de fluxos financeiros, carrinho de compras e notas isoladas por item.

#### 9.1.2 Resumo da Cobertura de Qualidade (`NF001`–`NF006` e `RD001`–`RD003`)

| Código | Descrição Sintética | Histórias / Artefatos Verificadores | Marco de Homologação |
| :---: | :--- | :--- | :---: |
| **NF001** | Carregamento <= 3,0 s em 4G (95% dos acessos) | `H01` e auditoria Lighthouse em todas as telas do MVP | M5 |
| **NF002** | Contraste >= 4,5:1 (WCAG 2.1 AA) e fonte >= 16 px | `H04`, `H07` e auditoria de acessibilidade do MVP | M5 |
| **NF003** | Responsividade de 360 px a 1440 px sem rolagem horizontal | `H01`, `H02`, `H04` e testes nas 4 larguras alvo | M5 |
| **NF004** | Compatibilidade com Chrome, Firefox, Edge e Safari | `H01` e roteiro de testes multi-navegador | M5 |
| **NF005** | Usabilidade: busca <= 45 s (<= 4 passos) e avaliação <= 60 s (<= 6 passos) | `H02`, `H03`, `H08`, `H15` e validação comunitária (`EAP 4.4`) | M5 |
| **NF006** | Gravação e recuperação local em `localStorage` no MVP | `H08`, `H09`, `H10` e teste de recarregamento/bloqueio | M5 |
| **RD001** | Conformidade integral com a LGPD (Lei nº 13.709/2018) | `H08`, `H11`, `H14`, elicitação (`EAP 2.1`–`2.2`) e auditoria (`4.3`) | M2, M3, M5 |
| **RD002** | Cálculo da média aritmética nos 4 pilares (1 casa decimal; `"Sem avaliações"` se `N = 0`) | `H07`, `H08` e testes funcionais do MVP | M5 |
| **RD003** | Não intermediação financeira e vitrine informativa | `H05`, `H06`, `H12`, `H13`, controle de `RF016` | M1, M3, M5 |

---

### 9.2 Revisão Final de Qualidade

A auditoria de qualidade conduzida em **26/11/2026** (atividade `4.3` da EAP) verificou todos os documentos em `/docs/` e todos os artefatos em `/artefatos/`, atestando:

1. **Coerência de identificadores:** correspondência exata de `OBJ1`–`OBJ4`, `RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`, `EAP 1.1`–`4.4`, `M1`–`M5` e `H01`–`H15` entre textos, planilhas CSV e diagramas HTML.
2. **Qualidade da redação técnica:** ausência integral de termos subjetivos/vagos e jargões informais, emprego consistente de *deve*/*deveria* e verificabilidade numérica em 100% dos requisitos não funcionais e regras de domínio.
3. **Conformidade das histórias e marcos:** todas as 15 histórias redigidas no formato *"Como [persona], eu quero [intenção], para que [benefício]."* sem menção a elementos de interface nos enunciados; todos os marcos definidos exclusivamente como entregas formais verificáveis, sem uso de porcentagens.
4. **Higiene do repositório:** inexistência de arquivos de instruções internas, scripts auxiliares ou emojis na documentação oficial.

---

### 9.3 Referências Bibliográficas e Normativas

- **ABNT — ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS.** *ABNT NBR 9050:2020 — Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos.* 4. ed. Rio de Janeiro: ABNT, 2020.
- **BRASIL.** *Lei nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais — LGPD).* Diário Oficial da União, Brasília, DF, 15 ago. 2018. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm. Acesso em: 20 out. 2026.
- **FINOCCHIO JÚNIOR, José.** *Project Model Canvas: gerenciamento de projetos sem burocracia.* Rio de Janeiro: Elsevier, 2013.
- **PRESSMAN, Roger S.; MAXIM, Bruce R.** *Engenharia de Software: uma abordagem profissional.* 9. ed. Porto Alegre: AMGH, 2021.
- **SOMMERVILLE, Ian.** *Engenharia de Software.* 10. ed. São Paulo: Pearson Education do Brasil, 2019.
- **VAZQUEZ, Carlos Eduardo; SIMÕES, Guilherme Siqueira.** *Engenharia de Requisitos: software orientado ao negócio.* Rio de Janeiro: Brasport, 2016.
- **W3C — WORLD WIDE WEB CONSORTIUM.** *Web Content Accessibility Guidelines (WCAG) 2.1.* W3C Recommendation, 05 jun. 2018. Disponível em: https://www.w3.org/TR/WCAG21/. Acesso em: 03 nov. 2026.

---

### 9.4 Índice Completo de Anexos (`/artefatos/`)

| Anexo | Caminho no Repositório | Formato | Descrição do Artefato | Responsável |
| :---: | :--- | :---: | :--- | :--- |
| **A1** | `/artefatos/pmcanvas/pmcanvas.html` | HTML | Project Model Canvas completo em 13 blocos, pronto para exportação em 1 página A4 paisagem. | Pierre Simon |
| **A2** | `/artefatos/elicitacao/questionario.md` | Markdown | Questionário estruturado (14 perguntas fechadas + 2 abertas) com termo LGPD aplicado em João Pessoa. | Kewy Huang |
| **A3** | `/artefatos/elicitacao/roteiro-entrevista.md` | Markdown | Roteiro semiestruturado para entrevistas individuais (Blocos A — Frequentadores e B — Gestores). | Kewy Huang |
| **A4** | `/artefatos/elicitacao/resumo-resultados-elicitacao.md` | Markdown | Consolidação estatística e qualitativa (28 questionários e 4 entrevistas anônimas `ENT-01`–`ENT-04`) e origem dos requisitos. | Kewy Huang |
| **A5** | `/artefatos/wireframes/wireframes.html` | HTML | Protótipos de baixa fidelidade em escala de cinza das 4 telas *Must* (`WF-01` a `WF-04`), estruturados em 4 páginas A4. | Kewy Huang |
| **A6** | `/artefatos/requisitos/requisitos.csv` | CSV (UTF-8) | Catálogo tabular consolidado de todos os 33 requisitos (`RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`). | Caio Augusto |
| **A7** | `/artefatos/planejamento/eap.html` | HTML/SVG | Diagrama hierárquico visual da EAP em 4 pacotes e 16 entregas (1 página A4 paisagem). | Pierre Simon |
| **A8** | `/artefatos/planejamento/cronograma.csv` | CSV (UTF-8) | Planilha completa do cronograma (13/10/2026 a 01/12/2026) com aplicação da Regra de Sommerville (+50%). | Pierre Simon |
| **A9** | `/artefatos/planejamento/gantt.html` | HTML | Gráfico de Gantt visual com dependências, responsáveis, margem de Sommerville e marcos `M1`–`M5` (1 página A4 paisagem). | Pierre Simon |
| **A10** | `/artefatos/backlog/kanban.html` | HTML | Quadro Kanban visual fiel às 5 colunas e limites de WIP da Seção 2, com totais de pontos e avanço percentual (1 página A4 paisagem). | Renan Mendes |
| **A11** | `/artefatos/backlog/backlog.csv` | CSV (UTF-8) | Planilha consolidada das 15 histórias de usuário (`H01`–`H15`), Epics, prioridades, RFs, pontos Fibonacci e colunas do Kanban. | Renan Mendes |
| **A12** | `/artefatos/rastreabilidade/matriz_rastreabilidade.csv` | CSV (UTF-8) | Matriz de rastreabilidade ponta a ponta sem células vazias ou órfãs, sincronizada com a Seção 9.1. | Caio Augusto |
| **A13** | `/artefatos/atas/atas-reunioes.md` | Markdown | Registro das 7 atas formais correspondentes aos 7 ciclos semanais da equipe (13/10/2026 a 26/11/2026). | Pierre Simon |

---

### 9.5 Declaração de Uso de Inteligência Artificial

Em atendimento às diretrizes éticas e de transparência acadêmica da disciplina de Engenharia de Software, a equipe declara que ferramentas de inteligência artificial generativa foram utilizadas de maneira geral como apoio pontual na organização estrutural dos documentos, na revisão linguística de redação técnica e na conferência de consistência entre artefatos.

Todas as decisões de concepção do produto, recorte extensionista em João Pessoa (PB), condução e interpretação da elicitação comunitária, definição de requisitos, estimativas de esforço, planejamento de cronograma, revisão crítica e validação final foram integralmente revisadas, validadas e assumidas sob total responsabilidade dos quatro integrantes da equipe: **Pierre Simon**, **Kewy Huang**, **Caio Augusto** e **Renan Mendes**.

