//1 задание
var arr = [-3,2,5,6];
arr.length=3;
function arraySum(arr){
var sum = 0;
for(var i = 0; i < arr.length; i++){
    if (i > 0){
    sum += arr[i];
    }
}
console.log('Summa polojitelnih =', sum);
}


//2 задание
arraySum(arr);
//Произведение
var proizvedenie = arr.reduce(function(a,b){return a*b;}); 
//Сумма
var summa = arr.reduce(function(a,b){return a+b;}); 
//
var z = Number (proizvedenie) + Number (summa) + 3;
console.log('Summa + Proizvedenie + 3 =', z);

//3 Задание
console.log('Min-arr:', Math.min(...arr));
console.log('Min-arr:',Math.max(...arr));

var min = Math.min(...arr);
var max = Math.max(...arr);
var imin = arr.indexOf(min);
var imax = arr.indexOf(max);

console.log('Index-min =', imin);
console.log('Index-max =', imax);


//5 Задание
function summ (max) {
    function rand (max) {
        return Math.round(Math.random() * (max));   
    }
    var mas = [],
        sum = 0;
    for (var i = 0; i < max; i++) {
        mas[i] = rand(max);
        ((i % 2) !== 0) ? sum += mas[i] : '';
    }
    console.log('Massiv: ' + mas);
    console.log('Summa nechetnih: ' + sum);
}
summ(10);
