const Manager = require("../lib/manager");

test("Manager sheet of tests", () => {
  const emp = new Manager(
    "Johnny",
    "worker1234",
    "johnnyworks@gmail.com",
    "101"
  );
  expect(emp.officeNumber).toBe("101");
  expect(emp.getOfficeNumber()).toBe("101");
  expect(emp.getRole()).toBe("Manager");
});
