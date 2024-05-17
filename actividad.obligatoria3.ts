let arregloMax : number [] = [4,7,93,1,45,67,23,29,78,11,16]
let numeroMaximo : number = 0
let contador: number

for (contador=0; contador<11; contador++) {
    if (arregloMax [contador] > numeroMaximo)
        numeroMaximo = arregloMax [contador]
}
console.log ('el numero maximo es:  '+ numeroMaximo)
parOimpar (numeroMaximo)


function parOimpar (numeroMaximo : number){
    if (numeroMaximo%2 ==0){
        console.log ('el numero  ' + numeroMaximo+ '  es un numero par');
    } else {
        console.log ('el numero  ' + numeroMaximo + '  es numero impar');
    }
}







