# Contribuindo para o Portfólio

Obrigado por se interessar em contribuir! Este documento fornece diretrizes e instruções para contribuir com o projeto.

## 🤝 Como Contribuir

### Reportando Bugs

Se você encontrou um bug, por favor crie uma issue descrevendo:

1. **Descrição clara do bug**
2. **Passos para reproduzir**
3. **Comportamento esperado**
4. **Comportamento atual**
5. **Screenshots** (se aplicável)
6. **Ambiente** (navegador, SO, versão do Node.js)

### Sugerindo Melhorias

Sugestões de melhorias são bem-vindas! Por favor:

1. Use um título claro e descritivo
2. Forneça uma descrição detalhada da sugestão
3. Explique por que essa melhoria seria útil
4. Liste exemplos de como essa funcionalidade funcionaria

### Pull Requests

1. **Fork** o repositório
2. **Clone** seu fork localmente
3. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
4. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. **Push** para a branch (`git push origin feature/AmazingFeature`)
6. **Abra um Pull Request**

## 📋 Diretrizes de Código

### Estilo de Código

- Use **TypeScript** para type safety
- Siga o padrão **Prettier** (execute `pnpm format`)
- Use **ESLint** para verificação de código
- Componentes React devem ser **functional components**
- Use **hooks** ao invés de class components

### Componentes React

```typescript
// ✅ Bom
import { FC } from 'react';

interface MyComponentProps {
  title: string;
  onClick: () => void;
}

const MyComponent: FC<MyComponentProps> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default MyComponent;
```

### Commits

- Use mensagens de commit claras e descritivas
- Comece com um verbo no imperativo: "Add", "Fix", "Update", "Remove"
- Mantenha commits pequenos e focados

Exemplos:
- ✅ `Add smooth scroll navigation`
- ✅ `Fix mobile responsive layout`
- ✅ `Update project descriptions`
- ❌ `changes`
- ❌ `fixed stuff`

## 🧪 Antes de Submeter

1. **Teste localmente**
   ```bash
   pnpm dev
   ```

2. **Verifique tipos TypeScript**
   ```bash
   pnpm check
   ```

3. **Formate o código**
   ```bash
   pnpm format
   ```

4. **Build para produção**
   ```bash
   pnpm build
   ```

## 📝 Estrutura de Commits

```
<tipo>: <assunto>

<corpo>

<rodapé>
```

### Tipos de Commit

- `feat`: Uma nova feature
- `fix`: Correção de bug
- `docs`: Mudanças em documentação
- `style`: Formatação, missing semi-colons, etc
- `refactor`: Refatoração de código
- `perf`: Melhorias de performance
- `test`: Adição ou atualização de testes
- `chore`: Atualização de dependências, build scripts, etc

### Exemplos

```
feat: add dark mode toggle

- Implement theme context provider
- Add theme persistence to localStorage
- Update all components for theme support

Closes #123
```

## 🎨 Diretrizes de Design

- Mantenha consistência com o design existente
- Use a paleta de cores definida
- Respeite o sistema de tipografia
- Garanta responsividade em todos os breakpoints
- Teste em múltiplos navegadores

## ♿ Acessibilidade

- Use semântica HTML apropriada
- Garanta contraste de cores adequado
- Implemente keyboard navigation
- Use ARIA labels quando necessário
- Teste com leitores de tela

## 📱 Responsividade

Teste em breakpoints:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🚀 Processo de Review

1. Seu PR será revisado por um mantenedor
2. Mudanças podem ser solicitadas
3. Uma vez aprovado, será feito merge
4. Sua contribuição será creditada

## ❓ Dúvidas?

Sinta-se livre para:
- Abrir uma issue com a tag `question`
- Entrar em contato através do email
- Verificar issues existentes

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a MIT License.

---

**Projeto desenvolvido exclusivamente por Hítalon Saimon**

Obrigado por contribuir! 🎉
