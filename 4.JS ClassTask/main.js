
class collection{
    constructor(){
        this.elements=arguments;
    }
   Change= function (callback){
    let newarray = [];
    for (let index = 0; index < this.elements.length; index++) {
        newarray.push(callback(this.elements[index]));
    }
    return newarray;
   }

}
let massiv= new collection(1, 2, 3, 4 ,5 );
let answer=massiv.Change(x=> {return x*5;});
console.log(answer);

function ChangeElement(array, callback){
    let newarray = [];
     for (let index = 0; index < array.length; index++) {
         newarray.push(callback(array[index]));
}
return newarray
}
 let answer1 =ChangeElement([1, 2, 3, 4, 5], Add);
 console.log(answer1);
 
function Add(x){
    return x*5;
}

 function ChangeIndex(array, callback) {
   let newarray = [];
   for (let index = 0; index < array.length; index++) {
     newarray.push(callback(index));
   }
   return newarray;
 }
 let answer2 = ChangeIndex([1, 2, 3, 4, 5], Minus);

 function Minus(x){
   return  x-2;
 }
 console.log(answer2);

