const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/passwords', { useNewUrlParser: true, useUnifiedTopology: true });
const passwordSchema = new mongoose.Schema({
    password: String
});
const Password = mongoose.model('Password', passwordSchema);

// Save password to MongoDB
app.post('/save-password', (req, res) => {
    const newPassword = new Password({
        password: req.body.password
    });

    newPassword.save((err) => {
        if (err) {
            console.error('Error saving password', err);
            res.status(500).send('Error saving password');
        } else {
            console.log('Password saved successfully');
            res.status(200).send('Password saved successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

