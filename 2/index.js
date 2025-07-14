var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
console.log(array);
var car = {};
car.manufacturer = "manufacturer";
car.model = 'model';
console.log(car);
var car1 = {};
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
console.log(arrayCars);
var group = {
    students: [
        { id: 1, name: 'Pypkin Petya', group: 3, marks: [
                { subject: 'OOP', mark: 6, done: false },
                { subject: 'OAP', mark: 10, done: true },
                { subject: 'KSIS', mark: 2, done: true },
            ] },
        { id: 2, name: 'Pypkin1 Petya', group: 8, marks: [
                { subject: 'OAP', mark: 4, done: true },
                { subject: 'BD', mark: 6, done: false },
                { subject: 'DPI', mark: 9, done: false },
            ] },
        { id: 3, name: 'Pypkin2 Petya', group: 10, marks: [
                { subject: 'MATH', mark: 7, done: false },
                { subject: 'AISD', mark: 2, done: true },
                { subject: 'DPI', mark: 9, done: false },
            ] },
    ],
    studentsFilter: function (group) {
        return this.students.filter(function (student) { return student.group === group; });
    },
    marksFilter: function (mark) {
        return this.students.filter(function (student) { return student.marks.some(function (m) { return m.mark === mark; }); });
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
    },
    mark: 6,
    group: 10
};
for (var _i = 0, _a = group.marksFilter(6); _i < _a.length; _i++) {
    var student = _a[_i];
    console.log(student.name);
}
;
for (var _b = 0, _c = group.studentsFilter(10); _b < _c.length; _b++) {
    var stud = _c[_b];
    console.log(stud.name);
}
group.deleteStudent(3);
for (var _d = 0, _e = group.students; _d < _e.length; _d++) {
    var stud = _e[_d];
    console.log(stud.name);
}
