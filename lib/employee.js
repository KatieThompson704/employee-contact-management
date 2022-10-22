// create an employee class with assigned properties and methods
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // method which gets employee Name
  getName() {
    return this.name;
  }
  // method which gets employee ID
  getId() {
    return this.id;
  }
  // method which gets employee email
  getEmail() {
    return this.email;
  }
  // method which returns employee
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
