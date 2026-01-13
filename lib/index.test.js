'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

test('get the first animal', function () {
  expect(_2.default.years[0]).toBe('Rat 🐀');
});

test('get the secons animal', function () {
  expect(_2.default.years[1]).toBe('Ox 🐂');
});

test('get the last animal', function () {
  expect(_2.default.years[_2.default.years.length - 1]).toBe('Pig 🐖');
});

test('get 2000\'s Dragon', function () {
  expect(_2.default.getAnimal(2000)).toBe('Dragon 🐉');
});

test('get 2016\'s Monkey', function () {
  expect(_2.default.getAnimal(2016)).toBe('Monkey 🐒');
});

test('get 2012\'s Monkey', function () {
  expect(_2.default.getAnimal(2012)).toBe('Dragon 🐉');
});