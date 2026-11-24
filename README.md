# Family Place — Documentação de Engenharia de Software

Plataforma web comunitária de caráter extensionista direcionada ao município de **João Pessoa (PB)**, concebida para conectar famílias com crianças, tutores de animais de estimação, pessoas idosas, pessoas com deficiência (física ou intelectual) e pessoas neurodivergentes a estabelecimentos locais acolhedores e preparados para suas necessidades.

---

## Informações Gerais

| Campo | Descrição |
| :--- | :--- |
| **Projeto** | Family Place |
| **Curso / Disciplina** | Ciência da Computação — Engenharia de Software |
| **Professor** | Prof. Fernando Marlon Soares Figueiredo |
| **Período do Cronograma** | 13/10/2026 a 01/12/2026 (entrega e apresentação final em 01/12/2026) |
| **Processo de Desenvolvimento** | Híbrido (Scrum + Kanban), em ciclos semanais no GitHub Projects |
| **Equipe** | Pierre Simon (Gerente de Projeto / Planejamento), Kewy Huang (Elicitação e Prototipação), Caio Augusto (Especificação e Qualidade) e Renan Mendes (Backlog e Estimativas) |

---

## Documento Mestre Consolidado

- [**DOCUMENTO_FINAL.md**](DOCUMENTO_FINAL.md) — Documento completo e revisado contendo capa, tabela de controle de versões, sumário navegável e a consolidação integral das Seções 1 a 9.

---

## Documentação Modular (`/docs`)

| Seção | Documento | Responsável |
| :---: | :--- | :--- |
| **1** | [01-identificacao.md](docs/01-identificacao.md) — Identificação do Projeto, Equipe e Controle de Versões | Pierre Simon |
| **2** | [02-processo-desenvolvimento.md](docs/02-processo-desenvolvimento.md) — Processo de Desenvolvimento Híbrido (Scrum + Kanban) | Pierre Simon |
| **3** | [03-tap-escopo-viabilidade.md](docs/03-tap-escopo-viabilidade.md) — TAP, Declaração de Escopo e Estudo de Viabilidade | Pierre Simon e Kewy Huang |
| **4** | [04-elicitacao-prototipos.md](docs/04-elicitacao-prototipos.md) — Elicitação de Requisitos e Protótipos de Baixa Fidelidade | Kewy Huang |
| **5** | [05-especificacao-requisitos.md](docs/05-especificacao-requisitos.md) — Especificação de Requisitos (`RU`, `RF`, `NF` e `RD`) | Caio Augusto |
| **6** | [06-eap-marcos-cronograma.md](docs/06-eap-marcos-cronograma.md) — EAP, Marcos Verificáveis e Cronograma (Sommerville +50%) | Pierre Simon |
| **7** | [07-backlog-estimativas.md](docs/07-backlog-estimativas.md) — Personas, Histórias de Usuário, DoD, Planning Poker e Kanban | Renan Mendes |
| **8** | [08-mvp.md](docs/08-mvp.md) — Organização do MVP em React sem Banco de Dados | Renan Mendes |
| **9** | [09-referencias-anexos-ia.md](docs/09-referencias-anexos-ia.md) — Matriz de Rastreabilidade, Referências, Anexos e Declaração de Uso de IA | Caio Augusto |

---

## Artefatos Complementares (`/artefatos`)

### Gestão e PMCanvas
- [pmcanvas.html](artefatos/pmcanvas/pmcanvas.html) — Project Model Canvas completo em 13 blocos (1 página A4 paisagem).
- [atas-reunioes.md](artefatos/atas/atas-reunioes.md) — Atas dos sete ciclos semanais da equipe (13/10/2026 a 26/11/2026).

### Elicitação e Prototipação
- [questionario.md](artefatos/elicitacao/questionario.md) — Questionário estruturado (14 fechadas + 2 abertas, com termo LGPD).
- [roteiro-entrevista.md](artefatos/elicitacao/roteiro-entrevista.md) — Roteiro semiestruturado (frequentadores e gestores locais).
- [resumo-resultados-elicitacao.md](artefatos/elicitacao/resumo-resultados-elicitacao.md) — Consolidação de 28 questionários e 4 entrevistas (`ENT-01`–`ENT-04`).
- [wireframes.html](artefatos/wireframes/wireframes.html) — Protótipos de baixa fidelidade das 4 telas *Must* (`WF-01` a `WF-04`, 4 páginas A4).

### Especificação e Rastreabilidade
- [requisitos.csv](artefatos/requisitos/requisitos.csv) — Planilha UTF-8 dos 33 requisitos (`RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`).
- [matriz_rastreabilidade.csv](artefatos/rastreabilidade/matriz_rastreabilidade.csv) — Matriz de rastreabilidade bidirecional ponta a ponta (sem células vazias ou órfãs).

### Planejamento e Backlog Ágil
- [eap.html](artefatos/planejamento/eap.html) — Diagrama visual hierárquico da EAP em 4 pacotes e 16 entregas (1 página A4 paisagem).
- [cronograma.csv](artefatos/planejamento/cronograma.csv) — Cronograma detalhado (13/10/2026 a 01/12/2026) com Regra de Sommerville (+50%).
- [gantt.html](artefatos/planejamento/gantt.html) — Gráfico de Gantt com dependências, responsáveis e marcos `M1`–`M5` (1 página A4 paisagem).
- [kanban.html](artefatos/backlog/kanban.html) — Quadro Kanban visual de 5 colunas com políticas de WIP e soma de pontos (1 página A4 paisagem).
- [backlog.csv](artefatos/backlog/backlog.csv) — Planilha UTF-8 das 15 histórias de usuário (`H01`–`H15`, 83 pontos Fibonacci).
