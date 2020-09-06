"use strict";
const read=require("readline");
const rl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your value\n",
    (s)=> {
    console.log(s);
    rl.close();
    process.exit();
    }
    );

