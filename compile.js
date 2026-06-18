const express = require('express');
const router = express.Router();

// generate random UUID 
router.post('/generate', (req, res) => {
    const uuid = nanoid();
    res.json({ uuid });
});

module.exports = router;
