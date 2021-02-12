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
  getId() {
    return this.id;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
