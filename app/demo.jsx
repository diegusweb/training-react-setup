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
