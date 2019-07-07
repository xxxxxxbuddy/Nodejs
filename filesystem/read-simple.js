const fs = require('fs');

fs.readFile('target.txt', (err, data) => {
    if(err) throw err;

    console.log(data);
    console.log(`\n${data.toString()}`);
})
