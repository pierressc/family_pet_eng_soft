# Seção 3 — Termo de Abertura do Projeto (TAP), Escopo e Estudo de Viabilidade

**Projeto:** Family Place  
**Responsáveis pela Seção:** Pierre Simon (Seções 3.1 e 3.2) e Kewy Huang (Seção 3.3)  
**Data:** 20/10/2026  

---

## 3.1 Termo de Abertura do Projeto (TAP)

### 3.1.1 Propósito e Justificativa Comunitária (Extensão)

O projeto **Family Place** tem como propósito conceber, especificar e prototipar uma plataforma web comunitária voltada ao município de **João Pessoa (PB)**, dedicada a conectar pessoas a estabelecimentos comerciais realmente preparados para o acolhimento inclusivo de famílias e animais de estimação.

A justificativa comunitária decorre de uma lacuna prática enfrentada diariamente por cinco grupos da população local:

1. **Famílias com crianças:** dificuldade em verificar previamente a existência de infraestrutura segura e adequada, como trocadores, cadeirões, espaços infantis monitorados e áreas protegidas.
2. **Tutores de animais de estimação (pets):** ausência de regras claras e verificáveis sobre aceitação por porte do animal, disponibilidade de áreas cobertas permitidas e oferta de água para pets.
3. **Pessoas idosas:** carência de informações confiáveis sobre conforto físico, acessibilidade sem obstáculos, assentos adequados e níveis controlados de ruído ambiental.
4. **Pessoas com Deficiência (PCD — física ou intelectual):** falta de detalhamento objetivo sobre rampas, banheiros adaptados, sinalização tátil, circulação interna e comunicação acessível.
5. **Pessoas neurodivergentes (ex.: autismo e TDAH):** necessidade crítica de previsibilidade ambiental antes do deslocamento, envolvendo nível de ruído, iluminação e condições sensoriais do espaço.

Atualmente, diretórios genéricos de mapas e avaliações concentram-se em uma nota única e subjetiva, omitindo critérios objetivos de acessibilidade, conforto sensorial, estrutura infantil e receptividade pet. Ao disponibilizar filtros combinados e um sistema de avaliação multicritério em quatro pilares, o Family Place reduz a incerteza antes de sair de casa e amplia a visibilidade de comércios locais inclusivos de João Pessoa, fortalecendo o vínculo extensionista entre a universidade e a comunidade.

---

### 3.1.2 Objetivos SMART

Os objetivos do projeto seguem os critérios **SMART** (Específico, Mensurável, Atingível, Relevante e Temporal), todos vinculados ao prazo limite de **01/12/2026**:

| ID | Objetivo SMART | Critério de Verificação (Métrica) | Prazo |
| :--- | :--- | :--- | :--- |
| **OBJ1** | Disponibilizar uma plataforma web responsiva em React (MVP sem banco de dados) com catálogo inicial de ao menos **15 estabelecimentos de João Pessoa (PB)** e mecanismo de busca com combinação simultânea de pelo menos **4 categorias de filtros** (tipo de local, estrutura infantil, acessibilidade física/intelectual/sensorial e receptividade pet). | Mínimo de 15 locais cadastrados no catálogo do MVP, 4 categorias combináveis operacionais e taxa mínima de **90%** de conclusão bem-sucedida nas tarefas de busca durante os testes de validação com usuários. | 01/12/2026 |
| **OBJ2** | Implementar o sistema de avaliação multicritério segmentado em **4 pilares independentes** (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) em escala de **1 a 5 estrelas** com comentário textual, integrado ao recurso de listas de favoritos organizadas por critério. | Cálculo automático das médias em 100% dos 4 pilares exibidos na página de cada estabelecimento e criação/consulta funcional de listas de favoritos por critério sem falhas bloqueantes. | 01/12/2026 |
| **OBJ3** | Estruturar vitrines informativas com destaque para itens **"Favoritos da Casa"** e redirecionamento direto para canais externos oficiais (WhatsApp ou site) em **100%** dos estabelecimentos do MVP, operando sem pagamentos online, checkout financeiro ou delivery próprio, além de especificar integralmente os módulos evolutivos (gestão do estabelecimento, Clube de Fidelidade, seguidores/timeline e assistente virtual). | 100% dos perfis do MVP exibindo vitrine informativa e link direto funcional para contato externo, 0 transações financeiras internas e 100% dos módulos evolutivos formalmente especificados na Seção 5. | 01/12/2026 |
| **OBJ4** | Entregar a documentação completa de Engenharia de Software (**Seções 1 a 9**) e validar o protótipo funcional do MVP junto a, no mínimo, **12 moradores** e **3 representantes de estabelecimentos locais de João Pessoa (PB)**, assegurando coerência documental ponta a ponta. | 9 seções documentais aprovadas na revisão interna, registros de validação com ao menos 15 participantes externos (12 moradores + 3 estabelecimentos) e **100%** de cobertura na Matriz de Rastreabilidade sem células órfãs. | 01/12/2026 |

---

### 3.1.3 Partes Interessadas (Stakeholders)

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

### 3.1.4 Gerente de Projeto e Nível de Autoridade

- **Gerente de Projeto Designado:** **Pierre Simon**.
- **Nível de Autoridade:**
  - Conduzir o planejamento semanal, acompanhar o quadro Kanban no GitHub Projects e redistribuir tarefas operacionais mediante acordo com os integrantes;
  - Convocar reuniões de alinhamento e revisão, registrando deliberações nas atas oficiais;
  - Consolidar e liberar as entregas correspondentes aos marcos M1 a M5 após validação de qualidade;
  - Propor ajustes de escopo ou cronograma diante de riscos concretizados, respeitando o prazo final de 01/12/2026.
- **Limites de Autoridade:** alterações estruturais nos objetivos SMART ou nas exigências avaliativas dependem de consenso da equipe e alinhamento com o docente da disciplina; não há autorização para contratação de serviços pagos, visto que o orçamento financeiro do projeto é zero.

---

### 3.1.5 Marcos de Alto Nível (M1 a M5)

Todos os marcos do projeto são definidos exclusivamente como **entregas verificáveis**:

| ID | Marco | Data-Alvo | Entrega Verificável | Responsável Principal |
| :--- | :--- | :--- | :--- | :--- |
| **M1** | Aprovação do TAP, Escopo, Viabilidade e PMCanvas | 20/10/2026 | Seções 1, 2 e 3 publicadas no repositório e artefato `pmcanvas.html` revisado pela equipe. | Pierre Simon e Kewy Huang |
| **M2** | Conclusão da Elicitação e Protótipos de Baixa Fidelidade | 03/11/2026 | Relatório de elicitação comunitária em João Pessoa e conjunto completo de wireframes de baixa fidelidade validados. | Kewy Huang |
| **M3** | Linha de Base de Requisitos e Planejamento Detalhado | 10/11/2026 | Especificação formal (RU, RF, NF, RD) auditada quanto à qualidade e Seção 6 (EAP, marcos e cronograma com Regra de Sommerville) publicada. | Caio Augusto e Pierre Simon |
| **M4** | Consolidação do Backlog, Estimativas e Plano do MVP | 17/11/2026 | Personas, histórias de usuário, Definição de Pronto, resultados do Planning Poker, quadro Kanban ativo e definição final do MVP. | Renan Mendes |
| **M5** | Entrega Final da Documentação Integrada e Apresentação do MVP | 01/12/2026 | Versão v1.0 das Seções 1 a 9, Matriz de Rastreabilidade com 100% de cobertura, protótipo funcional do MVP em React validado e apresentação final na disciplina. | Toda a Equipe |

---

### 3.1.6 Premissas e Restrições

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

### 3.1.7 Riscos Iniciais em Alto Nível

| ID | Descrição do Risco | Probabilidade | Impacto | Estratégia de Mitigação |
| :--- | :--- | :--- | :--- | :--- |
| **RSK1** | Baixa adesão de moradores ou estabelecimentos de João Pessoa na etapa de elicitação e validação. | Média | Alto | Iniciar a divulgação dos formulários no Ciclo 2, combinar canais digitais com contatos diretos locais e trabalhar com metas objetivas (12 moradores e 3 estabelecimentos). |
| **RSK2** | Expansão descontrolada de escopo (*scope creep*) com inclusão de recursos financeiros ou complexidade excessiva no MVP. | Média | Alto | Aplicar rigorosamente a priorização MoSCoW e a lista explícita de Escopo Negativo definida na Seção 3.2. |
| **RSK3** | Sobrecarga acadêmica dos integrantes em semanas de provas de outras disciplinas. | Alta | Médio | Incorporar margem de +50% da Regra de Sommerville no cronograma e limitar o trabalho em andamento (WIP) no Kanban. |
| **RSK4** | Divergência entre requisitos especificados, protótipos de baixa fidelidade e implementação do MVP. | Média | Alto | Conduzir revisão cruzada semanal e atualizar continuamente a Matriz de Rastreabilidade antes do fechamento de cada marco. |
| **RSK5** | Descrição superficial ou imprecisa de critérios de acessibilidade física e sensorial. | Média | Médio | Consultar diretamente representantes dos públicos atendidos e referenciar normas reconhecidas de acessibilidade (ex.: ABNT NBR 9050 e diretrizes WCAG). |
| **RSK6** | Atraso na finalização da revisão de qualidade e integração documental próxima a 01/12/2026. | Baixa | Alto | Antecipar a pré-entrega consolidada (v0.9) para 24/11/2026, reservando a última semana exclusivamente para validação final e ajustes. |

---

### 3.1.8 Orçamento Preliminar e Subprodutos

#### Orçamento Preliminar (Recursos Financeiros e Esforço)

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

#### Subprodutos (Entregas Principais)

1. Conjunto documental de Engenharia de Software (Seções 1 a 9 em `/docs`).
2. Project Model Canvas autônomo (`/artefatos/pmcanvas/pmcanvas.html`).
3. Registros de elicitação comunitária e protótipos de baixa fidelidade (`/artefatos/elicitacao` e `/artefatos/wireframes`).
4. Estrutura Analítica do Projeto (EAP), marcos e cronograma com Regra de Sommerville (`/artefatos/planejamento`).
5. Backlog, personas, histórias de usuário, Planning Poker e evidências do quadro Kanban (`/artefatos/backlog`).
6. Matriz de Rastreabilidade bidirecional completa (`/artefatos/rastreabilidade`).
7. Atas formais das reuniões de acompanhamento (`/artefatos/atas`).
8. Protótipo funcional do MVP web em React (sem banco de dados) validado com a comunidade.

---

## 3.2 Declaração de Escopo

### 3.2.1 O que o Sistema FAZ (Escopo Positivo)

O produto **Family Place** organiza suas funcionalidades em dois perfis de usuário (**Cliente** e **Estabelecimento**), priorizadas pelo método **MoSCoW** com distribuição aproximada de **60% Must**, **20% Should**, **15% Could** e **5% Won't**.

#### Núcleo Essencial — MVP em React sem Banco de Dados (*Must* — ~60%)
1. **Busca com Filtros Combinados em João Pessoa:** pesquisa e filtragem simultânea de estabelecimentos por múltiplas necessidades (categoria do estabelecimento, estrutura infantil, acessibilidade física/intelectual/sensorial e receptividade pet).
2. **Página Detalhada do Estabelecimento:** apresentação completa das tags de infraestrutura e acolhimento, endereço e horários em João Pessoa, vitrine informativa de produtos e serviços com destaque para itens **"Favoritos da Casa"** e redirecionamento direto para o WhatsApp ou site oficial do comércio.
3. **Sistema de Avaliação Multicritério (4 Pilares):** atribuição e consulta de notas independentes de 1 a 5 estrelas acompanhadas de comentário textual nos pilares:
   - *Pilar 1 — Estrutura Infantil (Kids):* trocador, espaço kids, cadeirão, segurança e recreação;
   - *Pilar 2 — Acessibilidade e Conforto:* rampas, banheiros adaptados, piso tátil, baixo ruído, iluminação confortável, cardápio/comunicação acessível e assentos adequados para idosos, PCD e neurodivergentes;
   - *Pilar 3 — Receptividade Pet (Pet Friendly):* área coberta permitida, disponibilidade de água e suporte por porte de animal;
   - *Pilar 4 — Atendimento e Custo-Benefício:* cordialidade, preparo da equipe para acolhimento inclusivo e transparência de preços.
4. **Favoritos Organizados por Critério:** salvamento e consulta de estabelecimentos favoritos em listas personalizadas segundo a necessidade do usuário (ex.: *"Melhores para ir com meu Avô"*, *"Melhores para levar o Cachorro"*, *"Melhores Espaços Kids"* e *"Locais com Baixo Ruído"*).

#### Módulos Importantes Especificados (*Should* — ~20%)
5. **Cadastro e Autenticação Simples:** criação e acesso de contas diferenciadas para Clientes e Estabelecimentos.
6. **Painel de Gestão do Estabelecimento:** administração do perfil comercial, marcação de tags de infraestrutura inclusiva e atualização da vitrine informativa e dos itens "Favoritos da Casa".
7. **Clube de Fidelidade e Cupons:** área de disponibilização e resgate de cupons promocionais para apresentação presencial nos estabelecimentos parceiros.

#### Módulos Desejáveis Especificados (*Could* — ~15%)
8. **Comunidade (Seguidores e Timeline):** possibilidade de seguir estabelecimentos e acompanhar atualizações em linha do tempo contendo obrigatoriamente texto curto, 1 imagem e 1 tag de categoria (*Evento*, *Promoção* ou *Novidade*).
9. **Assistente Virtual de Recomendação:** interface conversacional ou fluxo guiado de perguntas para sugerir locais compatíveis sem exigência de seleção manual de múltiplos filtros.

---

### 3.2.2 O que o Sistema NÃO FAZ (Escopo Negativo — *Won't* — ~5%)

Para preservar o foco comunitário, a simplicidade operacional e a exequibilidade até 01/12/2026, ficam **explicitamente excluídos do escopo**:

1. **Pagamentos online e checkout financeiro:** o sistema não processa cartões, Pix, boletos, carrinho de compras ou cobranças de qualquer natureza.
2. **Serviço próprio de delivery ou logística:** o sistema não gerencia entregas, motoboys, rastreamento de pedidos ou taxas de frete; qualquer reserva ou compra ocorre diretamente nos canais externos do estabelecimento.
3. **Aplicativo mobile nativo (iOS ou Android):** o sistema será entregue exclusivamente como aplicação web responsiva acessível por navegador.
4. **Avaliação individual por item do cardápio:** descartada por regra de negócio para evitar complexidade excessiva na coleta e leitura de notas; a vitrine limita-se à exposição informativa com marcação de itens "Favoritos da Casa".
5. **Infraestrutura de produção com banco de dados remoto no MVP:** a versão demonstrativa da disciplina opera em React com dados estáticos locais e armazenamento no navegador, sem contratação de servidores em nuvem.

---

### 3.2.3 Números Declarados do Escopo

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

### 3.2.4 Limitações de Escopo e Fatores Mitigantes

| Limitação Declarada | Efeito no Produto | Fator Mitigante Aplicado |
| :--- | :--- | :--- |
| Ausência de banco de dados remoto no MVP | Avaliações criadas e listas de favoritos ficam armazenadas apenas localmente no navegador do usuário durante a demonstração. | Estruturação limpa da camada de dados em arquivos JSON locais e `localStorage`, preparando a migração direta para API REST em fase pós-disciplina. |
| Ausência de transações financeiras e checkout | O usuário não conclui reservas ou compras dentro da própria plataforma. | Redirecionamento em um clique para WhatsApp ou site oficial do estabelecimento com mensagem contextualizada, reduzindo atrito sem custos regulatórios ou financeiros. |
| Curadoria inicial manual de estabelecimentos | O catálogo inicial depende de levantamento realizado pela equipe em João Pessoa. | Definição de lista inicial enxuta e verificada de ao menos 15 locais representativos de bairros distintos da cidade (ex.: Manaíra, Tambaú, Cabo Branco, Bancários e Bessa). |
| Módulos *Should* e *Could* fora do código obrigatório do MVP | Autenticação em servidor, painel completo do estabelecimento, Clube de Fidelidade, Timeline e Assistente Virtual não bloqueiam a entrega funcional mínima. | Especificação completa desses módulos nas Seções 5 e 7, com inclusão opcional apenas após a conclusão e verificação integral de 100% dos itens *Must*. |

---

## 3.3 Estudo de Viabilidade

**Responsável pela Subseção:** Kewy Huang

### 3.3.1 Viabilidade Comunitária e Operacional

O município de João Pessoa (PB) apresenta forte setor gastronômico, turístico e de lazer frequentado por moradores e visitantes, porém carece de um diretório local unificado que informe de maneira verificável a infraestrutura destinada a crianças, animais de estimação, idosos, pessoas com deficiência (física ou intelectual) e pessoas neurodivergentes.

Do ponto de vista operacional:
- **Adesão do público Cliente:** o modelo de busca por filtros combinados e avaliação em quatro pilares responde diretamente à dor cotidiana de descobrir, antes de sair de casa, se o ambiente comporta um carrinho de bebê, um cão de porte médio, uma cadeira de rodas ou uma pessoa com sensibilidade auditiva.
- **Adesão do público Estabelecimento:** como o Family Place não cobra comissões, não exige integração financeira e direciona interessados diretamente para o WhatsApp ou site oficial do local, a barreira de adesão comercial é mínima.
- **Sustentabilidade extensionista:** a proposta gera impacto social mensurável para grupos frequentemente invisibilizados no comércio local, cumprindo o papel extensionista da universidade.

Conclui-se que o projeto é **comunitária e operacionalmente viável**.

---

### 3.3.2 Viabilidade Técnica

A solução técnica definida para o MVP consiste em uma **aplicação web responsiva desenvolvida em React**, executável diretamente em navegadores modernos (desktop e dispositivos móveis), sem dependência de banco de dados remoto ou servidores pagos nesta primeira entrega.

A avaliação técnica confirma os seguintes pontos:
- **Domínio da pilha tecnológica:** os integrantes do curso de Ciência da Computação possuem base em HTML, CSS, JavaScript e componentização em React, permitindo construir a busca combinada, a exibição dos quatro pilares, o cálculo de médias, a vitrine informativa e as listas de favoritos com baixo risco técnico.
- **Adequação da ausência de banco de dados no MVP:** o uso de dados estáticos estruturados de estabelecimentos de João Pessoa combinado ao armazenamento local do navegador (`localStorage`) possibilita demonstrar e validar integralmente a experiência do usuário nos fluxos *Must*, eliminando complexidades de hospedagem, segurança de credenciais e administração de servidores dentro do prazo de sete semanas.
- **Portabilidade e acessibilidade web:** o uso de HTML semântico, contraste adequado e desenho responsivo atende usuários em smartphones e computadores sem necessidade de publicar aplicativos nativos em lojas oficiais.
- **Evolução arquitetural:** a separação entre interface e camada de dados assegura que, em ciclos futuros pós-disciplina, os dados locais possam ser substituídos por serviços backend e banco de dados sem reconstruir a interface.

Conclui-se que o projeto é **tecnicamente viável**.

---

### 3.3.3 Viabilidade Econômica e de Recursos

Todas as ferramentas selecionadas para gestão, documentação, prototipação e desenvolvimento do MVP possuem licenciamento gratuito ou código aberto, resultando em **custo financeiro direto de R$ 0,00**. A equipe dispõe de equipamentos próprios e acesso regular à internet, não havendo dependência de financiamento externo ou aquisições.

Conclui-se que o projeto é **economicamente viável**.

---

### 3.3.4 Viabilidade de Prazo (13/10/2026 a 01/12/2026)

O período disponível compreende **sete semanas corridas (50 dias)** entre 13/10/2026 e 01/12/2026. A análise de cronograma demonstra viabilidade mediante três salvaguardas estruturais:

1. **Divisão clara de responsabilidades:** os quatro integrantes atuam em frentes complementares definidas na Seção 1, evitando ociosidade e sobreposição de esforços.
2. **Recorte disciplinado via MoSCoW:** o código do MVP restringe-se aos requisitos *Must* (~60%), enquanto os itens *Should* e *Could* ficam formalmente especificados sem comprometer a entrega funcional mínima.
3. **Margem de contingência no planejamento:** o cronograma detalhado da Seção 6 aplicará a **Regra de Sommerville (+50% sobre a duração otimista: 30% para imprevistos e 20% para aspectos não previstos)**, absorvendo oscilações da rotina acadêmica e garantindo margem de revisão entre 24/11/2026 e 01/12/2026.

Conclui-se que o projeto é **viável dentro do prazo estabelecido**.

---

### 3.3.5 Síntese Comparativa da Viabilidade

| Dimensão Avaliada | Principais Fatores Analisados | Risco Residual | Parecer |
| :--- | :--- | :--- | :--- |
| **Comunitária e Operacional** | Dor real comprovável em João Pessoa, 5 públicos atendidos e baixa barreira para comércios locais. | Baixo | Viável |
| **Técnica** | Aplicação web responsiva em React sem banco de dados remoto no MVP e arquitetura preparada para evolução. | Baixo | Viável |
| **Econômica e de Recursos** | Orçamento de R$ 0,00 com ferramentas gratuitas e equipamentos próprios da equipe. | Muito Baixo | Viável |
| **Prazo (até 01/12/2026)** | 7 semanas organizadas em 5 marcos verificáveis, priorização MoSCoW e contingência pela Regra de Sommerville. | Médio (controlado) | Viável |

---

### 3.3.6 Recomendação Formal de Prosseguimento

Com base na análise comunitária, operacional, técnica, econômica e temporal conduzida nesta seção, **recomenda-se formalmente o prosseguimento imediato do projeto Family Place**, condicionando sua execução ao cumprimento estrito do escopo negativo declarado, à priorização do núcleo *Must* no MVP em React sem banco de dados e ao monitoramento semanal dos marcos M1 a M5 até a entrega final em **01/12/2026**.

**Aprovação Interna:**  
- **Kewy Huang** — Responsável pelo Estudo de Viabilidade  
- **Pierre Simon** — Gerente de Projeto e Coordenação  
- **Data:** 20/10/2026
