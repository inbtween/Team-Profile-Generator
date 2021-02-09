const Employee = require("./employee");

// engineer subclass
class Engineer extends Employee {
  constructor(name, role, id, email, github) {
    super(name, role, id, email);
    this.github = github;
  }
  gitHub() {
    getRole();
    return;
  }
}
