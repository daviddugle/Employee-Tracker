INSERT INTO department (name) values ("Sales");
INSERT INTO department (name) values ("Engineering");
INSERT INTO department (name) values ("Finance");
INSERT INTO department (name) values ("Legal");


INSERT INTO role (title, salary, department_id) values ("Sales Lead", 100000, 475);
INSERT INTO role (title, salary, department_id) values ("Lead Engineer", 185000, 398);
INSERT INTO role (title, salary, department_id) values ("Software Engineer", 125000, 121);
INSERT INTO role (title, salary, department_id) values ("Account Manager", 85000, 904);
INSERT INTO role (title, salary, department_id) values ("Accountant", 95000, 704);
INSERT INTO role (title, salary, department_id) values ("Legal Team Lead", 215000, 357);
INSERT INTO role (title, salary, department_id) values ("Sales Person", 85000, 919);
INSERT INTO role (title, salary, department_id) values ("Lawyer", 195000, 308);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Michael', "Jones", 3, 14);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Waldo', "Faldo", 8, 10);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Bryan', "McGillicutty", 7, 12);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Sarah', "Lincoln", 6, 15);
