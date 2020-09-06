"use strict";
let fs=require("fs");
let s = "This is a file content";
fs.writeFileSync("newfile",s)