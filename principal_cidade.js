const readlineSync = require('readline-sync')
const Cidade = require('./class_cidade')

console.log('---------------------------------------------')
console.log('         Dados da Cidade e População')
let nome = readlineSync.question('Insira o nome da cidade: ')
let estado = readlineSync.question('Insira o estado da cidade: ')
let populacao = readlineSync.question('Insira a populacao da cidade: ')
let numHomem = readlineSync.question('Insira o numero de homens da cidade: ')
let numMulher = readlineSync.question('Insira o numero de mulheres da cidade: ')

const cidade1 = new Cidade(nome,estado,populacao,numHomem,numMulher)

let homensPercentual = cidade1.percentualHomens()
let mulheresPercentual = cidade1.percentualMulheres()
console.log('---------------------------------------------')
console.log('         Resultado dos dados obtidos')
console.log('---------------------------------------------')

console.log('O numero de Habitantes é: ',populacao)
console.log(`O percentual de Homens é: ${homensPercentual.toFixed(0)}%`)
console.log(`O percentual de Mulheres é: ${mulheresPercentual.toFixed(0)}%`)
console.log('---------------------------------------------')
