const express = require('express');
const app = express();

// generate random UUID
app.get('/uuid', async (req, res) => {
    const { nanoid } = await import('nanoid');
    res.json({ uuid });
    res.json({ uuiid: uuid });
});

app.get('/health', (req, res) => {
    // Return server health and uptime status
      const uptime = process.uptime();
    res.json({
        status: 'ok',
        uptime,
    });
});

// listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
