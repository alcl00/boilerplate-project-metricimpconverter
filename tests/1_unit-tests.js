const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('Read Whole Number', function(){
    assert.equal(convertHandler.getNum("10L"), 10);
  });
  test('Read Decimal Number', function(){
    assert.equal(convertHandler.getNum("3.1mi"), 3.1);
  });
  test('Read Fraction', function(){
    assert.equal(convertHandler.getNum("3/2lbs"), 1.5);
  });
  test('Read Fraction With Decimal', function(){
    assert.equal(convertHandler.getNum("3.5/2lbs"), 1.75);
    assert.equal(convertHandler.getNum("3/2.5lbs"), 1.2);
  });
  test('Read Double Fraction', function(){
    assert.isUndefined(convertHandler.getNum("3/2/5lbs"));
  });
  test('No Number, Only Units', function(){
    assert.equal(convertHandler.getNum("lbs"), 1);
  });
  test('Valid Units', function() {
    assert.isDefined(convertHandler.getUnit("10L"));
  });
  test('Invalid Units', function() {
    assert.isUndefined(convertHandler.getUnit("10ft"));
  });
  test('Return Correct Units', function() {
    assert.equal(convertHandler.getUnit("10L"), "L");
  });
  test('Return Units Spelled Out', function() {
    assert.equal(convertHandler.spellOutUnit("L"), "liters");
  });
  test('Convert Gallons to Liters', function() {
    assert.equal(convertHandler.convert(4, "gal"), 15.14164);
  });
  test('Convert Liters to Gallons', function() {
    assert.equal(convertHandler.convert(4, "L"), 1.05669);
  });
  test('Convert Miles to Kilometers', function() {
    assert.equal(convertHandler.convert(3.1, "mi"), 4.98895);
  });
  test('Convert Kilometers to Miles', function() {
    assert.equal(convertHandler.convert(1/2, "km"), 0.31069);
  });
  test('Convert Pounds to Kilograms', function() {
    assert.equal(convertHandler.convert(5.4/3, "lbs"), 0.81647);
  });
  test('Convert Kilograms to Pounds', function() {
    assert.equal(convertHandler.convert(1, "kg"), 2.20462);
  });
});