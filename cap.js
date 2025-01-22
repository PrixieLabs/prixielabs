const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const SECRET_KEY = 'ES_a5b07faf983343cba57d81a17f9e13a1';

app.post('/verify-captcha', async (req, res) => {
    const token = req.body['h-captcha-response'];
    if (!token) {
        return res.status(400).send('Captcha is not completed.');
    }

    try {
        const response = await axios.post(
            `https://hcaptcha.com/siteverify`,
            {},
            {
                params: {
                    secret: SECRET_KEY,
                    response: token,
                },
            }
        );

        if (response.data.success) {
            res.send('Captcha verified successfully.');
        } else {
            res.status(400).send('Captcha verification failed.');
        }
    } catch (error) {
        console.error('Error verifying captcha:', error);
        res.status(500).send('Internal server error.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
