function AgregarVehiculo(matricula, marca, modelo, color, año, fechaItv) {
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
    this.fechaItv = fechaItv;
}

const vehiculo1 = new AgregarVehiculo('MN 12 954', 'BMW', '116d', 'rojo', 2012, '30/01/2024');
const vehiculo2 = new AgregarVehiculo ('CD 10 258', 'Audi', 'A3', 'blanco', 2003, '26/12/23');
const arrayVehiculos = [vehiculo1, vehiculo2]

//funcion que devuelve los vehiculos
function recorroVehiculos (){
    for (let i=0; i<arrayVehiculos.length;i++){
        console.log(i);
    }
}

// Función para mostrar la información del vehículo en la página
function mostrarInformacionVehiculo(vehiculo) {
    document.getElementById('matricula').textContent = vehiculo.matricula;
    document.getElementById('marca').textContent = vehiculo.marca;
    document.getElementById('modelo').textContent = vehiculo.modelo;
    document.getElementById('color').textContent = vehiculo.color;
    document.getElementById('año').textContent = vehiculo.año;
    document.getElementById('fechaItv').textContent = vehiculo.fechaItv;

}

// Llamar a la función para mostrar la información del vehículo
mostrarInformacionVehiculo(vehiculo1);

var matriculaSpan = document.getElementById('matriculaBoton');
matriculaSpan.textContent = vehiculo1.matricula;