# Seção 7 — Backlog do Produto, Personas, Histórias de Usuário, Estimativas e Kanban

**Projeto:** Family Place  
**Responsável pela Seção:** Renan Mendes  
**Marco Associado:** M4 (17/11/2026)  
**Data de Consolidação:** 17/11/2026  
**Artefatos Complementares:** `/artefatos/backlog/kanban.html` e `/artefatos/backlog/backlog.csv`  

---

## 7.1 Personas do Projeto (Derivadas de `ENT-01` a `ENT-04`)

As quatro personas abaixo sintetizam os perfis reais levantados nas entrevistas semiestruturadas da Seção 4 (`ENT-01` a `ENT-04`), preservando o anonimato dos entrevistados (conformidade com `RD001`):

### P1 — Camila Ferreira (34 anos) — *Derivada de `ENT-01`*
- **Perfil em João Pessoa (PB):** Analista administrativa, moradora do bairro Bancários, mãe de um menino de 6 anos no espectro autista (TEA).
- **Rotina:** Pesquisa restaurantes e espaços familiares aos fins de semana para sair com o filho e familiares próximos.
- **Dor Principal:** Já interrompeu passeios em João Pessoa ao encontrar música em volume alto, iluminação excessiva ou falta de estrutura infantil não informados previamente em aplicativos de mapas genéricos.
- **Objetivo no Family Place:** Combinar filtros de estrutura infantil e conforto sensorial (baixo ruído, iluminação controlada), consultar notas separadas por pilar e organizar listas próprias de locais seguros para o filho.

### P2 — Rafael Medeiros (29 anos) — *Derivado de `ENT-02`*
- **Perfil em João Pessoa (PB):** Designer gráfico, morador do bairro Bessa, tutor de dois cães (um de porte pequeno e outro de porte médio).
- **Rotina:** Frequenta a orla do Bessa e de Manaíra com os animais e busca cafeterias e restaurantes para refeições após os passeios.
- **Dor Principal:** Frustra-se com estabelecimentos anunciados genericamente como *pet friendly* que recusam cães de porte médio ou disponibilizam apenas mesas externas descobertas sob sol ou chuva.
- **Objetivo no Family Place:** Filtrar locais pelo porte aceito e existência de área coberta com potes de água, avaliar a receptividade pet de forma independente, guardar favoritos para passeios com os cães e aproveitar cupons presenciais e novidades de eventos pet.

### P3 — Dona Lúcia Nogueira (72 anos) e Beatriz (41 anos) — *Derivada de `ENT-03`*
- **Perfil em João Pessoa (PB):** Professora aposentada cadeirante, moradora do bairro Manaíra, acompanhada nos passeios por sua cuidadora familiar Beatriz.
- **Rotina:** Planejam almoços semanais em restaurantes da cidade e costumam verificar previamente as condições físicas de acesso pelo smartphone.
- **Dor Principal:** Deparam-se com degraus na entrada, banheiros sem barras de apoio e circulação estreita entre mesas, além de interfaces digitais com letras pequenas e baixo contraste que dificultam a leitura por idosos.
- **Objetivo no Family Place:** Consultar informações confiáveis sobre rampa, banheiro adaptado e assentos confortáveis, acionar contato direto no WhatsApp do local para reservar mesa térrea e, em ciclos futuros, utilizar recomendações por perguntas guiadas.

### P4 — Marcos Vinícius Andrade (38 anos) — *Derivado de `ENT-04`*
- **Perfil em João Pessoa (PB):** Proprietário de uma cafeteria familiar inclusiva no bairro Tambaú equipada com rampa de acesso, cadeirão infantil e varanda coberta para pets.
- **Rotina:** Gerencia o atendimento presencial e responde diariamente a mensagens de clientes em redes sociais e WhatsApp.
- **Dor Principal:** Consome horas repetindo informações básicas sobre acessibilidade e regras pet e evita plataformas comerciais que cobram comissões sobre vendas ou exigem entrega própria.
- **Objetivo no Family Place:** Divulgar as comodidades inclusivas do estabelecimento, expor uma vitrine informativa com destaque para "Favoritos da Casa", receber interessados diretamente no WhatsApp oficial, administrar seu perfil comercial e publicar cupons presenciais e novidades curtas.

---

## 7.2 Epics do Produto (`EP01` a `EP05`)

| ID Epic | Nome do Epic | Requisitos Associados (Seção 5) | Histórias Vinculadas | Foco Principal |
| :--- | :--- | :--- | :--- | :--- |
| **EP01** | Descoberta Inclusiva e Busca Combinada | `RF001`, `RF002`, `RF003`, `NF001`, `NF003`, `NF005` | `H01`, `H02`, `H03` | Localização de estabelecimentos em João Pessoa com filtros combinados simultâneos (MVP). |
| **EP02** | Perfil do Estabelecimento, Vitrine e Contato Direto | `RF004`, `RF005`, `RF006`, `NF002`, `RD003` | `H04`, `H05`, `H06` | Tags de infraestrutura, vitrine com "Favoritos da Casa" e contato externo sem pagamentos (MVP). |
| **EP03** | Avaliação Multicritério nos Quatro Pilares | `RF007`, `RF008`, `NF005`, `NF006`, `RD001`, `RD002` | `H07`, `H08` | Consulta e envio de avaliações independentes de 1 a 5 estrelas nos 4 pilares (MVP). |
| **EP04** | Curadoria Pessoal de Favoritos por Critério | `RF009`, `RF010`, `NF006` | `H09`, `H10` | Criação de listas temáticas por necessidade e organização de locais salvos (MVP). |
| **EP05** | Gestão do Parceiro, Fidelidade e Comunidade | `RF011`, `RF012`, `RF013`, `RF014`, `RF015`, `RD001`, `RD003` | `H11`, `H12`, `H13`, `H14`, `H15` | Autenticação, painel do estabelecimento, Clube de Fidelidade, timeline e assistente virtual (Should/Could). |

*Nota de escopo negativo:* o requisito `RF016` (pagamentos online, checkout financeiro, delivery próprio, aplicativo mobile nativo e avaliação individual por item) pertence à classe **Won't** e não origina histórias no backlog implementável.

---

## 7.3 Histórias de Usuário (`H01` a `H15`)

Todas as histórias seguem estritamente o formato **"Como [persona], eu quero [intenção], para que [benefício]."** sem menção a elementos de interface gráfica nos enunciados e com vínculo direto aos requisitos da Seção 5.

### Histórias Must — Essenciais (Compõem o MVP — 44 pontos)

#### H01 — Catálogo e busca textual em João Pessoa
- **ID:** `H01` | **Epic:** `EP01` | **Prioridade:** Must | **Pontos (Fibonacci):** `3`
- **Requisitos Vinculados:** `RF001`, `NF001`, `NF003`, `NF004`
- **Enunciado:** Como Camila Ferreira (mãe de criança neurodivergente), eu quero pesquisar estabelecimentos cadastrados em João Pessoa por nome, bairro ou categoria comercial, para que eu encontre opções na minha região de interesse sem depender de consultas dispersas.
- **Critérios de Aceite:**
  1. O catálogo inicial contém ao menos 15 estabelecimentos situados em bairros de João Pessoa (PB).
  2. A busca textual ignora diferenças de maiúsculas, minúsculas e acentuação.
  3. Cada resultado exibe nome, bairro, categoria, tags resumidas e as médias separadas dos quatro pilares.
  4. O carregamento completo ocorre em até 3,0 segundos em conexão 4G simulada (`NF001`).

#### H02 — Filtragem combinada por critérios inclusivos
- **ID:** `H02` | **Epic:** `EP01` | **Prioridade:** Must | **Pontos (Fibonacci):** `8`
- **Requisitos Vinculados:** `RF002`, `NF003`, `NF005`
- **Enunciado:** Como Camila Ferreira (mãe de criança neurodivergente), eu quero combinar simultaneamente critérios de estrutura infantil, acessibilidade física, conforto sensorial e receptividade pet em uma mesma consulta, para que eu identifique apenas locais que atendam a todas as necessidades da minha família ao mesmo tempo.
- **Critérios de Aceite:**
  1. É possível combinar simultaneamente ao menos quatro categorias de filtros (tipo de local, estrutura infantil, acessibilidade física/conforto sensorial e receptividade pet).
  2. A aplicação simultânea utiliza conjunção lógica E, exibindo somente estabelecimentos que atendem a 100% dos critérios marcados.
  3. A filtragem opera em conjunto com eventual pesquisa textual ativa (`RF001`).
  4. Usuários em validação concluem uma busca com ao menos 3 filtros em até 45 segundos e no máximo 4 interações (`NF005`).

#### H03 — Contagem de locais, limpeza de critérios e aviso de ausência
- **ID:** `H03` | **Epic:** `EP01` | **Prioridade:** Must | **Pontos (Fibonacci):** `2`
- **Requisitos Vinculados:** `RF003`, `NF005`
- **Enunciado:** Como Beatriz (cuidadora de idoso cadeirante), eu quero saber quantos estabelecimentos correspondem aos critérios escolhidos, redefinir todos os filtros de uma só vez e receber orientação quando não houver correspondência, para que eu ajuste minha pesquisa sem confusão.
- **Critérios de Aceite:**
  1. O contador de estabelecimentos compatíveis atualiza-se automaticamente após qualquer adição ou remoção de filtro.
  2. O comando de limpeza remove todos os filtros e o texto pesquisado em uma única ação, restaurando os 15 ou mais estabelecimentos do catálogo.
  3. Quando a combinação resultar em zero estabelecimentos, uma mensagem orientativa sugere flexibilizar ou limpar os critérios ativos.

#### H04 — Detalhes do estabelecimento e tags de infraestrutura
- **ID:** `H04` | **Epic:** `EP02` | **Prioridade:** Must | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF004`, `NF002`, `NF003`
- **Enunciado:** Como Dona Lúcia Nogueira (idosa cadeirante), eu quero consultar o endereço em João Pessoa, o horário de funcionamento e o detalhamento das comodidades inclusivas de um estabelecimento, para que eu confirme previamente a existência de rampa, banheiro adaptado e circulação segura antes de sair de casa.
- **Critérios de Aceite:**
  1. São exibidos nome, categoria, endereço, bairro em João Pessoa, horário de funcionamento e descrição institucional do local selecionado.
  2. As tags de infraestrutura são agrupadas separadamente em Estrutura Infantil, Acessibilidade e Conforto (idosos, PCD e neurodivergentes) e Receptividade Pet.
  3. Todos os textos normais respeitam contraste mínimo de 4,5:1 e fonte base >= 16 px (`NF002`), sem rolagem horizontal entre 360 px e 1440 px (`NF003`).

#### H05 — Vitrine informativa com destaque Favoritos da Casa
- **ID:** `H05` | **Epic:** `EP02` | **Prioridade:** Must | **Pontos (Fibonacci):** `3`
- **Requisitos Vinculados:** `RF005`, `RD003`
- **Enunciado:** Como Rafael Medeiros (tutor de cães), eu quero visualizar os principais produtos e serviços oferecidos pelo estabelecimento com faixas de preço informativas e destaque para os Favoritos da Casa, para que eu avalie se a proposta do local atende às expectativas da visita sem precisar realizar compras na plataforma.
- **Critérios de Aceite:**
  1. 100% dos estabelecimentos do catálogo exibem uma vitrine informativa com nome do item, descrição breve e faixa de preço informativa.
  2. Itens destacados exibem identificação clara de "Favoritos da Casa".
  3. A vitrine não apresenta carrinho de compras, checkout financeiro nem avaliação individual por item, exibindo aviso explícito de caráter informativo (`RD003`).

#### H06 — Redirecionamento direto para WhatsApp e site oficial
- **ID:** `H06` | **Epic:** `EP02` | **Prioridade:** Must | **Pontos (Fibonacci):** `2`
- **Requisitos Vinculados:** `RF006`, `RD003`
- **Enunciado:** Como Beatriz (cuidadora de idoso cadeirante), eu quero iniciar contato diretamente com o WhatsApp ou site oficial do estabelecimento escolhido, para que eu confirme disponibilidade de mesa térrea ou tire dúvidas sem intermediação financeira.
- **Critérios de Aceite:**
  1. 100% dos estabelecimentos possuem ao menos um link externo válido para WhatsApp oficial ou site institucional.
  2. O redirecionamento abre externamente em nova aba com atributos de segurança (`rel="noopener noreferrer"`).
  3. O redirecionamento para WhatsApp inclui mensagem inicial contextualizada mencionando o estabelecimento consultado no Family Place.

#### H07 — Consulta de médias nos quatro pilares e comentários
- **ID:** `H07` | **Epic:** `EP03` | **Prioridade:** Must | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF007`, `NF002`, `RD002`
- **Enunciado:** Como Camila Ferreira (mãe de criança neurodivergente), eu quero consultar as médias separadas nos quatro pilares de acolhimento e os comentários ordenados por data de um estabelecimento, para que eu julgue cada dimensão de forma independente sem ser induzida por uma nota genérica única.
- **Critérios de Aceite:**
  1. São exibidas separadamente as médias dos quatro pilares (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) com arredondamento para 1 casa decimal (`RD002`).
  2. Quando o total de avaliações for igual a zero (`N = 0`), cada pilar exibe o texto `"Sem avaliações"` em vez de `0,0`.
  3. Os comentários da comunidade aparecem em ordem cronológica decrescente, acompanhados da data e das quatro notas atribuídas.

#### H08 — Registro de avaliação multicritério nos quatro pilares
- **ID:** `H08` | **Epic:** `EP03` | **Prioridade:** Must | **Pontos (Fibonacci):** `8`
- **Requisitos Vinculados:** `RF008`, `NF005`, `NF006`, `RD001`, `RD002`
- **Enunciado:** Como Rafael Medeiros (tutor de cães), eu quero atribuir notas de 1 a 5 estrelas para cada um dos quatro pilares ou indicar que um critério não se aplica, identificando meu nome público e um comentário opcional sobre minha visita, para que minha experiência atualize imediatamente as médias do estabelecimento e ajude outros moradores de João Pessoa.
- **Critérios de Aceite:**
  1. Cada um dos quatro pilares aceita nota inteira entre 1 e 5 ou a opção `"Não se aplica"`, exigindo ao menos 1 pilar com nota numérica e nome ou apelido público com mínimo de 2 caracteres, bloqueando submissão incompleta com mensagem explicativa.
  2. O comentário textual aceita até 500 caracteres e exibe aviso de privacidade informando que nenhum dado sensível (como e-mail ou documentos) é coletado (`RD001`).
  3. Após o envio, as quatro médias são recalculadas imediatamente desconsiderando `"Não se aplica"` do denominador (`RD002`), o comentário aparece no topo da listagem e o registro permanece gravado após recarregamento da página (`NF006`).
  4. Usuários em validação concluem a avaliação em até 60 segundos e no máximo 6 interações (`NF005`).

#### H09 — Criação e gestão de listas de favoritos por critério
- **ID:** `H09` | **Epic:** `EP04` | **Prioridade:** Must | **Pontos (Fibonacci):** `3`
- **Requisitos Vinculados:** `RF009`, `NF006`
- **Enunciado:** Como Camila Ferreira (mãe de criança neurodivergente), eu quero criar, renomear e remover listas de favoritos identificadas pelo critério que mais importa em cada ocasião, para que eu organize separadamente locais de baixo ruído, espaços infantis e opções acessíveis.
- **Critérios de Aceite:**
  1. É possível criar listas com nomes de 2 a 60 caracteres, bloqueando nomes vazios ou duplicados.
  2. Listas existentes podem ser renomeadas sem perder os estabelecimentos já vinculados.
  3. A exclusão de uma lista exige confirmação explícita antes da remoção definitiva.
  4. Todas as alterações permanecem salvas no armazenamento local após recarregamento (`NF006`).

#### H10 — Inclusão, remoção e consulta de locais nas listas de favoritos
- **ID:** `H10` | **Epic:** `EP04` | **Prioridade:** Must | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF010`, `NF006`
- **Enunciado:** Como Beatriz (cuidadora de idoso cadeirante), eu quero incluir ou remover um estabelecimento em uma ou mais listas de favoritos e consultar com objetividade os locais salvos em cada grupo, para que eu reutilize recomendações aprovadas sempre que planejar novos passeios.
- **Critérios de Aceite:**
  1. Um mesmo estabelecimento pode ser incluído simultaneamente em duas ou mais listas de favoritos distintas.
  2. A remoção de um estabelecimento em uma lista não afeta sua presença nas demais listas.
  3. Cada lista exibe o contador atualizado de locais, permite acesso direto aos detalhes de qualquer estabelecimento salvo e apresenta orientação clara quando estiver vazia.

---

### Histórias Should — Importantes (Evolução Pós-MVP — 18 pontos)

#### H11 — Cadastro e autenticação por perfil de usuário
- **ID:** `H11` | **Epic:** `EP05` | **Prioridade:** Should | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF011`, `RD001`
- **Enunciado:** Como Marcos Vinícius Andrade (proprietário de cafeteria local), eu quero cadastrar e acessar minha conta com perfil de estabelecimento mediante aceite explícito de privacidade, para que apenas representantes autorizados administrem as informações do meu negócio.
- **Critérios de Aceite:**
  1. O cadastro diferencia os perfis Cliente e Estabelecimento, validando formato de e-mail e senha com no mínimo 8 caracteres.
  2. A criação da conta exige confirmação explícita da política de privacidade em conformidade com a LGPD (`RD001`).
  3. Contas de perfil Cliente não conseguem acessar funções administrativas reservadas ao perfil Estabelecimento.

#### H12 — Painel de gestão de perfil, tags e vitrine do estabelecimento
- **ID:** `H12` | **Epic:** `EP05` | **Prioridade:** Should | **Pontos (Fibonacci):** `8`
- **Requisitos Vinculados:** `RF012`, `RD003`
- **Enunciado:** Como Marcos Vinícius Andrade (proprietário de cafeteria local), eu quero atualizar os dados institucionais, as comodidades inclusivas, a vitrine informativa e os itens destacados como Favoritos da Casa, para que os moradores de João Pessoa consultem informações sempre atuais sem precisar perguntar repetidamente pelo WhatsApp.
- **Critérios de Aceite:**
  1. Somente usuários autenticados com perfil Estabelecimento conseguem alterar o perfil do próprio local.
  2. Tags de infraestrutura marcadas ou desmarcadas refletem-se na busca combinada (`RF002`) e na visualização pública (`RF004`).
  3. Itens da vitrine podem ser incluídos, editados, removidos e marcados como "Favoritos da Casa" sem opção de pagamento interno (`RD003`).

#### H13 — Clube de Fidelidade e resgate de cupons presenciais
- **ID:** `H13` | **Epic:** `EP05` | **Prioridade:** Should | **Pontos (Fibonacci):** `5`
- **Requisitos Vinculados:** `RF013`, `RD003`
- **Enunciado:** Como Rafael Medeiros (tutor de cães), eu quero resgatar cupons promocionais válidos oferecidos por estabelecimentos parceiros no Clube de Fidelidade, para que eu obtenha benefícios ao apresentá-los presencialmente no local sem efetuar pagamentos online.
- **Critérios de Aceite:**
  1. Cada cupom exibe título, estabelecimento parceiro, regras de uso e data limite de validade.
  2. O resgate gera um código identificável vinculado ao cliente para apresentação presencial sem cobrança online (`RD003`).
  3. Cupons fora da data de validade têm o resgate automaticamente bloqueado.

---

### Histórias Could — Desejáveis (Expansão Futura — 21 pontos)

#### H14 — Seguidores e timeline de novidades dos estabelecimentos
- **ID:** `H14` | **Epic:** `EP05` | **Prioridade:** Could | **Pontos (Fibonacci):** `8`
- **Requisitos Vinculados:** `RF014`, `RD001`
- **Enunciado:** Como Rafael Medeiros (tutor de cães), eu quero seguir meus estabelecimentos preferidos e acompanhar atualizações curtas acompanhadas de uma imagem e categoria do aviso, para que eu fique informado sobre eventos pet, promoções e novidades em João Pessoa.
- **Critérios de Aceite:**
  1. O cliente pode seguir e deixar de seguir qualquer estabelecimento cadastrado.
  2. A timeline exibe em ordem cronológica decrescente somente publicações dos estabelecimentos seguidos.
  3. Cada publicação contém estritamente texto de até 280 caracteres, 1 imagem e 1 tag obrigatória (*Evento*, *Promoção* ou *Novidade*).

#### H15 — Assistente virtual de recomendação de estabelecimentos
- **ID:** `H15` | **Epic:** `EP05` | **Prioridade:** Could | **Pontos (Fibonacci):** `13`
- **Requisitos Vinculados:** `RF015`, `NF005`
- **Enunciado:** Como Dona Lúcia Nogueira (idosa cadeirante), eu quero descrever minhas necessidades de passeio em linguagem natural ou responder a perguntas guiadas para receber sugestões de estabelecimentos compatíveis em João Pessoa, para que eu descubra locais adequados sem precisar configurar múltiplos filtros manualmente.
- **Critérios de Aceite:**
  1. O assistente aceita entrada textual livre ou sequência guiada de perguntas sobre público atendido e região de João Pessoa.
  2. Retorna até 5 estabelecimentos compatíveis ordenados por aderência, explicitando quais tags inclusivas foram atendidas.
  3. Quando não existir correspondência exata, propõe flexibilização objetiva de critérios ou alternativas próximas.

---

## 7.4 Definição de Pronto (Definition of Done — DoD)

Uma história de usuário ou entregável documental somente pode ser movido para a coluna **`Concluído`** no quadro Kanban quando atender cumulativamente a 100% dos critérios abaixo:

1. **Critérios de aceite cumpridos:** todos os critérios de aceite específicos da história foram verificados sem falhas bloqueantes.
2. **Aderência aos requisitos não funcionais e regras:** verificação confirmada de contraste WCAG 2.1 AA (`NF002`), responsividade entre 360 px e 1440 px (`NF003`), ausência de erros no console (`NF004`), conformidade LGPD (`RD001`), fórmula de cálculo (`RD002`) e política de não intermediação financeira (`RD003`).
3. **Revisão cruzada obrigatória:** inspeção concluída por ao menos um integrante distinto do autor original (sem autoaprovação).
4. **Rastreabilidade atualizada:** vínculos com `OBJ`, `RU`, `RF`, `NF`, `RD` e `EAP` conferidos e sincronizados com as planilhas do repositório.
5. **Versionamento limpo:** alterações integradas ao repositório Git com commit descritivo, sem arquivos temporários ou rastros indevidos.

---

## 7.5 Registro da Sessão de Planning Poker

- **Data da Sessão:** 14/11/2026 (Ciclo 5 — atividade `3.3` da EAP)
- **Duração:** 65 minutos
- **Participantes (4 integrantes):** Renan Mendes (facilitador), Pierre Simon, Kewy Huang e Caio Augusto
- **Baralho Fibonacci Adotado:** `1`, `2`, `3`, `5`, `8`, `13`
- **História de Referência (Âncora):** `H01` (*Catálogo e busca textual em João Pessoa*) calibrada em **3 pontos**, representando complexidade baixa-moderada sobre dados estáticos locais em React.
- **Regra de Consenso:** em toda divergência, o integrante de **maior voto** e o integrante de **menor voto** expuseram suas justificativas técnicas e de risco antes de uma nova rodada simultânea, **vedando-se expressamente o cálculo de média aritmética**.

### 7.5.1 Tabela Final de Pontuação das Histórias

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

### 7.5.2 Relato Detalhado das Divergências Debatidas

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

## 7.6 Quadro Kanban e Acompanhamento de Fluxo

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
