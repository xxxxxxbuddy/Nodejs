'use strict';
const netClient = require('net').connect({port: 60301});
const ldjClient = require('./lib/ldj-client').connect(netClient);

ldjClient.on('message', message => {
    if(message.type === 'watching') {
        console.log(`Now watching ${message.file}`);
    } else if (message.type === 'changed') {
        const date = new Date(message.timestamp);
        console.log(`File changed: ${date}`);
    } else {
        console.log(`Unrecognized message type: ${message.type}`);
    }
});