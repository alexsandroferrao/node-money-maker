# node-money-maker

### SonarCloud: 
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=alexsandroferrao_node-money-maker&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=alexsandroferrao_node-money-maker)

[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=alexsandroferrao_node-money-maker&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=alexsandroferrao_node-money-maker)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=alexsandroferrao_node-money-maker&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=alexsandroferrao_node-money-maker)


### CodeClimate: 
[![Maintainability](https://api.codeclimate.com/v1/badges/34eea36a92baee3db80e/maintainability)](https://codeclimate.com/github/alexsandroferrao/node-money-maker/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/34eea36a92baee3db80e/test_coverage)](https://codeclimate.com/github/alexsandroferrao/node-money-maker/test_coverage)


Projeto para treinar typescript 

## Backend publicado no heroku:

https://money-maker-node.herokuapp.com/moneys

## Documentação base:

get /moneys = retorna todos moneys cadastrados;
get /moneys/{id} = retorna o money com o id especifico;

post /moneys passando o objeto no corpo = cria um money;

delete /moneys/{id} = deleta o money com id especifico.

Backlog:
- Colocar mais testes;
- Inspecionar com sonar; 
- Criar um banco, um swagger;