# char-creator

Projeto simples em TypeScript, feito para aplicar os conceitos fundamentais da linguagem em um sistema de "criação de personagens". 

Ao ser executado, o programa abre um painel de menu, que fornece opções como:

[0]. Cadastrar
[1]. Listar
[2]. Remover
[3]. Sair

- Escolhendo a opção de "Cadastrar", o programa faz perguntas ao usuário como o nome do personagem, papel (Hero ou Villain, tipados), nome e estilo do poder (Pshyical, Magical ou Mental, também tipados) e a respectiva descrição do poder.
- O personagem é salvo em uma lista respectiva à sua designação, que pode ser mostrada ao escolher a segunda opção "Listar". As listas de "Heroes" e "Villains" são armazenadas em um arquivo JSON, permitindo que sejam revisitadas mesmo após o usuário sair e voltar para o menu.
- Ao escolher a opção "Remover", o usuário é perguntado sobre o nome do personagem que deverá ser removido, e então a remoção ocorrerá com sucesso se o for um nome válido.
- Enfim, a última opção "Sair" força o encerramento do programa.

Conceitos aplicados: Type annotations, Type aliases, Classes, Async/Await, Union types, Type guards, Import/Export, Records, Loop e controle de fluxo, Tratamento de Erro, Persistência de dados.
