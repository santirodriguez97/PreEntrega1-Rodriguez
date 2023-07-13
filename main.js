//Calcular pagos en cuotas sobre un monto determinado

while (true) {
    let monto = parseInt(prompt("Ingrese el monto final"))
    let cuota = parseInt(prompt("Ingresa la cantidad de cuotas que desea: 3, 6 o 9"))
    monto = esEntero(monto)
    cuota = esEntero(cuota)
    cuota = cuotas(cuota)
    if (monto != false && cuota != false) {
        console.log(calcularCuota(monto, cuota))
        alert("El precio de cada cuota va a ser de: " + calcularCuota(monto, cuota))
        let continuar = confirm("Desea seguir?")
        if (continuar) {
            continue
        } else {
            break
        }
    }
}

function calcularCuota(monto, cuota) {
    precioTotal = monto / cuota
    return precioTotal
}

function esEntero(numero) {
    if (!isNaN(numero) && numero != null && numero != "") {
        return numero
    } else {
        alert("Los datos ingresado no son validos. Vuelva a intentarlo")
        return false
    }
}

function cuotas(cuota) {
    if(cuota == 3 || cuota == 6 || cuota == 9) {
        return cuota
    }else {
        alert("El numero de cuota no es valido")
        return false
    }
}