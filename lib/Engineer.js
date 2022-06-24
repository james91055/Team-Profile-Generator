const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }
  getGithub() {
    return "Github";
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
