const Manager = require("../lib/Manager");

test("creates an manager object", () => {
  const manager = new Manager("Gunner", "92", "gunnerwagoner@hotmail.com", "943");

  expect(manager.name).toBe("Gunner");
  expect(manager.id).toBe("92");
  expect(manager.email).toBe("gunnerwagoner@hotmail.com");
  expect(manager.officeNumber).toBe("943");
});
