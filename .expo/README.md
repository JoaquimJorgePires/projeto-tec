--Nexus Tech Inovação - Portal Acadêmico Mobile--

Aplicação móvel desenvolvida em **React Native** com **Expo** no âmbito acadêmico, simulando o portal institucional de uma unidade de ensino (padrão Fatec). O projeto foca em uma arquitetura limpa, componentes reutilizáveis e validações robustas de usuário.

--Tecnologias Utilizadas--
* **React Native** (Functional Components e Hooks)
* **Expo** & **React Navigation** (Native Stack Navigator)
* **JavaScript** (ES6+)
* **StyleSheet** (Estilização modularizada e tema centralizado)

--Credenciais de Acesso (Login)--
Usuário: aluno
Senha: 123456

---

--Estrutura do Projeto--

```text
meu-projeto/
├── src/
│   ├── assets/         # Recursos visuais (ex: aluna.png)
│   ├── components/     # Componentes reutilizáveis (CustomButton, CustomInput)
│   ├── pages/          # Telas da aplicação (Login, Home, Sobre, Contato)
│   └── styles/         # Paleta de cores global e estilos compartilhados
├── App.js              # Ponto de entrada e configuração de navegação
├── package.json
└── README.md

---

--Desafio Técnico Resolvido: Compatibilidade de Alertas (Web vs Mobile)--

O Problema
Durante os testes de validação de formulário na tela de Login (verificação de campos vazios ou credenciais incorretas), o uso da função nativa Alert.alert do React Native apresentava incompatibilidades e falhas de renderização ao ser executado em ambiente web (através do Expo Web no navegador). Como o ambiente de desenvolvimento e correção podia alternar entre emuladores web e dispositivos móveis (Expo Go), os pop-ups tradicionais bloqueavam a experiência do utilizador ou não disparavam visualmente.

A Solução
Para garantir robustez, fiabilidade e uma experiência consistente em qualquer plataforma (seja navegador web, iOS ou Android) sem comprometer os requisitos acadêmicos, optou-se por implementar um sistema de feedback visual direto no ecrã (Inline Alert Feedback) acoplado ao estado da aplicação (useState).

Abordagem: Em vez de depender de caixas de diálogo nativas que se comportam de forma distinta consoante o motor de execução, a aplicação valida os campos em tempo de execução e atualiza um estado reativo (errorMessage).

Implementação: Se os campos estiverem vazios ou as credenciais (aluno / 123456) estiverem incorretas, um bloco de aviso com identidade visual de alerta é renderizado dinamicamente logo acima do botão de submissão:

            const handleLogin = () => {
            setErrorMessage('');

            if (!username.trim() || !password.trim()) {
                setErrorMessage('Por favor, preencha todos os campos.');
                return;
            }

            if (username === 'aluno' && password === '123456') {
                navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
            } else {
                setErrorMessage('Usuário ou senha incorretos.');
            }
            };

Resultado: A aplicação atende integralmente ao requisito de notificar o usuário sobre inconsistências de preenchimento, garantindo execução perfeita no Expo Go (celular) e no navegador web sem dependência de APIs específicas de sistema operacional.

---

--Como Executar o Projeto--

Clonar o repositório:
git clone [https://github.com/JoaquimJorgePires/projeto-tec](https://github.com/JoaquimJorgePires/projeto-tec)
cd meu-projeto

Instalar as dependências:
npm install

Iniciar o servidor de desenvolvimento:
npx expo start

Modos de Visualização:
Pressione w no terminal para abrir e testar no navegador web;
Escaneie o QR Code no terminal utilizando o aplicativo Expo Go no celular.

