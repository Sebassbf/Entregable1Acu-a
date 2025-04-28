let numero1 = prompt("Ingrese un numero");
const doble = 2;
let resultado = numero1 * doble;
let motos = ["Suzuki","Kawasaki","Qjmotor","Yamaha"];

console.log("El doble de "+ numero1,"es " + resultado);


if(numero1 % 2 === 0){
    
    console.log("El resultado es par");
    alert("El resultado es par")
    
}
else{

    console.log("El resultado es impar");
    alert("El resultado es impar")
    
}

motos.push("Honda");
console.log(motos);


for(i=0; i < motos.length; i++){

    console.log("Esta es la vuelta numero "+i);
    
}


function Peso() {
    return prompt("Introduce el peso: ");
  }
  
  function Altura() {
    return prompt("Introduct altura: ");
  }
  
  function Datos() {
    let peso = Peso();
    let altura = Altura();
  
    console.log("Su peso es: " + peso);
    console.log("Su altura es: " + altura);
  }
  
  Datos();


