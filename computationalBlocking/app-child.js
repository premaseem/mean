/**
 * Created by asee2278 on 12/7/16.
 */


var child_process = require('child_process');

console.log("Start of process ");
var process = child_process.spawn('node',['./_fibonacci.js'],{
    stdio : 'inherit'
})


console.log("End of process ");

