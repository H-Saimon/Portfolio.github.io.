# Guia de Setup e Desenvolvimento

Instruções completas para configurar o ambiente de desenvolvimento do portfólio Hítalon Saimon.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 18.0.0 ou superior
- **pnpm** 10.0.0 ou superior (gerenciador de pacotes)
- **Git** 2.30.0 ou superior

### Verificar Versões Instaladas

```bash
node --version      # v18.0.0 ou superior
pnpm --version      # 10.0.0 ou superior
git --version       # 2.30.0 ou superior
```

## 🚀 Instalação Rápida

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/hitalon-portfolio.git
cd hitalon-portfolio
```

### 2. Instalar Dependências

```bash
pnpm install
```

Este comando irá:
- Instalar todas as dependências do projeto
- Criar a pasta `node_modules/`
- Gerar o arquivo `pnpm-lock.yaml`

### 3. Iniciar Servidor de Desenvolvimento

```bash
pnpm dev
```

O servidor estará disponível em: **http://localhost:3000**

## 📂 Estrutura do Projeto

```
hitalon-portfolio/
├── client/
│   ├── public/              # Arquivos estáticos (imagens, favicons, etc)
│   ├── src/
│   │   ├── components/      # Componentes React reutilizáveis
│   │   │   ├── ui/         # Componentes shadcn/ui
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ManusDialog.tsx
│   │   │   └── Map.tsx
│   │   ├── pages/          # Páginas da aplicação
│   │   │   ├── Home.tsx    # Página principal do portfólio
│   │   │   └── NotFound.tsx
│   │   ├── contexts/       # Contextos React
│   │   │   └── ThemeContext.tsx
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Funções utilitárias
│   │   ├── App.tsx         # Componente raiz com rotas
│   │   ├── main.tsx        # Ponto de entrada da aplicação
│   │   └── index.css       # Estilos globais e temas
│   └── index.html          # Template HTML principal
├── server/                  # Código do servidor (placeholder)
├── shared/                  # Código compartilhado (placeholder)
├── package.json            # Dependências e scripts
├── pnpm-lock.yaml          # Lock file do pnpm
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.js      # Configuração Tailwind CSS
├── vite.config.ts          # Configuração Vite
├── README.md               # Documentação principal
├── SETUP.md                # Este arquivo
├── CONTRIBUTING.md         # Guia de contribuição
└── LICENSE                 # Licença MIT
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia servidor de desenvolvimento com hot reload
pnpm dev

# Compila TypeScript sem emitir código
pnpm check

# Formata código com Prettier
pnpm format
```

### Produção

```bash
# Gera build otimizado para produção
pnpm build

# Visualiza o build localmente
pnpm preview

# Inicia servidor de produção
pnpm start
```

## 🎨 Customização

### Cores e Tema

Edite `client/src/index.css` para customizar:

```css
:root {
  --primary: oklch(0.623 0.214 259.815);
  --background: oklch(1 0 0);
  --foreground: oklch(0.235 0.015 65);
  /* ... outras variáveis */
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.85 0.005 65);
  /* ... outras variáveis */
}
```

### Tipografia

Edite `client/index.html` para adicionar fontes Google:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### Tailwind CSS

Customize `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // Suas cores customizadas
      },
      spacing: {
        // Seu espaçamento customizado
      },
    },
  },
}
```

## 📝 Adicionando Conteúdo

### Adicionar Nova Seção

1. Crie um novo componente em `client/src/components/`
2. Importe em `client/src/pages/Home.tsx`
3. Adicione referência e scroll navigation

Exemplo:

```typescript
// client/src/components/NewSection.tsx
import { FC } from 'react';

interface NewSectionProps {
  title: string;
}

const NewSection: FC<NewSectionProps> = ({ title }) => {
  return (
    <section className="py-20 px-4 border-t border-slate-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
    </section>
  );
};

export default NewSection;
```

### Adicionar Novo Projeto

Edite a array `projects` em `client/src/pages/Home.tsx`:

```typescript
const projects = [
  {
    title: "Seu Projeto",
    description: "Descrição do projeto",
    tags: ["Tag1", "Tag2", "Tag3"],
    github: "https://github.com/seu-usuario/seu-projeto",
    demo: "https://seu-projeto.com",
  },
  // ... outros projetos
];
```

### Atualizar Skills

Edite o objeto `skills` em `client/src/pages/Home.tsx`:

```typescript
const skills = {
  languages: ["Java", "Python", "C#", "PHP", "JavaScript"],
  web: ["HTML5", "CSS3", "React", "Angular", "Tailwind CSS"],
  data: ["MySQL", "PostgreSQL", "SQL Server", "Power BI"],
  tools: ["Git", "GitHub", "Arduino", "ESP32", "Nuvem", "Protocolos IoT"],
};
```

## 🧪 Testando Localmente

### Build de Produção

```bash
# Gerar build
pnpm build

# Servir localmente
pnpm preview
```

### Verificação de Tipos

```bash
# Verificar erros TypeScript
pnpm check
```

### Formatação

```bash
# Formatar todos os arquivos
pnpm format
```

## 🐛 Troubleshooting

### Porta 3000 já em uso

```bash
# Usar porta diferente
pnpm dev -- --port 3001
```

### Limpar cache

```bash
# Remover node_modules e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erro de dependências

```bash
# Atualizar dependências
pnpm update

# Ou instalar versão específica
pnpm add nome-pacote@versao
```

## 📦 Adicionando Dependências

### Instalar novo pacote

```bash
# Adicionar dependência
pnpm add nome-do-pacote

# Adicionar como dev dependency
pnpm add -D nome-do-pacote

# Instalar versão específica
pnpm add nome-do-pacote@1.2.3
```

### Remover pacote

```bash
pnpm remove nome-do-pacote
```

## 🚀 Deploy

### Preparar para Deploy

1. Gerar build otimizado:
   ```bash
   pnpm build
   ```

2. Testar build localmente:
   ```bash
   pnpm preview
   ```

3. Fazer commit e push:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

### Plataformas Recomendadas

- **Vercel** - Otimizado para Vite
- **Netlify** - Suporte completo a SPA
- **GitHub Pages** - Gratuito para repositórios públicos
- **Manus** - Hosting integrado com suporte a custom domains

## 📚 Recursos Úteis

- [React 19 Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contribuindo

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes de contribuição.

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja [LICENSE](./LICENSE) para detalhes.

## ❓ Dúvidas?

- Abra uma issue no GitHub
- Envie um email
- Conecte-se no LinkedIn

---

**Projeto desenvolvido exclusivamente por Hítalon Saimon**

**Última atualização**: 2024
