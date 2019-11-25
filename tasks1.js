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



// 7 задание определить простое ли число
var p4 = 1223;
    if ((p4 % 2 == 0)&&(p4 != 2)) // любое четное число - составное
        print("Sostavnoe");
    else if (p4 == 2)//число 2 простое
        print("Prostoe");
    else{ // число нечетное
         k=Math.round(Math.sqrt(p4));
         flag = false;                
         for(i=2; i<k+1; i++)
            if(p4 % i == 0)
            {
                print("Sostavnoe");
                flag = true;
              break;
             }
                
         if (flag == false)
         print("Prostoe");
    }

//8 Факториал числа 
    var factor = function(number) {
        var result = 1;
        var count;
        for (count = number; count > 1; count--) {
        result *= count;
        }
        return result;
       };
       print(factor(6)); //720

// 9 Сумма цифр числа 
var an = 123456789;
var bn = 0;
for(var i = +an; i > 0; i = parseInt(i/10)) {
        bn += +i%10;
    }
print(bn);//Результат 45

// 10 Отразить число
var str = '12345';
str = str.split("").reverse().join("");
print(str); //54321 результат

// 11 Реверс массива
print(revs = digits.reverse()); // [ 34, 12, -3 ] результат

//12 количество нечетных элементов массива
var mas1 = [2, 24, 25, 75, 46, 90, 23, 11];
sum1 = 0;
for (var i = 0; i < mas1.length; i++) {
    if (mas1[i] % 2 && mas1[i] !==0) {
        sum1 += 1;
    }
}
print(sum1); // результат 4



// 13 Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
var sum2 = 0;
for (var i = 0; i < mas1.length; i++) {
        sum2 += 1;
}
var countArr = (sum2 / 2);

arr1 = (mas1.slice(0, countArr)); 
arr2 = (mas1.slice(countArr, mas1.length)); 
arr2 = (revs = arr2.reverse());
var newArray = arr1.concat(arr2);

print(newArray); // результат [2, 24, 25, 75, 11, 23, 90, 46] Отмечу что данный вариант от и до написан мной )))
