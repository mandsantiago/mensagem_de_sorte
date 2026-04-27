# Mensagem de Sorte - Oráculo Florescer

Um site responsivo e moderno de oráculo espiritual com 30 cartas de sabedoria e desenvolvimento pessoal. A cada visita, uma carta aleatória surge para iluminar o caminho do visitante.

## 🌸 Características

- **30 Cartas Únicas**: Cada carta com mensagem inspiradora e pergunta reflexiva
- **Sorteio Aleatório**: Nova carta a cada acesso ao site
- **Compartilhamento Social**: Integração com WhatsApp e Instagram Stories
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Paleta de Cores Elegante**: Amarelo solar, rosa-coral, azul-noite e bege quente
- **Tipografia Premium**: Playfair Display (títulos) + DM Sans (corpo)
- **Espaço para Banner Afiliado**: Pronto para monetização

## 🛠️ Stack Tecnológico

- **React 19** com Vite
- **Tailwind CSS 4** para estilização
- **TypeScript** para type safety
- **Wouter** para roteamento client-side
- **Sonner** para notificações

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

## 🚀 Como Instalar e Rodar Localmente

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/mensagem-de-sorte.git
cd mensagem-de-sorte
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Rode o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🏗️ Estrutura do Projeto

```
client/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   ├── data/           # Dados das 30 cartas
│   ├── pages/          # Páginas da aplicação
│   ├── App.tsx         # Componente raiz
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globais e temas
server/                 # Servidor Express (placeholder)
shared/                 # Tipos compartilhados
```

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `client/src/index.css`:
```css
--primary: #E05C6E;        /* Rosa-coral */
--accent: #F5C842;         /* Amarelo solar */
--background: #F5E6D3;     /* Bege quente */
--foreground: #1C1C2E;     /* Azul-noite */
```

### Cartas
Adicione ou edite cartas em `client/src/data/cards.ts`

### Fontes
As fontes estão importadas via Google Fonts em `client/src/index.css`

## 📦 Build para Produção

```bash
pnpm build
# ou
npm run build
```

Os arquivos compilados estarão em `dist/`

## 🌐 Deploy no Vercel

1. **Faça push para GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Conecte ao Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione seu repositório GitHub
   - Vercel detectará automaticamente que é um projeto Vite
   - Clique em "Deploy"

3. **Configure seu domínio**
   - No dashboard do Vercel, vá para Settings → Domains
   - Adicione seu domínio `mensagemdesorte.com.br`
   - Siga as instruções para apontar os nameservers

## 💡 Próximas Melhorias

- [ ] Sistema de "Cartas Favoritas" com localStorage
- [ ] Página "Sobre" com história do oráculo
- [ ] Formulário de contato para feedback
- [ ] Analytics integrado
- [ ] Dark mode opcional

## 📄 Licença

MIT

## 👩‍💻 Desenvolvido com ❤️

Criado com Manus AI para trazer inspiração e sabedoria ao seu dia.

---

**Dúvidas ou sugestões?** Entre em contato através do site!
