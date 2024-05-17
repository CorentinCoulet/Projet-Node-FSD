const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');
require('dayjs/locale/fr');

dayjs.locale('fr');

const students = require('../utils/students.cjs');

router.get('/', (req, res) => {
    const formattedStudents = students.getAll().map(student => ({
        ...student,
        birthday: dayjs(student.birthday).format('DD MMMM YYYY')
    }));
    res.render('students', { students: formattedStudents });
});

router.post('/add', (req, res) => {
    const { name, birthday } = req.body;
    students.add({ name, birthday });
    res.redirect('/students');
});

router.post('/delete/:index', (req, res) => {
    const { index } = req.params;
    students.delete(index);
    res.redirect('/students');
});

module.exports = router;
