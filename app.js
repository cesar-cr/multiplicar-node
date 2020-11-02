const argv = require('./config/yargs').argv;
const colots = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

// console.log(argv)
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(listar(argv.base, argv.limite));
        console.log('============================'.green);
        console.log(`=====tabla de ${argv.base} ============`.blue);
        console.log('============================'.green);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}

//let argv2 = process.argv;
//console.log(argv.base);
//console.log('limite: ' + argv.limite);
//console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];