const express = require('express');
const router = express.Router();

// generate random UUID 
router.post('/generate', (req, res) => {
    const { v4: uuidv4 } = require('uuid');
    const uuid = uuidv4();
    res.json({ uuid });
});

module.exports = router;
