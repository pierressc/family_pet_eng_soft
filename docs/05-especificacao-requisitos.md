# Seção 5 — Especificação de Requisitos

**Projeto:** Family Place  
**Responsável pela Seção:** Caio Augusto  
**Marco Associado:** M3 (10/11/2026)  
**Data de Consolidação:** 10/11/2026  
**Artefato Tabular Complementar:** `/artefatos/requisitos/requisitos.csv`  

---

## 5.1 Convenções de Redação e Priorização

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

## 5.2 Requisitos de Usuário (`RU01` a `RU08`)

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

## 5.3 Requisitos Funcionais (`RF001` a `RF016`)

### Grupo Must — Essencial (MVP em React sem Banco de Dados)

#### RF001 — Listagem e busca textual de estabelecimentos em João Pessoa
- **ID:** `RF001`
- **Nome:** Listagem e busca textual de estabelecimentos em João Pessoa
- **RU de Origem:** `RU01` (Objetivo SMART: `OBJ1`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** exibir o catálogo de ao menos 15 estabelecimentos cadastrados no município de João Pessoa (PB) e permitir busca textual insensível a maiúsculas, minúsculas e acentos por nome, bairro ou categoria comercial.
- **Entradas / Pré-condições:** Carregamento inicial do catálogo estático de estabelecimentos de João Pessoa; termo textual opcional inserido pelo cliente.
- **Saídas / Pós-condições:** Lista de cartões de estabelecimentos compatíveis exibindo nome, bairro, categoria, tags resumidas e médias dos quatro pilares, ordenada por relevância ou média geral.

#### RF002 — Filtragem combinada por múltiplos critérios inclusivos
- **ID:** `RF002`
- **Nome:** Filtragem combinada por múltiplos critérios inclusivos
- **RU de Origem:** `RU01` (Objetivo SMART: `OBJ1`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** permitir a seleção simultânea (conjunção lógica E) de múltiplos filtros pertencentes a, no mínimo, quatro categorias combináveis: tipo de estabelecimento, estrutura infantil (espaço kids monitorado, trocador, cadeirão), acessibilidade física e conforto/sensorial (rampa, banheiro adaptado, piso tátil, assentos confortáveis, baixo ruído, iluminação controlada) e receptividade pet (porte aceito, área coberta permitida e potes de água).
- **Entradas / Pré-condições:** Catálogo carregado (`RF001`); um ou mais filtros marcados pelo cliente nas categorias disponíveis.
- **Saídas / Pós-condições:** Listagem atualizada exibindo exclusivamente os estabelecimentos que satisfazem todas as condições marcadas simultaneamente e a eventual busca textual ativa.

#### RF003 — Contador de resultados, limpeza de filtros e estado sem correspondência
- **ID:** `RF003`
- **Nome:** Contador de resultados, limpeza de filtros e estado sem correspondência
- **RU de Origem:** `RU01` (Objetivo SMART: `OBJ1`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** atualizar o contador numérico de estabelecimentos compatíveis a cada alteração de busca ou filtro, disponibilizar comando único para limpar todos os critérios ativos e exibir mensagem orientativa quando a combinação aplicada retornar zero estabelecimentos.
- **Entradas / Pré-condições:** Alteração de termo textual ou filtro (`RF001`, `RF002`), ou acionamento do comando de limpeza.
- **Saídas / Pós-condições:** Exibição da contagem exata de resultados; restauração da listagem completa quando os filtros forem limpos; ou exibição de aviso orientativo com opção de limpeza quando o total for igual a zero.

#### RF004 — Exibição da página detalhada do estabelecimento e tags de infraestrutura
- **ID:** `RF004`
- **Nome:** Exibição da página detalhada do estabelecimento e tags de infraestrutura
- **RU de Origem:** `RU02` (Objetivos SMART: `OBJ1`, `OBJ3`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** apresentar a página detalhada do estabelecimento selecionado contendo nome, categoria, endereço e bairro em João Pessoa (PB), horário de funcionamento, descrição institucional e relação completa das tags de infraestrutura agrupadas por estrutura infantil, acessibilidade física/intelectual/sensorial e receptividade pet.
- **Entradas / Pré-condições:** Seleção de um estabelecimento válido a partir da listagem de busca (`RF001`) ou de uma lista de favoritos (`RF010`).
- **Saídas / Pós-condições:** Exibição completa dos dados institucionais e das tags inclusivas do estabelecimento, com link de retorno à busca anterior.

#### RF005 — Exibição da vitrine informativa com destaque "Favoritos da Casa"
- **ID:** `RF005`
- **Nome:** Exibição da vitrine informativa com destaque "Favoritos da Casa"
- **RU de Origem:** `RU02` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** exibir na página detalhada do estabelecimento uma vitrine informativa de produtos e serviços contendo nome, descrição breve e faixa de preço informativa, identificando visualmente os itens destacados como "Favoritos da Casa", em conformidade com `RD003` (sem carrinho, sem checkout e sem pontuação individual por item).
- **Entradas / Pré-condições:** Estabelecimento aberto na página detalhada (`RF004`) contendo ao menos um item cadastrado na vitrine.
- **Saídas / Pós-condições:** Exibição estruturada da vitrine com destaque explícito dos "Favoritos da Casa" e aviso de caráter exclusivamente informativo.

#### RF006 — Redirecionamento direto para canais externos de contato
- **ID:** `RF006`
- **Nome:** Redirecionamento direto para canais externos de contato
- **RU de Origem:** `RU02` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** disponibilizar, em 100% dos perfis cadastrados, links externos diretos para o WhatsApp oficial ou site do estabelecimento, abrindo em nova aba com segurança (`rel="noopener noreferrer"`) e incluindo mensagem inicial contextualizada no redirecionamento para WhatsApp.
- **Entradas / Pré-condições:** Página detalhada do estabelecimento aberta (`RF004`) com ao menos um canal externo válido configurado (URL de WhatsApp ou site oficial).
- **Saídas / Pós-condições:** Abertura externa do canal oficial do estabelecimento sem intermediação de pagamento ou coleta de dados bancários pela plataforma.

#### RF007 — Consulta das notas segmentadas nos quatro pilares e comentários
- **ID:** `RF007`
- **Nome:** Consulta das notas segmentadas nos quatro pilares e comentários
- **RU de Origem:** `RU03` (Objetivo SMART: `OBJ2`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** apresentar na página detalhada do estabelecimento as médias calculadas separadamente para cada um dos quatro pilares (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) conforme `RD002`, o número total de avaliações recebidas e a listagem cronológica decrescente dos comentários registrados pela comunidade.
- **Entradas / Pré-condições:** Página detalhada do estabelecimento aberta (`RF004`) e conjunto de avaliações iniciais e locais carregado.
- **Saídas / Pós-condições:** Exibição das quatro médias independentes com 1 casa decimal (ou `"Sem avaliações"` se `N = 0`), quantidade de avaliações e comentários ordenados do mais recente ao mais antigo.

#### RF008 — Submissão de avaliação multicritério nos quatro pilares
- **ID:** `RF008`
- **Nome:** Submissão de avaliação multicritério nos quatro pilares
- **RU de Origem:** `RU03` (Objetivo SMART: `OBJ2`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** permitir ao cliente registrar uma nova avaliação para um estabelecimento informando obrigatoriamente uma nota inteira de 1 a 5 estrelas para cada um dos quatro pilares, apelido público opcional (padrão `"Visitante Anônimo"`) e comentário textual opcional de até 500 caracteres, bloqueando o envio caso falte nota em qualquer pilar e recalculando imediatamente as médias conforme `RD002`.
- **Entradas / Pré-condições:** Página detalhada do estabelecimento aberta (`RF004`); quatro notas inteiras válidas no intervalo `[1, 5]`; apelido opcional e comentário com até 500 caracteres.
- **Saídas / Pós-condições:** Registro da avaliação no armazenamento local do navegador (`NF006`), recálculo imediato das médias dos quatro pilares, exibição da nova avaliação no topo da lista de comentários e confirmação visual ao usuário.

#### RF009 — Criação, renomeação e exclusão de listas de favoritos por critério
- **ID:** `RF009`
- **Nome:** Criação, renomeação e exclusão de listas de favoritos por critério
- **RU de Origem:** `RU04` (Objetivo SMART: `OBJ2`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** permitir ao cliente criar listas de favoritos nomeadas por critério personalizado (como *"Melhores para ir com meu Avô"*, *"Melhores para levar o Cachorro"*, *"Melhores Espaços Kids"* e *"Locais com Baixo Ruído"*), impedir nomes vazios ou duplicados, renomear listas existentes e excluir listas mediante confirmação explícita.
- **Entradas / Pré-condições:** Acesso à área de favoritos ou ao seletor de salvamento; nome válido entre 2 e 60 caracteres para criação ou renomeação; confirmação explícita para exclusão.
- **Saídas / Pós-condições:** Atualização imediata do conjunto de listas no armazenamento local do navegador (`NF006`) e exibição da lista atualizada na interface.

#### RF010 — Inclusão, remoção e consulta de estabelecimentos em listas de favoritos
- **ID:** `RF010`
- **Nome:** Inclusão, remoção e consulta de estabelecimentos em listas de favoritos
- **RU de Origem:** `RU04` (Objetivo SMART: `OBJ2`)
- **Prioridade MoSCoW:** Must (Essencial — MVP)
- **Descrição:** O sistema **deve** permitir ao cliente adicionar ou remover qualquer estabelecimento em uma ou mais listas de favoritos simultaneamente e consultar, na área de favoritos, todos os locais agrupados pela lista selecionada com acesso direto à respectiva página detalhada (`RF004`).
- **Entradas / Pré-condições:** Existência de ao menos uma lista de favoritos (`RF009`) e seleção de um estabelecimento válido.
- **Saídas / Pós-condições:** Vínculo ou desvínculo registrado no armazenamento local (`NF006`), atualização do contador de locais da lista e exibição dos cartões correspondentes (ou mensagem orientativa caso a lista esteja vazia).

---

### Grupo Should — Importante (Especificados para Evolução Pós-MVP)

#### RF011 — Cadastro e autenticação simples por perfil de usuário
- **ID:** `RF011`
- **Nome:** Cadastro e autenticação simples por perfil de usuário
- **RU de Origem:** `RU05` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Should (Importante)
- **Descrição:** O sistema **deve** permitir o cadastro e a autenticação por e-mail e senha distintos para os perfis Cliente e Estabelecimento, exigindo aceite explícito do termo de privacidade (`RD001`) e validando permissões de acesso às áreas restritas.
- **Entradas / Pré-condições:** Formulário preenchido com e-mail válido, senha com ao menos 8 caracteres, tipo de perfil e confirmação de aceite da política de privacidade.
- **Saídas / Pós-condições:** Conta criada ou sessão autenticada vinculada ao perfil informado, concedendo acesso às funções correspondentes e bloqueando acessos não autorizados.

#### RF012 — Painel de gerenciamento do estabelecimento (perfil, tags e vitrine)
- **ID:** `RF012`
- **Nome:** Painel de gerenciamento do estabelecimento (perfil, tags e vitrine)
- **RU de Origem:** `RU05` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Should (Importante)
- **Descrição:** O sistema **deve** disponibilizar ao perfil Estabelecimento autenticado um painel de gerenciamento para cadastrar e atualizar dados institucionais, marcar ou desmarcar tags de infraestrutura inclusiva, incluir/editar/remover itens da vitrine informativa e selecionar quais itens recebem o selo "Favoritos da Casa".
- **Entradas / Pré-condições:** Usuário autenticado com perfil Estabelecimento (`RF011`); dados válidos de perfil, tags e itens da vitrine.
- **Saídas / Pós-condições:** Alterações refletidas na página pública do estabelecimento (`RF004`, `RF005`) e nos resultados da busca combinada (`RF002`).

#### RF013 — Clube de Fidelidade e resgate de cupons presenciais
- **ID:** `RF013`
- **Nome:** Clube de Fidelidade e resgate de cupons presenciais
- **RU de Origem:** `RU06` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Should (Importante)
- **Descrição:** O sistema **deve** oferecer uma área de Clube de Fidelidade onde estabelecimentos parceiros disponibilizam cupons com título, descrição do benefício, regras de uso e data de validade, e clientes resgatam códigos únicos para apresentação presencial no local sem qualquer transação financeira na plataforma (`RD003`).
- **Entradas / Pré-condições:** Existência de cupons ativos dentro da data de validade; seleção de resgate pelo cliente autenticado (`RF011`).
- **Saídas / Pós-condições:** Geração e exibição do comprovante/código do cupom resgatado associado ao cliente, bloqueando resgate de cupons expirados.

---

### Grupo Could — Desejável (Especificados para Expansão Futura)

#### RF014 — Seguidores e Timeline de atualizações dos estabelecimentos
- **ID:** `RF014`
- **Nome:** Seguidores e Timeline de atualizações dos estabelecimentos
- **RU de Origem:** `RU07` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Could (Desejável)
- **Descrição:** O sistema **deveria** permitir ao cliente seguir e deixar de seguir estabelecimentos e consultar uma timeline cronológica contendo publicações dos estabelecimentos seguidos compostas estritamente por texto curto (até 280 caracteres), 1 imagem e 1 tag de categoria (*Evento*, *Promoção* ou *Novidade*).
- **Entradas / Pré-condições:** Cliente autenticado (`RF011`) seguindo ao menos um estabelecimento; publicações válidas criadas por estabelecimentos parceiros dentro do limite de formato.
- **Saídas / Pós-condições:** Exibição da timeline filtrada pelos estabelecimentos seguidos em ordem cronológica decrescente, rejeitando publicações sem tag de categoria ou acima de 280 caracteres.

#### RF015 — Assistente virtual de recomendação de estabelecimentos
- **ID:** `RF015`
- **Nome:** Assistente virtual de recomendação de estabelecimentos
- **RU de Origem:** `RU08` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Could (Desejável)
- **Descrição:** O sistema **deveria** disponibilizar um assistente virtual baseado em fluxo guiado de perguntas ou entrada textual em linguagem natural capaz de identificar critérios de público (crianças, pets, idosos, PCD ou neurodivergentes) e bairro em João Pessoa, recomendando até 5 estabelecimentos compatíveis acompanhados das tags atendidas.
- **Entradas / Pré-condições:** Consulta textual ou respostas fornecidas pelo cliente nas etapas do fluxo guiado do assistente.
- **Saídas / Pós-condições:** Lista ordenada de até 5 estabelecimentos recomendados com link direto para suas páginas detalhadas (`RF004`) ou sugestão de flexibilização de critérios quando não houver correspondência.

---

### Grupo Won't — Agora Não (Escopo Negativo Formalizado)

#### RF016 — Pagamentos online, checkout financeiro, delivery próprio, app nativo e nota por item
- **ID:** `RF016`
- **Nome:** Pagamentos online, checkout financeiro, delivery próprio, app nativo e avaliação individual por item
- **RU de Origem:** `RU02` (Objetivo SMART: `OBJ3`)
- **Prioridade MoSCoW:** Won't (Agora não — Escopo Negativo)
- **Descrição:** Item registrado formalmente como excluído do escopo atual do projeto: a plataforma não processa pagamentos online nem checkout financeiro, não oferece serviço próprio de entregas (delivery), não prevê desenvolvimento de aplicativo mobile nativo (iOS/Android) e não permite avaliação individual de itens isolados do cardápio (substituída pela marcação "Favoritos da Casa" em `RF005`).
- **Entradas / Pré-condições:** Não aplicável na entrega atual (deliberação formal de controle de escopo definida na Seção 3.2 e validada na Seção 4).
- **Saídas / Pós-condições:** Garantia verificável de zero fluxos financeiros internos, zero carrinhos de compra e direcionamento exclusivo para canais externos oficiais (`RF006`, `RD003`).

---

## 5.4 Requisitos Não Funcionais (`NF001` a `NF006`)

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

## 5.5 Regras de Domínio (`RD001` a `RD003`)

| ID | Nome da Regra | Especificação Formal da Regra de Domínio | Requisitos Impactados |
| :--- | :--- | :--- | :--- |
| **RD001** | Conformidade com a LGPD (Lei nº 13.709/2018) | Toda coleta, exibição ou tratamento de informações de usuários em pesquisas, cadastros e avaliações **deve** cumprir os princípios da Lei Geral de Proteção de Dados (Lei nº 13.709/2018): consentimento explícito, minimização de dados, proibição de exposição pública de dados pessoais sensíveis (como diagnóstico médico, CPF, telefone pessoal ou endereço residencial) e anonimização nos relatórios comunitários. | `RF008`, `RF011`, `RF014`, `NF006` |
| **RD002** | Fórmula Objetiva de Cálculo das Médias nos Quatro Pilares | Para cada estabelecimento e para cada pilar $p \in \{1, 2, 3, 4\}$, a média exibida **deve** ser calculada como a média aritmética simples das $N$ notas inteiras válidas $n_{i,p} \in \{1, 2, 3, 4, 5\}$ registradas para aquele pilar, arredondada para **1 casa decimal**: $\text{Média}_p = \frac{1}{N}\sum_{i=1}^{N} n_{i,p}$ quando $N \ge 1$. Quando $N = 0$, o sistema **deve** exibir o texto `"Sem avaliações"` em substituição ao valor numérico, vedando a exibição de `0,0`. | `RF001`, `RF007`, `RF008` |
| **RD003** | Não Intermediação Financeira e Vitrine Informativa | A plataforma **deve** operar exclusivamente como diretório comunitário informativo em João Pessoa (PB), proibindo cobranças, comissões, pagamentos online, carrinho de compras, delivery próprio e avaliações individuais por item do cardápio. Os preços constantes na vitrine possuem caráter exclusivamente informativo e toda negociação comercial ocorre fora da plataforma pelos canais oficiais do estabelecimento. | `RF005`, `RF006`, `RF013`, `RF016` |

---

## 5.6 Auditoria Interna de Qualidade da Especificação

Antes da publicação da linha de base no Marco M3 (10/11/2026), todos os enunciados (`RU01`–`RU08`, `RF001`–`RF016`, `NF001`–`NF006` e `RD001`–`RD003`) foram auditados segundo os critérios da disciplina:

- Emprego consistente de **"deve"** para obrigatoriedade e **"deveria"** para desejabilidade;
- Ausência integral de termos subjetivos ou vagos e de jargões técnicos informais;
- Verificabilidade numérica garantida em 100% dos Requisitos Não Funcionais e Regras de Domínio;
- Alinhamento integral com o catálogo tabular `/artefatos/requisitos/requisitos.csv`, com os wireframes da Seção 4 e com os objetivos `OBJ1` a `OBJ4` da Seção 3.
