const Employee = require("./employee");
// create an manager class with assigned properties and methods
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  // method which returns Manager
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
