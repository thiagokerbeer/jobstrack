# JobTrack

O JobTrack é um sistema full stack para gerenciamento de candidaturas a vagas, criado para organizar a busca pela primeira oportunidade na área de tecnologia de forma clara, prática e profissional.

## Sobre o projeto

O objetivo do JobTrack é centralizar o processo de candidatura em um único lugar. Em vez de depender de anotações soltas ou planilhas desorganizadas, o sistema permite registrar vagas, acompanhar etapas do processo seletivo, editar informações, excluir registros e visualizar tudo em um painel mais limpo e funcional.

O projeto foi desenvolvido como parte de uma construção de portfólio com foco em vaga júnior, demonstrando evolução em frontend, backend, integração entre camadas e persistência de dados com banco real.

## Estrutura do projeto

```bash
jobtrack/
  frontend/
  backend/



  Funcionalidades
Landing page institucional para apresentação do produto
Dashboard interno para gerenciamento de candidaturas
Cadastro de novas candidaturas
Listagem de vagas cadastradas
Busca por empresa ou vaga
Filtro por status
Edição de candidatura
Exclusão de candidatura
Métricas automáticas no painel
Integração entre frontend e backend
Persistência em banco de dados PostgreSQL
CRUD implementado
Create: cadastrar nova candidatura
Read: listar candidaturas no dashboard
Update: editar candidatura existente
Delete: excluir candidatura
Status disponíveis
Salva
Candidatura enviada
Entrevista
Teste técnico
Proposta
Recusada
Tecnologias utilizadas
Frontend
React
Vite
CSS
Backend
Node.js
Express
Banco de dados
PostgreSQL
Prisma ORM
Arquitetura do projeto

O projeto foi dividido em duas partes principais:

1. Landing page

A landing page apresenta o JobTrack com uma proposta mais institucional, simulando a apresentação de um produto real. A ideia foi construir uma interface com aparência mais profissional e mais alinhada a plataformas modernas da área de recrutamento.

2. Dashboard

O dashboard é a parte funcional do sistema, onde as candidaturas são gerenciadas de fato. É nele que estão concentradas as operações principais do CRUD, filtros, busca, edição, exclusão e exibição das métricas.

Banco de dados

O backend utiliza PostgreSQL com Prisma para modelagem e acesso aos dados.

A entidade principal do sistema é:
Job
company
role
status
location
salary
date
link
notes
createdAt
updatedAt

Como rodar o projeto localmente
1. Clone o repositório
git clone LINK_DO_REPOSITORIO
2. Entre na pasta do projeto
cd jobtrack
3. Rode o frontend
cd frontend
npm install
npm run dev
4. Rode o backend

Em outro terminal:

cd backend
npm install
npm run dev
Variáveis de ambiente

Dentro da pasta backend, crie um arquivo .env com as variáveis do banco:

DATABASE_URL="sua_url_pooler"
DIRECT_URL="sua_url_direct"
Prisma

Para gerar o client e aplicar migrations:

npx prisma generate
npx prisma migrate dev --name init
Objetivo técnico do projeto

Este projeto foi construído para demonstrar capacidade de desenvolver uma aplicação full stack com:

interface estruturada
componentização no frontend
integração com API
backend com rotas organizadas
persistência em banco de dados
operações completas de CRUD
organização de projeto voltada para portfólio
Status do projeto

Projeto concluído para fins de portfólio e desenvolvimento local.



Neste momento, o foco principal do projeto é demonstrar:
estrutura
código
lógica
organização
integração full stack
Melhorias futuras
autenticação de usuários
área privada por usuário
priorização de vagas
favoritos
paginação
melhoria de responsividade
deploy futuro



Autor

Thiago Kerber