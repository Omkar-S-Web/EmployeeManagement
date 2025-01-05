let employees = [];
let idCounter = 1;

const form = document.getElementById('employeeForm');
const nameInput = document.getElementById('name');
const professionInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const messageDiv = document.getElementById('message');
const employeeListDiv = document.getElementById('employeeList');

function renderEmployees() {
  employeeListDiv.innerHTML = '';
  if (employees.length === 0) {
    employeeListDiv.innerHTML = '<p>You have 0 Employees.</p>';
  } else {
    employees.forEach(employee => {
      const employeeDiv = document.createElement('div');
      employeeDiv.classList.add('employee-item');
      employeeDiv.innerHTML = `
        <span>${employee.id}. ${employee.name} - ${employee.profession} - Age: ${employee.age}</span>
        <button onclick="deleteEmployee(${employee.id})">Delete User</button>
      `;
      employeeListDiv.appendChild(employeeDiv);
    });
  }
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  renderEmployees();
}

document.getElementById('addUserButton').addEventListener('click', () => {
  const name = nameInput.value.trim();
  const profession = professionInput.value.trim();
  const age = ageInput.value.trim();

  if (!name || !profession || !age) {
    messageDiv.textContent = 'Error: Please make sure all the fields are filled before adding an employee!';
    messageDiv.className = 'message error';
    return;
  }

  const newEmployee = {
    id: idCounter++,
    name,
    profession,
    age: Number(age),
  };

  employees.push(newEmployee);
  messageDiv.textContent = 'Success: Employee Added!';
  messageDiv.className = 'message success';

  nameInput.value = '';
  professionInput.value = '';
  ageInput.value = '';

  renderEmployees();
});

renderEmployees();
