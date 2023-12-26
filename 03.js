const fs = require('fs');
fs.appendFile('nodejs_architecture.txt', 'The NodeJS runs event-driven operations, where each task is triggered by the use of events which deploys a callback function. The NodeJS runtime is an asynchronous operation and doesnt block other tasks while enabling a smooth operation. Although, there are many operations that can run synchronously like the file reader API that provides the and can run synchronously. The NodeJS runs an input/output model which involves reading and writing or manipulating files and returning data from and to the disk, HTTP requests, and also interacting with the database. NodeJS also uses modules to run a lightweight environment which means that modules are imported at runtime to improve efficiency and reduce bloating.', (err) => {
    if (err) {
        console.log('ERROR');
        console.log(err);
    }
    console.log('More Data Added!');
})

// OUTPUT: More Data Added