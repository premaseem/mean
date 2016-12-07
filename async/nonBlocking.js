/**
 * Created by Aseem on 12/7/16.
 */

console.log("1: Start app")

var slowProcess = setTimeout(function(){
    console.log("2: app processing async - non blocking ");
},1000);

console.log("3: Exit app")