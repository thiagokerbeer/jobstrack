# JobTrack

Sistema full stack para gerenciamento de candidaturas a vagas, desenvolvido para organizar a busca pela primeira oportunidade na área de tecnologia.

## Visão geral

O JobTrack foi criado para ajudar no controle de candidaturas de forma simples e visual. O sistema permite cadastrar vagas, acompanhar status do processo seletivo, editar informações, excluir registros e manter tudo centralizado em um painel.

Além da área interna, o projeto também possui uma landing page com foco institucional, apresentando o produto de forma mais profissional.

## Funcionalidades

- Cadastro de candidaturas
- Listagem de vagas cadastradas
- Busca por empresa ou vaga
- Filtro por status
- Edição de candidatura
- Exclusão de candidatura
- Dashboard com métricas automáticas
- Integração entre frontend e backend
- Persistência de dados com PostgreSQL

## Status disponíveis

- Salva
- Candidatura enviada
- Entrevista
- Teste técnico
- Proposta
- Recusada

## Tecnologias utilizadas

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express

### Banco de dados
- PostgreSQL
- Prisma ORM

## Estrutura do projeto

```bash
jobtrack/
  frontend/
  backend/

  Layout do sistema

O projeto possui duas partes principais:

1. Landing page

Página inicial com apresentação do sistema em estilo institucional, inspirada em plataformas profissionais da área de recrutamento.

2. Dashboard

Painel interno para gerenciamento real das candidaturas, com CRUD completo e integração com banco de dados.

CRUD implementado
Create: cadastrar nova candidatura
Read: listar candidaturas no dashboard
Update: editar candidatura existente
Delete: excluir candidatura
Como rodar o projeto localmente
1. Clonar o repositório
git clone LINK_DO_SEU_REPOSITORIO
2. Entrar na pasta do projeto
cd jobtrack
3. Rodar o frontend
cd frontend
npm install
npm run dev
4. Rodar o backend

Em outro terminal:

cd backend
npm install
npm run dev
Configuração do backend

Crie um arquivo .env dentro da pasta backend com suas variáveis de ambiente:

DATABASE_URL="sua_url_pooler"
DIRECT_URL="sua_url_direct"
Banco de dados e Prisma

Para gerar o client e aplicar a migration:

npx prisma generate
npx prisma migrate dev --name init
Objetivo do projeto

Este projeto foi desenvolvido como parte da construção de portfólio para vaga júnior, com foco em demonstrar capacidade de desenvolver uma aplicação full stack com:

interface moderna
integração entre frontend e backend
persistência real em banco de dados
organização visual e estrutural de produto
Melhorias futuras
autenticação de usuários
painel por usuário
favoritos e prioridades
deploy completo
responsividade mais refinada
notificações e acompanhamento de etapas
Autor

Thiago Kerber