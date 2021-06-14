const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/events', (req, res) => {
    readJSON('js/data/karta.json')
    .then(data => res.send(data))
    .catch(err => res.send('Chyba lávky', err));
});

app.get('/api/events/:index', (req, res) => {
    readJSON('js/data/karta.json')
    .then(data => res.send(data[req.params.index]))
    .catch(err => res.send('Chyba lávky', err));
});

const PORT = process.env.PORT || 5050;
server.listen(PORT, () => console.log(`Server běží na portu ${PORT}`));