## Functional Programing. 

# Concepts 
- side-effects 
- shared states
- avoinding mutating data
- function composition
- imparative programing vs declarative programing. 
  
## Programação funcional e o processo de contruir software, 
através de 
- composição pura de funções, 
- evitando compartilhar estado. 
- efeito colaterias.
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

## shared states

- estado de um objeto. 