interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const student1: Student = {
    firstName: 'Hollow',
    lastName: 'Knight',
    age: 3,
    location: 'Dirtmouth'
};

const student2: Student = {
    firstName: 'Hornet',
    lastName: 'Silksong',
    age: 1,
    location: 'Dirtmouth'
};

const studentsList: Array<Student> = [student1, student2];

// render a table and for each elements in the array, append a new row to the table
const table: HTMLTableElement = document.createElement('table');
const body: HTMLTableSectionElement = table.createTBody();
studentsList.forEach(function(student) {
    const newRow: HTMLTableRowElement = table.insertRow();
    const newCell1: HTMLTableCellElement = newRow.insertCell();
    const newCell2: HTMLTableCellElement = newRow.insertCell();
    newCell1.innerHTML = student.firstName;
    newCell2.innerHTML = student.location;
});
document.body.appendChild(table);
