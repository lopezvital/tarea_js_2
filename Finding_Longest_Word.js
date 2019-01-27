let word=['mystery','brother','aviator','crocodile','pearl','orchard','crackpot']
let a=word[0].length
let b=word[1].length
let c=word[2].length
let d=word[3].length
let e=word[4].length
let f=word[5].length
let g=word[6].length

word.reverse()
  let contenedor=[]

  word.map((letter)=>{
    contenedor.push(letter.length)
  })

findLongestWord = (word) => {

for(let m=1; m<contenedor.length; m++){
  for(let e=0;e<contenedor.length-1;e++){
    if(contenedor[e]>contenedor[m]){
 let cont=contenedor[e]
 contenedor[e]=contenedor[m]
 contenedor[m]=cont
  }
  }
}
contenedor.reverse()

  return contenedor[0]
  
}
let x=null

if(findLongestWord(word)===a){
  console.log("the longest word is ")
  x=word[0] +" and have "
}else 
if(findLongestWord(word)===b){
  console.log("the longest word is ")
  x=word[1]+" and have "
}else
 if(findLongestWord(word)===c){
console.log("the longest word is ")
  x=word[2]+" and have "
  }else
 if(findLongestWord(word)===d){
console.log("the longest word is ")
  x=word[3]+" and have "
}else
 if(findLongestWord(word)===e){
  console.log("the longest word is ")
  x=word[4]+" and have "
}else
 if(findLongestWord(word)===f){
  console.log("the longest word is ")
  x=word[5]+" and have "
}else
 if(findLongestWord(word)===g){
  console.log("the longest word is ")
  x=word[6]+" and have "
}

console.log(x+findLongestWord(word)+" letter")