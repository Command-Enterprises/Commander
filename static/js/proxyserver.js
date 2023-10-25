const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/proxy', async (req, res) => {
    try {
        const targetUrl = req.query.url;
        const response = await axios.get(targetUrl);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while fetching the content.');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
