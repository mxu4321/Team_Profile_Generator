const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should create a new Engineer object", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    });
});

describe("getGithub", () => {
    it("should return the engineer's github", () => {
        const github = "github.com/john";
        const engineer = new Engineer("John", 1, "john@email.com", github);
        expect(engineer.getGithub()).toBe(github);
    });
});

describe("getRole", () => {
    it("should return the engineer's role", () => {
        const role = "Engineer";
        const engineer = new Engineer("John", 1, "john@email.com", "github.com/john");
        expect(engineer.getRole()).toBe(role);
    });
});

