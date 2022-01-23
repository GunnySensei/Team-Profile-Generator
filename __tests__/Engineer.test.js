const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Gunner",
    "184",
    "gunnerwagoner@gmail.com",
    "GunnySensei"
  );

  expect(engineer.name).toBe("Gunner");
  expect(engineer.id).toBe("184");
  expect(engineer.email).toBe("gunnerwagoner@gmail.com");
  expect(engineer.github).toBe("GunnySensei");
});
