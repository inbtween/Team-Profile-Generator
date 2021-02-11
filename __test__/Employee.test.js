const Employee = require("./Employee");

describe("Employee", () => {
  describe("Initialize", () => {
    // should have a default email with lastname + firstname
    it("should have a default email based on lastname + firstname", () => {
      // arrange/act
      const employee = new Employee("Michelle", "Smith");
      // assert
      expect("firstName" in employee).toEqual(true);
      expect("lastName" in employee).toEqual(true);
      expect("position" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
    });
    it("should not have a missing lastname + firstname", () => {
      const employee = new Employee("Michelle", "Smith");
      expect(employee.firstName).not.toEqual(undefined);
      expect(employee.lastName).not.toEqual(undefined);
    });
    it("should have an ID assigned when created", () => {});
  });
});
// should have position
// should have a name
