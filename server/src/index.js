const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.send('Home here');
})


app.listen(3030, () => {
    console.log(`Application is running on http://localhost:${3030}...`)});
