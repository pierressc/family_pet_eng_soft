# Atas de Reunião — Projeto Family Place

**Projeto:** Family Place  
**Disciplina:** Engenharia de Software (Prof. Fernando Marlon Soares Figueiredo)  
**Responsável pelos Registros:** Pierre Simon  
**Período Coberto:** 13/10/2026 a 26/11/2026 (7 Ciclos Semanais)  

---

## Ata 01 — Abertura do Projeto, Estrutura Inicial e Processo Híbrido
- **Data:** 13/10/2026 (Ciclo 1 — Planejamento)
- **Participantes Presentes:** Pierre Simon, Kewy Huang, Caio Augusto e Renan Mendes.
- **Pauta:** Definição do tema extensionista em João Pessoa (PB), divisão oficial de seções, adoção do processo híbrido (Scrum + Kanban) e organização inicial do repositório Git.
- **Decisões Tomadas:**
  - Formalizar o nome **Family Place** com recorte comunitário em João Pessoa (PB) atendendo famílias com crianças, tutores de pets, idosos, PCD (físico/intelectual) e pessoas neurodivergentes.
  - Adotar processo híbrido com ciclos semanais, quadro Kanban de 5 colunas no GitHub Projects e limites de WIP (máx. 2/integrante em andamento, teto 8; máx. 3 em revisão).
  - Fixar a matriz de responsabilidades das Seções 1 a 9 entre os quatro integrantes e estabelecer revisão cruzada obrigatória antes de fechar qualquer marco.
- **Próximos Passos por Responsável:**
  - **Pierre Simon:** criar estrutura de pastas, redigir Seções 1, 2 e 3 (TAP/Escopo) e montar `pmcanvas.html` até 20/10/2026.
  - **Kewy Huang:** conduzir o Estudo de Viabilidade (Seção 3.3) e iniciar rascunho dos instrumentos de elicitação.
  - **Caio Augusto:** revisar critérios de redação formal de requisitos e preparar modelo tabular de controle.
  - **Renan Mendes:** estruturar o quadro Kanban no GitHub Projects conforme as 5 colunas da Seção 2.

---

## Ata 02 — Revisão e Fechamento do Marco M1 (TAP, Escopo, Viabilidade e PMCanvas)
- **Data:** 20/10/2026 (Ciclo 1 — Revisão de Marco M1)
- **Participantes Presentes:** Pierre Simon, Kewy Huang, Caio Augusto e Renan Mendes.
- **Pauta:** Inspeção cruzada das Seções 1 a 3 e do PMCanvas, aprovação dos objetivos `OBJ1`–`OBJ4` e liberação do plano de elicitação comunitária.
- **Decisões Tomadas:**
  - Aprovar integralmente o **Marco M1** (`docs/01`, `docs/02`, `docs/03` e `artefatos/pmcanvas/pmcanvas.html`) com recomendação formal de prosseguimento.
  - Confirmar orçamento financeiro direto de R$ 0,00, exclusão explícita de pagamentos online, delivery próprio, app nativo e avaliação individual por item do cardápio, e meta de ao menos 15 estabelecimentos de João Pessoa no MVP em React sem banco de dados.
  - Aprovar o questionário estruturado e o roteiro de entrevistas com termo explícito de anonimização (LGPD).
- **Próximos Passos por Responsável:**
  - **Kewy Huang:** iniciar aplicação do questionário online em João Pessoa em 21/10/2026 e agendar as entrevistas individuais.
  - **Pierre Simon:** apoiar divulgação local do questionário e registrar acompanhamento no Kanban.
  - **Caio Augusto:** apoiar revisão das perguntas sob critérios de verificabilidade e privacidade LGPD.
  - **Renan Mendes:** divulgar o questionário nos bairros alvo e mapear referências para futuras personas.

---

## Ata 03 — Acompanhamento da Elicitação Comunitária em João Pessoa
- **Data:** 27/10/2026 (Ciclo 2 — Revisão Semanal)
- **Participantes Presentes:** Pierre Simon, Kewy Huang, Caio Augusto e Renan Mendes.
- **Pauta:** Balanço parcial das respostas do questionário estruturado, andamento das entrevistas individuais e preparação dos wireframes de baixa fidelidade.
- **Decisões Tomadas:**
  - Conservar o questionário aberto até 28/10/2026, já superando a marca de 20 respostas distribuídas em Manaíra, Tambaú, Bancários, Bessa e Cabo Branco.
  - Confirmar a realização das entrevistas `ENT-01` (26/10) e `ENT-02` (27/10) e assegurar a conclusão de `ENT-03` (28/10) e `ENT-04` (30/10 — proprietário de cafeteria local) sem coleta de dados pessoais sensíveis.
  - Priorizar as 4 telas essenciais (*Must*) para os wireframes de baixa fidelidade (`WF-01` a `WF-04`) em escala de cinza.
- **Próximos Passos por Responsável:**
  - **Kewy Huang:** encerrar a coleta em 30/10, consolidar `resumo-resultados-elicitacao.md` e produzir `wireframes.html` para validação até 02/11.
  - **Pierre Simon:** acompanhar as entrevistas `ENT-03` e `ENT-04` nas anotações estruturadas.
  - **Caio Augusto:** mapear preliminarmente os requisitos `RU` e `RF` emergentes das evidências coletadas.
  - **Renan Mendes:** levantar atributos iniciais das quatro personas com base nas entrevistas.

---

## Ata 04 — Validação dos Wireframes e Fechamento do Marco M2
- **Data:** 03/11/2026 (Ciclo 3 — Revisão de Marco M2)
- **Participantes Presentes:** Pierre Simon, Kewy Huang, Caio Augusto e Renan Mendes.
- **Pauta:** Revisão da consolidação de elicitação (28 respostas + 4 entrevistas), resultados da validação dos protótipos `WF-01`–`WF-04` e transição para a especificação formal.
- **Decisões Tomadas:**
  - Aprovar o **Marco M2** (`/artefatos/elicitacao/*`, `/artefatos/wireframes/wireframes.html` e `/docs/04-elicitacao-prototipos.md`).
  - Incorporar oficialmente os ajustes validados com os representantes do público-alvo: contador dinâmico e botão de limpeza de filtros (`WF-01`), aviso de vitrine meramente informativa e texto `"Sem avaliações"` para `N = 0` (`WF-02`), aviso LGPD na avaliação (`WF-03`) e suporte a múltiplas listas simultâneas por estabelecimento (`WF-04`).
  - Liberar a base verificada para redação da Seção 5 e da Seção 6 no Ciclo 4.
- **Próximos Passos por Responsável:**
  - **Caio Augusto:** redigir `/docs/05-especificacao-requisitos.md` (`RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`) e gerar `/artefatos/requisitos/requisitos.csv`.
  - **Pierre Simon:** elaborar a EAP em 4 pacotes, o cronograma com Regra de Sommerville (+50%), `eap.html`, `cronograma.csv`, `gantt.html` e Seção 6.
  - **Kewy Huang:** prestar suporte na conferência de rastreabilidade entre elicitação e requisitos.
  - **Renan Mendes:** revisar o alinhamento da distribuição MoSCoW para preparar os Epics e histórias do Ciclo 5.

---

## Ata 05 — Fechamento do Marco M3 (Especificação de Requisitos, EAP e Cronograma)
- **Data:** 10/11/2026 (Ciclo 4 — Revisão de Marco M3)
- **Participantes Presentes:** Pierre Simon, Kewy Huang, Caio Augusto e Renan Mendes.
- **Pauta:** Auditoria de qualidade da Seção 5 (termos vagos, jargões, verificabilidade) e aprovação da EAP, dos marcos e do cronograma Sommerville da Seção 6.
- **Decisões Tomadas:**
  - Aprovar o **Marco M3** após confirmar 0 termos vagos ou jargões proibidos em `05-especificacao-requisitos.md` e `requisitos.csv`, com distribuição MoSCoW de 10 *Must* (62,5%), 3 *Should* (18,75%), 2 *Could* (12,5%) e 1 *Won't* (6,25%).
  - Aprovar a EAP em 4 pacotes (`1.1` a `4.4`) e o cronograma de 13/10/2026 a 01/12/2026 com aplicação exata da Regra de Sommerville (+50%) em todas as 16 atividades.
  - Agendar a sessão coletiva de Planning Poker para 14/11/2026.
- **Próximos Passos por Responsável:**
  - **Renan Mendes:** redigir as 4 personas, Epics `EP01`–`EP05`, histórias `H01`–`H15`, Definição de Pronto, conduzir o Planning Poker (14/11) e elaborar a Seção 8 (`08-mvp.md`).
  - **Caio Augusto:** iniciar o desenho da Matriz de Rastreabilidade verificando os códigos `OBJ`, `RU`, `RF`, `NF`, `RD` e `EAP`.
  - **Pierre Simon:** preparar a lista inicial de 15 estabelecimentos de João Pessoa para o catálogo estático do MVP.
  - **Kewy Huang:** revisar as personas para assegurar fidelidade às entrevistas `ENT-01`–`ENT-04`.

---

## Ata 06 — Fechamento do Marco M4 (Backlog, Planning Poker, Kanban e Plano do MVP)
- **Data:** 17/11/2026 (Ciclo 5 — Revisão de Marco M4)
- **Participantes Presentes:** Pierre Simon, Kewy Huang, Caio Augusto e Renan Mendes.
- **Pauta:** Homologação das histórias `H01`–`H15`, resultados do Planning Poker (83 pontos totais; 44 *Must*), quadro Kanban e organização do MVP em React.
- **Decisões Tomadas:**
  - Aprovar o **Marco M4** (`/docs/07-backlog-estimativas.md`, `/docs/08-mvp.md`, `/artefatos/backlog/kanban.html` e `/artefatos/backlog/backlog.csv`).
  - Confirmar que todas as 15 histórias seguem o formato padrão sem menção a elementos de interface nos enunciados e cobrem 100% dos requisitos *Must*, *Should* e *Could*.
  - Travar a implementação do Ciclo 6 estritamente nos 10 requisitos *Must* (`H01` a `H10`) em React sem banco de dados, respeitando os limites de WIP do Kanban.
- **Próximos Passos por Responsável:**
  - **Pierre Simon:** liderar implementação dos módulos de catálogo, filtros combinados, detalhes, vitrine e contato externo (`4.1` / `H01`–`H06`).
  - **Renan Mendes:** liderar implementação da avaliação nos 4 pilares e listas de favoritos em `localStorage` (`4.2` / `H07`–`H10`).
  - **Kewy Huang:** apoiar curadoria das tags inclusivas e validação de acessibilidade WCAG 2.1 AA (`NF002`).
  - **Caio Augusto:** montar a Matriz de Rastreabilidade completa (`matriz_rastreabilidade.csv`) e redigir a Seção 9 (`09-referencias-anexos-ia.md`).

---

## Ata 07 — Revisão da Pré-Entrega v0.9, Rastreabilidade e Preparação para o Marco M5
- **Data:** 26/11/2026 (Ciclo 6/7 — Revisão de Pré-Entrega)
- **Participantes Presentes:** Pierre Simon, Kewy Huang, Caio Augusto e Renan Mendes.
- **Pauta:** Auditoria da Matriz de Rastreabilidade (zero células vazias ou órfãs), conferência da consolidação do `DOCUMENTO_FINAL.md`, ajustes de exportação PDF dos artefatos HTML e logística da validação comunitária e apresentação final em 01/12/2026.
- **Decisões Tomadas:**
  - Aprovar a Matriz de Rastreabilidade ponta a ponta (`matriz_rastreabilidade.csv`) e a Seção 9 (`09-referencias-anexos-ia.md`), incluindo referências técnicas, índice de anexos e Declaração de Uso de IA revisada pelos quatro integrantes.
  - Aprovar a consolidação do `DOCUMENTO_FINAL.md` e a atualização do `README.md` com índice navegável de todas as seções e artefatos.
  - Reservar os dias 27/11 a 30/11 para concluir os testes de validação comunitária em João Pessoa (meta mínima de 12 moradores e 3 representantes de estabelecimentos), inserir o link final do repositório/deploy do MVP na Seção 8 e ensaiar a apresentação de 01/12/2026.
- **Próximos Passos por Responsável:**
  - **Pierre Simon:** coordenar a consolidação final v1.0, o ensaio da apresentação e a verificação de todos os critérios do Marco M5 (01/12/2026).
  - **Kewy Huang:** conduzir a coleta de métricas de usabilidade (`NF005`) na validação final com moradores de João Pessoa.
  - **Caio Augusto:** executar a auditoria final de qualidade, contraste WCAG (`NF002`) e integridade documental antes da entrega definitiva.
  - **Renan Mendes:** concluir os ajustes finais do MVP em React, atualizar o link do deploy em `docs/08-mvp.md` e atualizar o status final do quadro Kanban.
