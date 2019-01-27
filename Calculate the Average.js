//level 1

let numbers=[ 2 , 6 , 9 , 10 , 7 , 4 , 1 , 9 ]
averageNumbers  = (suma) =>{
let calcular_suma=null

suma.map((resultado)=>{
 calcular_suma +=resultado  
 })
 return  calcular_suma/numbers.length
}

console.log("el promedio es"+numbers+" es: "+averageNumbers (numbers))
 
 //level 2


console.log("____________________________________")
console.log("")
let word= ['seat','corresponder','linen','motif','hole','smell','smart','chaos','fuel','palace']

averageWordLength = (word) =>{
  let suma=null

  word.map((resultado) =>{
    suma=suma+resultado.length
     
  })
  return suma
}
console.log("longitud de las palabras es: "+averageWordLength(word))