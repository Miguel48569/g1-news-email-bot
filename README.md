# G1 News Notifier

Projeto Node.js que faz web scraping das notícias do G1 (Economia) e envia por email automaticamente.

## Como usar

### 1. Instalar dependências
```bash
npm install
```

### 2. Criar arquivo .env
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha
```

### 3. Configurar destinatário
Edite o arquivo na pasta `email` com o email que vai receber as notícias.

### 4. Executar
```bash
node index.js
```

## Tecnologias

- Node.js
- Cheerio (web scraping)
- Nodemailer (envio de email)

## Configuração de email

**Gmail:**
- Use senha de app em vez da senha normal
- EMAIL_HOST: smtp.gmail.com
- EMAIL_PORT: 587

**Outlook:**
- EMAIL_HOST: smtp-mail.outlook.com
- EMAIL_PORT: 587

## Problemas comuns

**Erro de autenticação Gmail:**
- Ative autenticação em 2 etapas
- Crie uma senha de app

**Erro de conexão:**
- Verifique as credenciais no .env
- Confirme a porta do seu provedor
