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

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
}); 

app.use('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
}); 

app.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/db/db.json'))
}); 

app.get('api/notes:id', function (req, res) {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
});

app.listen(PORT, e => console.log('Running'))

