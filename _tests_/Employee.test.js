const Employee = require("../lib/employee");

test("Employee sheet of tests", () => {
  const emp = new Employee("Johnny", "worker1234", "johnnyworks@gmail.com");
  expect(emp.name).toBe("Johnny");
  expect(emp.id).toBe("worker1234");
  expect(emp.email).toBe("johnnyworks@gmail.com");
  expect(emp.getName()).toBe("Johnny");
  expect(emp.getEmail()).toBe("johnnyworks@gmail.com");
  expect(emp.getId()).toBe("worker1234");
  expect(emp.getRole()).toBe("Employee");
  expect(typeof emp).toBe("object");
});
