# Character Generator

Projeto simples desenvolvido em TypeScript, feito para aplicar os conceitos fundamentais da linguagem em um sistema de criação de personagens. 

Ao ser executado, o programa abre um painel de menu, que fornece opções como:

[0]. Register
[1]. List
[2]. Remove
[3]. Exit

- Escolhendo a opção de "Register", o programa faz perguntas ao usuário como o nome do personagem, papel (Hero ou Villain, tipados), nome e estilo do poder (Pshyical, Magical ou Mental, também tipados) e a respectiva descrição do poder. As informações do personagem são automaticamente salvas em um arquivo JSON.
- O personagem é salvo em uma lista respectiva à sua designação, que pode ser mostrada ao escolher a segunda opção "List". As listas de "Heroes" e "Villains" são armazenadas em um arquivo JSON, permitindo que sejam revisitadas mesmo após o usuário sair e executar novamente o programa.
- Ao escolher a opção "Remove", o usuário é perguntado sobre o nome do personagem que deverá ser removido, e então a remoção ocorrerá com sucesso se for um nome válido.
- Enfim, a última opção "Exist" força o encerramento do programa.

Conceitos aplicados: Type annotations, Type aliases, Classes, Async/Await, Union types, Type guards, Import/Export, Records, Loop e controle de fluxo, Tratamento de Erro, Persistência de dados.
