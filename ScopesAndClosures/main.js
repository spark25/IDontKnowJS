// Quirks of Scopes 


// Collision Avoidance 
function foo() {
    function bar(a) {
        i = 3 // Changing the 'i' in enclosing scope's for loop
        console.log(i + a)
    }

    for (var i = 0; i < 5; i++) {
        bar(i + 2) // OOPS, infinite loop ahead! 'i gets overwritten in bar() and always remains = 3'
    }
}

// foo()

// Replacing var with let 
function foo2() {
    // uncommenting below will break the code 
    // 'use strict'  
    function bar(a) {
        i = 3 // Changing the 'i' in enclosing scope's for loop, 
        //in strict mode will throw reference error as 'i' is not defined here
        console.log(a)
    }
    for (let i = 0; i < 5; i++) {
        bar(i) // 
    }
}

// foo2()

/* --------------- Block Scope ---------------- */

var flag = true;
if (flag) {
    var bar = 'I am bar';
    console.log('From "if" block scope', bar)
}

// bar is accessible outside 'if' 
// becuase var will always belong of enclosing scope
console.log("Outside 'if' scope", bar)


var flag2 = true;
if (flag2) {
    let private_bar = 'I am bar';
    console.log('From "if" block scope', private_bar)
}

// Will throw reference error as 
// private_bar is not accesible outside 'if' block
console.log("Outside 'if' scope", private_bar)
