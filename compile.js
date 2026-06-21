const express = require('express');
const packageJson = require('./package.json');

const app = express();
app.use(express.json());

const port = parseInt(process.env.PORT, 10) || 3000;
const requestCounters = { total: 0, uuid: 0, health: 0, stats: 0 };

app.use((req, res, next) => {
    requestCounters.total += 1;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get('/uuid', async (req, res) => {
    requestCounters.uuid += 1;
    const { nanoid } = await import('nanoid');
    const uuid = nanoid();
    res.json({ uuid });
});

app.get('/health', (req, res) => {
    requestCounters.health += 1;
    const uptime = process.uptime;
    res.json({
        status: 'ok',
        uptime,
        version: packageJson.version,
    });
});

app.get('/stats', (req, res) => {
    requestCounters.stats += 1;
    res.json({
        name: packageJson.name,
        version: packageJson.version,
        requests: requestCounters,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
