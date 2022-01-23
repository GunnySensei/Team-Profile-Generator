const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Gunner", "184", "gunnerwagoner@gmail.com");

  expect(employee.name).toBe("Gunner");
  expect(employee.id).toBe("184");
  expect(employee.email).toBe("gunnerwagoner@gmail.com");
});
