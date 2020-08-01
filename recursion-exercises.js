// Counting Sheep Problem
 function sheepHop(num) {
    if (num === 0) { // base case, when number === 0, all sheep went over the fence. 
        console.log('All the sheep jumped over the fence!')
        return;
    }
    
    // recursive case, continue until num === 0 so all sheep jump over
    console.log(`${num} sheep jumped over the fence!`);
    sheepHop(num - 1); // subtract any number that was already passed through/logged the recursive case. 
}

// console.log(sheepHop(5));

// Power Calculator Problem
function powerCalculator(base, exponent) {
    if (exponent < 0) { // catch for any negative exponent numbers passed through. 
        return 'exponent should be greater than or equal to 0';
    }
    if (exponent === 0) { // base case, if exponent === 0, return 1. 
        return 1;
    } 

    // general case, return the base times the recursion function. 
    return base * powerCalculator(base, exponent - 1) // subtract any exponent num that already passed through the recursive case. 
}

// console.log(powerCalculator(10, 2));
// console.log(powerCalculator(10, 5));
// console.log(powerCalculator(10, -2)); 

// Reverse String Problem
function reverseString(someString) {
    if (someString === '') { // base case, if string is blank, return blank. 
        return '';
    }

    // general case, take each string and return it reversed until every word and character has gone through recursion. 
    return reverseString(someString.slice(1)) + someString.charAt(0); 
}

// console.log(reverseString('Ravioli world is fun'));

// nth Triangular Number Problem
function triNumbers(num) {
    if (num === 1) { // base case, if number equals 1, return 1. 
        return 1;
    }

    // general case, take number and add each number that passes through recursion. 
    return num + triNumbers(num - 1)
}

// console.log(triNumbers(9));

// String Splitter Problem
function splitString(string, separator) {
    if (string.length === 0) { // exit case, if string length === 0, return blank string (nothing to split)
        return '';
    }
    // if the string equals the separating parameter, skip over it in returned string.
    else if (string[0] === separator) { 
        return splitString(string.slice(1), separator);
    }

    // general case, return new string and remove the separator as many times as necessary. 
    else { 
        return string[0] + splitString(string.slice(1), separator)
    }
}

// console.log(splitString('04/15/2020', '/'));
// console.log(splitString("40,50,60", ","));
// console.log(splitString("You are my sunshine", " "));

// Fibonacci Sequence Problem
function fibonacci(num) {
    if (num === 0) {  // base case #1, if number === 0, return 0. 
        return 0;
    }
    else if (num === 1) { // base case #2, if number === 1, return 1. 
        return 1;
    }
    else if (num === 2) { // base case #3, if number === 2, return 1. 
        return 1;
    }

    //general case, add preceding number + number preceding number for fib sequence sum.
    return fibonacci(num - 2) + fibonacci(num -1)
}

// console.log(fibonacci(7));
// console.log(fibonacci(6));

// Factorial Problem
function factorial(num) {
    if (num === 0) { // base case, if num === 0, return 1. 
        return 1;
    }
    else { // general case, return num * every number before it. 
        return num * factorial(num - 1);
    }
}

// console.log(factorial(5));
// console.log(factorial(7));

// Maze Problems 
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function miniEscape(maze, position = 0, row = 0, column = 0, direc = 'V' , path = []) {
    // rule out any out of bounds movements 
    if (column < 0 || row < 0) {
        return;
    }
    else if (column >= maze[0].length || row >= maze.length) {
        return;
    }

    path[position] = direc; 
    position++; 
    
    // base case, if positioning is already at exit, leave. 
    if (maze[row][column] === 'e') {
        console.log(path);
        return;
    }

    // general case, recursive until exit is reached.
    if (maze[row][column] === ' ') {
        
        maze[row][column] = 'V';

        miniEscape(maze, position, row - 1, column, 'U', path); // go up
        miniEscape(maze, position, row, column + 1, 'R', path); // go right
        miniEscape(maze, position, row + 1, column, 'D', path); // go down
        miniEscape(maze, position, row, column - 1, 'L', path); // go left
    }

    position--;
}

// console.log(miniEscape(mySmallMaze));
// console.log(miniEscape(maze));

function bigEscape(maze, position = 0, row = 0, column = 0, direc = 'V', path = []) {
    // rule out any out of bounds movements 
    if (column < 0 || row < 0) {
        return;
    }
    else if (column >= maze[0].length || row >= maze.length) {
        return;
    }

    path[position] = direc;
    position++;

    // base case
    if (maze[row][column] === 'e') {
        console.log(path);
        return;
    }

    // general case, keep moving until exit, but also make spots blank on each recursive exit so all ways out can be accounted for. 
    if (maze[row][column] === ' ') {
        maze[row][column] = 'V'; 

        bigEscape(maze, position, row - 1, column, 'U', path); // go up
        bigEscape(maze, position, row, column + 1, 'R', path); // go right
        bigEscape(maze, position, row + 1, column, 'D', path); // go down
        bigEscape(maze, position, row, column - 1, 'L', path); // go left    
        
        maze[row][column] = ' ';
    }
    position--;
}

// console.log(bigEscape(maze));
// console.log(bigEscape(mySmallMaze));

// Anagrams
function getAnagrams(prefix, word) {
    if (word.length <= 1) { // base case, if word length is less than or equal to 1, return prefix and word. 
        console.log(prefix + word);
    }
    else { //general case, loop through the word length and all parts of the string in different orders for the anagram. 
        for (let i = 0; i < word.length; i++) {
            const currentWord = word.substring(i, i + 1);
            const wordBefore =  word.substring(0, i);
            const wordAfter = word.substring(i + 1);
            getAnagrams(prefix + currentWord, wordBefore + wordAfter);
        }
    }
};

// console.log(getAnagrams('', 'east'));

// Organization Chart
const org = [
  {id: 'Zuckerberg', boss: null},
  {id: 'Schroepfer', boss: 'Zuckerberg'},
  {id: 'Schrage', boss: 'Zuckerberg'},
  {id: 'Sandberg', boss: 'Zuckerberg'},
  {id: 'Bosworth', boss:'Schroepfer' },
  {id: 'Zhao', boss:'Schroepfer' },
  {id: 'Steve', boss:'Bosworth' },
  {id: 'Kyle', boss:'Bosworth' },
  {id: 'Andra', boss:'Bosworth' },
  {id: 'Richie', boss: 'Zhao'},
  {id: 'Sofia', boss: 'Zhao'},
  {id: 'Jen', boss: 'Zhao'},
  {id: 'VanDyck', boss:'Schrage' },
  {id: 'Swain', boss:'Schrage' },
  {id: 'Sabrina', boss:'VanDyck' },
  {id: 'Michelle', boss:'VanDyck' },
  {id: 'Josh', boss:'VanDyck' },
  {id: 'Blanch', boss:'Swain' },
  {id: 'Tom', boss:'Swain' },
  {id: 'Joe', boss:'Swain' },
  {id: 'Goler', boss:'Sandberg' },
  {id: 'Hernandez', boss:'Sandberg' },
  {id: 'Moissinac', boss:'Sandberg' },
  {id: 'Kelley', boss:'Sandberg' },
  {id: 'Eddie', boss:'Goler' },
  {id: 'Julie', boss:'Goler' },
  {id: 'Annie', boss:'Goler' },
  {id: 'Rowi', boss:'Hernandez'},
  {id: 'Inga', boss:'Hernandez'},
  {id: 'Morgan', boss:'Hernandez'},
  {id: 'Amy', boss:'Moissinac'},
  {id: 'Chuck', boss:'Moissinac'},
  {id: 'Vinni', boss:'Moissinac'},
  {id: 'Eric', boss:'Kelley'},
  {id: 'Ana', boss:'Kelley'},
  {id: 'Wes', boss:'Kelley'},
];

function organizeTree(org, boss) {
    let tree = {}; // blank object to hold all values in hierarchy. 

    org.filter(item => item.boss === boss) // filter through by boss to find all bosses and employees.
        .forEach(item => tree[item.id] = organizeTree(org, item.id))
    
    return tree; // return the org tree. 
}

// console.log(JSON.stringify(organizeTree(org, null))); 

// Binary Problem 
function binaryRep(num) {
    const dividedNum = Math.floor(num/2); // round down from decimal point
    const remainder = num % 2; 

    if (num === 0) { // base case, if num === 0 return 0. 
        return '0';
    }
    if (dividedNum === 0) { // if divided number equals 0, return the remainder. 
        return `${remainder}`
    }
    return binaryRep(dividedNum) + remainder.toString(); //general case, add dividednumber and remainder (convert to string)
};

// console.log(binaryRep(25));