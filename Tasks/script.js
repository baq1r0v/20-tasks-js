// Task 1
// let x = prompt("Enter a 2-digit number");
// console.log(x)
// lastDigit = (x % 10);
// console.log('The last digit of is ', lastDigit);






// Task 2
// let number = parseInt(prompt("Enter a number that has an odd number of digits"))

// let num = number
// let length = 0
// while (num > 0) {
//     num = parseInt(num / 10)
//     length++
// }
// const n = Math.ceil(length / 2)
// const result = parseInt((number % (10 ** n)) / (10 ** (n - 1)))

// alert(result)





// Task 3
// let x = prompt("Enter a number", "Example: 16, 84");
// console.log(x)
// lastDigit = (x % 10);
// lastValue = ((x - lastDigit) / 10)
// console.log(lastValue)





// Task 4

// let number = parseInt(prompt("Enter a number"))

// let num = number
// let length = 0
// while (num > 0) {
//     num = parseInt(num / 10)
//     length++
// }
// const result = parseInt(number % (10 ** (length - 1)))

// alert(result)





// Task 5

// let number = parseInt(prompt("Enter a number"))
// if (number % 3 === 0 && number % 5 === 0) {
//     alert("your number can be divided by 3 and 5")
// } else { alert("your number CAN'T be divided by 3 or 5") }






// Task 7

// let number = parseInt(prompt("Enter a number"))
// let n = number + 1;
// while (n % 11 !== 0) {
//     n++
// }
// alert(n)






// Task 9 - 10

// let number = parseInt(prompt("Enter a number"))
// let sum = 0
// while (number != 0) {
//     sum = sum + number % 10;
//     number = Math.trunc(number / 10);
// }
// alert(sum)





// Task 11

// let number = parseInt(prompt("Enter a number"))

// let n1 = Math.trunc(number / 10000);
// let n2 = Math.trunc(number / 1000 % 10);
// let n3 = Math.trunc(number / 100 % 10)
// let n4 = Math.trunc(number / 10 % 10)
// let n5 = Math.trunc(number % 10)

// alert(`${n5}${n4}${n3}${n2}${n1}`)





// Task 12

// let number = parseInt(prompt("Enter a number"))
// let num = number
// let length = 0;
// while (num > 0) {
//     num = Math.trunc(num / 10)
//     length++
// }

// let result = 0;
// for (let i = 1; i <= length; i++) {
//     const lastNum = number % 10;
//     result += lastNum * (10 ** (length - i));
//     number = Math.trunc(number / 10)
// }

// alert(result)





// Task 13

// let a = parseInt(prompt("a"))
// let b = parseInt(prompt("b"))
// let c = parseInt(prompt("c"))
// let Vol = a * b * c;
// alert(Vol)





// Task 15

// let number = parseInt(prompt("Enter a number"))
// if (number === 0) {
//     alert(0)
// } else if (Math.sign(number) === -1) {
//     alert(-1)
// } else {
//     alert(1)
// }





// Task 17

// let number = parseInt(prompt("Enter a number"))
// let d1 = Math.trunc(number / 100 % 10);
// let d2 = Math.trunc(number / 10 % 10);
// let d3 = Math.trunc(number % 10)

// let min = Math.min(d1, d2, d3)
// let max = Math.max(d1, d2, d3)
// let mid = d1 + d2 + d3 - max - min;
// alert(`${min} ${mid} ${max}`)





// Task 19

// let number = parseInt(prompt("Enter a number"))
// let smth = Math.floor(Math.cbrt(number));

// alert(smth ** 3)
