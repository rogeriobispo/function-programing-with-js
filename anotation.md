## Functional Programing. 

# Concepts 
- side-effects 
- shared states
- avoinding mutating data
- function composition
- imparative programing vs declarative programing. 
  
## Programação funcional e o processo de contruir software, 
- através de 
- composição pura de funções, 
- evitando compartilhar estado. 
- evitando dados mutaveis
- evitando efeito colaterias.
- programação funcional é declarativa. 
  
## Programação funcional 
- evita efeitos colaterais. 
- evita mudanças. 
- evida compartilhar estado. 
- Utiliza funções puras. 
- utiliza compozição de funções. 
- utiliza codigo declarativo o invés codigo imperativo. 

## O que faz a função pura ? 
- a função depende da da entrada fornececida. não de mudanças de datas externa. 
- a função não causa efeito colateral não causa mudanças alem do seu scopo. 
- Com a mesma entrada sempre retornar a mesma siada. (se entrou laranja só pode sair suco de laranja nunca vitamina de abacate.)

##  causas de efeitos colaterais 
- changing a value globally (variavel, propriedade or estrutura de dados)
- mudando o valor original de um argumento da função. 
- lancando execeções 
- imprimindo na tela ou log. 
- iniciando um processo externo.
- invocando outras funções que tem efeitos colaterias. 

## Arity
- esta relacionado a quantitade de parametros que uma função tem. 

## Curring
- mecanimos de transformar uma funçao com muitos parametros em um unico.
- um medodo com 3 parametros e chamado com um parametro.
- este metodo retorna uma função ue aceita o segundo metodo.
- especializa funções 
- simplifica function composittion

## Compositions.
- é necessario que os metodos sejam de arity 1 ou seja tenham apenas um parametro.
  
## Imperative vs Declarative
- programaçao imperative utiliza informamos ao computador o que fazer. 
- temos diversar estrutura de controle loops desvio condicional. 

## Declrative Programing.
- expressa a logica do programa 
- sem identificar o fluxo. 
- 
  