const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should create a new Manager object", () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe("object");
    });
});

describe("getOfficeNumber", () => {
    it("should return the manager's office number", () => {
        const officeNumber = 123;
        const manager = new Manager("John", 1, "john@email.com", officeNumber);
        expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
});

describe("getRole", () => {
    it("should return the manager's role", () => {
        const role = "Manager";
        const manager = new Manager("John", 1, "john@email.com", 123);
        expect(manager.getRole()).toBe(role);
    });
});
