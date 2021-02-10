const Employee = require("./Employee");

describe("Employee", () => {
  it("should return all the employee name, id, email", () => {
    expect(Employee).toBe(this.name, this.id, this.email);
  });
});
