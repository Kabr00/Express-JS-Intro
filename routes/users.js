const express = require('express');

const router = express.Router();

router.post("/login", (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;

    res.json({
        message:`Successfully Logged in as ${email}`,
        user:{
            email,
            password
        }
    }).status(200);
});

router.post("/register", (req, res) => {
    try {
        const {username,email, password} = req.body;
        res.json({
            message:`Successfully Registered as ${username}`,
            user:{
                username,
                email,
                password
            }
        }).status(200);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});

router.get("/logout", (req, res) => {
    res.send("Logout");
});

module.exports = router;