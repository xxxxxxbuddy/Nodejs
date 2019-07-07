"use strict";
const fs = require('fs');
const fileName = process.argv[2];

if(!fileName)
    throw new Error('Please input filename!');
fs.watch(fileName, () => {
    console.log(`${fileName} has changed!`);
    // console.log(`\n${process.argv}`);
})
console.log(`Now watching ${fileName} for changes...`);