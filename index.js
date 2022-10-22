const generateHTML = require("./utils/generateHTML");
const path = require("path");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

var team = [];

// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user input
const menuOptions = [
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Done adding team members."],
    name: "menu",
  },
];

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
    message: "What is your engineer’s github username?",
    name: "engineerGithub",
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
    name: "internSchool",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    const manager = new Manager(
      managerAnswers.managerName,
      managerAnswers.managerID,
      managerAnswers.managerEmail,
      managerAnswers.managerOffice
    );
    team.push(manager);
    initMenu();
  });
}

function initMenu() {
  inquirer.prompt(menuOptions).then((menuAnswer) => {
    if (menuAnswer.menu === "Engineer") {
      promptEngineer();
    } else if (menuAnswer.menu === "Intern") {
      promptIntern();
    } else {
      fs.writeFileSync(
        path.join(__dirname, "/dist/", "index.html"),
        generateHTML(team)
      );
    }
  });
}

function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    const engineer = new Engineer(
      engineerAnswers.engineerName,
      engineerAnswers.engineerID,
      engineerAnswers.engineerEmail,
      engineerAnswers.engineerGithub
    );
    team.push(engineer);
    initMenu();
  });
}

function promptIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    const intern = new Intern(
      internAnswers.internName,
      internAnswers.internID,
      internAnswers.internEmail,
      internAnswers.internSchool
    );
    team.push(intern);
    initMenu();
  });
}

init();
