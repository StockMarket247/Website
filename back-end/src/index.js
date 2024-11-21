require('dotenv').config();
const express = require('express');
const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

const { initiateDeposit } = require('./functions/user/deposit');

// Define route to get user info
app.get('/:user_id_or_email/:pwd', async (req, res) => {
    const { user_id_or_email, pwd } = req.params;
    const response = await initiateDeposit();
    res.status(200).json({
        message: 'Get user info',
        user_id_or_email,
        pwd,
        deposit: response
    });
});

// Define route for user registration
app.post('/register/:reg_data', (req, res) => {
    const { reg_data } = req.params;
    res.status(200).json({
        message: 'Register user',
        registrationData: reg_data,
    });
});

// Define route for user login
app.post('/login/:user_id/:pwd', (req, res) => {
    const { user_id, pwd } = req.params;
    res.status(200).json({
        message: 'User login',
        user_id,
        pwd,
    });
});

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.error(`Failed to start server: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});