"use strict";
const read=require("readline");
const rl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

let s=rl.question("Enter your value");
console.log(s);
//Undefined; the program doesn't terminate
//How to fix this