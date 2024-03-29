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

//destructuring objetos rename variables
let persona={
    folio:123,
    nombre:"pedro fragoso",
    edad:28
};
console.log(persona);
let {folio:numPersona,nombre,edad:age}=persona;
console.log(numPersona,nombre,age);

//destructuring parameters function
function countdown({initial, final, interval}){
    let current=initial;
    while(current > final){
        console.log(current);
        current -= interval;
    }
}
countdown({initial:10,final:0,interval:1})

//destructuring parameters function, assigning value to another variable
function countdown({initial, final, interval, initial: current}){
    while(current>final){
        console.log(current);
        current-=interval;
    }
}
countdown({initial:20,final:0,interval:2})

//destructuring parameters with default values
function countdown({initial:current=20,final=0,interval:interval=1}){
    while(current>final){
        console.log(current);
        current-=interval;
    }
}
countdown({});