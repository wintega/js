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
var num = 1234567;
function reverseNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  return result;
}

print(reverseNum(num));//7654321 результат

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

print(newArray); // результат [2, 24, 25, 75, 11, 23, 90, 46] 

//14 БубльГум
var arr3 = [23, 45, 12, 32, 56, 92, 1];

function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

print(bubbleSort(arr3));  //[1, 12, 23, 32, 45, 56, 92]

// 15  Сортировка Select / Insert
const selectionSort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};
print(selectionSort(arr3)); //[1, 12, 23, 32, 45, 56, 92]


const insertionSort = arr => {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};

print(insertionSort(arr3)); //[1, 12, 23, 32, 45, 56, 92]


//16 Массив Рандом

function RandomArray(size, type) { 
    this.size = size || 0;
    this.type = type === 'int' ? 'int' : 'float';
  }
   
  RandomArray.prototype.generate = function(min, max) {
    return this.type === 'int' ?
      [...new Array(this.size)].map(()=>Math.round(Math.random() * (max + 1 - min))) :
      [...new Array(this.size)].map(()=>parseFloat((Math.random() * (max + 1 - min)).toFixed(3)));
  }
   
  print(new RandomArray(5, 'int').generate(-10, 50)); // массив из пяти случайных
