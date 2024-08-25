import verificarBisiesto from "./bisiesto.js"

describe("Bisiesto", () => {
    it("Todos los años divisibles por 400 SON años bisiestos", () => {
        expect(verificarBisiesto(2000)).toEqual("Es Bisiesto");
    });
});