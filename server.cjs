const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let students = [];

const studentRoutes = require('./routes/students.cjs');
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: 'Ajouter un étudiant' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${process.env.APP_LOCALHOST}:${PORT}`);
});
