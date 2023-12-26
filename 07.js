const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>I am happy to learn Full Stack Web Development from PW Skills! </h1>')
    }
    res.end();
});
server.listen(5000);
console.log('The server is running on port 5000');

// OUTPUT: The server is running on port 5000 (on console)
//         I am happy to learn Full Stack Web Development from PW Skills! (on server 5000)