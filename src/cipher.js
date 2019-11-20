window.cipher = {


  /*      BOTON CIFRAR    */

encode: (offsetNumber, newText) => {
  
  let textResult = ""; // variable donde se guardara los caracteres cifrados

  for(let inicialPosition = 0 ; inicialPosition < newText.length; inicialPosition++){

    let asciiText = newText.charCodeAt(inicialPosition);//charcodeAt transforma letra a nº AScii    
    
    //console.log(asciiText);
  
    let newAscii = (asciiText - 65 + offsetNumber)% 26 + 65; //desplazamiento offset, nuevo Nº ASCII
    let textCifrado = String.fromCharCode(newAscii); // convierte numero Ascii a letra
    
    textResult += textCifrado; //CONCATENA los caracteres cifrados
    
  } 
  return textResult;

},


    /*    FUNCION DESCIFRAR   */

decode: (offsetNumber, newText) => {
 
  let textResult = ""; // variable donde se guardara los caracteres cifrados

  for(let inicialPosition = 0 ; inicialPosition < newText.length; inicialPosition++){
    
    
    let asciiText = newText.charCodeAt(inicialPosition);
    
    //console.log(asciiText);
    
    let newAscii = ((asciiText - 90 - offsetNumber)% 26 + 90);
    //console.log(newAscii);

    let textCifrado = String.fromCharCode(newAscii);

    textResult += textCifrado;   
  }
  return textResult;
  
}

};
