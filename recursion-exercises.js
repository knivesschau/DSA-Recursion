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
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));

// Maze Problem - Not Working? 
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

function mazeEscape(maze) {
    this.maze = maze;

    this.traverse = function(column, row) {
        console.log('D')

        if (this.maze[column][row] == 2) {
            console.log("Escaped at (' + column + ', ' + row + ')"); 
        }
        else if (this.maze[column][row] == 1) {
            console.log("Currently at (' + column + ', ' + row + ')"); 
            this.maze[column][row] = 9; 

            if (column < this.maze.length - 1) {
                console.log('R')
                this.traverse(column + 1, row)
            }
            if (column > 0) {
                console.log('L')
                this.traverse(column - 1, row)
            }
            if (row > 0) {
                console.log('U')
                this.traverse(column, row - 1);
            }
        }
    }
}

mazeEscape(mySmallMaze)

// ALL Ways out of the Maze - Not Working? 


// Anagrams
function getAnagrams(prefix, word) {
    if (word.length <= 1) {
        console.log(prefix + word);
    }
    else {
        for (let i = 0; i < word.length; i++) {
            const currentWord = word.substring(i, i + 1);
            const wordBefore =  word.substring(0, i);
            const wordAfter = word.substring(i + 1);
            getAnagrams(prefix + currentWord, wordBefore + wordAfter);
        }
    }
};

getAnagrams('', 'east');

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
    let tree = {};

    org.filter(item => item.boss === boss).forEach(item => tree[item.id] = organizeTree(org, item.id))
    
    return tree;
}

console.log(JSON.stringify(organizeTree(org, null)));

// Binary Problem 
function binaryRep(num) {
    const dividedNum = Math.floor(num/2);
    const remainder = num % 2; 

    if (num === 0) {
        return '0';
    }
    if (dividedNum === 0) {
        return `${remainder}`
    }
    return binaryRep(dividedNum) + remainder.toString();
};

console.log(binaryRep(25));