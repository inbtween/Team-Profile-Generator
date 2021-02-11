class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
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
