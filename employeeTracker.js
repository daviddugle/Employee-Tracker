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

function landingPage(){
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
            "Update Employee Roles",
            "Exit"
        ]
    })
        .then(function (answer) {
            switch (answer.action) {
                case "View Employees":
                    viewEmployees();
                    landingPage();
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "View Departments":
                    viewDept();
                    break;

                case "Add Employee":
                    addEmp();
                    break;

                case "Add Roles":
                    addRole();
                    break;

                case "Add Departments":
                    updateMgr();
                    break;

                case "Update Employee Roles":
                    updateEmp();
                    break;
                case "Exit":
                    exitFunc();
                    break;    
            }
        });
    }


const viewEmployees = () => {
    // var query ="SELECT employee.id, employee.first_name, employee_last_name, employee.role_id, role.id, role.title";
    // query += "FROM employee INNER JOIN role ON (emloyee.role_id = role.id AND role.title";

    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        landingPage();
    });
}
const viewRoles = () =>{
    // var query = "SELECT "
    connection.query("SELECT * FROM role", function (err, res){
        if (err) throw err;
        console.table(res);
        landingPage();

    })

}
const viewDept = () =>{
    connection.query("SELECT * FROM department", function (err, res){
        if (err) throw err;
        console.table(res);
        landingPage();

    })
}























function exitFunc(){
    console.log("Goodbye!");
    connection.end();
}






