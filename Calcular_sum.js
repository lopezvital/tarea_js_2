let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

sumArray = (suma) =>{
let calcular_suma=null

suma.map((resultado)=>{
 calcular_suma +=resultado  
 })
return calcular_suma
}

console.log("la suma de los numeros "+numbers+" es "+sumArray(numbers))
