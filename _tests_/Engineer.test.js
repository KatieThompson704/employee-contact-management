const Engineer = require("../lib/engineer");

test("Engineer sheet of tests", () => {
  const emp = new Engineer(
    "Johnny",
    "worker1234",
    "johnnyworks@gmail.com",
    "thompsonkatie704"
  );
  expect(emp.github).toBe("thompsonkatie704");
  expect(emp.getGithub()).toBe("thompsonkatie704");
  expect(emp.getRole()).toBe("Engineer");
});
