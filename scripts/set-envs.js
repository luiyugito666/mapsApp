/* este script nos servira para crear de manera automatizada nuestros variables de entorno */

/* importareremos y desustructuremos del rquire(fs) del file system, dos cosas, el  writeFileSync mkdirSync*/
const {writeFileSync, mkdirSync} = require('fs')

require('dotenv').config();

//creamos el path donse se va a crear el archivo de la variable de entorno
const targetPath = './src/environments/environmet.ts';

const envFileContent = `
export const environment ={
mapbox_key:"${process.env['MAPBOX_KEY']}",
otra:"propiedad"
};`;
//crearemos la carpeta, si existe, lo volvera a crear
mkdirSync('./src/environments', { recursive: true })
/* con el siguiente comando se envia los parametros del ath y el script */
writeFileSync(targetPath, envFileContent);

//par que este escrip funciones se ejecura con un comando desdeel package.json, dentro de la seccion scripts, alli creamos la siguiente linea "envs":"node ./scripts/set-envs.js", luego para autamatizar un poco mas la cracion de la variable de entorno, dentro de la seccion scripts, modificamos el start con "start":"npm run envs && ng serve" y tambien modificamos al build con "build":"npm run envs && ng build" y en el comando lo ejecutamos en el npm
