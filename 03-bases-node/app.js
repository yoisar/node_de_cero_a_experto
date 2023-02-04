
import { writeFile } from 'fs';

console.clear();
const multiplo=5;
console.log('============');
console.log(`Table del ${multiplo}`);
console.log('============');

let salida='';

for (let i = 1; i <= 10; i++) {
    salida += `${multiplo} x ${i} = ${i*multiplo}\n`;
}

writeFile(`tabla-del-${multiplo}`,salida,(err)=>{
    if (err) throw err;
    console.log(`tabla del ${multiplo} creado`);
})
