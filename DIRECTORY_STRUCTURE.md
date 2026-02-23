# Estrutura de Diretórios

Documentação completa da estrutura de diretórios do projeto.

## Visão Geral

```
hitalon-portfolio/
├── client/                 # Frontend React
├── server/                 # Backend (placeholder)
├── shared/                 # Código compartilhado (placeholder)
├── .gitignore             # Arquivos ignorados pelo Git
├── LICENSE                # Licença MIT
├── README.md              # Documentação principal
├── SETUP.md               # Guia de setup
├── CONTRIBUTING.md        # Guia de contribuição
├── package.json           # Dependências e scripts
├── pnpm-lock.yaml         # Lock file do pnpm
├── tsconfig.json          # Configuração TypeScript
├── tailwind.config.js     # Configuração Tailwind CSS
├── vite.config.ts         # Configuração Vite
└── DIRECTORY_STRUCTURE.md # Este arquivo
```

## Diretório: client/

Frontend da aplicação React.

```
client/
├── public/                # Arquivos estáticos (copiados para raiz em produção)
│   ├── favicon.ico
│   ├── robots.txt
│   └── ...
├── src/
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── ui/           # Componentes shadcn/ui
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button-group.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── combobox.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── data-table.tsx
│   │   │   ├── date-picker.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   └── tooltip.tsx
│   │   ├── ErrorBoundary.tsx    # Componente de tratamento de erros
│   │   ├── ManusDialog.tsx      # Dialog customizado
│   │   └── Map.tsx              # Integração Google Maps
│   ├── pages/             # Componentes de página
│   │   ├── Home.tsx       # Página principal do portfólio
│   │   └── NotFound.tsx   # Página 404
│   ├── contexts/          # Contextos React
│   │   └── ThemeContext.tsx     # Contexto de tema (dark/light)
│   ├── hooks/             # Custom React hooks
│   │   └── (hooks customizados)
│   ├── lib/               # Funções utilitárias
│   │   └── (funções auxiliares)
│   ├── App.tsx            # Componente raiz com rotas
│   ├── main.tsx           # Ponto de entrada da aplicação
│   └── index.css          # Estilos globais e temas
└── index.html             # Template HTML principal
```

### Descrição dos Diretórios

#### `client/public/`
Arquivos estáticos que são copiados verbatim para a raiz do site em produção. Inclui:
- Favicon
- Robots.txt
- Manifest.json
- Imagens estáticas
- Arquivos de configuração

#### `client/src/components/`
Componentes React reutilizáveis:
- **ui/**: Componentes shadcn/ui - componentes de UI acessíveis e customizáveis
- **ErrorBoundary.tsx**: Captura erros em componentes filhos
- **ManusDialog.tsx**: Dialog customizado para a plataforma Manus
- **Map.tsx**: Integração com Google Maps

#### `client/src/pages/`
Componentes de página de nível superior:
- **Home.tsx**: Página principal do portfólio com todas as seções
- **NotFound.tsx**: Página 404 para rotas não encontradas

#### `client/src/contexts/`
Contextos React para estado global:
- **ThemeContext.tsx**: Gerencia tema dark/light da aplicação

#### `client/src/hooks/`
Custom React hooks para lógica reutilizável:
- Hooks customizados para funcionalidades específicas

#### `client/src/lib/`
Funções utilitárias e helpers:
- Funções de formatação
- Helpers de validação
- Utilitários gerais

#### `client/src/App.tsx`
Componente raiz da aplicação:
- Define rotas com Wouter
- Configura ThemeProvider
- Configura TooltipProvider
- Renderiza Toaster do Sonner

#### `client/src/main.tsx`
Ponto de entrada da aplicação React:
- Renderiza App em #root
- Importa estilos globais

#### `client/src/index.css`
Estilos globais e temas:
- Importações de Tailwind CSS
- Definição de variáveis CSS (cores, espaçamento, etc)
- Temas dark e light
- Estilos base customizados
- Componentes customizados

#### `client/index.html`
Template HTML principal:
- Meta tags
- Links de fontes Google
- Div raiz (#root) para React
- Scripts de analytics

## Diretório: server/

Backend da aplicação (placeholder para compatibilidade).

```
server/
└── index.ts              # Servidor Express (placeholder)
```

## Diretório: shared/

Código compartilhado entre client e server (placeholder para compatibilidade).

```
shared/
└── const.ts              # Constantes compartilhadas
```

## Arquivos de Configuração

### `package.json`
Dependências do projeto e scripts npm/pnpm.

### `pnpm-lock.yaml`
Lock file do pnpm - garante versões consistentes das dependências.

### `tsconfig.json`
Configuração do TypeScript:
- Target: ES2020
- Module: ESNext
- Strict mode ativado
- Path aliases configurados

### `tailwind.config.js`
Configuração do Tailwind CSS:
- Tema customizado
- Extensões de cores
- Plugins

### `vite.config.ts`
Configuração do Vite:
- Plugins (React, JSX Location)
- Alias de paths
- Configuração de servidor
- Otimizações de build

## Arquivos de Documentação

### `README.md`
Documentação principal do projeto:
- Visão geral
- Stack tecnológico
- Como executar
- Seções do portfólio
- Design
- Funcionalidades

### `SETUP.md`
Guia de setup e desenvolvimento:
- Pré-requisitos
- Instalação
- Scripts disponíveis
- Customização
- Troubleshooting

### `CONTRIBUTING.md`
Guia de contribuição:
- Como reportar bugs
- Como sugerir melhorias
- Diretrizes de código
- Processo de commit
- Processo de review

### `LICENSE`
Licença MIT do projeto.

### `.gitignore`
Arquivos e diretórios ignorados pelo Git.

## Fluxo de Dados

```
index.html
    ↓
main.tsx (entry point)
    ↓
App.tsx (routes + providers)
    ↓
pages/Home.tsx (main page)
    ↓
components/ (reusable components)
    ├── ui/ (shadcn/ui components)
    ├── ErrorBoundary.tsx
    ├── ManusDialog.tsx
    └── Map.tsx
    ↓
contexts/ (global state)
    └── ThemeContext.tsx
    ↓
hooks/ (custom logic)
    ↓
lib/ (utilities)
    ↓
index.css (styles)
```

## Convenções de Nomenclatura

- **Componentes**: PascalCase (ex: `MyComponent.tsx`)
- **Hooks**: camelCase com prefixo `use` (ex: `useMyHook.ts`)
- **Utilitários**: camelCase (ex: `formatDate.ts`)
- **Tipos/Interfaces**: PascalCase (ex: `MyComponentProps`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MAX_ITEMS`)

## Boas Práticas

1. **Componentes**: Mantenha componentes pequenos e focados
2. **Imports**: Use path aliases (`@/`) para imports
3. **Estilos**: Use Tailwind CSS utilities ao invés de CSS customizado
4. **TypeScript**: Sempre use tipos explícitos
5. **Acessibilidade**: Implemente ARIA labels e keyboard navigation
6. **Performance**: Use lazy loading e code splitting quando apropriado

---

**Última atualização**: 2024
