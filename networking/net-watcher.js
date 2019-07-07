const net = require('net');
const fs = require('fs');
const fileName = process.argv[2];

if(!fileName)
    throw new Error('Error: No filename specified.');

net.createServer(connection => {
    // Reporting.
    console.log('Subscriber connected.');
    connection.write(`Now watching ${fileName} for changes...\n`);

    // Watcher setup.
    const watcher = fs.watch(fileName, () => connection.write(`File changed: ${new Date()}\n`));

    // Cleanup.
    connection.on('close', () => {
        console.log('Subscriber disconnected.');
        watcher.close();
    });
}).listen(60300, () => console.log('Listening for subscribers...'));