const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/weather", async (req, res) => {
    const city = req.query.city;
    const apiKey = ""; // your key
    
    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    let weather;
    let error = null;

    try {
        const response = await axios.get(APIUrl);
        weather = response.data;
        
    } catch (error) {
        weather = null;
        error = "Error Please Try Again";
    }

    res.render("index", { weather, error });
});

router.get("/", (req, res) => {
    res.render("index", { weather: null, error: null });
});

module.exports = router;
