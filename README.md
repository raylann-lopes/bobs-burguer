# 🍔 Bob's Burguer

Bem-vindo ao Bob's Burguer! 🎉 Este é um projeto de aplicação web desenvolvido com Next.js, criado para oferecer aos usuários uma experiência gastronômica virtual única. Aqui, você pode explorar um menu diversificado, personalizar seus pedidos e interagir com uma interface moderna e responsiva, garantindo uma navegação intuitiva e agradável. 🍟🍔

## 🌟 Demonstração ao Vivo

Confira a aplicação em ação: [Bobs Burguer](https://bobs-burguer-delta.vercel.app/bobs-burguer)

## 📋 Índice

- [Recursos](#-recursos)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Desafios Enfrentados](#-desafios-enfrentados)
- [Instalação](#-instalação)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🚀 Recursos


- **Exploração do Menu**: Navegue por uma variedade de pratos e bebidas disponíveis. 🍔
- **Sistema de Pedidos**: Personalize e simule a realização de pedidos de forma prática. 🛒
- **Design Responsivo**: Interface adaptada para diversos dispositivos, garantindo uma experiência consistente em desktops, tablets e smartphones. 📱💻

## 🛠️ Tecnologias Utilizadas


- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos. ⚛️
- **Prisma**: ORM para gerenciamento e interação com o banco de dados. 🗄️
- **Tailwind CSS**: Framework CSS para estilização rápida e consistente. 🎨
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código. 📝
- **Vercel**: Plataforma de hospedagem e implementação contínua. ☁️

## 📂 Estrutura do Projeto

A estrutura principal do projeto é a seguinte:


``` bash

bobs-burguer/
├── .vscode/            # Configurações do Visual Studio Code
├── prisma/             # Configurações e esquemas do Prisma
├── public/             # Arquivos públicos (imagens, ícones, etc.)
├── src/                # Código-fonte da aplicação
│   ├── app/            # Componentes e páginas principais
│   ├── components/     # Componentes reutilizáveis
│   ├── styles/         # Arquivos de estilização
│   └── utils/          # Funções utilitárias
├── .gitignore          # Arquivos e pastas ignorados pelo Git
├── package.json        # Dependências e scripts do projeto
├── README.md           # Documentação do projeto
└── ...                 # Outros arquivos de configuração
```


## 🧩 Desafios Enfrentados

Durante o desenvolvimento do Bob's Burguer, enfrentei diversos desafios que contribuíram significativamente para meu crescimento como desenvolvedor:

### 1. Integração de Múltiplas Tecnologias
**Desafio**: Como iniciante, integrar Next.js, Prisma, Tailwind CSS e TypeScript em um único projeto foi complexo. Cada tecnologia possui sua própria curva de aprendizado, e combiná-las de forma coesa exigiu estudo e prática intensivos.​

**Solução**: Dediquei tempo para estudar a documentação oficial de cada ferramenta e segui tutoriais específicos que abordavam a integração entre elas. A prática constante e a implementação de pequenos projetos auxiliares foram fundamentais para consolidar o conhecimento.​

### 2. Sistema de Roteamento do Next.js
**Desafio**: Compreender e implementar o sistema de roteamento do Next.js, especialmente ao lidar com rotas dinâmicas e aninhadas, foi inicialmente desafiador. A criação de páginas que dependem de parâmetros dinâmicos exigiu uma compreensão aprofundada da estrutura de pastas e nomenclatura de arquivos.​

**Solução**: Estudei a fundo a documentação do Next.js sobre rotas dinâmicas e implementei exemplos práticos, criando arquivos com colchetes (`[param]`) para definir segmentos dinâmicos e utilizando funções como `getStaticPaths` e `getStaticProps` para gerar páginas estáticas com base em dados dinâmicos.​

### 3. Integração com Prisma
**Desafio**: Configurar o Prisma para interagir com o banco de dados e compreender sua sintaxe específica para consultas foi desafiador. Além disso, a gestão de migrações e a manutenção do esquema do banco de dados requereram atenção especial.​

**Solução**: Segui a documentação oficial do Prisma para configurar o ambiente e realizar migrações. A prática constante na escrita de consultas e a utilização do Prisma Studio para visualizar os dados ajudaram a superar as dificuldades iniciais.​

### 4. Estilização com Tailwind CSS
**Desafio**: Adaptar-se à metodologia de classes utilitárias do Tailwind CSS, diferente das abordagens tradicionais de CSS, foi um desafio. A proliferação de classes no HTML poderia tornar o código menos legível.​

**Solução**: Estudei os princípios do Tailwind CSS e pratiquei sua aplicação em componentes isolados antes de integrá-los ao projeto principal. Utilizei técnicas como extração de componentes e aplicação de diretivas do Tailwind para manter o código organizado e legível.​

### 5. Tipagem com TypeScript
**Desafio**: Implementar TypeScript em um projeto React trouxe desafios relacionados à definição de tipos, especialmente ao lidar com props de componentes e dados retornados de APIs.​

**Solução**: Aprofundei-me nos conceitos de tipagem do TypeScript, utilizando interfaces e tipos para definir a estrutura dos dados. Ferramentas como o TypeScript Playground foram úteis para testar e validar as definições de tipos antes de aplicá-las no projeto.​

### 6. Lógica de Negócio Complexa
**Desafio**: Implementar funcionalidades como personalização de pedidos, cálculo de preços e gerenciamento de estado da aplicação exigiu a criação de uma lógica de negócio robusta e eficiente.​

**Solução**: Dividi as funcionalidades em tarefas menores e implementei cada uma de forma modular. Utilizei o Context API do React para gerenciar o estado global e assegurei a consistência dos dados através de validações e testes abrangentes.​

### 7. Integração com Stripe para Pagamento
**Desafio**: Integrar uma solução de pagamento como o **Stripe** foi um dos maiores desafios. A configuração da API do Stripe, especialmente para realizar pagamentos de forma segura e eficiente, exigiu um entendimento completo do processo de checkout e da gestão de tokens de pagamento.

**Solução**: Estudei a documentação do Stripe e implementei a integração utilizando a biblioteca `stripe` do Node.js. Criei uma rota no servidor para gerar um *checkout session* com o Stripe, permitindo ao usuário finalizar o pagamento no ambiente do Stripe. Também adicionei validações de segurança para garantir que os dados do pagamento fossem processados corretamente. A solução foi testada com cartões de teste fornecidos pelo Stripe e verifiquei o sucesso da transação através do painel de administração do Stripe. Além disso, utilizei o método de "Webhooks" do Stripe para gerenciar notificações de sucesso ou falha nos pagamentos.

A integração com o Stripe foi concluída com sucesso, proporcionando uma forma de pagamento segura e confiável para os usuários realizarem seus pedidos de forma prática.


Esses desafios proporcionaram um aprendizado significativo e contribuíram para o aprimoramento das minhas habilidades no desenvolvimento web.

## 🚀 Instalação

1. Clone o repositório
```bash
git clone https://github.com/raylann-lopes/bobs-burguer.git
```


2. Navegue até o diretório do projeto:
```bash
cd bobs-burguer
```


3.Instale as dependências:
```bash
npm install
```

4.Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação estará disponível em http://localhost:3000.

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie sua Branch
```bash
git checkout -b feature/nova-funcionalidade
```
3. Commit suas mudanças
```bash
git commit -m 'feat: adiciona nova funcionalidade'
```
4. Push para a Branch
```bash
git push origin feature/nova-funcionalidade
```
5. Abra um Pull Request


## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
