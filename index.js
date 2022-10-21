const generateHTML = require("./utils/generateHTML");

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
    message: "What is your engineer’s office number?",
    name: "engineerOffice",
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
    // fs.writeFileSync("index.html", generateHTML(managerAnswers));
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
      return;
    }
  });
}

function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    initMenu();
  });
}

function promptIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    initMenu();
  });
}

init();
