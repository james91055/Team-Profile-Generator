const Engineer = require("./Engineer");

class Manager extends Emplyee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
