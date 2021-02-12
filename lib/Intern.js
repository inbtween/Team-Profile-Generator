const Employee = require("./Employee");

// engineer subclass
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getName() {
    return this.name;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
