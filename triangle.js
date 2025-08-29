//user input based triangle generator using a loop, within a function

let height = prompt("Enter height of triangle: ")

function triangle(height){
      
    // for(let i = 0 ; i <= height ; ++i){

    //     console.log("i" + i);
    //     //This and line 14 were used to show that the loop is working

    //     for(let j = 0 ; j <= i ; ++j){

    //     console.log("j" + j);

    //         console.log("*");
    
    //     }

    // }

    //The above approach(without line 10 and 14) wouldn't show clearly as the console shows the identical outputs in a single
    //line with a number before the line indicating how many identical outputs there are.(from my observation)

    //I opted to use this approach instead, so the lines would be different and be shown line by line.

    let char = "*"

    for(let i = 0    ; i <= height ; ++i){

            console.log("*" + char.padStart(i, " "));
            //padstart was used to make space before the char was printed, the space being determined by the
            //incrementing i

    }
    
}

triangle(height)

/*
Just tested the code, and it's functional, although I would like to point out that
given the current output, the last base of the triangle is missing...

Example:
**
* *
*  *
*   *

Suggestions:
- In line 27, you declared a variable 'char' to store the asterisk(*), yet at line 31, you still raw coded "*",
therefore, you should utilize the variable

- A better practice in programming is to write your comments above the code you're trying to explain/outline,
in this way, other programmers will read your comment first before the code itself

- When writing for loops, use '<' instead of '=<' as much as possible to follow conventions and avoid confusion

- Although functional, a simpler solution would be to use a nested for loop:
    * 1st loop => to iterate over the height of the triangle
    * 2nd loop => display the '*' in the current row

Try running this code:
===============================================================
for (let i = 1; i <= 5; ++i) {
    for (let j = 0; j < i; ++j) process.stdout.write('*');
    console.log();
}
===============================================================
Pros:
* Concise syntax & great use of for loops
===============================================================

"Padayon lang, I hope you learned from this problem!"
- dreyyan
*/