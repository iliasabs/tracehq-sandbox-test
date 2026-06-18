const express = require('express');
const app = express();

// generate random UUID
app.get('/uuid', (req, res) => {
    const { nanoid } = require('nanoid');
    const uuid = nanoid();
    res.json({ uuid });
});

// listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
