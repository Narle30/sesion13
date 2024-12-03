let numero1=parseInt(prompt("Ingrese un numero: "));
let numero2=parseInt(prompt("Ingrese un numero: "));

function sumar(){
    document.write(`La sumatoria de los dos numeros es ${numero1+numero2}`);
}

function resta(num1, num2) {
    document.write(`La resta de los dos numeros es ${numero1-numero2}`);
}

function mutiplicacion(num1, num2) {
    document.write(` La multiplicacion de los dos numeros es ${numero1*numero2}`);
}

function division(num1, num2) {
    document.write(` La division de los dos numeros es ${numero1/numero2}`);
}

sumar();
resta();
mutiplicacion();
division();