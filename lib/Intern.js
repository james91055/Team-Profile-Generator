const Employee = require("./Employee");

class Intern extends Intern {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }
  getSchool() {
    return "School";
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
