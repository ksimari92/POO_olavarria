import { Televisor } from "./herencia";

class SmartTV extends Televisor{
    private sistemaOperativo: string;

    constructor(volumenActual:number, canalActual:number, sistOperativo:string) {
        super(volumenActual, canalActual);
        this.sistemaOperativo = sistOperativo;
    }

    setSistemaOperativo(nuevoSistemaOperativo : string) :void {
        this.sistemaOperativo = nuevoSistemaOperativo;
    }

    getCanal():number {
        return this.canalActual;
    }
}

let tvSmart: SmartTV = new SmartTV(10, 25, "android");

// console.log(tvSmart);

// tvSmart.prenderApagar();

// console.log(tvSmart);

// tvSmart.setSistemaOperativo("windows");
// console.log(tvSmart);
console.log(tvSmart.getCanal())


