class Televisor {
    //atributos o variables internas
    private decodificador : Decodificador;
    private canal: number ;
    private volumen: number;
    private estaPrendido: boolean = false;


    constructor(canal: number, volumnen: number, decodificador: Decodificador, estaPrendido?: boolean) {
        this.canal = canal;
        this.volumen = volumnen;
        this.decodificador = decodificador;

        if(estaPrendido != undefined) {
            this.estaPrendido = estaPrendido;
        }
    }

    getCanal(): number {
        return this.canal;
    }

    setCanal(nuevoCanal: number): void {
            this.canal = nuevoCanal;
    }

    
}

class Decodificador {
    private decodificador: string;

    constructor(nombreDecodificador : string) {
        this.decodificador = nombreDecodificador;
    }

    getDeco(): string {
        return this.decodificador;
    }
}

const deco = new Decodificador("Decodificador");

//nueva instancia
const televisor = new Televisor(10, 50, deco, true);

// televisor.canal = 25;   NO

// console.log(televisor.getCanal());
// televisor.setCanal(25);
// console.log(televisor.getCanal());

console.log(televisor)



