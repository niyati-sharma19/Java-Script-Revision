<<<<<<< HEAD
// let & const declarations are hoisted  
console.log(b); // undefined due to  hoisting 
console.log(a) ;// refrence type error 
let a = 10 ;
var b = 100;


=======
// let & const declarations are hoisted  
console.log(b); // undefined due to  hoisting 
console.log(a) ;// refrence type error 
let a = 10 ;
var b = 100;
 /* window.a = undefined as let has different reseverd space .
 window.b = 100 => as it has window scope  * global scope

 */

let c ;
c = 8000 ;
const d = 78; 
>>>>>>> c488c1d (jJSrevision)
/* What is Temporal Dead Zone (TDZ)?
Both let and const are hoisted, but they cannot be accessed before their declaration is evaluated.
console.log(a); // ReferenceError

let a = 10;

Why?

Because the variable exists in the scope but remains inaccessible until its declaration is executed.
*/