// console.log("Hello-World");


var log = function(newMsg) {

        console.log("[msg]:", newMsg);
}

log("Hello brother");


var asyn = function(){
    setTimeout(function() {log ("i am here")},5000)
}
var adder = function(first, second){
    var  sum = first   + second;
    return sum
}
log("sum is " + adder(2,3))
asyn();
