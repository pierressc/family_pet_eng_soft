# Seção 1 — Identificação do Projeto

**Projeto:** Family Place  
**Responsável pela Seção:** Pierre Simon  
**Versão:** 1.0 (Linha de Base Estrutural)  
**Data de Criação:** 13/10/2026  

---

## 1.1 Dados Gerais do Projeto

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

## 1.2 Síntese do Propósito

O **Family Place** é uma plataforma web comunitária voltada à cidade de João Pessoa (PB) com a finalidade de auxiliar famílias, tutores de animais de estimação, pessoas idosas, pessoas com deficiência (física ou intelectual) e pessoas neurodivergentes a localizar estabelecimentos comerciais acolhedores, seguros e preparados para suas necessidades específicas. Simultaneamente, o projeto promove a visibilidade de estabelecimentos locais inclusivos sem intermediar pagamentos online ou entregas próprias.

---

## 1.3 Equipe e Divisão de Responsabilidades

A equipe é composta por quatro integrantes do curso de Ciência da Computação, atuando com papéis acumulados de gestão, engenharia de requisitos, prototipação, planejamento, qualidade e implementação do MVP:

| Integrante | Papel Principal e Papéis Acumulados | Seções e Artefatos sob Responsabilidade |
| :--- | :--- | :--- |
| **Pierre Simon** | Gerente de Projeto / Coordenação e Planejamento | Seção 1 (Identificação), Seção 2 (Processo de Desenvolvimento), Seção 3 (TAP e Escopo), Seção 6 (EAP, Marcos e Cronograma), PMCanvas e Atas de Reunião. |
| **Kewy Huang** | Engenharia de Requisitos (Elicitação e Prototipação) | Seção 3 (Estudo de Viabilidade) e Seção 4 (Elicitação de Requisitos e Protótipos de Baixa Fidelidade). |
| **Caio Augusto** | Engenharia de Requisitos (Especificação) e Qualidade | Seção 5 (Especificação de Requisitos) e Seção 9 (Matriz de Rastreabilidade, Referências, Anexos e Revisão de Qualidade). |
| **Renan Mendes** | Gestão de Backlog e Estimativas | Seção 7 (Personas, Histórias de Usuário, Definição de Pronto, Planning Poker e Kanban) e Seção 8 (Organização do MVP). |

Embora cada seção possua um responsável nominal pela redação e consolidação técnica, todos os artefatos passam por revisão cruzada entre os integrantes antes da incorporação aos marcos oficiais do projeto.

---

## 1.4 Organização da Documentação no Repositório

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

## 1.5 Controle de Versões da Documentação

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
