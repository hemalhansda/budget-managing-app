const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should generate Greeting from name', () => {
  const name = generateGreeting('Hemal');
  expect(name).toBe('Hello Hemal!');
});

test('should add two numbers', () => {
  const result = add(5, 10);
  expect(result).toBe(15);
});

test('should generate Greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!')
});
