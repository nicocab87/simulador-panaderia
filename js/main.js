// Simulador de compra de una panadería

let dinero=5000

//-----------------------------------------------------------//

function producto(tipo, precio){
    this.tipo = tipo;
    this.precio = precio;
}

const criollo = new producto("criollo", "1000")
const factura = new producto("factura", "180")
const pan = new producto("pan", "700")
const alfajor = new producto("alfajor", "250")

/* let dineroCriollo = cantidadCriollo * criollo.precio
let dineroFactura = cantidadFactura * factura.precio
let dineroPan = cantidadPan * pan.precio
let dineroAlfajor = cantidadAlfajor * alfajor.precio */

//-----------------------------------------------------------//

alert("Hola, buenos dias! Que vas a llevar?");

function comprar () {
    console.log("-----------------")

    console.log("1) comprar " + criollo.tipo);
    console.log("2) comprar " + factura.tipo);
    console.log("3) comprar " + pan.tipo);
    console.log("4) comprar " + alfajor.tipo);
    console.log("5) Consultar compras y saldo")
    console.log("6) Salir")
 
    let eleccion = prompt("Elige una opcion");

    /* let cantidadCriollo = "0";
    let cantidadFactura= "0";
    let cantidadPan= "0";
    let cantidadAlfajor= "0"; */

    switch (eleccion){
        case "1":

            cantidadCriollo = parseFloat(prompt ("El precio del criollo es de " + criollo.precio + " el kilo. Cuantos kilos quieres?"))

            let dineroCriollo = cantidadCriollo * criollo.precio

            if(dineroCriollo > dinero){
                console.log("Lo siento, no tienes dinero suficiente, usted solo tiene " + dinero)
                comprar();
            }else{
                dinero-= dineroCriollo
                console.log("Exelente! Has comprado " + cantidadCriollo + " kilos de crillos.")
                console.log("Su saldo restante es de " + dinero)
                comprar()
            }
    break;

    case "2":
            cantidadFactura = parseFloat(prompt ("El precio de la Factura es de " + factura.precio + " cada una. Cuantas quieres?"))

            let dineroFactura = cantidadFactura * factura.precio

            if(dineroFactura > dinero){
                console.log("Lo siento, no tienes dinero suficiente, usted solo tiene " + dinero)
                comprar();
            }else{
                dinero-= dineroFactura
                console.log("Exelente! Has comprado " + cantidadFactura + " facturas.")
                console.log("Su saldo restante es de " + dinero)
                comprar()
            }
    break;

    case "3":
            cantidadPan = parseFloat(prompt ("El precio de la Pan es de " + pan.precio + " el kilo. Cuantos kilos quieres?"))

            let dineroPan = cantidadPan * pan.precio

            if(dineroPan > dinero){
                console.log("Lo siento, no tienes dinero suficiente, usted solo tiene " + dinero)
                comprar();
            }else{
                dinero-= dineroPan
                console.log("Exelente! Has comprado " + cantidadPan + " kilos de pan.")
                console.log("Su saldo restante es de " + dinero)
                comprar()
            }

    break;

    case "4":
            cantidadAlfajor = parseFloat(prompt ("El precio del alfajor es de " + alfajor.precio + " cada uno. Cuantos quieres?"))

            let dineroAlfajor = cantidadAlfajor * alfajor.precio

            if(dineroAlfajor > dinero){
                console.log("Lo siento, no tienes dinero suficiente, usted solo tiene " + dinero)
                comprar();
            }else{
                dinero-= dineroAlfajor
                console.log("Exelente! Has comprado " + cantidadAlfajor + " facturas.")
                console.log("Su saldo restante es de " + dinero)
                comprar()
            }
    break;

    case "5": 
        console.log("Hasta ahora llevas comprado: " + cantidadCriollo + " kilos de criollos")
        console.log("Hasta ahora llevas comprado: " + cantidadFactura + " facturas")
        console.log("Hasta ahora llevas comprado: " + cantidadPan + " kilos de pan")
        console.log("Hasta ahora llevas comprado: " + cantidadAlfajor + " alfajores")
        console.log("Y tu saldo es de $" + dinero)
        comprar()

    break;

    case "6":
        console.log("Muchas gracias! Espero que lo disfrute, vuelvas prontos!")
        console.log("Fin de la simulación, para volver a usarla, refrescar la pagina")
    break;

    default:
        console.log("Lo siento la opción ingresada es incorrecta, vuelve a intentar!")
        comprar()

    }




    
}


comprar();
