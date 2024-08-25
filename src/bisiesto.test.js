import verificarBisiesto from "./bisiesto.js"

describe("Bisiesto", () => {
    it("Todos los años divisibles por 400 SON años bisiestos", () => {
        expect(verificarBisiesto(2000)).toEqual("Es Bisiesto");
    });
    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos", () => {
        expect(verificarBisiesto(1800)).toEqual("No es Bisiesto");
    });
    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos", () => {
        expect(verificarBisiesto(2020)).toEqual("Es Bisiesto");
    });
});