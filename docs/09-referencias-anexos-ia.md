# Seção 9 — Matriz de Rastreabilidade, Referências, Anexos e Declaração de Uso de IA

**Projeto:** Family Place  
**Responsável pela Seção:** Caio Augusto  
**Marco Associado:** M5 (01/12/2026)  
**Data de Consolidação:** 26/11/2026  
**Artefato Tabular Complementar:** `/artefatos/rastreabilidade/matriz_rastreabilidade.csv`  

---

## 9.1 Matriz de Rastreabilidade Bidirecional

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

### 9.1.1 Controle Formal do Escopo Negativo (`RF016` — *Won't*)

O item **`RF016`** (*Pagamentos online, checkout financeiro, delivery próprio, aplicativo mobile nativo e avaliação individual por item do cardápio*) está formalmente classificado como **Won't (Agora não)**. Por não integrar o backlog implementável, ele não gera história de usuário nem pontuação Fibonacci e, consequentemente, não ocupa linha com células vazias em `matriz_rastreabilidade.csv`. Sua governança é rastreada diretamente pelos artefatos de controle de escopo:

- **Origem:** Seção 3.2 (Declaração de Escopo Negativo), Questionário (`Q11`), Entrevista (`ENT-04`), `OBJ3`, `RU02` e Regra de Domínio `RD003`.
- **Verificação:** auditoria documental e inspeção funcional do MVP (`EAP 1.2`, `2.4`, `4.1`, `4.3` — Marcos `M1`, `M3` e `M5`) comprovando ausência integral de fluxos financeiros, carrinho de compras e notas isoladas por item.

### 9.1.2 Resumo da Cobertura de Qualidade (`NF001`–`NF006` e `RD001`–`RD003`)

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

## 9.2 Revisão Final de Qualidade

A auditoria de qualidade conduzida em **26/11/2026** (atividade `4.3` da EAP) verificou todos os documentos em `/docs/` e todos os artefatos em `/artefatos/`, atestando:

1. **Coerência de identificadores:** correspondência exata de `OBJ1`–`OBJ4`, `RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006`, `RD001`–`RD003`, `EAP 1.1`–`4.4`, `M1`–`M5` e `H01`–`H15` entre textos, planilhas CSV e diagramas HTML.
2. **Qualidade da redação técnica:** ausência integral de termos subjetivos/vagos e jargões informais, emprego consistente de *deve*/*deveria* e verificabilidade numérica em 100% dos requisitos não funcionais e regras de domínio.
3. **Conformidade das histórias e marcos:** todas as 15 histórias redigidas no formato *"Como [persona], eu quero [intenção], para que [benefício]."* sem menção a elementos de interface nos enunciados; todos os marcos definidos exclusivamente como entregas formais verificáveis, sem uso de porcentagens.
4. **Higiene do repositório:** inexistência de arquivos de instruções internas, scripts auxiliares ou emojis na documentação oficial.

---

## 9.3 Referências Bibliográficas e Normativas

- **ABNT — ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS.** *ABNT NBR 9050:2020 — Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos.* 4. ed. Rio de Janeiro: ABNT, 2020.
- **BRASIL.** *Lei nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais — LGPD).* Diário Oficial da União, Brasília, DF, 15 ago. 2018. Disponível em: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm. Acesso em: 20 out. 2026.
- **FINOCCHIO JÚNIOR, José.** *Project Model Canvas: gerenciamento de projetos sem burocracia.* Rio de Janeiro: Elsevier, 2013.
- **PRESSMAN, Roger S.; MAXIM, Bruce R.** *Engenharia de Software: uma abordagem profissional.* 9. ed. Porto Alegre: AMGH, 2021.
- **SOMMERVILLE, Ian.** *Engenharia de Software.* 10. ed. São Paulo: Pearson Education do Brasil, 2019.
- **VAZQUEZ, Carlos Eduardo; SIMÕES, Guilherme Siqueira.** *Engenharia de Requisitos: software orientado ao negócio.* Rio de Janeiro: Brasport, 2016.
- **W3C — WORLD WIDE WEB CONSORTIUM.** *Web Content Accessibility Guidelines (WCAG) 2.1.* W3C Recommendation, 05 jun. 2018. Disponível em: https://www.w3.org/TR/WCAG21/. Acesso em: 03 nov. 2026.

---

## 9.4 Índice Completo de Anexos (`/artefatos/`)

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

## 9.5 Declaração de Uso de Inteligência Artificial

Em atendimento às diretrizes éticas e de transparência acadêmica da disciplina de Engenharia de Software, a equipe declara que ferramentas de inteligência artificial generativa foram utilizadas de maneira geral como apoio pontual na organização estrutural dos documentos, na revisão linguística de redação técnica e na conferência de consistência entre artefatos.

Todas as decisões de concepção do produto, recorte extensionista em João Pessoa (PB), condução e interpretação da elicitação comunitária, definição de requisitos, estimativas de esforço, planejamento de cronograma, revisão crítica e validação final foram integralmente revisadas, validadas e assumidas sob total responsabilidade dos quatro integrantes da equipe: **Pierre Simon**, **Kewy Huang**, **Caio Augusto** e **Renan Mendes**.
