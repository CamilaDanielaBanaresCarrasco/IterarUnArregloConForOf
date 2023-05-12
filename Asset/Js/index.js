
//Para cada valor del elemento iterable
//ITERAR UN ARREGLO !!!!!! 

let autos = ["toyota", "nizan", "onda", "lexus"];

let text = "";
for(let x of autos ){
    text += x +"<br>";
}

document.getElementById("d1").innerHTML = text;

const iterable ="Hola Mundo";
//mostrara cada letra de la palabra por consola
for(const valor of iterable){
    console.log(valor)

}