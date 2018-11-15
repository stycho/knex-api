const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({poop: "womp!"});
})

app.listen(port, () => {
    console.log(`serving up on port: ${port}`)
});