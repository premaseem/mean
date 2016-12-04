

var method1 = function(){
  console.log("function called from exported module method1")
}

var method2 = function(){
  console.log("function called from exported module method2")
}

module.exports  = {
  met1 : method1,
  met2 : method2
}
