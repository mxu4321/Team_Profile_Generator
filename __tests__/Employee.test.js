const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should create a new Employee object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    });
});

describe("getName", () => {
    it("should return the employee's name", () => {
        const name = "John";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
});

describe("getId", () => {
    it("should return the employee's id", () => {
        const id = 1;
        const employee = new Employee("John", id);
        expect(employee.getId()).toBe(id);
    });
});

describe("getEmail", () => {
    it("should return the employee's email", () => {
        const email = "john@email.com";
        const employee = new Employee("John", 1, email);
        expect(employee.getEmail()).toBe(email);
    });
});

describe("getRole", () => {
    it("should return the employee's role", () => {
        const role = "Employee";
        const employee = new Employee("John", 1, "john@email.com");
        expect(employee.getRole()).toBe(role);
    });
});
