//Función arrow
var demo = ['a','b','c','d','f'];

demo.forEach(value => {
    console.log('demo :' + value);
});

var sum = (a,b)=> a + b;

setInterval(() => {
    console.log('hi world');
}, 100)

//Parámetros por defecto
function greet(name, gender = 'Mr.', greeting = 'hello '+gender){
    console.log(greeting+ ' '+name);
}

greet('Peter');
greet('Alex', undefined, 'whats up');

//Parámetros Rest
function printName(name, ...fancyName){
    var fullName = name;
    fancyName.forEach(fancyN => fullName += '' + fancyN);

    console.log(fullName);
}

printName('Felipe');
printName('Felipe', 'Juan', 'froilan');

//Clases y herencia
class Document {
    constructor(title, author, isPublished) {
        this.title = title;
        this.author = author;
        this.isPublished = isPublished;
    }

    publish(){
        this.isPublished = true;
    }
}

class Book extends Document {
    constructor(title, author, topic) {
        super(title, author, topic);
        this.topic = topic;
    }
}
//Módulos
module "utils"{
    export function greeting(name){
        console.log('Hi! ' + name);
    }
}

import { greeting } from "utils"
var app = {
    welcome: function(){
        greeting('Mike');
    }
}
export app;

//Operador de propagación (Spread operator)
function fe(x, y, z){ }

var args = [0, 1, 2];
fe(...args);

function f(v, w, x, y, z) { }
var args = [0, 1];
f(-1, ...args, 2, ...[3]);
//example2
var parts1 = ['shoulder', 'knees'];
var parts2 = ['chest', 'waist'];
var lyrics = ['head', ...parts1, ...parts2, 'and', 'toes'];
//lyrics = ['head', 'shoulder', 'knees', 'chest', 'waist', 'and',
'toes']

//Destructuring

//Template Literals
var a = 5;
var b= 10;

console.log(`Fiften is ${a + b} and not ${2*a+b}.`);

//Tagged template literals
var naem = 'Peter';
var last_name = 'Rueda';

function sayHello(strings, ...values){
    console.log(strings[0]);
    console.log(strings[1]);
    console.log(values[0]);
    console.log(values[1]);

    return `Hello ${values[0]} ${values[1]}`;
}
var greeting = sayHello`Name ${name}, surname ${last_name}`;
console.log(greeting);// Hello Peter Griffin

//For ... of loop
var numbers = [1,2,3,4,5];
for(let item of numbers){
    //remember let is useful to define local vars
    console.log(item);
});
//1, 2, 3, 4, 5

//ES6
var word = "foo";
for(let item of word){
    console.log(item);
});
//"f", "o", "o"

let iterable = [3, 5, 7];
iterable.foo = "hello";
for (let i in iterable) {
    console.log(i); // logs 0, 1, 2, "foo"
}
for (let i of iterable) {
    console.log(i); // logs 3, 5, 7
}

//Map
let map = new Map();
map.set('foo', 123);

let user = {userId: 1};
map.set(user, 'Alex');

map.get('foo');
map.get(user);

map.size;
map.has('foo');

map.delete('foo');
map.has('foo');

map.clear();
