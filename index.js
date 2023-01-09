// //AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles

const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/template");
const {managerQuestions, engineerQuestions, internQuestions} = require('./questions');

const team = [];



const addEmployee = [
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add an employee?",
        choices: ["Engineer", "Intern", "No"]
    }
];

const init = () => {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
        team.push(manager);
        addEmployees();
    });
}

// add additional employees as options
const addEmployees = () => {
    inquirer.prompt(addEmployee).then((employeeAnswers) => {
        switch (employeeAnswers.addEmployee) {
            case "Engineer":
                inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
                    const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
                    team.push(engineer);
                    addEmployees();
                });
                break;
            case "Intern":
                inquirer.prompt(internQuestions).then((internAnswers) => {
                    const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                    team.push(intern);
                    addEmployees();
                });
                break;
            default:
                // console.log(team);
                console.log("Your team has been created!");
                let htmlData = generateHTML(team); 
                fs.writeFileSync('./dist/index.html', htmlData);
        }
    });
}

init();



