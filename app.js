require("./requireModule1")
var fun1 = require("./moduleExport/exportFunction1")
fun1()
var talk = require("./moduleExport")
talk.met1()


var question = require("./moduleExport/question");
answer = question.ask1("what is the meaning of life ");
console.log(answer)
