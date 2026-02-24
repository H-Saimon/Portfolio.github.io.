# Portfolio.github.io ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![Issues](https://img.shields.io/github/issues/HitalonSaimon/Portfolio.github.io) ![License](https://img.shields.io/github/license/HitalonSaimon/Portfolio.github.io) ![Language](https://img.shields.io/github/languages/top/HitalonSaimon/Portfolio.github.io) ![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

## Descrição do Projeto

**Portfolio.github.io** é um portfólio profissional moderno desenvolvido para o engenheiro de software Hítalon Saimon. Construído com tecnologias atuais como React 19, Tailwind CSS 4 e TypeScript, o projeto tem como objetivo principal apresentar a trajetória, habilidades técnicas, projetos desenvolvidos e contatos profissionais do autor de maneira interativa, elegante e de fácil navegação.

Este portfólio funciona como uma vitrine digital pensada para recrutadores, clientes e colegas de profissão que buscam conhecer o perfil técnico e experiência do desenvolvedor. Seu diferencial está na combinação de um design responsivo, navegação suave e performance otimizada, utilizando arquiteturas modernas baseadas em componentes reativos e rotas leves.

O projeto é estruturado em um monorepo que une um frontend SPA React com roteamento através da biblioteca Wouter e um backend minimalista em Node.js com TypeScript para servir conteúdos e endpoints necessários.

---

## Funcionalidades

- **Seção Hero**: Apresentação inicial do profissional com chamada para ação clara.
- **Sobre Mim**: Detalha a trajetória, formação e experiência em engenharia de software.
- **Hard Skills**: Lista de tecnologias e ferramentas dominadas.
- **Projetos em Destaque**: Demonstração visual e descritiva de projetos técnicos selecionados.
- **Contato**: Integração com múltiplos canais (GitHub, LinkedIn, email) para fácil comunicação.
- **Navegação Suave**: Scroll animado e otimizado entre as seções do portfólio para melhor experiência do usuário.
- **Arquitetura Modular**: Separação clara entre cliente (frontend React), servidor (backend Node.js/TypeScript) e código compartilhado, facilitando manutenção e escalabilidade.
- **Patch de Dependência**: Correção personalizada aplicada ao pacote `wouter` para garantir compatibilidade e estabilidade.
- **Configuração moderna de Build**: Utilização do Vite para desenvolvimento rápido e geração de build otimizada.
- **Tipagem Estática Completa**: Uso extensivo de TypeScript para maior segurança de código e manutenção facilitada.
- **Estilização Efetiva**: Uso do Tailwind CSS para criar um layout responsivo e customizável com métricas consistentes.

---

## Tecnologias Utilizadas

| Categoria         | Tecnologia / Ferramenta        | Versão utilizada    |
|-------------------|-------------------------------|---------------------|
| Linguagem         | TypeScript                    | 5.6.3               |
| Frontend          | React                        | 19.2.1              |
| Estilização       | Tailwind CSS                 | 4.1.14              |
| Build Tool        | Vite                         | 7.1.7               |
| Roteamento        | Wouter                       | 3.3.5 (patch custom)|
| Backend           | Node.js + TypeScript         | -                   |
| Gerenciador de Pacotes | pnpm                   | -                   |
| Patch de Dependência| wouter@3.7.1.patch           | -                   |

---

## Estrutura de Diretórios

```plaintext
Portfolio.github.io/
├── client/                  # Código-fonte do frontend em React
│   ├── index.html           # Arquivo HTML principal da aplicação React
│   ├── public/              # Recursos públicos estáticos (imagens, favicon, etc)
│   └── src/                 # Código-fonte React com componentes, estilos e lógica UI
├── server/                  # Backend Node.js em TypeScript para APIs e server-side
│   └── index.ts             # Ponto de entrada do servidor
├── shared/                  # Código e constantes compartilhadas entre frontend e backend
│   └── const.ts             # Constantes comuns para todo o projeto
├── patches/                 # Patches customizados para dependências node_modules
│   └── wouter@3.7.1.patch  # Correção aplicada à biblioteca Wouter versão 3.7.1
├── package.json             # Configurações e dependências do projeto
├── pnpm-lock.yaml           # Lockfile para controle de versões do pnpm
├── tsconfig.json            # Configuração principal do TypeScript para o projeto
├── tsconfig.node.json       # Configuração TypeScript específica para o backend Node.js
├── vite.config.ts           # Configuração do Vite para build e dev server
├── LICENSE                  # Arquivo de licença do projeto
├── CONTRIBUTING.md          # Guia de contribuição para desenvolvedores
├── SETUP.md                 # Guia para instalação e configuração do ambiente local
├── DIRECTORY_STRUCTURE.md   # Detalhamento da estrutura do projeto
└── README.md                # Documentação principal do projeto (este arquivo)
```

---

## Instalação e Execução

### Pré-requisitos

- Node.js (preferencialmente versões LTS, >=18.x)
- pnpm (gerenciador de pacotes) instalado globalmente
- Navegador moderno para visualização do frontend (Chrome, Firefox, Edge, Safari)

### Passos para rodar localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/HitalonSaimon/Portfolio.github.io.git
   cd Portfolio.github.io
   ```

2. Instale as dependências com pnpm:

   ```bash
   pnpm install
   ```

3. Aplique o patch na dependência Wouter (se não for aplicado automaticamente via patch-package):

   ```bash
   # Instruções específicas estão no README relacionado ao patch ou script no package.json
   ```

4. Execute o servidor backend:

   ```bash
   pnpm run dev:server
   ```

5. Em outro terminal, execute o frontend:

   ```bash
   pnpm run dev:client
   ```

6. Acesse a aplicação em [http://localhost:3000](http://localhost:3000) ou conforme configurado no `vite.config.ts`.

---

## Endpoints da API

| Método | Endpoint         | Descrição                              |
|--------|------------------|--------------------------------------|
| GET    | `/api/projects`  | Retorna a lista de projetos em destaque |
| GET    | `/api/contact`   | Retorna informações para contato     |

> **Observação:** Esta estrutura de endpoints é prevista conforme organização do backend `server/index.ts`. Podem existir outras rotas internas conforme evolução do código.

---

## Testes

- Atualmente, o projeto não possui testes automatizados implementados.
- Futuras versões devem incluir testes unitários e de integração, utilizando frameworks como Jest e React Testing Library para frontend e backend.
- Estratégia sugerida: cobertura modular para frontend (componentes React) e backend (endpoints e funções de negócio).

---

## Deploy

- O deploy pode ser realizado em qualquer plataforma de hospedagem estática para o frontend (Netlify, Vercel, GitHub Pages).
- O backend Node.js pode ser hospedado em serviços de nuvem com suporte a Node.js (AWS Elastic Beanstalk, Heroku, DigitalOcean).
- Recomenda-se containerização via Docker para facilitar deploys consistentes e escaláveis.
- Pipeline CI/CD pode ser configurado utilizando GitHub Actions ou outra plataforma para automação de build e deploy.

---

## Segurança

- Atualmente, a aplicação não possui autenticação ou autorização, pois é um portfólio público.
- Validações básicas são implementadas para evitar entradas inválidas em formulários de contato.
- O patch aplicado ao `wouter` garante estabilidade e evita vulnerabilidades relacionadas à navegação.
- Em versões futuras, recomenda-se:
  - Adicionar token anti-CSRF para endpoints /formulários.
  - Escapar e sanitizar inputs para mitigar ataques XSS.
  - Utilizar HTTPS no ambiente de produção.

---

## Melhorias Futuras

- Implementar testes automatizados para frontend e backend.
- Adicionar suporte a múltiplos idiomas (i18n).
- Incluir feedback visual e validação ampliada para formulário de contato.
- Migrar backend para arquitetura serverless para redução de custo e escala.
- Implementar analytics para medir engajamento do portfólio.
- Atualizar e centralizar configuração de tema escuro/claro.
- Automatizar deploy com CI/CD integrado.
- Expandir seções do portfólio com blogs técnicos e certificações.

---

## Contribuição

Contribuições são muito bem-vindas! Para contribuir, siga os passos abaixo:

1. Leia o arquivo [`CONTRIBUTING.md`](./CONTRIBUTING.md) para entender as diretrizes do projeto.
2. Faça um fork do repositório.
3. Crie uma branch com a sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
4. Realize suas alterações com commits claros e concisos.
5. Execute testes manuais e verifique a build localmente.
6. Faça push da branch para seu fork e abra um pull request neste repositório.
7. Aguarde revisão e feedback da equipe.

Por favor, mantenha o padrão do código, documentação atualizada e siga as boas práticas de desenvolvimento.

---

## Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

> Desenvolvido por **Hítalon Saimon** | Engenharia de Software & Desenvolvimento Full-Stack  
> [GitHub](https://github.com/HitalonSaimon) | [LinkedIn](https://www.linkedin.com/in/hitalonsaimon)