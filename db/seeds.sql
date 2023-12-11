
INSERT INTO department (name)
VALUES ("Marketing"),
("Technology"),
("Finance"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Lead", 100000, 1),
("Marketing Specialist", 80000, 1),
("Lead Developer", 150000, 2),
("Software Developer", 120000, 2),
("Financial Analyst", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Attorney", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Smith", 1, NULL),
("Samuel", "Johnson", 2, 1),
("Rachel", "Adams", 3, NULL),
("David", "Williams", 4, 3),
("Jennifer", "Parker", 5, NULL),
("Steven", "Martin", 6, 5),
("Robert", "Jones", 7, NULL),
("Emily", "Clark", 8, 7);
