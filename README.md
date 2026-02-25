# Portfolio.github.io

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript&style=flat-square)](https://www.typescriptlang.org/) 
[![Issues](https://img.shields.io/github/issues/H-Saimon/Portfolio.github.io?style=flat-square)](https://github.com/H-Saimon/Portfolio.github.io/issues) 
[![License](https://img.shields.io/github/license/H-Saimon/Portfolio.github.io?style=flat-square)](./LICENSE) 
[![Último Commit](https://img.shields.io/github/last-commit/H-Saimon/Portfolio.github.io?style=flat-square)](https://github.com/H-Saimon/Portfolio.github.io/commits/main) 
[![Status](https://img.shields.io/badge/status-estável-brightgreen?style=flat-square)](#)

---

# Portfólio - Hítalon Saimon

## 1. Descrição

Este repositório contém o código-fonte de um portfólio profissional moderno desenvolvido para apresentar a trajetória, experiências, habilidades e projetos técnicos de Hítalon Saimon Santos Silva. Construído com foco em engenharia de software e desenvolvimento full-stack, o portfólio combina tecnologias de ponta para garantir alta performance, responsividade e boa experiência do usuário.

O objetivo principal é servir como uma vitrine digital para profissionais de tecnologia que desejam expor seus conhecimentos e trabalhos, facilitando o contato com recrutadores ou parceiros. O projeto resolve o problema de apresentar informações técnicas e pessoais de forma concisa e atrativa, trazendo navegação fluida e design minimalista.

Diferenciais técnicos:
- Arquitetura moderna com React 19 e TypeScript para segurança e escalabilidade
- Uso do Tailwind CSS 4 para estilização ágil e responsiva
- Roteamento leve via Wouter
- Uso do Vite como builder para otimização do desenvolvimento e build final
- Back-end Node.js com TypeScript para suporte via API integrada
- Estrutura modular com separação explícita entre client, server e código compartilhado

---

## 2. Funcionalidades

- Seção "Hero" com apresentação inicial e chamada para ação interativa
- Página "Sobre Mim" detalhando trajetória profissional e skills
- Listagem e destaque das hard skills com ícones e descrições
- Galeria de projetos técnicos com detalhes, tecnologias empregadas e links para repositórios/exemplos
- Múltiplos canais de contato: GitHub, LinkedIn e email diretamente acessíveis
- Navegação suave animada entre as seções da página
- Back-end básico para servir a aplicação e fornecer APIs necessárias
- Gerenciamento das dependências e scripts via pnpm, garantindo builds consistentes
- Patch aplicado ao Wouter para customizações específicas da versão utilizada

---

## 3. Tecnologias Utilizadas

### Linguagens
- TypeScript (5.6.3)
- JavaScript (ESNext)
- HTML5 e CSS3 (via Tailwind CSS)

### Frameworks e Bibliotecas
- React 19.2.1
- Tailwind CSS 4.1.14
- Vite 7.1.7 (build tool)
- Wouter 3.3.5 (roteamento leve)

### Ferramentas e Ambientes
- Node.js (runtime do servidor)
- pnpm (gerenciador de pacotes)
- TypeScript Compiler (tsc)
- Patch management com arquivos localizados em /patches

### Modelos de Projeto / Arquitetura
- Separação clara entre frontend (client/) e backend (server/)
- Código compartilhado em shared/ para reutilização de constantes e configurações
- Configurações específicas do projeto em tsconfig.json, tsconfig.node.json e vite.config.ts
- Estrutura modular para facilitar manutenção e escalabilidade

---

## 4. Estrutura do Projeto

```
Portfolio.github.io/
├── CONTRIBUTING.md                # Diretrizes para contribuição ao projeto
├── DIRECTORY_STRUCTURE.md        # Documentação detalhada da árvore de diretórios
├── LICENSE                      # Licença do projeto (provavelmente MIT ou similar)
├── README.md                    # Documentação principal do repositório (este arquivo)
├── SETUP.md                     # Guia de configuração e instalação do ambiente
├── client/                      # Código fonte do frontend (React + Tailwind)
│   ├── index.html               # Arquivo HTML principal para SPA
│   ├── public/                  # Recursos públicos estáticos
│   └── src/                     # Código-fonte React (componentes, assets, estilos)
├── components.json              # Configuração/descrição dos componentes usados (provavelmente)
├── package.json                 # Configurações do projeto e dependências
├── patches/                     # Correções customizadas como patch para Wouter 3.7.1
│   └── wouter@3.7.1.patch
├── pnpm-lock.yaml               # Lockfile do pnpm para dependências fixas
├── server/                     # Código fonte do backend (Node.js + TypeScript)
│   └── index.ts                # Entry point do servidor
├── shared/                     # Código compartilhado entre frontend e backend
│   └── const.ts                # Constantes utilizadas em múltiplas partes do projeto
├── tsconfig.json               # Configuração principal do TypeScript para o projeto
├── tsconfig.node.json          # Config TR específico para código de Node.js
└── vite.config.ts              # Configurações do bundler Vite
```

---

## 5. Instalação e Execução

Para executar localmente o projeto, siga os passos abaixo:

```bash
# 1. Clonar o repositório
git clone https://github.com/H-Saimon/Portfolio.github.io.git

# 2. Entrar na pasta do projeto
cd Portfolio.github.io

# 3. Instalar as dependências com pnpm (deve ter pnpm instalado)
pnpm install

# 4. Rodar o ambiente de desenvolvimento (executa frontend e backend)
pnpm run dev

# Ou, para rodar somente o cliente frontend:
pnpm run dev:client

# Para build de produção:
pnpm run build

# Para iniciar o servidor de produção (após build)
pnpm run start
```

Recomenda-se utilizar Node.js na versão compatível com o projeto (recomenda-se >=16.x).

---

## 6. Endpoints da API

O backend possui um servidor Node.js básico cuja única entrada principal é o arquivo `server/index.ts`.

| Método | Endpoint         | Descrição                                     |
|--------|------------------|-----------------------------------------------|
| GET    | /api/status      | Retorna o status do servidor (healthcheck)    |
| GET    | /api/projects    | Retorna lista dos projetos exibidos no portfólio |
| POST   | /api/contact     | Recebe dados de contato para envio ou armazenamento |

> **Nota:** Confirme os endpoints exatos no código fonte do `server/index.ts`, pois podem existir rotas adicionais ou específicas.

---

## 7. Testes

Atualmente, não há evidência de implementação de testes unitários ou de integração no repositório.

Recomenda-se incluir futuramente:
- Testes unitários para componentes React usando Jest e React Testing Library
- Testes de integração para APIs do backend com ferramentas como Supertest
- Análise de cobertura e pipelines de CI para garantir estabilidade

---

## 8. Segurança

- Autenticação e autorização explícitas não parecem implementadas, dado o caráter do projeto como portfólio público.
- Validações básicas devem estar presentes para o formulário de contato (em backend e frontend).
- Utilização do TypeScript reduz erros relacionados a tipagem.
- Aplicação serve conteúdo estático e dados não críticos, reduzindo riscos maiores.

Recomenda-se para futuras versões:
- Implementar reCAPTCHA para evitar spam no formulário de contato.
- Adicionar políticas de CORS e validação rigorosa no backend.
- Monitorar e atualizar dependências para corrigir vulnerabilidades.

---

## 9. Deploy

Não há scripts explícitos para deploy no repositório, porém o processo pode ser realizado conforme os métodos abaixo:

- **Hospedagem Frontend:** via GitHub Pages, Vercel, Netlify ou similar, utilizando o build gerado pelo Vite
- **Servidor Backend:** deploy em servidores Node.js compatíveis (Heroku, AWS, DigitalOcean)
- **Docker:** Embora não há Dockerfile, um container Node.js pode ser criado para ambiente isolado e replicável
- **Pipeline CI/CD:** Sugere-se configurar workflows GitHub Actions para build, testes e deploy automatizado

---

## 10. Melhorias Futuras

- Implementar testes automatizados para frontend e backend, incluindo cobertura de código
- Criar autenticação básica para área administrativa de edição do portfólio
- Adicionar suporte a internacionalização (i18n) para apresentar o portfólio em múltiplos idiomas
- Integrar sistema de CMS headless para facilitar atualização dos projetos e conteúdos sem alteração de código
- Otimizar SEO e acessibilidade para melhor ranqueamento e usabilidade
- Incorporar análise de métricas de uso (Google Analytics, etc) para dados de visitantes
- Automatizar deploy via pipelines CI/CD com ambientes staging e produção
- Migrar para Next.js ou framework SSR para melhor performance e SEO

---

## 👨‍💻 Autor

Desenvolvido por **Hítalon Saimon Santos Silva**  
GitHub: https://github.com/H-Saimon