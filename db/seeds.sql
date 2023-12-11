INSERT INTO department (name)
VALUES ("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Niko", "Robin", 1, NULL),
("Monkey D.", "Luffy", 2, 1),
("Roronoa", "Zoro", 3, NULL),
("Vinsmoke", "Sanji", 4, 3),
("Tony Tony", "Chopper", 5, NULL),
("Eiichiro", "Oda", 6, 5),
("Cutty", "Flam", 7, NULL),
("Nami", "San", 8, 7);