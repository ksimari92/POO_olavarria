export class Televisor {
    private estaPrendido : boolean = true;
    private volumenActual: number;
    protected canalActual : number;

    constructor(volumenActual: number, canalActual:number){
        this.volumenActual = volumenActual;
        this.canalActual = canalActual;
    }

    prenderApagar(): void {
        if(this.estaPrendido) {
            this.estaPrendido = false
        } else {
            this.estaPrendido = true;
        }
    }

    subirVolumen() : void {
        this.volumenActual = this.volumenActual + 1;
    }

    subirCanal() : void {
        this.canalActual = this.canalActual + 1;
    }

}





