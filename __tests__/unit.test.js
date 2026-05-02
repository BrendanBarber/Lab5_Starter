// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('isPhoneNumber returns true for (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber returns true for 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber returns false for 12345', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});
test('isPhoneNumber returns false for abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('isEmail returns true for user@example.com', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('isEmail returns true for hello@mail.org', () => {
  expect(isEmail('hello@mail.org')).toBe(true);
});
test('isEmail returns false for userexample.com (missing @)', () => {
  expect(isEmail('userexample.com')).toBe(false);
});
test('isEmail returns false for user@.com (missing domain name)', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword
test('isStrongPassword returns true for Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});
test('isStrongPassword returns true for hello_World', () => {
  expect(isStrongPassword('hello_World')).toBe(true);
});
test('isStrongPassword returns false for 1abc (starts with digit)', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});
test('isStrongPassword returns false for ab (too short)', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate
test('isDate returns true for 12/25/2023', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('isDate returns true for 1/1/2000', () => {
  expect(isDate('1/1/2000')).toBe(true);
});
test('isDate returns false for 13-05-2023 (wrong separator)', () => {
  expect(isDate('13-05-2023')).toBe(false);
});
test('isDate returns false for 5/9/99 (2-digit year)', () => {
  expect(isDate('5/9/99')).toBe(false);
});

// isHexColor
test('isHexColor returns true for #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('isHexColor returns true for #1a2b3c', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});
test('isHexColor returns false for #GGGGGG (invalid hex chars)', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
test('isHexColor returns false for #12345 (5 chars)', () => {
  expect(isHexColor('#12345')).toBe(false);
});
