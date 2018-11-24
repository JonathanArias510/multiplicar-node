// require.
/*
Existen 3 tipos de require:
1- Nativos de node.
2- Hechos por terceros.
3- Propios que se distinguen por requerirlos con './'.
*/



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

var colors = require('colors/safe');

let comando = argv._[0];


switch (comando) {
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;

	case 'crear':
		console.log('Crear');
		crearArchivo(argv.base, argv.limite)
			.then( archivo => console.log(`Archivo creado: `,colors.green(archivo)))
			.catch( err => console.log(err))
		break;

	default:
	console.log(`Comando no reconocido`);

}





// let parametro = argv[2];
// let base = parametro.split('=')[1]
