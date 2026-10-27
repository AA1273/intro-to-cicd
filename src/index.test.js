const sayHi = require("./index");

test("sayHi returns the expected greeting", () => {
  expect(sayHi("Mike")).toBe("Hello there Mike");
});