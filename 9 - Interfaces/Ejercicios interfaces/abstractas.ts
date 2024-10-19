abstract class AutoDeCiudad {
    protected velocidad : number;
    private estaPrendido : boolean;

    constructor() {
        this.velocidad =0;
        this.estaPrendido = false;
    }

    abstract acelerar() : void;

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }
}

class AutoDeCiudadChico extends AutoDeCiudad {

    public acelerar(): void {
        this.velocidad += 10;
    }

}


class AutoDeCiudadGrande extends AutoDeCiudad {

    public acelerar(): void {
        this.velocidad += 50;
    }

}