const Employee = require("./employee");
// create an intern class with assigned properties and methods
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // method which returns intern
  getSchool() {
    return this.school;
  }
  // method which returns intern
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
