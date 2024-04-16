//Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Example usage
console.log(reverseString("hello")); 

//Count Characters
function countCharacters(str) {
    return str.length;
}
// Example usage
console.log(countCharacters("hello"));

//Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
// Example usage
console.log(capitalizeWords("hello world"));

//Find Minimum and Maximum
function findMax(arr) {
    return Math.max(...arr);
}
function findMin(arr) {
    return Math.min(...arr);
}
// Example usage
console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMin([1, 2, 3, 4, 5])); 

//Sum of Arrays
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}
// Example usage
console.log(sumArray([1, 2, 3, 4, 5]));

//Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
// Example usage
console.log(filterArray([1, 2, 3, 4, 5], (num) => num % 2 === 0)); 

//Finding Factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
// Example usage
console.log(factorial(5));

//Checking Prime Numbers
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Example usage
console.log(isPrime(7));
console.log(isPrime(10)); 

//Fibonacci Sequence
function fibonacci(num) {
    const sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
// Example usage
console.log(fibonacci(5));
