const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";   
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
}


function encriptar(stringEncriptada){
    let matrizCodigo =  [ ["e"
    ,"ew"],["i","ijk" ],["a","p4" ],[ "o","r9"],[ "u","pm"]];
    stringEncriptada  = stringEncriptada.toLowerCase();

    for( let i= 0 ; i < matrizCodigo.length ; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}


function desencriptar(stringDesencriptar){
    let matrizCodigo =  [ ["e"
    ,"ew"],["i","ijk" ],["a","p4" ],[ "o","r9"],[ "u","pm"]];
    stringDesencriptar  = stringDesencriptar.toLowerCase();

    for( let i= 0 ; i < matrizCodigo.length ; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptar;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado");
}

// var arreglo =[] ;

// for(var i = 0 ;i=6 ; i++){
//     arreglo.push[i];
// }
// console.log(arreglo);