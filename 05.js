const fs = require('fs');
fs.unlink('nodejs_architecture.txt', (err)=>{
    if (err) {
        console.log('Error');
    }
    console.log('File Deleted Successfully!');
})

// OUTPUT: File Deleted Successfully!