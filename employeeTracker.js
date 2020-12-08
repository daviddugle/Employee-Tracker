var mysql = require("mysql");
const inquirer = require("inquirer");
// const path = require("path"); //not quite sure I will need this as of yet.

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "employee_track_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    landingPage();
});

function landingPage() {
    inquirer.prompt({

        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "View Roles",
            "View Departments",
            "Add Departments",
            "Add Roles",
            "Add Employees",
            "Update Employee Role",
            "Exit"
        ]
    })
        .then(function (answer) {
            switch (answer.action) {
                case "View Employees":
                    viewEmployees();
                    
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "View Departments":
                    viewDept();
                    break;

                case "Add Employees":
                    addEmp();
                    break;

                case "Add Roles":
                    addRole();
                    break;

                case "Add Departments":
                    addDept();
                    break;

                case "Update Employee Role":
                    updateEmp();
                    break;
                case "Exit":
                    exitFunc();
                    break;
            }
        });
}

//showtime!
const viewEmployees = () => {
    // var query ="SELECT employee.id, employee.first_name, employee_last_name, employee.role_id, role.id, role.title";
    // query += "FROM employee INNER JOIN role ON (emloyee.role_id = role.id AND role.title";

    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        landingPage();
    });
}
const viewRoles = () => {
    // var query = "SELECT "
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        landingPage();

    })

}
const viewDept = () => {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        landingPage();

    })
}

//Let's get busy adding things
const addEmp = () => {

    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the first name"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the last name"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is your role (1 -Sales Lead, 2 - Lead Engineer, 3 - Software Engineer, 4 - Account Manager, 5 - Accountant, 6 - Legal Team Lead, 7 - Sales Person, 8 -Laywyer) "
            }

        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id
                },
                function (err) {
                    if (err) throw err;
                    console.log("Employee Added!");
                    landingPage();
                }
            );

        });

}


const addRole = () => {

    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the Title"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary (ex: 50000)"
            },
            {
                name: "department_id",
                type: "input",
                message: "What is the department number (1 - Sales, 2 - Engineering, 3 - Finance, 4 - Legal"
            },


        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: answer.department_id
                },
                function (err) {
                    if (err) throw err;
                    console.log("Role Added!");
                    landingPage();
                }
            );

        });
}



const addDept = () => {

    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the Department Name"
            },

        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.name

                },
                function (err) {
                    if (err) throw err;
                    console.log("Department Added!");
                    landingPage();
                }
            );

        });




}


const updateEmp = () => {

    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "What is the Employee Number you want to update the role of?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is the new role (1 -Sales Lead, 2 - Lead Engineer, 3 - Software Engineer, 4 - Account Manager, 5 - Accountant, 6 - Legal Team Lead, 7 - Sales Person, 8 -Laywyer) "
            },

        ])
        .then(function (answer) {
            connection.query(
                "UPDATE employee SET ? WHERE ?",
               [ {
                    role_id: answer.role_id

                },
                {
                    id: answer.id
                }],
                function (err) {
                    if (err) throw err;
                    console.log("Employee Updated!");
                    landingPage();
                }
            );

        });



}
















function exitFunc() {
    console.log("Goodbye!");
    connection.end();
}






