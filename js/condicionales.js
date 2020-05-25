
// IF

if (true) {
    console.log('Buenos dias!')
}

var num = 1;
var num = -1;

var tiempo = 'sol';

if (tiempo > 'sol') {
    console.log('Buenos dias!');
} else if (tiempo == 'nublado') {
    console.log('Esta nublado, no salgas a la calle');
} else {
    console.log('Buenos noches');

}


//SWITCH
var tiempo = 'sol';

switch (tiempo) {
    case 'sol':
        console.log('Buenos dias');
        break;
    case 'nublado':
        console.log('No salgas a la calle');
        break;
    case 'luna':
        console.log('Buenas noches');
        break;
    default:
        console.log('Error');
        }

//ARRAYS

var mascotas = ['perro', 'gato', 'serpiente'];



var mascotas_plus = [
    'perro', 4, 'boby',
    'gato', 12, 'misha'
];

var nombre = mascotas_plus-indexOf('misha');
// resultado 5
var edad = mascotas_plus[nombre - 1];
var raza = mascotas_plus[nombre - 2]
//push
//shift
//indexOf  BUSCAR