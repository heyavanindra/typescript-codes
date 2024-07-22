// function greeting(name: string){
//  console.log("hey "+ name);
 
// }
// greeting("avanindra")

// type inference
// function isLegal (age: number):boolean{
// if (age>=18) {
//     return true;
    
// }else return false;
// }
// console.log(isLegal(23));

function afterSec(fn: ()=>void){
    
    setTimeout(fn, 1000);
}
function print():void{
    console.log("hello world");
    
}
afterSec(print)
