const mysql = require('mysql2');
const inquirer = require('inquirer');

// Create a connection to the MySQL database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: '3001',
        user: 'root',
        password: '3724',
        database: 'employee_tracker_db'
    }
);

// Function to display the main menu
const menuPromt = () => {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'What do you want to do?',
        choices: [
            'View all employees',
            'Add employee',
            'Update employee role',
            'View all roles',
            'Add role',
            'View all departments',
            'Add department',
            'Quit'
        ]
    }).then((response) => {
        // Perform actions based on user choice
        if (response.menu === 'View all employees') {
            viewEmployees();
        } else if (response.menu === 'Add employee') {
            addEmployee();
        } else if (response.menu === 'Update employee role') {
            updateRole();
        } else if (response.menu === 'View all roles') {
            viewRoles();
        } else if (response.menu === 'Add role') {
            addRole();
        } else if (response.menu === 'View all departments') {
            viewDepartments();
        } else if (response.menu === 'Add department') {
            addDepartment();
        } else {
            connection.end();
        }
    });
};

// Invoke the main menu function to start the program
menuPromt();

// Function to view all employees
const viewEmployees = () => {
    connection.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title , role.salary, department.name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee
    LEFT JOIN role ON role.id = employee.role_id
    JOIN department ON department.id = role.department_id
    LEFT JOIN employee AS manager ON manager.id = employee.manager_id
    ORDER BY employee.id`, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.table(data);
            menuPromt();
        }
    });
};

// Function to add a new employee
const addEmployee = () => {
    // Arrays to store roles and employees for inquirer prompts
    let allRoles = [];
    let allEmployees = ['0 None'];

    // Query to get all roles
    connection.query('SELECT * FROM role', (error, data) => {
        if (error) {
            console.log(error);
        } else {
            for (let i = 0; i < data.length; i++) {
                allRoles.push(data[i].id + ' ' + data[i].title);
            }
        }
    });

    // Query to get all employees
    connection.query('SELECT * FROM employee', (error, data) => {
        if (error) {
            console.log(error);
        } else {
            for (let i = 0; i < data.length; i++) {
                allEmployees.push(data[i].id + ' ' + data[i].first_name + ' ' + data[i].last_name);
            }
        }
    });

    // Prompt for employee information
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: `Enter the first name of the employee:`
        },
        {
            type: 'input',
            name: 'last_name',
            message: `Enter the last name of the employee:`
        },
        {
            type: 'list',
            name: 'role',
            message: `Select the role for the employee:`,
            choices: allRoles
        },
        {
            type: 'list',
            name: 'manager',
            message: `Choose the manager for the employee:`,
            choices: allEmployees
        }
    ]).then((response) => {
        // Handle insertion into the database based on manager selection
        if (response.manager === '0 None') {
            connection.query(`INSERT INTO employee (first_name, last_name, role_id)
            VALUES (?, ?, ?) ['${response.first_name}', '${response.last_name}', '${response.role[0]}'];`, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Added ${response.first_name} ${response.last_name} to the database`);
                    menuPromt();
                }
            });
        } else {
            connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ('${response.first_name}', '${response.last_name}', '${response.role[0]}', '${response.manager[0]}');`, (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(`Added ${response.first_name} ${response.last_name} to the database`);
                    menuPromt();
                }
            });
        }
    });
};

// Function to update employee role
const updateRole = () => {
    // Arrays to store roles and employees for inquirer prompts
    let allRoles = [];
    let allEmployees = [];

    // Query to get all roles
    connection.query('SELECT * FROM role', (error, data) => {
        if (error) {
            console.log(error);
        } else {
            for (let i = 0; i < data.length; i++) {
                allRoles.push(data[i].id + ' ' + data[i].title);
            }

            // Query to get all employees
            connection.query('SELECT * FROM employee', (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    for (let i = 0; i < data.length; i++) {
                        allEmployees.push(data[i].id + ' ' + data[i].first_name + ' ' + data[i].last_name);
                    }

                    // Prompt for employee and new role
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'employee',
                            message: `Which employee's role do you want to update?`,
                            choices: allEmployees
                        },
                        {
                            type: 'list',
                            name: 'role',
                            message: `Which role do you want to assign the selected employee?`,
                            choices: allRoles
                        }
                    ]).then((response) => {
                        // Update employee's role in the database
                        connection.query(`UPDATE employee SET role_id = ${response.role[0]} WHERE id = ${response.employee[0]}`, (error, data) => {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log(`Updated employee's role`);
                                menuPromt();
                            }
                        });
                    });
                }
            });
        }
    });
};

// Function to view all roles
const viewRoles = () => {
    connection.query(`SELECT role.id, role.title, role.salary, department.name AS department FROM role
    INNER JOIN department on role.department_id = department.id`, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.table(data);
            menuPromt();
        }
    });
};

// Function to add a
