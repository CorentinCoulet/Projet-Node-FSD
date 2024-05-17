let students = [];

const add = (student) => {
    students.push(student);
};

const getAll = () => {
    return students;
};

const deleteStudent = (index) => {
    students.splice(index, 1);
};

module.exports = {
    add,
    getAll,
    delete: deleteStudent
};
