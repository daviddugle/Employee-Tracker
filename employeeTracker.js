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
    createProduct();
});

const landingPage = () => {
    inquirer.prompt({

            type: "list",
            message: "What would you like to do?",
            choices: [
            "View Employees",
            "View all Employees by Department",
            "View all Employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View all Roles"],
            name: "next",

    })
    .then(({next}) =>{

        if (next === "View Employees"){
            viewEmployees();
        }
        else if(next === "View all Employees by Department"){
            empByDept();
        }
        else if(next === "View all Employees by Manager"){
            empByMgr();
        }
        else if(next === "Add Employee"){
            addEmp();
        }
        else if(next === "Update Employee Role"){
            updateRole();
        }
        else if(next === "Update Employee Manager"){
            updateMgr();
        }
        else if(next === "View all Roles"){
            viewAll();
        }





    })

}
















landingPage();
connection.end();