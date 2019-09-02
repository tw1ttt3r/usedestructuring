//destructuring Array
let array=[100,200,300];
let [cien,doscientos,trescientos] = array;

console.log(cien,doscientos,trescientos);

//destructuring variables
let a=5;
let b=1;
console.log(a,b);
[b,a]=[a,b];
console.log(a,b);

//destructuring objetos
let objeto={
    id:1,
    name:"pedro",
    active:true
};
console.log(objeto);

let {id,name,active} = objeto;

console.log(id,name,active);