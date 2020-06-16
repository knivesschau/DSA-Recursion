// Counting Sheep Problem
let num = 5; 

function sheepHop(num) {
    if (num === 0) {
        console.log('All the sheep jumped over the fence!')
    }
    else {
        console.log(`${num} sheep jumped over the fence!`);
        sheepHop(num - 1); 
    }
}

sheepHop(num);

// Power Calculator Problem
function powerCalculator(base, exponent) {
    if (exponent < 0) {
        return 'exponent should be greater than or equal to 0';
    }
    if (exponent === 0) {
        return 1;
    } 
    return base * powerCalculator(base, exponent - 1)
}
console.log(`${powerCalculator(10, 2)}`)

// Reverse String Problem
function reverseString(someString) {
    if (someString === '') {
        return '';
    }
    
    return reverseString(someString.slice(1)) + someString.charAt(0);
}

console.log(reverseString('Ravioli'));

// nth Triangular Number Problem
function triNumbers(num) {
    if (num === 1) {
        return 1;
    }
    return num + triNumbers(num - 1)
}

console.log(triNumbers(9));

// String Splitter Problem
function splitString(string, separator) {
    if (string.length === 0) {
        return '';
    }
    else if (string[0] === separator) {
        return splitString(string.slice(1), separator);
    }
    else {
        return string[0] + splitString(string.slice(1), separator)
    }
}

console.log(splitString('04/15/2020', '/'));

// Fibonacci Sequence Problem
function fibonacci(num) {
    if (num === 0) {
        return 0;
    }
    else if (num === 1) {
        return 1;
    }
    else if (num === 2) {
        return 1;
    }

    return fibonacci(num - 2) + fibonacci(num -1)
}

console.log(fibonacci(7));

// Factorial Problem
