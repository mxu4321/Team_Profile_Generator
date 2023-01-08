const Employee = require("./Employee");

// manager class extends ee class, and also have: officeNumber, getRole() // Overridden to return 'manager'
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;