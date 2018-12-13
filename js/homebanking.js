//Funcion usuario
let nombreUsuario = '';
const pass = '2603';
function login(){
    nombreUsuario = document.getElementById('name').value;
    let verificaPass = document.getElementById('pass').value;
    if(verificaPass != pass){
        saldoCuenta = 0;
        const modal2 = document.querySelector('.bg-modal-2').style.display = 'flex';
        $('#close').click();
        }
    actualizarSaldoEnPantalla();
    cargarNombreEnPantalla();
    $('#close').click();
};

var limiteExtraccion = 500;
var saldoCuenta = 1000000;

var servicioAgua = 350;
var servicioTelefono = 425;
var servicioLuz = 210;
var servicioInternet = 570;

var cuentaTitan = '12345'
var cuentaMichelle = '54321'

var clave = '2603';

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function validaCantidadBilletes(param) {
    if (param % 100 != 0) {
        return false;
    } else {
        return true;
    }
};

function haySaldoDisponible(param) {
    if(param <= saldoCuenta) {
        return true;
    } else {
        return false;
    }
};

function noExcedeLimit(param) {
    if(param <= limiteExtraccion) {
        return true;
    } else {
        return false;
    }
};

function sumarDinero(dinero){
            saldoCuenta += dinero;
            return saldoCuenta;
}

function restarDinero(dinero){
            saldoCuenta -= dinero;
            return saldoCuenta;
}

function cambiarLimiteDeExtraccion() {
    var nuevoLimiteStr = prompt('Selecciona el limite para tus transacciones');
    var nuevoLimite = parseInt(nuevoLimiteStr);
    if(nuevoLimite !=null){
        if(nuevoLimite >= 500){
            limiteExtraccion = nuevoLimite;
            alert('Tu nuevo limites de transacciones es: $' + nuevoLimite);
            actualizarLimiteEnPantalla();
        }else{
            alert('El limite minimo de extracción es $500')

        }
    } else {
        alert('El limite minimo de extracción es $500')
    }

};

function extraerDinero() {
    var extraccionDineroStr = prompt('¿Cuanto dinero quieres retirar');
    var extraccionDinero = parseInt(extraccionDineroStr);
    var saldoAnterior = saldoCuenta;
    if(extraccionDinero != null){
        if(validaCantidadBilletes(extraccionDinero)){
            if(haySaldoDisponible(extraccionDinero)){
                if(noExcedeLimit(extraccionDinero)){
                    if(extraccionDinero != 0){
                        var saldoActual = restarDinero(extraccionDinero);
                        alert('Has Retirado: $' + extraccionDinero +
                              '\nSaldo Anterior: $' + saldoAnterior +
                              '\nSaldo Actual: $' + saldoActual);
                        actualizarSaldoEnPantalla();
                    } else{
                        alert('No se puede retirar montos menores a 100');
                    }
                } else{
                    alert('El monto a retirar excede el limite de retiro');
                }
            } else {
                alert('No hay saldo disponible para la cantidad a retirar');
            }
        } else{
            alert('Solo se pueden retirar billetes de 100');
        }
    } else {
        alert('Debe ingresar un numero valido');
    }

};

function depositarDinero() {
    var depositoDineroStr = prompt('¿Cuanto dinero quieres retirar');
    var depositoDinero = parseInt(depositoDineroStr);
    var saldoAnterior = saldoCuenta;
    if(depositoDinero != null){
        if(validaCantidadBilletes(depositoDinero)){
            if(haySaldoDisponible(depositoDinero)){
                if(noExcedeLimit(depositoDinero)){
                    if(depositoDinero != 0){
                        var saldoActual = sumarDinero(depositoDinero);
                        alert('Has Depositado: $' + depositoDinero +
                              '\nSaldo Anterior: $' + saldoAnterior +
                              '\nSaldo Actual: $' + saldoActual);
                        actualizarSaldoEnPantalla();
                    } else{
                        alert('No se puede retirar montos menores a 100');
                    }
                } else{
                    alert('El monto a retirar excede el limite de retiro');
                }
            } else {
                alert('No hay saldo disponible para la cantidad a retirar');
            }
        } else{
            alert('Solo se pueden retirar billetes de 100');
        }
    } else {
        alert('Debe ingresar un numero valido');
    }
};


function pagarServicio() {
    var eligeServicio = prompt('Elige el servicio que deseas pagar:' +
                                  '\n 1 - Agua' +
                                  '\n 2 - Luz' +
                                  '\n 3 - Internet' +
                                  '\n 4 - Teléfono');
    switch(eligeServicio){
        case '1':
        if(servicioAgua > saldoCuenta){
            alert('No hay saldo suficiente para hacer el pago')
        } else {
            var saldoAnterior = saldoCuenta;
            saldoCuenta -= servicioAgua;
            alert('El servicio de agua ha sido pagado correctamente' +
                  '\nCuenta servicio de agua: $' + servicioAgua +
                  '\nSaldo Anterior: $' + saldoAnterior +
                  '\nSaldo cuenta: $' + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        }
        case '2':
        if(servicioLuz > saldoCuenta){
            alert('No hay saldo suficiente para hacer el pago')
        } else {
            var saldoAnterior = saldoCuenta;
            saldoCuenta -= servicioLuz;
            alert('El servicio de luz ha sido pagado correctamente' +
                  '\nCuenta servicio de luz: $' + servicioLuz +
                  '\nSaldo Anterior: $' + saldoAnterior +
                  '\nSaldo cuenta: $' + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        }
        case '3':
        if(servicioInternet > saldoCuenta){
            alert('No hay saldo suficiente para hacer el pago')
        } else {
            var saldoAnterior = saldoCuenta;
            saldoCuenta -= servicioInternet;
            alert('El servicio de internet ha sido pagado correctamente' +
                  '\nCuenta servicio de internet: $' + servicioInternet +
                  '\nSaldo Anterior: $' + saldoAnterior +
                  '\nSaldo cuenta: $' + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        }
        case '4':
        if(servicioTelefono > saldoCuenta){
            alert('No hay saldo suficiente para hacer el pago')
        } else {
            var saldoAnterior = saldoCuenta;
            saldoCuenta -= servicioTelefono;
            alert('El servicio de teléfono ha sido pagado correctamente' +
                  '\nCuenta servicio de internet: $' + servicioTelefono +
                  '\nSaldo Anterior: $' + saldoAnterior +
                  '\nSaldo cuenta: $' + saldoCuenta);
            actualizarSaldoEnPantalla();
            break;
        }

    }
};

function transferirDinero() {
    var transferencia = prompt('Ingrese el monto a transferir');
    transferencia = parseInt(transferencia);
    if(transferencia <= saldoCuenta){
        if(transferencia != null){
            if(transferencia != 0){
                var cuentaTransferencia = prompt('Ingrese el numero de cuenta a transferir');
                if(cuentaTransferencia === '12345' || cuentaTransferencia === '54321'){
                    var saldoAnterior = saldoCuenta;
                    saldoCuenta -= transferencia;
                    alert('Has transferido correctamente a ' + cuentaTransferencia +
                          '\nMonto de la transferencia: $' + transferencia +
                          '\nSaldo Anterior: $' + saldoAnterior +
                          '\nSaldo Actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                } else {
                    alert('No has ingresado una cuenta registrada valida');
                }
            } else {
                alert('Ingrese un monto superior a 0');
            }
        } else {
            alert('Ingrese un numero');
        }
    } else {
        alert('No hay saldo disponible para el pago');
    }
};

// Abre Modal
document.getElementById('button-open').addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'flex';
    });
    // Fadein al apretar boton
    $('#button').click(function(){
            $('.bg-modal').fadeIn(2000);
        });
//Cierra modal 1
document.getElementById('button-open').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
    });
// Cierra modal 2
document.getElementById('button-close').addEventListener('click', function(){
    document.querySelector('.bg-modal-2').style.display = 'none';
    });



//Funciones que actualizan el valor de las variables en el HTML, innerHTML cambia el valor en el html
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
