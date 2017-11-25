var express = require('express')
var fs = require('fs')
var app = express()
app.get('/books', function(req, res){
    fs.readFile(process.argv[3], (error, data) => {
        if (error) {
            console.log(error)
        }
        res.send(JSON.stringify(JSON.parse(data)));
    })
});
app.listen(process.argv[2])
