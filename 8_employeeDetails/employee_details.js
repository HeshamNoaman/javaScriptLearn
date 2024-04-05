const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    { id: 4, name: 'Hesham Mohammed', age: 31, department: 'Finance', salary: 20000, specialization: 'PHP' },
    { id: 5, name: 'Osama Johnson', age: 33, department: 'HR', salary: 60000, specialization: 'C#' },
    { id: 6, name: 'Mohammed Johnson', age: 53, department: 'IT', salary: 80000, specialization: 'C++' },
];

const employeesDetails = document.getElementById('employeesDetails');

function displayEmployees(people = employees) {

    const totalEmployees = people.map((employee) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    employeesDetails.innerHTML = totalEmployees;

}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((accumulate, employee) => accumulate + employee.salary, 0);
    employeesDetails.innerHTML = `<p>Total employees salary is: ${totalSalaries}</p>`;
}

const displayHREmployees = () => {
    const hrEmployees = employees.filter((employees) => employees.department === 'HR');
    displayEmployees(hrEmployees);
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find((employee) => employee.id === employeeId);

    if (foundEmployee) {
        employeesDetails.innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        employeesDetails.innerHTML = 'no employee has been found with this ID';
    }
}

function findEmployeeBySpecialization(specialization) {

    const foundEmployee = employees.find((employee) => employee.specialization === specialization);

    if (foundEmployee) {
        employeesDetails.innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        employeesDetails.innerHTML = 'no employee has been found with this specialization';
    }

}
