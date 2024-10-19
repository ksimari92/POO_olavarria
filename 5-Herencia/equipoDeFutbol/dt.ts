import { Persona } from "./Persona";
import { Jugador } from "./Jugador";
export class Dt extends Persona{
    private arrJugadores:Jugador[];
    constructor(nombre:string,dni:number,arrJug:Jugador[]) {
        super(nombre,dni);
        this.arrJugadores=arrJug;
    }

    public cambiarCapitan(jugador:Jugador):void{
        for (let i = 0; i < this.arrJugadores.length; i++) {
           this.arrJugadores[i].setEsCapitan(false); 
        }
        jugador.setEsCapitan(true);
        console.log("Se cambio de capitan a: "+ jugador.getNombre());
        
    }
//  let jugador =this.arrJugadores.find(jugador=>jugador.getDni()===5000000)
//jugador.setJugadorBanca
//jug2.setTitular();
}





interface OperacionesBancarias {
    depositar(cantidad: number): void;
    retirar(cantidad: number): void;
  }
  
  abstract class CuentaBancaria implements OperacionesBancarias {
    saldo: number = 0;
  
    depositar(cantidad: number): void {
      this.saldo += cantidad;
      console.log(`Depositaste $${cantidad}. Saldo actual: $${this.saldo}`);
    }
  
    retirar(cantidad: number): void {
      if (this.saldo >= cantidad) {
        this.saldo -= cantidad;
        console.log(`Retiraste $${cantidad}. Saldo actual: $${this.saldo}`);
      } else {
        console.log("Saldo insuficiente");
      }
    }
  
    abstract tipoDeCuenta(): string;
  }
  
  class CuentaCorriente extends CuentaBancaria {
    tipoDeCuenta(): string {
      return "Cuenta Corriente";
    }
  }
  
  class CuentaDeAhorros extends CuentaBancaria {
    tipoDeCuenta(): string {
      return "Cuenta de Ahorros";
    }
  }
  
  