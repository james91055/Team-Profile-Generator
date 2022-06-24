const Employee = require("./Employee");

class Manager extends Emplyee {
  constructor(id, name, email, officeNum) {
    super(id, name, email);
    this.officNumber = officeNum;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
