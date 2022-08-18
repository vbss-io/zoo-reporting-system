# Zoo Reporting System - Javascript

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=vitorbss12_Zoo-Reporting-System-with-JavaScript&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=vitorbss12_Zoo-Reporting-System-with-JavaScript)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=vitorbss12_Zoo-Reporting-System-with-JavaScript&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=vitorbss12_Zoo-Reporting-System-with-JavaScript)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=vitorbss12_Zoo-Reporting-System-with-JavaScript&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=vitorbss12_Zoo-Reporting-System-with-JavaScript)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=vitorbss12_Zoo-Reporting-System-with-JavaScript&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=vitorbss12_Zoo-Reporting-System-with-JavaScript)

Zoo Reporting System é uma aplicação JavaScript que tem como objetivo gerar relatórios de animais de um zoológico. Um banco de dados é simulado no arquivo `data/zoo_data.js`, que é utilizado para execução das funções na pasta `src/`. O arquivo `src/index.js` é o arquivo principal da aplicação, onde são importadas e detalhadas as funções para execução.

## Conteúdo

- [Zoo Reporting System - Javascript](#zoo-reporting-system---javascript)
  - [Conteúdo](#conteúdo)
- [**Funções**](#funções)
    - [**getSpeciesByIds**](#getspeciesbyids)
    - [**getAnimalsOlderThan**](#getanimalsolderthan)
    - [**getEmployeesByName**](#getemployeesbyname)
    - [**getRelatedEmployees**](#getrelatedemployees)
    - [**countAnimals**](#countanimals)
    - [**calculateEntry**](#calculateentry)
    - [**getAnimalsMap**](#getanimalsmap)
    - [**getSchedule**](#getschedule)
    - [**getOldestFromFirstSpecies**](#getoldestfromfirstspecies)
    - [**getEmployeesCoverage**](#getemployeescoverage)
- [**Ferramentas**](#ferramentas)
    - [**Linter**](#linter)
    - [**Node**](#node)
- [**Instruções**](#instruções)
    - [**Instalação**](#instalação)
    - [**Execução**](#execução)
- [**Observações**](#observações)

# **Funções**

Todas as funções são resumidamente descritas no arquivo `src/index.js`. Caso queira mais detalhes sobre cada função, consulte a sessão de cada função a seguir.

### **getSpeciesByIds**

Busca animais pelo seu ID. Retorna um array de animais referente aos IDs passados como parâmetro.

 - Caso não encontre nenhum animal, retorna um array vazio.
 - Se receber apenas um ID, retorna um array com apenas a espécie referente.
 - Pode mais de um IDs como parâmetro, retorna um array comas espécies referentes.

```javascript
import getSpeciesByIds from './src/getSpeciesByIds.js';
getSpeciesByIds(lionId, tigersId);
```

### **getAnimalsOlderThan**

A partir do nome de uma espécie e uma idade mínima (em anos), retorna um valor booleano (true ou false) indicando se existe algum animal com idade inferior a idade mínima.

````javascript
import getAnimalsOlderThan from './src/getAnimalsOlderThan.js';
getAnimalsOlderThan('otters', 7);
````

### **getEmployeesByName**

Busca funcionários pelo primeiro ou pelo último nome. 

  - Caso não encontre nenhum funcionário, retorna um objeto vazio.

````javascript
import getEmployeeByName from './src/getEmployeeByName.js';
getEmployeeByName('Emery');
````

### **getRelatedEmployees**

Essa função é dividida em duas outras funções:
  - isManager: verifica se o funcionário é gerente ou não.
  - getRelatedEmployees: 
    - Caso a pessoa seja gerente, retorna todos os funcionários em que ela é responsável.
    - Caso a pessoa não seja gerente, retorna um erro informando que ela não é gerente.

````javascript
import getRelatedEmployees from './src/getRelatedEmployees.js';
getRelatedEmployees(stephanieId);
````

### **countAnimals**

Responsável por contabilizar a quantidade de cada espécie.
  - Caso não receba nenhum parâmetro, retorna um objeto com a quantidade de cada espécie.
  - Caso receba apenas um parâmetro espécie, retorna a quantidade  de animais referente ao parâmetro.
  - Caso receba o parâmetro espécie e sexo (macho ou fêmea), retorna a quantidade de animais referente a espécie e sexo.
  - Os parâmetros devem ser passados como um objeto.

````javascript
import countAnimals from './src/countAnimals.js';
countAnimals({ specie: 'penguins', sex: 'female' });
````

### **calculateEntry**

Calcula o valor da entrada para o zoológico com base na função countEntrants

  - countEntrants: recebe um array de visitantes com objetos incluindo nome a idade e retorna um objeto com a contagem de crianças, adultos e idosos.

````javascript
import calculateEntry from './src/calculateEntry.js';
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
calculateEntry(entrants);
````

### **getAnimalsMap**

Faz o mapeamento geográfico dos animais, podendo filtrá-los por ordem alfabética e sexo.
  - Sem parâmetros, retorna um objeto com todos os animais categorizados por localização.
  - Com a opção `includeNames: true`, retorna os nomes dos animais.
  - Com a opção `sorted: true`, retorna os animais ordenados por nome (só funciona com includeNames).
  - Possui filtro por sexo, com as opções `sex: male` e `sex: female`.

````javascript
import getAnimalMap from './src/getAnimalMap.js';
getAnimalMap({ includeNames: true, sex: 'female', sorted: true });
````

### **getSchedule**

Disponibiliza as informações de horários dos animais que pode ter acesso ao cronograma da semana, de um dia, ou de um animal específico.
  - Sem parâmetros, retorna os horários para cada dia e quais animais disponíveis.
  - Se um único dia for passado, retorna os horários e animais para o dia passado.
  - Se o nome de um animal for passado, retorna os horários e animais para o animal passado.

````javascript
import getSchedule from './src/getSchedule.js';
getSchedule('lions');
````

### **getOldestFromFirstSpecies**

Busca informações do animal mais velho da primeira espécie gerenciada pelo funcionário passado como parâmetro (id).

````javascript
import getOldestFromFirstSpecies from './src/getOldestFromFirstSpecies.js';
getOldestFromFirstSpecies(olaId);
````

### **getEmployeesCoverage**

Responsável por associar informações da cobertura das pessoas funcionárias.
  - Caso não receba nenhum parâmetro, retorna um objeto com a cobertura de cada funcionário.
  - Pode receber um objeto com a chave name ou id como parâmetro.

````javascript
import getEmployeesCoverage from './src/getEmployeesCoverage.js';
getEmployeesCoverage({ id: stephanieId });
````

# **Ferramentas**

### **Linter**

Este projeto foi desenvolvido utilizando o linter `ESLint` seguindo as boas práticas definidas na [Trybe](https://www.betrybe.com/).

  - Para executar o linter, basta executar o comando `npm run lint`.

### **Node**

Para executar as funções deste projeto, é necessário ter o [Node](https://nodejs.org/en/) instalado.

# **Instruções**

### **Instalação**

O projeto não necessita instalação para ser executado (Exceção do Node). A instalação só é necessária para o linter que é opcional. Caso seja do interesse do usuário, o linter pode ser instalado através do comando:

```
npm install
```

### **Execução**

Todas as funções precisam ser importadas e chamadas dentro do arquivo principal, o arquivo `index.js`, pode servir como base para a execução das funções, basta remover a estrutura de exemplo presente nele.

Para execução pode ser usado extensões como code runner, ou através do comando:

```
node "caminho do arquivo"
```

# **Observações**

- Este é um projeto de estudo desenvolvido durante minha formação na [Trybe](https://www.betrybe.com/). :rocket:

- Este repositório está sendo monitorado pelo [SonarCloud](https://sonarcloud.io/) para avaliação de qualidade.

- Quer saber mais sobre mim? Veja o meu [LinkedIn](https://www.linkedin.com/in/vitorbss/).