/* @jxvtrl */
//PARA ENTRADA DO VALOR USE: lines.shift()

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = Number(lines.shift())
for(var c = 1;c<=entrada;c++){
    console.log(`${c} ${c**2} ${c**3}`)
    console.log(`${c} ${(c**2)+1} ${(c**3)+1}`)
}