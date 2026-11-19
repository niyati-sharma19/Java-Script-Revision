// here undefined and not defined will be studied 
console.log(a); // undefined - this is the value js engine has allocated to the memory 
var a = 9 ;
console.log(a); // 9 
if (a === undefined){
    console.log(" a is undefined");
}
else {
    console.log("a isnot undefined");
}
// undefined as a placeholder to tell whether that variable is assigned something or not 
 a =undefined //  Wrong way in JS