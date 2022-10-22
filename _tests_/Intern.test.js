const Intern = require("../lib/intern");

test("Intern sheet of tests", () => {
  const emp = new Intern(
    "Johnny",
    "worker1234",
    "johnnyworks@gmail.com",
    "University of Alabama"
  );
  expect(emp.school).toBe("University of Alabama");
  expect(emp.getSchool()).toBe("University of Alabama");
  expect(emp.getRole()).toBe("Intern");
});
