function print(x){
    console.log(x);
}

var digits = [-3, 12, 34];

//#1 задание - Найти сумму только положительных из трех чисел______________________
let a = digits[0];
let b = digits[1];
let c = digits[2];

let n = 0;

if (a > 0){
    n += a;
}
if (b > 0){
    n += b;
}
if (c > 0){
    n += c;
} 
print(n); //результат 46

//#2 задание Посчитать выражение: макс(а*б*с, а+б+с) + 3 __________________________________
let x = (a*b*c);
let y = (a+b+c);

if (x > y){
    n = (x + 3);
} else{
    n = (y + 3);
}
print(n); //результат 46 



//#3 задание - Определить, какой четверти принадлежит точка с координатами (х,у)___________________________
if (x > 0 && y > 0){
    print('1 4etvert');
}
if (x < 0 && y > 0){
    print('2 4etvert');
}
if (x < 0 && y < 0){
    print('3 4etvert');
}
if (x > 0 && y < 0){
    print('4 4etvert');
}
// Результат: Выводит 2 четверть (x = - 1224, y = 43)


//#4 задание min max index (min, max)
let max = 0;
let min = 0;
for (var i = 0; i < digits.length; i++) { 
    if (max < digits[i])  max = digits[i];
}
for (var i = 0; i < digits.length; i++) { 
    if (min > digits[i])  min = digits[i];
}
print(min); // [-3, 12, 34] результат -3
print(max); // [-3, 12, 34] результат 34

print(imin = digits.indexOf(min)); // [-3, 12, 34] результат 0
print(imax = digits.indexOf(max)); // [-3, 12, 34] результат 2


//5. Задание - Посчитать сумму элементов массива с нечетными индексами
var mas = [2, 24, 25, 75, 46, 90, 23];
sum = 0;
for (var i = 0; i < mas.length; i++) {
    if (i % 2 && i !==0) {
        sum += mas[i];
    }
}
print(sum); // результат 189 (24+75+90)

//6. Найти сумму чисел от 1 до 99

var sumOtr = 0;
for (var i = 0; i < 99; i++) {
    if ((i % 2) === 0){
    sumOtr += i;
    }
 }

 print(sumOtr); // результат 2450