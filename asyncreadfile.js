"use strict";
const fs = require('fs')
fs.readFile('test.txt', 'utf-8', function (err, content) {
    if (err) {
        console.log(err)
    }
    else console.log(content)
});
