# Seção 4 — Elicitação de Requisitos e Protótipos de Baixa Fidelidade

**Projeto:** Family Place  
**Responsável pela Seção:** Kewy Huang  
**Marco Associado:** M2 (03/11/2026)  
**Data de Consolidação:** 03/11/2026  

---

## 4.1 Plano de Elicitação de Requisitos

A etapa de elicitação teve como objetivo levantar, junto à comunidade de **João Pessoa (PB)**, as necessidades reais, barreiras de acesso e expectativas operacionais dos dois perfis de usuário do *Family Place* (**Cliente** e **Estabelecimento**), garantindo alinhamento direto aos objetivos `OBJ1` a `OBJ4` definidos na Seção 3.

### 4.1.1 Stakeholders Envolvidos e Interessados

| Grupo de Stakeholders | Papel na Elicitação | Interesse Principal no Produto |
| :--- | :--- | :--- |
| **Famílias com crianças (João Pessoa)** | Respondentes do questionário e validadores de protótipo | Verificar previamente trocadores, espaços kids seguros e cadeirões. |
| **Tutores de animais de estimação (João Pessoa)** | Respondentes do questionário, entrevistado (`ENT-02`) e validadores | Confirmar portes aceitos, área coberta permitida e água para pets. |
| **Pessoas idosas e cuidadores (João Pessoa)** | Respondentes do questionário, entrevistada (`ENT-03`) e validadores | Garantir acessibilidade física, assentos adequados, baixo ruído e legibilidade da interface. |
| **Pessoas com Deficiência física ou intelectual — PCD (João Pessoa)** | Respondentes do questionário e acompanhante (`ENT-03`) | Validar critérios objetivos de rampas, banheiros adaptados, circulação e comunicação acessível. |
| **Pessoas neurodivergentes e familiares (João Pessoa)** | Respondentes do questionário e entrevistada (`ENT-01`) | Obter previsibilidade sensorial (nível de ruído, iluminação e área reservada). |
| **Gestores de estabelecimentos locais (João Pessoa)** | Entrevistado (`ENT-04`) | Divulgar infraestrutura inclusiva, reduzir dúvidas repetitivas e receber clientes via contato direto sem comissões. |
| **Equipe do Projeto (4 integrantes)** | Planejamento, aplicação, consolidação e tradução em requisitos | Transformar evidências comunitárias em protótipos e especificações rastreáveis. |

### 4.1.2 Justificativa da Escolha das Técnicas

Foram selecionadas **duas técnicas complementares** de elicitação, adequadas ao prazo de sete semanas, ao orçamento de R$ 0,00 e ao perfil heterogêneo dos usuários:

1. **Questionário Estruturado (`artefatos/elicitacao/questionario.md`):** escolhido por possibilitar alcance quantitativo em diferentes bairros de João Pessoa (Manaíra, Tambaú, Bancários, Bessa e Cabo Branco) em curto intervalo de tempo, mensurando a prioridade percebida das funcionalidades e a frequência das dores relatadas.
2. **Entrevista Semiestruturada (`artefatos/elicitacao/roteiro-entrevista.md`):** escolhida para aprofundamento qualitativo de situações sensíveis que respostas fechadas não capturam integralmente — como sobrecarga sensorial de crianças neurodivergentes, obstáculos práticos enfrentados por idosos cadeirantes, limitações de porte para cães e rotina operacional de um comércio local.

### 4.1.3 Cronograma e Responsáveis pelos Contatos

| Atividade | Período | Responsável Principal | Apoio |
| :--- | :--- | :--- | :--- |
| Elaboração do questionário e do roteiro de entrevista | 20/10/2026 a 21/10/2026 | Kewy Huang | Caio Augusto (revisão de redação) |
| Aplicação do questionário online em João Pessoa (n = 28) | 21/10/2026 a 28/10/2026 | Kewy Huang | Pierre Simon, Caio Augusto e Renan Mendes |
| Condução das 4 entrevistas individuais semiestruturadas | 26/10/2026 a 30/10/2026 | Kewy Huang | Pierre Simon (anotações estruturadas) |
| Consolidação dos resultados e mapeamento de requisitos | 30/10/2026 a 31/10/2026 | Kewy Huang | Caio Augusto |
| Elaboração e validação dos protótipos de baixa fidelidade | 31/10/2026 a 02/11/2026 | Kewy Huang | Renan Mendes e Pierre Simon |

---

## 4.2 Síntese dos Achados e Cuidados Éticos (LGPD)

Os instrumentos aplicados e os dados completos encontram-se registrados nos seguintes artefatos oficiais do repositório:
- Instrumento do questionário: `/artefatos/elicitacao/questionario.md` (14 perguntas fechadas e 2 abertas);
- Roteiro de entrevistas: `/artefatos/elicitacao/roteiro-entrevista.md` (Blocos A e B);
- Consolidação detalhada e origem dos requisitos: `/artefatos/elicitacao/resumo-resultados-elicitacao.md`.

### 4.2.1 Principais Evidências Obtidas

- **Amplitude comunitária:** o questionário obteve **28 respostas anônimas** de moradores de Manaíra (21,4%), Bancários (21,4%), Tambaú (17,9%), Bessa (17,9%), Cabo Branco (14,3%) e outros bairros de João Pessoa (7,1%), complementadas por **4 entrevistas individuais** (`ENT-01`: mãe de criança neurodivergente; `ENT-02`: tutor de cães; `ENT-03`: cuidadora de idoso cadeirante; `ENT-04`: proprietário de cafeteria local).
- **Sobreposição de necessidades:** **60,7%** dos respondentes acumulam dois ou mais perfis (por exemplo, família com criança e pet ou idoso e criança), e **92,9%** classificaram a busca com filtros combinados como essencial ou muito importante — originando diretamente `RU01` e `RF001` a `RF003`.
- **Demanda pela avaliação em 4 pilares:** **82,1%** já deixaram de visitar locais por falta de informações prévias confiáveis, e **92,9%** validaram a substituição da nota única pelas notas segmentadas nos quatro pilares (Estrutura Infantil, Acessibilidade e Conforto, Receptividade Pet, e Atendimento e Custo-Benefício) — originando `RU03`, `RF007`, `RF008` e `RD002`.
- **Validação dos favoritos categorizados:** **85,7%** apontaram utilidade frequente ou regular em salvar estabelecimentos em listas por critério (como *"Melhores para ir com meu Avô"* e *"Locais com Baixo Ruído"*) — originando `RU04`, `RF009` e `RF010`.
- **Confirmação do escopo negativo e da vitrine informativa:** **89,3%** dos respondentes e o gestor entrevistado (`ENT-04`) aprovaram a vitrine informativa com **"Favoritos da Casa"** e redirecionamento direto para WhatsApp ou site oficial sem pagamentos online, delivery próprio ou nota individual por item do cardápio — consolidando `RU02`, `RF004` a `RF006`, `RF016` (Won't) e `RD003`.
- **Módulos evolutivos (Should e Could):** o gestor (`ENT-04`) demandou painel próprio de atualização de perfil, tags e vitrine (`RU05`, `RF011`, `RF012`); **78,6%** mostraram interesse no Clube de Fidelidade (`RU06`, `RF013`); **67,9%** aprovaram a timeline curta (`RU07`, `RF014`); e **64,3%** indicaram utilidade para o assistente virtual de recomendação (`RU08`, `RF015`).
- **Exigências de acessibilidade e desempenho:** os relatos de `ENT-01`, `ENT-03` e das respostas abertas (`Q16`) fundamentaram diretamente o contraste mínimo WCAG 2.1 AA (`NF002`), responsividade (`NF003`), carregamento em até 3 segundos (`NF001`) e usabilidade em poucos passos (`NF005`).

### 4.2.2 Cuidados Éticos e Conformidade com a LGPD

Em estrita aderência à **Lei Geral de Proteção de Dados (Lei nº 13.709/2018)** e à regra de domínio `RD001`, a condução da elicitação seguiu quatro salvaguardas obrigatórias:

1. **Consentimento prévio informado:** todos os participantes foram informados previamente sobre a finalidade exclusivamente acadêmica e extensionista da coleta.
2. **Minimização de dados:** não foram solicitados nome civil completo, CPF, telefone, e-mail pessoal, endereço residencial exato ou laudos/diagnósticos nominais.
3. **Anonimização estrita:** respostas do questionário foram agregadas estatisticamente e os entrevistados foram identificados exclusivamente pelos códigos `ENT-01` a `ENT-04`.
4. **Proteção de dados sensíveis:** relatos relacionados a saúde, deficiência ou neurodivergência foram tratados apenas em nível funcional de necessidade de ambiente (ruído, iluminação, rampa, banheiro adaptado), sem vínculo a identidades civis.

---

## 4.3 Protótipos de Baixa Fidelidade (Wireframes)

A partir dos achados da elicitação e antes do congelamento da especificação formal de requisitos (Marco M3), foram elaborados os protótipos de baixa fidelidade das **quatro telas essenciais (*Must*)** no artefato autônomo `/artefatos/wireframes/wireframes.html`.

Adotou-se representação propositalmente em preto, branco e tons de cinza, com blocos estruturais simples e marcações de fluxo, a fim de concentrar o feedback dos participantes na organização das informações e nos passos de navegação, sem desviar a atenção para escolhas estéticas finais.

| Código | Tela Prototipada | Requisitos Relacionados | Elementos Principais Representados |
| :--- | :--- | :--- | :--- |
| **WF-01** | Tela Inicial de Busca com Filtros Combinados | `RU01`, `RF001`, `RF002`, `RF003`, `NF003`, `NF005` | Barra de busca textual em João Pessoa, botão de limpeza de filtros, 5 grupos de filtros combináveis (tipo, infantil, pet, idosos/PCD e sensorial/neurodivergentes), contador de resultados e cartões com médias nos 4 pilares. |
| **WF-02** | Tela de Detalhes do Estabelecimento | `RU02`, `RU03`, `RF004`, `RF005`, `RF006`, `RF007`, `RF016`, `RD002`, `RD003` | Identificação do local em João Pessoa, tags de infraestrutura agrupadas, painel de notas nos 4 pilares com barras comparativas, vitrine informativa com selo "Favoritos da Casa", links externos para WhatsApp/site oficial e comentários recentes. |
| **WF-03** | Tela/Modal de Avaliação Multicritério nos 4 Pilares | `RU03`, `RF008`, `NF005`, `NF006`, `RD001`, `RD002` | Quatro seletores obrigatórios de nota inteira de 1 a 5 (com descrição objetiva de cada pilar), identificação opcional de exibição, campo de comentário (até 500 caracteres) e aviso de privacidade LGPD. |
| **WF-04** | Tela de Favoritos Organizados por Critério | `RU04`, `RF009`, `RF010`, `NF006` | Formulário de criação de nova lista por critério, navegação entre listas personalizadas (*"Melhores para ir com meu Avô"*, *"Melhores para levar o Cachorro"*, *"Melhores Espaços Kids"*, *"Locais com Baixo Ruído"*), ações de renomear/excluir e cartões com acesso direto à tela de detalhes. |

---

## 4.4 Registro Resumido da Validação dos Protótipos

Entre **31/10/2026 e 02/11/2026**, os quatro wireframes (`WF-01` a `WF-04`) foram validados em sessões curtas de inspeção guiada com **4 representantes do público-alvo** (os perfis correspondentes às entrevistas `ENT-01` a `ENT-04`, em João Pessoa), com foco em clareza estrutural, aderência às necessidades levantadas e número de passos para concluir busca, avaliação e salvamento em favoritos.

| Tela Validada | Percepção dos Participantes | Ajustes Incorporados Antes da Especificação Final |
| :--- | :--- | :--- |
| **WF-01 (Busca)** | Aprovação unânime da combinação simultânea de filtros e da exibição das 4 notas diretamente nos cartões. | Inclusão explícita do contador de locais encontrados, do comando **"Limpar Filtros"** em destaque e da mensagem orientativa para o estado de zero resultados (`RF003`). |
| **WF-02 (Detalhes)** | Clareza na separação entre tags, vitrine informativa e links de WhatsApp/site; confirmação da ausência de pagamento interno. | Inclusão da legenda objetiva de `RD002` (exibição de `"Sem avaliações"` quando `N = 0`) e do aviso explícito de que a vitrine é meramente informativa (`RD003`). |
| **WF-03 (Avaliação)** | O agrupamento dos 4 pilares em uma única tela foi concluído sem dúvidas em menos de 1 minuto pelos avaliadores. | Acréscimo de uma linha explicativa sob cada pilar para orientar o avaliador sobre quais critérios considerar e inclusão do aviso de privacidade (`RD001`) acima do botão de envio. |
| **WF-04 (Favoritos)** | Forte aprovação da criação de listas por critério; participantes confirmaram que um local pode atender a mais de um critério. | Confirmação explícita do suporte à inclusão do mesmo estabelecimento em múltiplas listas simultaneamente (`RF010`) e definição de mensagem orientativa para lista vazia. |

A conclusão bem-sucedida da elicitação e da validação dos wireframes encerra o **Marco M2 (03/11/2026)** e fornece entrada formal verificada para a Especificação de Requisitos na Seção 5.
