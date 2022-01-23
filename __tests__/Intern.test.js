const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Gunner", "184", "gunnerwagoner@gmail.com", "NWU");

  expect(intern.name).toBe("Gunner");
  expect(intern.id).toBe("184");
  expect(intern.email).toBe("gunnerwagoner@gmail.com");
  expect(intern.school).toBe("NWU");
});
