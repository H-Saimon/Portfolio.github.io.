# Portfólio - Hítalon Saimon

Portfólio profissional moderno desenvolvido com **React 19**, **Tailwind CSS 4** e **TypeScript**, apresentando minha experiência em Engenharia de Software, projetos técnicos e habilidades em desenvolvimento full-stack.

## 🎯 Sobre o Projeto

Este portfólio foi desenvolvido como uma vitrine profissional completa, apresentando:

- **Seção Hero**: Apresentação inicial com chamada para ação
- **Sobre Mim**: Trajetória profissional e experiência
- **Hard Skills**: Tecnologias e ferramentas que domino
- **Projetos em Destaque**: Seleção de projetos técnicos com descrições detalhadas
- **Contato**: Múltiplos canais de comunicação (GitHub, LinkedIn, Email)
- **Navegação Suave**: Scroll animado entre seções

## 🛠️ Stack Tecnológico

### Frontend
- **React 19.2.1** - Framework UI moderno
- **TypeScript 5.6.3** - Tipagem estática
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Vite 7.1.7** - Build tool rápido
- **Wouter 3.3.5** - Roteamento leve
- **Lucide React** - Ícones SVG

### UI Components
- **shadcn/ui** - Componentes React acessíveis
- **Radix UI** - Primitivos de UI sem estilo
- **Framer Motion** - Animações fluidas
- **Sonner** - Toasts e notificações

### Desenvolvimento
- **Prettier** - Formatação de código
- **ESBuild** - Bundling otimizado
- **pnpm** - Gerenciador de pacotes rápido

## 📋 Estrutura do Projeto

```
hitalon-portfolio/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   └── ui/         # Componentes shadcn/ui
│   │   ├── pages/          # Páginas principais
│   │   │   └── Home.tsx    # Página principal do portfólio
│   │   ├── contexts/       # Contextos React
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilitários
│   │   ├── App.tsx         # Componente raiz
│   │   ├── main.tsx        # Ponto de entrada
│   │   └── index.css       # Estilos globais e temas
│   └── index.html          # HTML principal
├── server/                  # Placeholder para compatibilidade
├── shared/                  # Placeholder para compatibilidade
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.js      # Configuração Tailwind
├── vite.config.ts          # Configuração Vite
└── README.md              # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- pnpm 10+

### Instalação

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/hitalon-portfolio.git
cd hitalon-portfolio

# Instalar dependências
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Acesso em http://localhost:3000
```

### Build para Produção

```bash
# Gerar build otimizado
pnpm build

# Visualizar build localmente
pnpm preview
```

### Verificação de Tipos

```bash
# Verificar erros TypeScript
pnpm check

# Formatar código
pnpm format
```

## 📱 Seções do Portfólio

### Hero Section
- Apresentação principal com nome e profissão
- Descrição resumida da trajetória
- Botões de ação (Ver Projetos, GitHub, LinkedIn, Currículo)
- Animação de scroll suave

### Sobre Mim
- Descrição detalhada da experiência profissional
- Formação acadêmica (Engenharia de Software - UniAmérica)
- Experiência profissional (Tel Telemática, SENAI)
- Diferenciais profissionais (Empatia com usuário, Comunicação técnica)

### Hard Skills
Tecnologias organizadas por categoria:

**Linguagens**: Java, Python, C#, PHP, JavaScript

**Web**: HTML5, CSS3, React, Angular, Tailwind CSS

**Dados**: MySQL, PostgreSQL, SQL Server, Power BI

**Ferramentas & Infra**: Git, GitHub, Arduino, ESP32, Nuvem, Protocolos IoT

### Projetos em Destaque

1. **Sistema de Gerenciamento IoT**
   - Plataforma completa para monitoramento de dispositivos IoT
   - Tech: Arduino, ESP32, Python, MySQL, REST API

2. **Dashboard de Análise de Dados**
   - Dashboard interativo com integração Power BI
   - Tech: React, Power BI, PostgreSQL, Tailwind CSS

3. **API RESTful de Gestão de Usuários**
   - Backend robusto com Spring Boot
   - Tech: Java, Spring Boot, PostgreSQL, JWT, Docker

4. **Aplicação Web de E-commerce**
   - Plataforma full-stack com Angular e C#
   - Tech: Angular, C#, .NET, SQL Server, Stripe

### Contato
Múltiplos canais de comunicação:
- GitHub - Projetos e contribuições open source
- LinkedIn - Trajetória profissional
- Email - Contato direto

## 🎨 Design

### Paleta de Cores
- **Fundo**: Gradiente Slate (950 → 900 → 950)
- **Destaque**: Cyan (#06B6D4)
- **Texto Principal**: White (#FFFFFF)
- **Texto Secundário**: Slate 300-400
- **Bordas**: Slate 700-800

### Tipografia
- **Títulos**: Font-weight 700 (bold)
- **Corpo**: Font-weight 400-500
- **Monospace**: Utilizado em labels técnicos

### Componentes Visuais
- Cards com bordas sutis e hover effects
- Ícones Lucide React
- Animações suaves com Framer Motion
- Gradientes e overlays para profundidade
- Efeitos de blur backdrop para navegação

## ✨ Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Tema dark moderno
- ✅ Animações fluidas
- ✅ Componentes acessíveis
- ✅ Performance otimizada
- ✅ SEO-friendly
- ✅ TypeScript para segurança de tipos

## 📦 Dependências Principais

```json
{
  "react": "^19.2.1",
  "react-dom": "^19.2.1",
  "tailwindcss": "^4.1.14",
  "lucide-react": "^0.453.0",
  "framer-motion": "^12.23.22",
  "wouter": "^3.3.5",
  "sonner": "^2.0.7"
}
```

## 🔧 Configuração

### Tailwind CSS
Configuração customizada em `tailwind.config.js`:
- Temas dark/light
- Cores personalizadas
- Espaçamento customizado
- Animações adicionais

### TypeScript
Configuração em `tsconfig.json`:
- Target: ES2020
- Module: ESNext
- Strict mode ativado
- Paths aliases configurados

## 📈 Performance

- Build otimizado com Vite
- Lazy loading de componentes
- CSS purging automático
- Minificação de assets
- Caching estratégico

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões e feedback são bem-vindos!

## 📄 Licença

MIT License - Veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

**Hítalon Saimon**
- GitHub: [@H-Saimon](https://github.com/H-Saimon)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

---

**Desenvolvido exclusivamente por Hítalon Saimon** com ❤️ usando React & Tailwind CSS

© 2024 Hítalon Saimon. Todos os direitos reservados.
