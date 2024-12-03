
function sumar(x,y)
{
    document.write(`La sumatoria de los dos numeros es ${x+y}`);
}

function restar(x,y)
{
    document.write(`La resta de los dos numeros es ${x-y}`);
}

function mutiplicar(x,y)
{
    document.write(` La multiplicacion de los dos numeros es ${x*y}`);
}

function dividir(x,y) 
{
    document.write(` La division de los dos numeros es ${x/y}`);
}


function calculadora(x,y,oper){
    switch(oper){
        case 'sumar':
            return sumar(x,y);
        case 'restar':
            return restar(x,y);
        case 'multiplicar':
            return mutiplicar(x,y);
        case 'dividir':
            return dividir(x,y);
        default:
            alert("Operación no valida...");
    }
}


let num1=parseInt(prompt("Ingrese un numero: "));
let num2=parseInt(prompt("Ingrese un numero: "));
let oper=prompt("Digite una operación:  ");
calculadora(num1,num2,oper);
