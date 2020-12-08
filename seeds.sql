USE employee_track_db;

INSERT INTO department (name) values ("Sales");
INSERT INTO department (name) values ("Engineering");
INSERT INTO department (name) values ("Finance");
INSERT INTO department (name) values ("Legal");


INSERT INTO role (title, salary, department_id) values ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id) values ("Lead Engineer", 185000, 2);
INSERT INTO role (title, salary, department_id) values ("Software Engineer", 125000, 2);
INSERT INTO role (title, salary, department_id) values ("Account Manager", 85000, 1);
INSERT INTO role (title, salary, department_id) values ("Accountant", 95000, 3);
INSERT INTO role (title, salary, department_id) values ("Legal Team Lead", 215000, 4);
INSERT INTO role (title, salary, department_id) values ("Sales Person", 85000, 1);
INSERT INTO role (title, salary, department_id) values ("Lawyer", 195000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Michael', "Jones", 3, 6);
INSERT INTO employee (first_name, last_name, role_id) 
values ('Waldo', "Faldo", 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Bryan', "McGillicutty", 7, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Sarah', "Lincoln", 6, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Brandon', "Webb", 1, 7);
INSERT INTO employee (first_name, last_name, role_id) 
values ('Hulk', "Hogan", 2);
INSERT INTO employee (first_name, last_name, role_id) 
values ('Ric', "Flair", 4);
INSERT INTO employee (first_name, last_name, role_id) 
values ('Jose', "Canseco", 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Walter', "White", 7, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Frank', "Basso", 6, 2);
INSERT INTO employee (first_name, last_name, role_id) 
values ('Tony', "Hnizdo", 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Jeff', "Greene", 3, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
values ('Tammy', "Trailer", 4, 7);
INSERT INTO employee (first_name, last_name, role_id) 
values ('James', "Hetfield", 5);


