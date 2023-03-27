//por cada ejercicio en consola se mostrara en que ejercicio estamos además de la creación de que cada ejercicio será una función
function ejer1(){
    console.log("primer ejercicio");
    var p;
    alert("Bienvenido a la actividad de javascript!!!");
    var nombre=prompt("Cual es tu nombre: ");
    p=prompt("Hiciste tu tarea?");
    //uso de la sentencia if para saber la respuesta
    if(p=="si"){
    alert("¡¡Bien hecho " + nombre + "!!");
    } else if(p="no"){
        alert("No te rindas " + nombre + ", ¡¡comienza ya!!");
    }
}
//función para calcular los grados celcius
function Far(grados){
    alert("El resultado es: "+((grados-32)*(5/9))+"° celsius");
}

function ejer2(){
    //segundo ejercicio
    console.log("segundo ejercicio");
    var gf,gc,res;
    gf=parseInt(prompt("ingrese los grados Farenheit a convertir: "));
    Far(gf);
}

function ejer3(){
    //tercer ejercicio  
    console.log("tercer ejercicio");
    var num,max=-1;

    alert("");
    for(var i=0;i<3;i++){
        num=parseInt(prompt("ingresa el numero "+ (i+1)));
        if(num>max){
            max=num;
        }
    }
    alert("el numero ingresado con mayor valor es: " + max);
}

//ejercicio extra...