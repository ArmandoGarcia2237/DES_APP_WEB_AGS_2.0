
const frcsA = [
    "Las que conducen y arrastran al mundo no son las máquinas, sino las ideas.",
    "Iré a cualquier parte, siempre que sea hacia adelante",
    "Estar preparado es importante, saber esperar lo es aún más, pero aprovechar el momento adecuado es la clave de la vida.",
    "Todo el mundo trata de realizar algo grande, sin darse cuenta de que la vida se compone de cosas pequeñas.",
    "No busques personas con tus mismos gustos, busca personas con tus mismos valores.",
    "El día más desaprovechado de todos los días es aquel en que no nos hemos reído.",
    "En la vida hay algo peor que el fracaso: el no haber intentado nada.",
    "Aprendí que no se puede dar marcha atrás, que la esencia de la vida es ir hacia adelante.",
    "Es una locura odiar a todas las rosas porque una te pinchó. renunciar a todos tus sueños porque uno de ellos no se realizó.",
    "Cuando la vida te ponga de rodillas, finge que te atas los zapatos."
];

function generaExcusa() {
    // Calculamos de forma aleatoria el indice para cada arreglo de frases
    const posicionA = Math.floor(Math.random()*frcsA.length);
    
    // Concatenamos las 3 partes de la excusa en una sola.
    const excusa = `${frcsA[posicionA]}`
    
    //Hacemos que la función devuelva la excusa armada.
    return excusa;
}

console.log(generaExcusa());

//Busco en el HTML el elemento con ID excusa y reemplazo el contenido por lo que me devuelva la función generaExcusa()
function colocaExcusa() {
    document.getElementById("excusa").innerHTML = generaExcusa();
}

//Ejecuto la función, para cuando cargue la página, automáticamente ya haya una excusa cargada.
colocaExcusa();