/**
 * Created by pramod on 8/2/2016.
 */
var container = document.getElementById('container');

function countdown(initial, final = 0, interval = 1, start = 11){
    var current = initial;
    while (current > final){
        container.innerHTML = current;
        current -= interval;
    }
}

function calculateTotal(x:string,y){
    let total = x.length + y.length;
    return total;
}

interface Todo{
    name:string;
    completed?:boolean;
}

interface ITodoService{
    add(todo : Todo):Todo;
    delete(todoId:number):void;
    getAll():Todo[];
    getById(todoId:number):Todo;

}

var todo : Todo = {name:'hello'};