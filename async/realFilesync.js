/**
 * Created by asee2278 on 12/7/16.
 */


var fs = require('fs');

console.log("going to get file Synchronously ")
file = fs.readFileSync('nonBlocking.js');
console.log(file)
console.log("got the file ")

console.log("going to get file Asynchronously ")

var callBackFunc = function(err,file){
    console.log("file content" + file)
    console.log("got the file ")

}

fs.readFile('nonBlocking.js', callBackFunc);

console.log("finished")



