const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should create a new Intern object", () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe("object");
    });
});

describe("getSchool", () => {
    it("should return the intern's school", () => {
        const school = "UCLA";
        const intern = new Intern("John", 1, "john@email.com", school);
        expect(intern.getSchool()).toBe(school);
    });
});

describe("getRole", () => {
    it("should return the intern's role", () => {
        const role = "Intern";
        const intern = new Intern("John", 1, "john@email.com", "UCLA");
        expect(intern.getRole()).toBe(role);
    });
});




