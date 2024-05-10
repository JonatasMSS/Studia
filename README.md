# StudIA
Um assistente para todos os estudantes 🧑‍🎓🤓

## Problemática ⁉️
Uma coisa que sempre me incomodou em meus estudos, foi o fato de eu por vezes perder tempo na organização e ter a falta de professores para me auxiliar em momentos cruciais!
Quando vejo uma videoaula, as vezes, os professores não estão disponíveis para dar o auxílio. As vezes, pedem para comentar em um vídeo, mas demoram para responder, assim, atrasando meu estudo. Outras vezes, preciso me organizar e, por vezes, perder tempo organizando uma plano de estudos ao longo da semana,mes ou ano.
Mas...e se eu tivesse um assistente em estudos? Não só em uma área, como inglês, mas em todas as áreas de ensino? E com muito mais, usando I.A ⭐⭐
Foi ai que pensei na **StudIA**

## Tecnologias utilizadas ⚙️
Para o projeto, optei por utilizar

- NextJS
- TailwindCSS para estilização
- Gemini API 
- Javascript como linguagem principal

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

Em cada página, está localizada




