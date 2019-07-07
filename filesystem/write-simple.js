const fs = require('fs');

fs.writeFile('target.txt', '\nwrite data via nodejs', (err) => {
    if(err) throw err;
    console.log('File saved!');
})