# Seção 8 — Organização do MVP (Produto Mínimo Viável)

**Projeto:** Family Place  
**Responsável pela Seção:** Renan Mendes  
**Marco Associado:** M4 (17/11/2026)  
**Data de Consolidação:** 17/11/2026  

---

## 8.1 Visão e Recorte Técnico do MVP

Como entrega opcional complementar da disciplina de Engenharia de Software (bônus avaliativo de até 0,5 ponto), o **MVP do Family Place** consiste em uma **aplicação web responsiva em React** construída sem dependência de banco de dados remoto ou servidor pago, voltada integralmente à validação comunitária dos fluxos essenciais (*Must*) em **João Pessoa (PB)**.

- **Pilha tecnológica adotada:** React + Vite + HTML5 semântico + CSS3 responsivo (360 px a 1440 px) com contraste WCAG 2.1 Nível AA (`NF002`, `NF003`, `NF004`).
- **Camada de dados local:** catálogo estático estruturado em arquivo JSON contendo **ao menos 15 estabelecimentos representativos de bairros de João Pessoa (PB)** (como Manaíra, Tambaú, Cabo Branco, Bessa e Bancários), somado ao armazenamento local do navegador (`localStorage`) para gravar avaliações submetidas e listas de favoritos criadas durante o uso (`NF006`).
- **Escopo negativo preservado:** o MVP não realiza pagamentos online, checkout financeiro, delivery próprio, autenticação em servidor remoto nem avaliação individual por item do cardápio (`RF016`, `RD003`).
- **Código do MVP:** https://github.com/pierressc/family_pet_eng_soft/tree/main/mvp
- **Demonstração Online (GitHub Pages):** https://pierressc.github.io/family_pet_eng_soft/

---

## 8.2 Requisitos e Histórias Integrantes do MVP (100% dos Itens *Must*)

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
| **RF008** | `H08` | `EP03` | 8 | `WF-03` | Formulário de avaliação aceitando notas de 1 a 5 ou `"Não se aplica"` nos quatro pilares (ao menos 1 nota numérica), nome/apelido público obrigatório, comentário até 500 caracteres, aviso LGPD (`RD001`), recálculo imediato (`RD002`) e gravação em `localStorage`. |
| **RF009** | `H09` | `EP04` | 3 | `WF-04` | Criação, renomeação e exclusão (com confirmação) de listas de favoritos nomeadas por critério no navegador (`NF006`). |
| **RF010** | `H10` | `EP04` | 5 | `WF-04` | Inclusão e remoção de qualquer estabelecimento em uma ou mais listas simultaneamente e consulta agrupada com link para detalhes. |

*Observação:* os requisitos *Should* (`RF011`–`RF013` / `H11`–`H13`) e *Could* (`RF014`–`RF015` / `H14`–`H15`) permanecem documentados no backlog para evolução futura pós-disciplina.

---

## 8.3 Instruções de Execução Local

Pré-requisitos de ambiente: **Node.js (versão LTS >= 18)** e **npm** instalados localmente.

```bash
# 1. Clonar o repositório e acessar a pasta do MVP
git clone https://github.com/pierressc/family_pet_eng_soft.git
cd family_pet_eng_soft/mvp

# 2. Instalar as dependências do projeto React
npm install

# 3. Iniciar o servidor local de desenvolvimento
npm run dev
```

Após o início do servidor, acessar a URL local exibida no terminal (por padrão `http://localhost:5173`) em navegador atualizado (Chrome, Firefox, Edge ou Safari) para operar todas as funcionalidades *Must* sem necessidade de configuração de banco de dados.

---

## 8.4 Roteiro Resumido de Demonstração das Quatro Telas Essenciais (`WF-01` a `WF-04`)

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
   - Abrir o formulário de avaliação, tentar submeter sem preencher os pilares ou sem nome/apelido público para demonstrar a validação obrigatória;
   - Selecionar notas de 1 a 5 estrelas (ou `"Não se aplica"` nos critérios não vivenciados, mantendo ao menos 1 nota numérica), informar nome ou apelido público, inserir comentário breve respeitando o aviso LGPD e enviar;
   - Evidenciar o recálculo imediato das médias (`RD002`), o surgimento do comentário no topo e sua preservação após recarregamento da página (`NF006`).
4. **Etapa 4 — Favoritos Organizados por Critério (`WF-04` | `RF009`, `RF010`):**
   - Criar uma nova lista temática (ex.: *"Melhores para ir com meu Avô"* ou *"Locais com Baixo Ruído"*), adicionar dois estabelecimentos (incluindo um local em duas listas simultâneas) e renomear a lista;
   - Recarregar o navegador para comprovar a manutenção dos dados em `localStorage` e navegar de volta à página de detalhes de um estabelecimento salvo.
