const express = require('express');
const userAuthController = require('../http/controller/authController');

const router = express.Router();

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userAuthController.loginUser(username, password)
    if(user === 'User not found'){
        return res.status(404).json({
            message: 'User not found'
        });
    }else if(user === 'Invalid password'){
        return res.status(401).json({
            message: 'Invalid password'
        });
    }

    res.cookie('token', JSON.stringify(user), {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });

    return res.status(200).json({
        message: 'User logged in',
        token: user
    });
});

router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    
    const user = await userAuthController.registerUser(username, password, email);
    if(user === 'User already exists'){
        return res.status(409).json({
            message: 'User already exists'
        });
    }
    return res.status(201).json({
        message: 'User created',
        user: user
    });

});

module.exports = router;
