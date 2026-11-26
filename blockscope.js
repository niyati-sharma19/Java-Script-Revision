/*
block is defined by {}   => compound statement 
block combines multiple statement in a group.
it is used when JS expects one statment
SCOPE is all the variables which i can access 
*/
{
    var a = 10;
    let b=90;
    const c= 7;
    console.log(a);
}
if (true){
      console.log("bhbhbh");
}
/*
what is shadowing ?
if you have same named variable outside the block 
*/
var a =100;
{
    var a =  9;
    let b = 20 ;
    const c = 30 ;
    console.log(a); // 9
    console.log(b); // 20 

    console.log(c); //30 
}
console.log(a) ; // 9