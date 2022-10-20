const generateHTML = require("./utils/generateHTML");
const generateCSS = require("./utils/generateCSS");

// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user input
const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager’s name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the team manager’s id?",
    name: "managerID",
  },
  {
    type: "input",
    message: "What is the team manger’s e-mail?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the team manager’s office number?",
    name: "managerOffice",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Done adding team members."],
    name: "memberType",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer’s name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is your engineer’s id?",
    name: "engineerID",
  },
  {
    type: "input",
    message: "What is your engineer’s e-mail?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is your engineer’s office number?",
    name: "engineerOffice",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Done adding team members."],
    name: "memberType",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is your intern’s name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is your intern's id?",
    name: "internID",
  },
  {
    type: "input",
    message: "What is your intern's e-mail?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "internOffice",
  },
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Done adding team members."],
    name: "memberType",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    fs.writeFileSync("index.html", generateHTML(answers));
    if ((answers.memberType = "Engineer")) {
      inquirer.prompt(engineerQuestions).then((answers) => {
        fs.writeFileSync("index.html", generateHTML(answers));
      });
    } else if ((answers.memberType = "Intern")) {
      inquirer.prompt(internQuestions).then((answers) => {
        fs.writeFileSync("index.html", generateHTML(answers));
      });
    } else {
    }
    generateCSS();
  });
}

// Function call to initialize app
init();
