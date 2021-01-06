const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite = 10) => {
    console.log('============='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('============='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`El resultado de ${i} multiplicado por ${base} es: ` + base * i + '\n');
    }
}
let crearArchivo = (base,limite = 10) => {
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject('No es un numero, por favor verifique...');
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `El resultado de ${i} multiplicado por ${base} es: ` + base * i + '\n';
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.text`,data, (err) => {
        if (err) reject(err)
        else resolve(`tabla-${base}.txt`.red);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}