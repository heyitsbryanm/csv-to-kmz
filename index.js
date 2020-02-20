const express = require('express');
const app = express();
const config = require('./config');


// app.get('/', (req,res)=> {
    //     res.sendFile(path.join(__dirname + '/html/test.html'));
    // })
    
    
app.listen(config.debug.port, () => console.log(`Example app listening on port ${config.debug.port} - Dir name is ${__dirname}`))
    
const router = require('./router/router.js');
app.use('/', router); // uses the paths defined in './router/router.js'

// app.get('/', (req, res) => res.send('Hello World!'))
