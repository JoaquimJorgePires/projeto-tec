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




<img width="766" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 02" src="https://github.com/user-attachments/assets/8700363d-0386-4e3f-917b-12dad4b1c773" />
<img width="765" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 03" src="https://github.com/user-attachments/assets/d2b97455-cafc-4fa6-b10f-25bb16322b95" />
<img width="763" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 03 (1)" src="https://github.com/user-attachments/assets/0889cca9-7adb-4a8c-9505-b635c775175d" />
<img width="764" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 03 (2)" src="https://github.com/user-attachments/assets/25dde5f8-aa33-408d-96d2-35c931069149" />
<img width="765" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 03 (3)" src="https://github.com/user-attachments/assets/7103593b-a7ea-4a24-98d2-d0e931fdb9a4" />
<img width="768" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 03 (4)" src="https://github.com/user-attachments/assets/d916dfe8-022a-4d3d-adb5-9eae99db506a" />
<img width="764" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 04" src="https://github.com/user-attachments/assets/3f5ad00c-acc3-4920-9277-6fd8f62b2233" />
<img width="764" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 04 (1)" src="https://github.com/user-attachments/assets/114d3149-b626-4e1b-a537-1f4ebd167085" />
<img width="765" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 04 (2)" src="https://github.com/user-attachments/assets/bea7d29a-bafe-4f3f-a573-90d0b4d5025a" />
<img width="763" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 04 (3)" src="https://github.com/user-attachments/assets/479a9600-f4ac-4a36-b0f6-086259f6978f" />
<img width="763" height="1600" alt="WhatsApp Image 2026-11-11 at 14 10 04 (4)" src="https://github.com/user-attachments/assets/11dab161-88a2-4e2d-8199-3a6f25b4f759" />
