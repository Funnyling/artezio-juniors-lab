const students = [
    {
        name: 'John',
        age: 17,
        gender: 'M',
        grade: 8,
        state: 'Florida',
    },
    {
        name: 'Sarah',
        age: 19,
        gender: 'F',
        grade: 9,
        state: 'Alaska'
    },
    {
        name: 'Peter',
        age: 21,
        gender: 'M',
        grade: 5,
        state: 'California'
    },
    {
        name: 'Bred',
        age: 19,
        gender: 'M',
        grade: 8,
        state: 'Florida'
    },
    {
        name: 'Garry',
        age: 24,
        gender: 'M',
        grade: 9,
        state: 'Tennessee'
    },
    {
        name: 'Samantha',
        age: 14,
        gender: 'F',
        grade: 7,
        state: 'California'
    },
    {
        name: 'Garold',
        age: 16,
        gender: 'M',
        grade: 8,
        state: 'Washington'
    },
    {
        name: 'David',
        age: 19,
        gender: 'M',
        grade: 8
    }
];

const menNames = students
    .filter(function (student) {
        return student.gender === 'M';
    })
    .map(function (student) {
        return student.state.toUpperCase();
    });