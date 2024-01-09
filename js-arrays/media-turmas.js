//ESSA EU FIZ NA RAÇA!!!!!!!

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

let mediaSalaJS = 0
let mediaSalaJava = 0
let mediaSalaPython = 0

//Sala JavaScript
for(let i = 0; i < salaJS.length; i++) {
    mediaSalaJS += salaJS[i];    
}
const mediaJS = mediaSalaJS / salaJS.length;

console.log(`A média da sala JavaScript é: ${mediaJS}.`);

//Sala Java

for(let i = 0; i < salaJava.length; i++) {
    mediaSalaJava += salaJava[i];    
}
const mediaJava = mediaSalaJava / salaJava.length;

console.log(`A média da sala Java é: ${mediaJava}.`);

//Sala Python

for(let i = 0; i < salaPython.length; i++) {
    mediaSalaPython += salaPython[i];    
}
const mediaPython = mediaSalaPython / salaPython.length;

console.log(`A média da sala Python é: ${mediaPython}.`);
