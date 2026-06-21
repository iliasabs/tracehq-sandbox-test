const express = require('express');
const app = express();

// generate random UUID
app.get('/uuid', async (req, res) => {
    const { nanoid } = await import('nanoid');
    const uuid = nanoid();
    res.json({ uuid });
});

app.get('/health', (req, res) => {
    const uptime = process.uptime;
    res.json({
        status: 'ok',
        uptime,
    });
});

// listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
