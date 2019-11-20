const btnacceso = document.getElementById ("acceso");
const home = document.getElementById ("home");
const sectionCifrado = document.getElementById ("sectionCifrado");

btnacceso.addEventListener ("click",inicio);
sectionCifrado.style.display = "none";

/* FUNCION OCULTAR PANTALLA INICIO Y MOSTRAR PANTALLA CIFRADO */
function inicio(){
    sectionCifrado.style.display = "inline";
    home.style.display = "none"; 
}

/*      BOTON CIFRAR    */
const btnCifrar = document.getElementById ("actionCipher"); //
//const textbox = document.getElementById ("textcaja"); //captura y guarda valor ingresado
const textResult = document.getElementById ("outText");

btnCifrar.addEventListener ("click", function(){

    //let offset = document.getElementById("offset");
    /*console.log(offset);*/
    let offsetNumber = parseInt(document.getElementById("offset").value);
    //console.log(offsetNumber);
    let myText = document.getElementById("textcaja").value; //captura y guarda valor texto ingresado x usuario
    let newText = myText.toUpperCase();
    //console.log(newText);
    //console.log(window.cipher.encode(offsetNumber, newText));

    textResult.innerHTML = window.cipher.encode(offsetNumber, newText);
});


/*    FUNCION DESCIFRAR   */

const btnDescifrar = document.getElementById("actionDescipher");

btnDescifrar.addEventListener("click", function(){

    //let offset = document.getElementById("offset");
    //console.log(offset);
    let offsetNumber = parseInt(document.getElementById("offset").value);
    //console.log(offsetNumber);
    let myText = document.getElementById("textcaja").value; //captura y guarda valor texto ingresado x usuario
    let newText = myText.toUpperCase();
    //console.log(newText);
    //console.log(window.cipher.decode(offsetNumber, newText));

    
    textResult.innerHTML = window.cipher.decode(offsetNumber, newText);//imprime en caja resultado

});


/*      BOTON LIMPIAR   */
 document.getElementById("limpiar").addEventListener("click", () =>{
    document.getElementById("textcaja").value = "";// queda en blanco
    document.getElementById("outText").value = "";//queda en blanco
});

    
