

abstract class Vehiculo {
    protected velocidad: number;

    abstract avanzar(): void; 

}


class Auto extends Vehiculo {

    public avanzar(): void {
        this.velocidad = this.velocidad + 10;
    }
}

class Motocicleta extends Vehiculo {

    public avanzar(): void {
        this.velocidad = this.velocidad + 5;
    }
}
