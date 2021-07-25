import { Punto } from "./punto";

let coordenadas1:Punto = new Punto(5,3);
let coordenadas2:Punto = new Punto(9,70);
let coordenadas3:Punto = new Punto(2,4);
let coordenadas4:Punto = new Punto(25,30)
let arrayDePuntos = [coordenadas2,coordenadas3,coordenadas4]


console.log("Imprimir Coordenadas");
console.log(coordenadas1.toString());
console.log("Distancia al orige (0.0)");
console.log(coordenadas1.distanciaAlOrigen());
console.log("Distancia al origen coordenadas diferentes ");
console.log(coordenadas1.calcularDistancia(coordenadas2));
console.log("cuadrante");
console.log(coordenadas3.calcularCuadrante());
console.log("Calcular los más cercanos");
console.log(coordenadas1.calcularMasCercano(arrayDePuntos));
