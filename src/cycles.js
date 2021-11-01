// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99;

function sumAndNumberOfEveNumbers() {
let evenNumbers = 0;
let summ = 0;

for (let i = 0; i < 99; i++) {

    if (i % 2 === 0) {
        evenNumbers++
    } else {
        summ += i
    }
}

console.log(`Количество целых чисел ${evenNumbers}`);
console.log(`Сумма целых чисел ${summ}`);
}

console.log(sumAndNumberOfEveNumbers()); // 50, 2450;

// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1);

function isNumberSimple (number) {
    let suitableNumbers = [];
    let result = Boolean();

    // В suitableNumbers добавим  числа на которые number делится без остатка 
    for (let i = number; i > 0; i--) {
        number % i === 0 ? suitableNumbers.push(i) : true;
    }

    // Если длина suitableNumbers не более 2, то число является простым
    suitableNumbers.length === 2 ? result = true : result = false;

return  result; 
}

console.log('Проверяем является ли число простым ' + isNumberSimple(23)); // true


// 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска);

// const rootOfNumber = number => Math.round(Math.sqrt(number));

function rootOfNumberLine (number) {
    for (let i = 0; i < number; i++) {
        if (i * i > number) {
            return i - 1;
        }
    }
}

console.log('Находим корень числа при помощи алгоритма последовательного перебора ' + rootOfNumberLine (25)); // 3

function rootOfNumberBinary (number) {
    let left = 0;
    let right = number;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;
            if (mid * mid === number) {
                return mid;
            } else if (number < mid * mid) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }     
    }
}

console.log('Находим корень числа при помощи алгоритма бинарного поиска ' + rootOfNumberBinary(9));

// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;

// const numberFactorial = number => number != 1 ? number * numberFactorial(number - 1) : 1; // Вариант со стрелкой

    function numberFactorial (number) { // Вариант с function declaration
        if (number != 1) {
           return number * numberFactorial(number - 1)
        } else return 1
    }

console.log('Находим факториал чила ' + numberFactorial(7)); // 5040

// 5. Посчитать сумму цифр заданного числа

// const summOfNumbers = (number) => number.toString().split('').reduce((accum, number) => +accum + + number);

function summOfNumbers (number) {
    let result = 0;
    let numberToArr = String(number).split('');

    for (let i = 0; i < numberToArr.length; i++) {
        result += Number(numberToArr[i]);
    }

return result     
}

console.log('Находим сумму чисел заданого числа ' + summOfNumbers(123)); // 6

// 6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

// const reverseNumber = number => +(number.toString().split('').reverse().join('')); // Через методы массивов куда красивее и короче =)

function reverseNumber (number) {
    let result = [];
    let numberToArr = String(number).split(',');

    for (let i = numberToArr.length - 1 , k = 0; i >= 0; i--, k++) {
        result[k] = numberToArr[i]
    }

return result;    
}

console.log('Выводим зеркальное отображение числа ' + reverseNumber(123)); // 321




