function verificarBisiesto(numero) {
    if(numero % 400 === 0) {
        return "Es Bisiesto"
    } else if(numero % 100 === 0) {
        return "No es Bisiesto"
    };  
};

export default verificarBisiesto;