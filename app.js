const express = require('express');
const path = require('path');
const app = express();









// We did client static that we can connect to frontend.js file
app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
})


app.listen(3000, () => console.log('Server has been started on port 3000...'));