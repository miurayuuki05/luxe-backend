const express = require('express');
const router = express.Router();
const profileController = require('../http/controller/profileController');

router.get('/profile', async (req, res, next) => {
    const cookie = req.cookies['session_token'];
    if (!cookie) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}, async (req, res) => {
    
    const profile = await profileController.getProfileById(1);
    return res.status(200).json(profile);
});

router.get('/cart', async (req, res, next) => {
    const cart = await profileController.getUserCartById(1);
    return res.status(200).json(cart);
});

router.get('/order', (req, res)  => {
    res.send('Order page');
});

router.get('/history', (req, res) => {
    res.send('History page');
});


module.exports = router;
    