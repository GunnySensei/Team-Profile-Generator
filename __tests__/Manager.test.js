const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("943");

  expect(manager.officeNumber).toBe("943");
});
