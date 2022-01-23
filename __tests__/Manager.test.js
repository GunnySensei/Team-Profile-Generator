const Manager = require("../lib/Manager");

test("creates an engineer object", () => {
  const manager = new Manager(
    "Gunner",
    "184",
    "gunnerwagoner@gmail.com",
    "943"
  );

  expect(manager.name).toBe("Gunner");
  expect(manager.id).toBe("184");
  expect(manager.email).toBe("gunnerwagoner@gmail.com");
  expect(manager.officeNumber).toBe("943");
});
