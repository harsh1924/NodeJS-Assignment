const fs = require('fs');
fs.appendFile('nodejs_architecture.txt', 'The NodeJS is a single-threaded environment which means that it runs one action at a time and runs its operations smoothly with the use of events and event emitters. Events are actions that instruct the runtime what needs to be completed at a given time period with particular data. The event emitters are response objects that can be subscribed to and acted upon to perform certain operations. Event emitters, like the WebSocket, create a connection and emit events based on certain predetermined events that accept a callback. The Node system adds events to a queue (batch) where events and processes are added that are resolved in an order and eventually removed from this queue.', 'utf8', (err) => {
    if (err) {
        console.log('Error');
    }
    console.log('Saved!');
});
fs.readFile('nodejs_architecture.txt', (err, data) => {
    if (err) {
        console.log('Error');
    }
    console.log(data.toString());
});

//OUPUT: SAVED!
//     : Node.js is a JavaScript-based platform that is mainly used to create I/O-intensive web applications such as chat apps, multimedia streaming sites, etc. It is built on Google Chrome’s V8 JavaScript engine. A web application is software that runs on a server and is rendered by a client browser that accesses all of the application’s resources through the internet.The NodeJS is a single-threaded environment which means that it runs one action at a time and runs its operations smoothly with the use of events and event emitters. Events are actions that instruct the runtime what needs to be completed at a given time period with particular data. The event emitters are response objects that can be subscribed to and acted upon to perform certain operations. Event emitters, like the WebSocket, create a connection and emit events based on certain predetermined events that accept a callback. The Node system adds events to a queue (batch) where events and processes are added that are resolved in an order and eventually removed from this queue.
