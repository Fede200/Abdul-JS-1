/*
Escribir un programa en JS para imprimir el
area de dos rectangulos que tenga lados (4,5) y (5,8) respectivamente creando
una clase llamada 'CRectangulo' con una funcion llamada 'CalclarArea' que
devuelve el area. La longitud y la altura se pasan como parametros a su constructor.
Subir enunciado y solucion a Github. Enviar link
*/

class CRectangulo {
    constructor(longitud, altura,) {
        this.longitud = longitud;
        this.altura = altura;
    }

 get area(){
    return this.calcArea()
 }

    calcArea() {
    
        return this.longitud * this.altura;
    }
}



document.getElementById('boton').onclick = function(){
    let l1 = document.getElementById('width1').value; 
    let A1 = document.getElementById('height1').value;
    let l2 = document.getElementById('width2').value; 
    let A2 = document.getElementById('height2').value; 

    const R1 = new CRectangulo(l1, A1);
    const R2 = new CRectangulo(l2, A2);

    alert(R1.area);
    alert(R2.area);
}