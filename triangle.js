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