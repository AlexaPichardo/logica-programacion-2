
// Funcion 
function convertirTemperatura() {
    let entrada;
    let celsius;

    //ciclo para repetir la solicitud si el dato no es valido
    while (true) {
        entrada = prompt("Ingresa la temperatura en grados Celsius");
        if (entrada === null) {
            console.log("Error de dato");
            return;
        }
    //convertir el texto a numero
    celsius = Number(entrada);
    //validamos
    if(entrada.trim() !== "" && !isNaN(celsius)){
        break;//secierra el bucle si el dato es valido
    }
    alert("Error: Ingresa un numero valido");
    }//while 
    //conversion de datos 
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    //Imprimir resultados
    console.log(`Temperatura ingresada: ${celsius}°C`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}K`);
    
}// Function
//Ejecutar funcion 
convertirTemperatura();