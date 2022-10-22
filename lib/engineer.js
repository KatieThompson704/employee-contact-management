const Employee = require("./employee");
// create an engineer class with assigned properties and methods

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // method which returns engineer
  getGithub() {
    return this.github;
  }
  // method which returns engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
