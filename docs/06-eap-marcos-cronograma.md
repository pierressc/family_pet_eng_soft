# Seção 6 — Estrutura Analítica do Projeto (EAP), Marcos e Cronograma

**Projeto:** Family Place  
**Responsável pela Seção:** Pierre Simon  
**Marco Associado:** M3 (10/11/2026)  
**Data de Consolidação:** 10/11/2026  
**Artefatos Complementares:** `/artefatos/planejamento/eap.html`, `/artefatos/planejamento/cronograma.csv` e `/artefatos/planejamento/gantt.html`  

---

## 6.1 Estrutura Analítica do Projeto (EAP)

A Estrutura Analítica do Projeto (EAP) decompõe 100% do escopo aprovado do **Family Place** em **quatro grandes pacotes de trabalho** (`1. Gestão`, `2. Requisitos`, `3. Planejamento` e `4. Entrega e MVP`), desdobrados em 16 subitens executáveis e diretamente vinculados aos objetivos (`OBJ1`–`OBJ4`), requisitos (`RU`, `RF`, `NF`, `RD`) e entregáveis do repositório. A representação gráfica completa encontra-se em `/artefatos/planejamento/eap.html`.

### Pacote 1 — Gestão
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

### Pacote 2 — Requisitos
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

### Pacote 3 — Planejamento
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
  - Entregáveis: Seção 8 (`/docs/08-organizacao-mvp.md`) com estrutura de componentes, dados estáticos de 15 locais de João Pessoa e critérios de demonstração.
  - Vínculo: `OBJ1`, `OBJ2`, `OBJ3`, `RF001`–`RF010`, `NF001`–`NF006`.

### Pacote 4 — Entrega e MVP
- **4.1 Implementação MVP: Catálogo, Busca Combinada, Detalhes e Vitrine** *(Responsável: Pierre Simon)*
  - Entregáveis: módulos React de listagem de 15 estabelecimentos de João Pessoa, filtros combinados, página detalhada, tags, vitrine com "Favoritos da Casa" e links externos de WhatsApp/site.
  - Vínculo: `OBJ1`, `OBJ3`, `RF001`–`RF006`, `NF001`–`NF004`, `RD003`.
- **4.2 Implementação MVP: Avaliação nos 4 Pilares e Listas de Favoritos** *(Responsável: Renan Mendes)*
  - Entregáveis: módulos React de consulta/submissão de notas nos 4 pilares (`RD002`), gestão de listas de favoritos por critério e gravação em `localStorage` (`NF006`).
  - Vínculo: `OBJ2`, `RF007`–`RF010`, `NF005`, `NF006`, `RD001`, `RD002`.
- **4.3 Matriz de Rastreabilidade, Auditoria de Qualidade e Seção 9** *(Responsável: Caio Augusto)*
  - Entregáveis: Seção 9 (`/docs/09-rastreabilidade-qualidade.md`), matriz bidirecional completa em `/artefatos/rastreabilidade/`, referências e revisão de qualidade.
  - Vínculo: `OBJ4`, `RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`.
- **4.4 Validação Comunitária, Homologação v1.0 e Apresentação Final** *(Responsável: Pierre Simon)*
  - Entregáveis: registros de testes com ao menos 12 moradores e 3 representantes de estabelecimentos de João Pessoa, documentação homologada na versão v1.0 e apresentação final na disciplina.
  - Vínculo: `OBJ1`, `OBJ2`, `OBJ3`, `OBJ4`, `NF005`.

---

## 6.2 Marcos Verificáveis do Projeto (`M1` a `M5`)

Os cinco marcos do projeto coincidem integralmente com as datas definidas na Seção 3 e representam exclusivamente **saídas formais objetivamente verificáveis**:

| ID | Marco | Data-Alvo | Saída Formal Verificável | Responsável Principal |
| :--- | :--- | :---: | :--- | :--- |
| **M1** | Aprovação do TAP, Escopo, Viabilidade e PMCanvas | **20/10/2026** | Documentos `/docs/01-identificacao.md`, `/docs/02-processo-desenvolvimento.md`, `/docs/03-tap-escopo-viabilidade.md` e `/artefatos/pmcanvas/pmcanvas.html` revisados e integrados ao repositório Git. | Pierre Simon e Kewy Huang |
| **M2** | Conclusão da Elicitação e Protótipos de Baixa Fidelidade | **03/11/2026** | Artefatos em `/artefatos/elicitacao/` (28 respostas e 4 entrevistas consolidadas), `/artefatos/wireframes/wireframes.html` (`WF-01` a `WF-04`) e `/docs/04-elicitacao-prototipos.md` validados e aprovados. | Kewy Huang |
| **M3** | Linha de Base de Requisitos e Planejamento Detalhado | **10/11/2026** | Documentos `/docs/05-especificacao-requisitos.md`, `/artefatos/requisitos/requisitos.csv`, `/docs/06-eap-marcos-cronograma.md` e artefatos em `/artefatos/planejamento/` (`eap.html`, `cronograma.csv`, `gantt.html`) auditados e publicados. | Caio Augusto e Pierre Simon |
| **M4** | Consolidação do Backlog, Estimativas e Plano do MVP | **17/11/2026** | Documentos `/docs/07-backlog-estimativas.md`, `/docs/08-organizacao-mvp.md` e artefatos em `/artefatos/backlog/` (`kanban.html` e `backlog.csv`) com sessão de Planning Poker registrada e escopo do MVP fechado. | Renan Mendes |
| **M5** | Entrega Final da Documentação Integrada e Apresentação do MVP | **01/12/2026** | Versão v1.0 das Seções 1 a 9, Matriz de Rastreabilidade com cobertura integral sem células órfãs, MVP funcional em React validado junto à comunidade de João Pessoa e apresentação realizada em sala. | Toda a Equipe (coord. Pierre Simon) |

---

## 6.3 Metodologia de Estimativa Temporal — Regra de Sommerville

Para proteger o calendário acadêmico contra desvios recorrentes em projetos de software, todas as durações do cronograma aplicam explicitamente a **Regra de Sommerville (+50% sobre a duração otimista)**:

$$\text{Duração Planejada} = D_{\text{otimista}} + 0{,}30 \cdot D_{\text{otimista}} + 0{,}20 \cdot D_{\text{otimista}} = 1{,}50 \cdot D_{\text{otimista}}$$

Onde:
- **Duração Otimista ($D_{\text{otimista}}$):** tempo mínimo necessário em condições ideais sem interrupções;
- **+30% (Imprevistos conhecidos):** absorção de atrasos em respostas de pesquisas comunitárias, conflitos com avaliações de outras disciplinas e ajustes de revisão cruzada;
- **+20% (Aspectos não previstos):** absorção de refinamentos de acessibilidade WCAG, correções de compatibilidade entre navegadores e ajustes descobertos na validação final.

---

## 6.4 Cronograma Detalhado (13/10/2026 a 01/12/2026)

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

### Caminho Crítico Identificado

O caminho crítico sequencial do projeto percorre a cadeia **`1.1 -> 1.2 -> 2.1 -> 2.2 -> 2.3 -> 2.4 -> 3.2 -> 3.4 -> 4.2 -> 4.4`**, cobrindo integralmente o intervalo de **13/10/2026 a 01/12/2026** (50 dias corridos). Qualquer atraso superior à folga da Regra de Sommerville nessas atividades impacta diretamente a data limite de entrega final (`M5`).

---

## 6.5 Riscos de Prazo e Ações de Mitigação

| ID | Risco de Prazo | Atividades Afetadas | Probabilidade | Impacto | Ação Preventiva e Plano de Contingência |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **RP01** | Atraso na obtenção de respostas de moradores e comerciantes em João Pessoa. | `2.2`, `4.4` | Média | Alto | Iniciar a coleta logo após `M1`, utilizar divulgação coordenada pelos quatro integrantes e acionar contatos diretos locais caso a amostra fique abaixo de 50% na metade da janela prevista. |
| **RP02** | Gargalo na revisão cruzada entre especificação de requisitos e planejamento. | `2.4`, `3.1`, `3.2` | Média | Médio | Respeitar o limite de WIP de no máximo 3 itens em `Em Revisão` no Kanban e reservar bloco fixo de revisão às segundas-feiras. |
| **RP03** | Sobrecarga acadêmica em semanas de provas de outras disciplinas de Ciência da Computação. | `3.2`–`3.4`, `4.1`–`4.2` | Alta | Alto | Operar com a margem de +50% da Regra de Sommerville já incorporada no cronograma e redistribuir histórias *Must* entre os quatro integrantes nos check-ins de quinta-feira. |
| **RP04** | Tentativa de implementar requisitos *Should* ou *Could* antes de concluir 100% dos requisitos *Must*. | `4.1`, `4.2` | Média | Alto | Travar o código do MVP exclusivamente em `RF001`–`RF010` até a aprovação integral nos testes de validação; módulos *Should* e *Could* permanecem restritos à especificação até que todos os itens *Must* estejam em `Concluído`. |
| **RP05** | Descoberta tardia de inconsistências de rastreabilidade ou não conformidade WCAG próxima a 01/12/2026. | `4.3`, `4.4` | Baixa | Alto | Antecipar a pré-entrega consolidada (`v0.9`) para 24/11/2026 e iniciar a atividade `4.3` em paralelo à reta final da implementação do MVP, preservando 6 dias finais para validação comunitária e ajustes. |
