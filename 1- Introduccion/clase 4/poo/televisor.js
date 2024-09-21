var Televisor = /** @class */ (function () {
    //funcion constructora
    // constructor(volumen: number, canal:number){
    //     this.volumenActual = volumen;
    //     this.canalActual = canal;
    // }
    function Televisor(volumenActual, canalActual) {
        //estados o variables o atributos
        this.estaPrendido = true;
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }
    //metodos
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    return Televisor;
}());
//instancias
var primerTelevisor = new Televisor(10, 25);
var segundoTelevisor = new Televisor(50, 20);
primerTelevisor.prenderApagar();
console.log(primerTelevisor);
