# StudIA
Um assistente para todos os estudantes 🧑‍🎓🤓

## Problemática e solução ⁉️
Uma coisa que sempre me incomodou em meus estudos, foi o fato de eu por vezes perder tempo na organização e ter a falta de professores para me auxiliar em momentos cruciais!
Quando vejo uma videoaula, as vezes, os professores não estão disponíveis para dar o auxílio. As vezes, pedem para comentar em um vídeo, mas demoram para responder, assim, atrasando meu estudo. Outras vezes, preciso me organizar e, por vezes, perder tempo organizando uma plano de estudos ao longo da semana,mes ou ano.
Mas...e se eu tivesse um assistente em estudos? Não só em uma área, como inglês, mas em todas as áreas de ensino? E com muito mais, usando I.A ⭐⭐
Foi ai que pensei na **StudIA**

**Imagine ter:**

- Um professor particular sempre à disposição para esclarecer suas dúvidas, seja qual for a matéria
- Um plano de estudos que se adapta às suas necessidades e ritmo, te ajudando a alcançar seus objetivos mais rápido
- Ferramentas inteligentes que te guiam no processo de aprendizado, tornando-o mais eficiente e prazeroso

**Chega de:**
- Perder tempo se organizando e buscando ajuda individualizada
- Frustrar-se com professores indisponíveis em videoaulas
- Atrasar seus estudos por respostas demoradas em comentários
- Investir horas na criação de planos de estudo que não funcionam

## Tecnologias utilizadas ⚙️
Para o projeto, optei por utilizar

- NextJS
- TailwindCSS para estilização
- Gemini API 
- Javascript como linguagem principal

## Como inicializar o projeto

**Configuração de varíaveis de ambiente**
- Crie um arquivo **.env**
- Dentro dela coloque a API_KEY exatamente com o nome abaixo

```bash
NEXT_PUBLIC_API_KEY = "SUA CHAVE"
```

**Inicialização**
```bash
  npm install
  npm run dev
```



## Funcionamento 💻🖥️


Para realiza-lo, primeiro tive que treinar o Gemini, usando o **Ai Studio**, para se adaptar a perguntas de contextos em cada área de ensino.
Por exemplo, para área de inglês, humanas e linguagens, utilizei a técnica de **Few-shot prompting** para poder ter um certo contexto junto com alguns exemplos para o modelo entender e dar respostas apropriadas.

### Few-shot prompting 
![image](https://github.com/JonatasMSS/Studia/assets/74430293/094b1a10-7700-4f60-8cb2-c8fd2b4826ff)

Além disso, utilizei o **Chain-of-Thought Prompting** para perguntas mais diretas e objetivas, como perguntas de biologia, física e química.

### Chain-of-Thought Prompting
![image](https://github.com/JonatasMSS/Studia/assets/74430293/74a4105d-91b9-4c37-aae4-7a6fe12431a6)

### Coleta dos histories
Após preparar o Gemini para dar as respostas adequadas, coletei o *history* que será utilizado em cada chat de assistência.
![image](https://github.com/JonatasMSS/Studia/assets/74430293/2d328d1c-65f8-4d98-9d6e-41feebc53dae)


### Código 
Cada chat está localizado na pasta **src/app/chat**. Dentro dessa pasta, está as respectívas páginas para cada assistência
![image](https://github.com/JonatasMSS/Studia/assets/74430293/1d14fc85-26c4-4527-8603-093993f6e3d3)

Em cada página, está localizada a configuração do chat junto com a instância **chat** para envio de mensagem

![image](https://github.com/JonatasMSS/Studia/assets/74430293/4672590c-b136-4700-a3db-60c9f93ae06f)

Acima, está a página de biologia como exemplo.

## Telas 💻

- Seleção de ajuda
![image](https://github.com/JonatasMSS/Studia/assets/74430293/133589dd-4a88-429c-a38f-b5b2c9ea179b)

- Começo de uma conversa
![image](https://github.com/JonatasMSS/Studia/assets/74430293/45d7dbd4-14e5-4299-bda1-2e5e59940e3d)


## O que falta melhorar ⁉️

Ainda preciso colocar animações e envio de mensagens dinâmicas com animações fluidas. Além disso, o chat precisa mais de treinamento, pois poderá retornar algo indevido. Mesmo assim, é um bom começo que está sujeito a melhorias

# Gostou do projeto? Me dá uma estrelinha e me segue nas minhas redes!

🔗Linkedin: https://www.linkedin.com/in/jonatasmss/
🔗Instagram: https://www.instagram.com/dev.manojon/
 




