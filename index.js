const express = require('express');

const app = express();

app.use('/', express.static(__dirname));

app.get('/', function(req, res) {
        console.log(`${__dirname}`);
        res.sendFile('./app/build/index.html', { root: __dirname });
});

app.listen(3000, () => {
        console.log('Server started!');
});
