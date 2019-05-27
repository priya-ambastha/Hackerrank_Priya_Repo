'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonant;

    let vowel;



    var index = 0;

    for (index = 0; index <= s.length; index++) {

        if (s[index] == 'a' || s[index] == 'e' || s[index] == 'i' || s[index] == 'o' || s[index] == 'u') {

            console.log(s[index]);

        }



    }

    for (index = 0; index < s.length; index++) {

        if (s[index] == 'a' || s[index] == 'e' || s[index] == 'i' || s[index] == 'o' || s[index] == 'u') {

            continue;

        }

        else {

            console.log(s[index]);

        }

    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}