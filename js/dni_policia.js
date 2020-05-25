

function letraDni(){
    array_letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    var dni = prompt("Introduce el dni sin tu letra");
    var resto = dni % 23;
    var dni_letra = dni + array_letras[resto];
    console.log(dni_letra);
    document.write(dni_letra);
}

letraDni();