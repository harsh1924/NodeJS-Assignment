const fs = require('fs');
fs.readFile('nodejs_architecture.txt', (err, data) => {
    if (err) {
        console.log('Error');
    }
    console.log(data.toString());
});

// OUTPUT: Node.js is a JavaScript-based platform that is mainly used to create I/O-intensive web applications such as chat apps, multimedia streaming sites, etc. It is built on Google Chrome’s V8 JavaScript engine. A web application is software that runs on a server and is rendered by a client browser that accesses all of the application’s resources through the internet.