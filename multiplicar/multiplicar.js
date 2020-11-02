const fs = require('fs');
const colors = require('colors');

let data = '';

let listar = (base, limite) =>  {
    console.log('============================'.green);
    console.log(`=====tabla de ${base} ===========`.blue);
    console.log('============================'.green);
    for (let index = 1; index <= limite; index++) {
        data += `${base} * ${index} = ${ base * index } \n`;
    }
    return data;
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La valor introducido no es un número => [${base}]`);
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${ base * index } \n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listar
}