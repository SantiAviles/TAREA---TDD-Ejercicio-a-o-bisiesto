function verificarBisiesto(numero) {
    if(numero % 400 === 0) {
        return "Es Bisiesto"
    } else if(numero % 100 === 0) {
        return "No es Bisiesto"
    } else if(numero % 4 === 0) {
        return "Es Bisiesto"
    } else {
        return "No es Bisiesto"
    };
};

export default verificarBisiesto;