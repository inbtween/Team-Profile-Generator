// do we have employees?
// no?
// make a manager
// yes?
// ask do you want to add any more
// yes?
// what type? (engineer, intern, manager)
// no?
// quit

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
