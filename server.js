const fs = require('fs'); 
const path = require('path'); 

// express.js
const express = require('express'); 
const app = express(); 

// link to assets
app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json()); 

// PORT 
const PORT = 3000;

app.get('/', function (res, req) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
}); 

app.use('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
}); 

app.use('/api/notes', (req, res) => {
    res.json([{'title':'Test Title','text':'Test text'}])
});``

app.listen(PORT, e => console.log('Running'))

