const palavra:string='programador'

const result=(word:string):string =>{
const mens= word.split('')
const resolt=mens.join('-')
   return resolt
}
console.log(result(palavra))