# SQL Challenge: Employee Tracker

## Overview

This is a command-line application built using Node.js, Inquirer, and MySQL to manage a company's employee database. The application allows users to view and manage departments, roles, and employees in their organization.

* [Installation](#installation)
* [Usage](#usage)
* [Walthrough Video](#walkthrough-video)
* [Data Schema](#database-schema)
* [Credits](#credits)
* [Contact](#contact)

## Installation

To install this application, please follow the steps below:

1. Clone the repository to your local machine
2. Open the terminal and navigate to the project directory
3. Run 'npm install' to install the dependencies (inquirer, mysql2, console.table)

## Usage

To use this application, please follow the steps below:

1. Open the terminal and navigate to the project directory
2. Run 'npm start' to start the application
3. Choose from the following options:

* View all departments
* View all roles
* View all employees
* Add a department
* Add a role
* Add an employee
* Update an employee role
* Exit

If you choose to view all departments, you will be presented with a formatted table showing department names and department IDs.

If you choose to view all roles, you will be presented with the job title, role ID, the department that role belongs to, and the salary for that role.

If you choose to view all employees, you will be presented with a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and managers that the employees report to.

If you choose to add a department, you will be prompted to enter the name of the department, and that department will be added to the database.

If you choose to add a role, you will be prompted to enter the name, salary, and department for the role, and that role will be added to the database.

If you choose to add an employee, you will be prompted to enter the employee’s first name, last name, role, and manager, and that employee will be added to the database.

If you choose to update an employee role, you will be prompted to select an employee to update and their new role, and this information will be updated in the database.

If you choose to exit, the application will be closed.

## Walkthrough Video

Please refer to this [video](https://drive.google.com/file/d/1Cko7T6m-WLbu64enpIDWJItgVgcaoDA2/view?usp=share_link) for a walkthrough video that demonstrates the functionality of the employee tracker.

## Database Schema

This application uses a database schema with three tables: department, role, and employee. Please refer to the schema design image in the README file for more information.

## Credits

This application was built using Node.js, Inquirer, and MySQL. The console.table package was used to print MySQL rows to the console. The database schema was designed based on the requirements of the challenge.

## Contact

If you have any questions or feedback, please contact me through my [GitHub](https://github.com/monicapong).

Thank you for using the employee tracker
