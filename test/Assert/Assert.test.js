import assert from 'assert';
import { describe, it } from 'mocha';
import Assert from '../../src/Assert/Assert';

describe('Assert Test', () => {
  it('should assert null', () => {
    assert.ok(Assert.isNull(null));

    assert.ok(!Assert.isNull());
    assert.ok(!Assert.isNull(undefined));
    assert.ok(!Assert.isNull(0));
    assert.ok(!Assert.isNull(''));
    assert.ok(!Assert.isNull(false));
  });

  it('should assert undefined', () => {
    assert.ok(Assert.isUndefined());
    assert.ok(Assert.isUndefined(undefined));

    assert.ok(!Assert.isUndefined(null));
    assert.ok(!Assert.isUndefined(0));
    assert.ok(!Assert.isNull(''));
    assert.ok(!Assert.isUndefined(false));
  });

  it('should assert empty', () => {
    assert.ok(Assert.isEmptyString(''));

    assert.ok(!Assert.isEmptyString());
    assert.ok(!Assert.isEmptyString(undefined));
    assert.ok(!Assert.isEmptyString(null));
    assert.ok(!Assert.isEmptyString(0));
    assert.ok(!Assert.isEmptyString(false));
  });

  it('should assert exists', () => {
    assert.ok(Assert.exists(''));
    assert.ok(Assert.exists(0));
    assert.ok(Assert.exists(false));

    assert.ok(!Assert.exists(null));
    assert.ok(!Assert.exists());
    assert.ok(!Assert.exists(undefined));
  });

  it('should assert null or empty string', () => {
    assert.ok(Assert.isNullOrEmptyString(''));
    assert.ok(Assert.isNullOrEmptyString(null));
    assert.ok(Assert.isNullOrEmptyString());
    assert.ok(Assert.isNullOrEmptyString(undefined));

    assert.ok(!Assert.isNullOrEmptyString(0));
    assert.ok(!Assert.isNullOrEmptyString(false));
  });


  it('should assert is Array', () => {
    assert.ok(Assert.isArray([]));
    assert.ok(Assert.isArray(new Array()));
  });

  it('should assert is not Array',  () => {
    assert.ok(!Assert.isArray(null));
    assert.ok(!Assert.isArray(undefined));
    assert.ok(!Assert.isArray(true));
    assert.ok(!Assert.isArray(false));
    assert.ok(!Assert.isArray(''));
    assert.ok(!Assert.isArray(new String()));
    assert.ok(!Assert.isArray(0));
    assert.ok(!Assert.isArray(new Number()));
    assert.ok(!Assert.isArray(new Date()));
    assert.ok(!Assert.isArray({}));
    assert.ok(!Assert.isArray(new Object()));
    assert.ok(!Assert.isArray(() => { } ));
    assert.ok(!Assert.isArray(new Function()));
  });

  it('should assert is Bool',  () => {
    assert.ok(Assert.isBool(true));
    assert.ok(Assert.isBool(false));
  });

  it('should assert is not Bool',  () => {
    assert.ok(!Assert.isBool(null));
    assert.ok(!Assert.isBool(undefined));
    assert.ok(!Assert.isBool([]));
    assert.ok(!Assert.isBool(new Array()));
    assert.ok(!Assert.isBool(''));
    assert.ok(!Assert.isBool(new String()));
    assert.ok(!Assert.isBool(0));
    assert.ok(!Assert.isBool(new Number()));
    assert.ok(!Assert.isBool(new Date()));
    assert.ok(!Assert.isBool({}));
    assert.ok(!Assert.isBool(new Object()));
    assert.ok(!Assert.isBool(() => { } ));
    assert.ok(!Assert.isBool(new Function()));
  });

  it('should assert is true',  () => {
    assert.ok(Assert.isTrue(true));
  });

  it('should assert is not true',  () => {
    assert.ok(!Assert.isTrue(null));
    assert.ok(!Assert.isTrue(undefined));
    assert.ok(!Assert.isTrue(false));
    assert.ok(!Assert.isTrue('true'));
    assert.ok(!Assert.isTrue(1));
    assert.ok(!Assert.isTrue([]));
    assert.ok(!Assert.isTrue(new Array()));
    assert.ok(!Assert.isTrue(''));
    assert.ok(!Assert.isTrue(new String()));
    assert.ok(!Assert.isTrue(0));
    assert.ok(!Assert.isTrue(new Number()));
    assert.ok(!Assert.isTrue(new Date()));
    assert.ok(!Assert.isTrue({}));
    assert.ok(!Assert.isTrue(new Object()));
    assert.ok(!Assert.isTrue(() => { } ));
    assert.ok(!Assert.isTrue(new Function()));
  });

  it('should assert is false',  () => {
    assert.ok(Assert.isFalse(false));
  });

  it('should assert is not false',  () => {
    assert.ok(!Assert.isFalse(null));
    assert.ok(!Assert.isFalse(undefined));
    assert.ok(!Assert.isFalse(true));
    assert.ok(!Assert.isFalse('false'));
    assert.ok(!Assert.isFalse(1));
    assert.ok(!Assert.isFalse([]));
    assert.ok(!Assert.isFalse(new Array()));
    assert.ok(!Assert.isFalse(''));
    assert.ok(!Assert.isFalse(new String()));
    assert.ok(!Assert.isFalse(0));
    assert.ok(!Assert.isFalse(new Number()));
    assert.ok(!Assert.isFalse(new Date()));
    assert.ok(!Assert.isFalse({}));
    assert.ok(!Assert.isFalse(new Object()));
    assert.ok(!Assert.isFalse(() => { } ));
    assert.ok(!Assert.isFalse(new Function()));
  });

  it('should assert is Date',  () => {
    assert.ok(Assert.isDate(new Date()));
  });

  it('should assert is not Date',  () => {
    assert.ok(!Assert.isDate(null));
    assert.ok(!Assert.isDate(undefined));
    assert.ok(!Assert.isDate(true));
    assert.ok(!Assert.isDate(false));
    assert.ok(!Assert.isDate([]));
    assert.ok(!Assert.isDate(new Array()));
    assert.ok(!Assert.isDate(''));
    assert.ok(!Assert.isDate(new String()));
    assert.ok(!Assert.isDate(0));
    assert.ok(!Assert.isDate(new Number()));
    assert.ok(!Assert.isDate({}));
    assert.ok(!Assert.isDate(new Object()));
    assert.ok(!Assert.isDate(() => { } ));
    assert.ok(!Assert.isDate(new Function()));
  });

  it('should assert is Number',  () => {
    assert.ok(Assert.isNumber(0));
    assert.ok(Assert.isNumber(0.75));
    assert.ok(Assert.isNumber(120));
    assert.ok(Assert.isNumber(-30));
    assert.ok(Assert.isNumber(new Number()));
  });

  it('should assert is not Number',  () => {
    assert.ok(!Assert.isNumber(null));
    assert.ok(!Assert.isNumber(undefined));
    assert.ok(!Assert.isNumber(true));
    assert.ok(!Assert.isNumber(false));
    assert.ok(!Assert.isNumber([]));
    assert.ok(!Assert.isNumber(new Array()));
    assert.ok(!Assert.isNumber(''));
    assert.ok(!Assert.isNumber(new String()));
    assert.ok(!Assert.isNumber({}));
    assert.ok(!Assert.isNumber(new Object()));
    assert.ok(!Assert.isNumber(() => { } ));
    assert.ok(!Assert.isNumber(new Function()));
  });

  it('should assert is Integer',  () => {
    assert.ok(Assert.isInteger(0));
    assert.ok(Assert.isInteger(-13));
    assert.ok(Assert.isInteger(100));

    assert.ok(!Assert.isInteger(new Number()));
    assert.ok(!Assert.isInteger(null));
    assert.ok(!Assert.isInteger(undefined));
    assert.ok(!Assert.isInteger(true));
    assert.ok(!Assert.isInteger(false));
    assert.ok(!Assert.isInteger([]));
    assert.ok(!Assert.isInteger(new Array()));
    assert.ok(!Assert.isInteger(''));
    assert.ok(!Assert.isInteger(new String()));
    assert.ok(!Assert.isInteger({}));
    assert.ok(!Assert.isInteger(new Object()));
    assert.ok(!Assert.isInteger(() => { } ));
    assert.ok(!Assert.isInteger(new Function()));
    assert.ok(!Assert.isInteger('0'));
    assert.ok(!Assert.isInteger('-7'));
    assert.ok(!Assert.isInteger('50'));
    assert.ok(!Assert.isInteger(0.1));
    assert.ok(!Assert.isInteger(12.5));
    assert.ok(!Assert.isInteger(-22.6));
    assert.ok(!Assert.isInteger('0.5'));
    assert.ok(!Assert.isInteger('21.3'));
    assert.ok(!Assert.isInteger('-33.67'));
    assert.ok(!Assert.isInteger('0.x'));
    assert.ok(!Assert.isInteger('a'));
    assert.ok(!Assert.isInteger('25.1.7'));
  });

  it('should assert is Function',  () => {
    assert.ok(Assert.isFunction(() => { }));
    assert.ok(Assert.isFunction(new Function()));
  });

  it('should assert is not Function',  () => {
    assert.ok(!Assert.isFunction(null));
    assert.ok(!Assert.isFunction(undefined));
    assert.ok(!Assert.isFunction(true));
    assert.ok(!Assert.isFunction(false));
    assert.ok(!Assert.isFunction([]));
    assert.ok(!Assert.isFunction(new Array()));
    assert.ok(!Assert.isFunction(''));
    assert.ok(!Assert.isFunction(new String()));
    assert.ok(!Assert.isFunction(0));
    assert.ok(!Assert.isFunction(new Number()));
    assert.ok(!Assert.isFunction({}));
    assert.ok(!Assert.isFunction(new Object()));
  });

  it('should assert is String',  () => {
    assert.ok(Assert.isString(''));
    assert.ok(Assert.isString(new String()));
  });

  it('should assert is not String',  () => {
    assert.ok(!Assert.isString(null));
    assert.ok(!Assert.isString(undefined));
    assert.ok(!Assert.isString(true));
    assert.ok(!Assert.isString(false));
    assert.ok(!Assert.isString([]));
    assert.ok(!Assert.isString(new Array()));
    assert.ok(!Assert.isString(0));
    assert.ok(!Assert.isString(new Number()));
    assert.ok(!Assert.isString({}));
    assert.ok(!Assert.isString(new Object()));
    assert.ok(!Assert.isString(() => { } ));
    assert.ok(!Assert.isString(new Function()));
  });

  it('should assert is Object',  () => {
    assert.ok(Assert.isObject({}));
    assert.ok(Assert.isObject(new Object()));
    assert.ok(Assert.isObject(new function() { }));
  });

  it('should assert is not Object',  () => {
    assert.ok(!Assert.isObject(null));
    assert.ok(!Assert.isObject(undefined));
    assert.ok(!Assert.isObject(true));
    assert.ok(!Assert.isObject(false));
    assert.ok(!Assert.isObject(''));
    assert.ok(!Assert.isObject(new String()));
    assert.ok(!Assert.isObject(0));
    assert.ok(!Assert.isObject(new Number()));
    assert.ok(!Assert.isObject([]));
    assert.ok(!Assert.isObject(new Array()));
    assert.ok(!Assert.isObject(() => { } ));
    assert.ok(!Assert.isObject(new Function()));
  });

  it('should assert is literal object',  () => {
    assert.ok(Assert.isLiteralObject({}));
    assert.ok(Assert.isLiteralObject(new Object()));
  });

  it('should assert is not literal object',  () => {
    assert.ok(!Assert.isLiteralObject(new function() { }));
    assert.ok(!Assert.isLiteralObject(null));
    assert.ok(!Assert.isLiteralObject(undefined));
    assert.ok(!Assert.isLiteralObject(true));
    assert.ok(!Assert.isLiteralObject(false));
    assert.ok(!Assert.isLiteralObject(''));
    assert.ok(!Assert.isLiteralObject(new String()));
    assert.ok(!Assert.isLiteralObject(0));
    assert.ok(!Assert.isLiteralObject(new Number()));
    assert.ok(!Assert.isLiteralObject([]));
    assert.ok(!Assert.isLiteralObject(new Array()));
    assert.ok(!Assert.isLiteralObject(() => { } ));
    assert.ok(!Assert.isLiteralObject(new Function()));
  });

  it('should assert is Truthy Attribute',  () => {
    assert.ok(Assert.isTruthyValue(true));
    assert.ok(Assert.isTruthyValue('true'));
    assert.ok(Assert.isTruthyValue(' true'));
    assert.ok(Assert.isTruthyValue('true '));
    assert.ok(Assert.isTruthyValue(' true '));
  });

  it('should assert is not Falsey Attribute',  () => {
    assert.ok(!Assert.isTruthyValue(1));
    assert.ok(!Assert.isTruthyValue('A'));
    assert.ok(!Assert.isTruthyValue({ }));
  });

  it('should assert is Truthy Attribute',  () => {
    assert.ok(Assert.isFalseyValue(false));
    assert.ok(Assert.isFalseyValue('false'));
    assert.ok(Assert.isFalseyValue(' false'));
    assert.ok(Assert.isFalseyValue('false '));
    assert.ok(Assert.isFalseyValue(' false '));
  });

  it('should assert is not Falsey Attribute',  () => {
    assert.ok(!Assert.isTruthyValue());
    assert.ok(!Assert.isTruthyValue(0));
    assert.ok(!Assert.isTruthyValue(null));
    assert.ok(!Assert.isTruthyValue(undefined));
  });

  it('should assert is empty array',  () => {
    assert.ok(Assert.isEmptyArray([]));
    assert.ok(Assert.isEmptyArray(new Array()));

    assert.ok(!Assert.isEmptyArray(new function() { }));
    assert.ok(!Assert.isEmptyArray(null));
    assert.ok(!Assert.isEmptyArray(undefined));
    assert.ok(!Assert.isEmptyArray(true));
    assert.ok(!Assert.isEmptyArray(false));
    assert.ok(!Assert.isEmptyArray(''));
    assert.ok(!Assert.isEmptyArray(new String()));
    assert.ok(!Assert.isEmptyArray(0));
    assert.ok(!Assert.isEmptyArray({}));
    assert.ok(!Assert.isEmptyArray(new Number()));
    assert.ok(!Assert.isEmptyArray(() => { } ));
    assert.ok(!Assert.isEmptyArray(new Function()));
  });

  it('should assert is empty literal object',  () => {
    assert.ok(Assert.isEmptyLiteralObject({}));

    assert.ok(!Assert.isEmptyLiteralObject(new function() { }));
    assert.ok(!Assert.isEmptyLiteralObject(null));
    assert.ok(!Assert.isEmptyLiteralObject(undefined));
    assert.ok(!Assert.isEmptyLiteralObject(true));
    assert.ok(!Assert.isEmptyLiteralObject(false));
    assert.ok(!Assert.isEmptyLiteralObject(''));
    assert.ok(!Assert.isEmptyLiteralObject(new String()));
    assert.ok(!Assert.isEmptyLiteralObject(0));
    assert.ok(!Assert.isEmptyLiteralObject(new Number()));
    assert.ok(!Assert.isEmptyLiteralObject([]));
    assert.ok(!Assert.isEmptyLiteralObject(new Array()));
    assert.ok(!Assert.isEmptyLiteralObject(() => { } ));
    assert.ok(!Assert.isEmptyLiteralObject(new Function()));
  });

  it('should assert is null or empty',  () => {
    assert.ok(Assert.isNullOrEmpty(''));
    assert.ok(Assert.isNullOrEmpty(null));
    assert.ok(Assert.isNullOrEmpty());
    assert.ok(Assert.isNullOrEmpty(undefined));
    assert.ok(Assert.isNullOrEmpty([]));
    assert.ok(Assert.isNullOrEmpty(new Array()));
    assert.ok(Assert.isNullOrEmpty({}));

    assert.ok(!Assert.isNullOrEmpty(new function() { }));
    assert.ok(!Assert.isNullOrEmpty(true));
    assert.ok(!Assert.isNullOrEmpty(false));
    assert.ok(!Assert.isNullOrEmpty(new String()));
    assert.ok(!Assert.isNullOrEmpty(0));
    assert.ok(!Assert.isNullOrEmpty(new Number()));
    assert.ok(!Assert.isNullOrEmpty(() => { } ));
    assert.ok(!Assert.isNullOrEmpty(new Function()));
  });

  it('should assert is Number value',  () => {
    assert.ok(Assert.isNumberValue(0));
    assert.ok(Assert.isNumberValue(new Number()));
    assert.ok(Assert.isNumberValue(0.1));
    assert.ok(Assert.isNumberValue(12.5));
    assert.ok(Assert.isNumberValue(-13));
    assert.ok(Assert.isNumberValue(-22.6));
    assert.ok(Assert.isNumberValue('0'));
    assert.ok(Assert.isNumberValue('0.5'));
    assert.ok(Assert.isNumberValue('21.3'));
    assert.ok(Assert.isNumberValue('-7'));
    assert.ok(Assert.isNumberValue('-33.67'));

    assert.ok(!Assert.isNumberValue(null));
    assert.ok(!Assert.isNumberValue(undefined));
    assert.ok(!Assert.isNumberValue(true));
    assert.ok(!Assert.isNumberValue(false));
    assert.ok(!Assert.isNumberValue([]));
    assert.ok(!Assert.isNumberValue(new Array()));
    assert.ok(!Assert.isNumberValue(''));
    assert.ok(!Assert.isNumberValue(new String()));
    assert.ok(!Assert.isNumberValue({}));
    assert.ok(!Assert.isNumberValue(new Object()));
    assert.ok(!Assert.isNumberValue(() => { } ));
    assert.ok(!Assert.isNumberValue(new Function()));
    assert.ok(!Assert.isNumberValue('0.x'));
    assert.ok(!Assert.isNumberValue('a'));
    assert.ok(!Assert.isNumberValue('25.1.7'));
  });

  it('should assert is Integer value',  () => {
    assert.ok(Assert.isIntegerValue(0));
    assert.ok(Assert.isIntegerValue(-13));
    assert.ok(Assert.isIntegerValue('0'));
    assert.ok(Assert.isIntegerValue('-7'));

    assert.ok(!Assert.isIntegerValue(null));
    assert.ok(!Assert.isIntegerValue(undefined));
    assert.ok(!Assert.isIntegerValue(true));
    assert.ok(!Assert.isIntegerValue(false));
    assert.ok(!Assert.isIntegerValue([]));
    assert.ok(!Assert.isIntegerValue(new Number()));
    assert.ok(!Assert.isIntegerValue(new Number(3)));
    assert.ok(!Assert.isIntegerValue(new Array()));
    assert.ok(!Assert.isIntegerValue(''));
    assert.ok(!Assert.isIntegerValue(new String()));
    assert.ok(!Assert.isIntegerValue({}));
    assert.ok(!Assert.isIntegerValue(new Object()));
    assert.ok(!Assert.isIntegerValue(() => { } ));
    assert.ok(!Assert.isIntegerValue(new Function()));
    assert.ok(!Assert.isIntegerValue(0.1));
    assert.ok(!Assert.isIntegerValue(12.5));
    assert.ok(!Assert.isIntegerValue(-22.6));
    assert.ok(!Assert.isIntegerValue('0.5'));
    assert.ok(!Assert.isIntegerValue('21.3'));
    assert.ok(!Assert.isIntegerValue('-33.67'));
    assert.ok(!Assert.isIntegerValue('0.x'));
    assert.ok(!Assert.isIntegerValue('a'));
    assert.ok(!Assert.isIntegerValue('25.1.7'));
  });

  it('should assert is Alpha value',  () => {
    assert.ok(Assert.isAlphaValue('a'));
    assert.ok(Assert.isAlphaValue('This is a test value'));

    assert.ok(!Assert.isAlphaValue(0));
    assert.ok(!Assert.isAlphaValue(new Number()));
    assert.ok(!Assert.isAlphaValue(-13));
    assert.ok(!Assert.isAlphaValue(null));
    assert.ok(!Assert.isAlphaValue(undefined));
    assert.ok(!Assert.isAlphaValue(true));
    assert.ok(!Assert.isAlphaValue(false));
    assert.ok(!Assert.isAlphaValue([]));
    assert.ok(!Assert.isAlphaValue(new Array()));
    assert.ok(!Assert.isAlphaValue(''));
    assert.ok(!Assert.isAlphaValue(new String()));
    assert.ok(!Assert.isAlphaValue({}));
    assert.ok(!Assert.isAlphaValue(new Object()));
    assert.ok(!Assert.isAlphaValue(() => { } ));
    assert.ok(!Assert.isAlphaValue(new Function()));
    assert.ok(!Assert.isAlphaValue(0.1));
    assert.ok(!Assert.isAlphaValue(12.5));
    assert.ok(!Assert.isAlphaValue(-22.6));
    assert.ok(!Assert.isAlphaValue('0'));
    assert.ok(!Assert.isAlphaValue('0.5'));
    assert.ok(!Assert.isAlphaValue('21.3'));
    assert.ok(!Assert.isAlphaValue('-33.67'));
    assert.ok(!Assert.isAlphaValue('-7'));
    assert.ok(!Assert.isAlphaValue('0.x'));
    assert.ok(!Assert.isAlphaValue('A test-value.'));
    assert.ok(!Assert.isAlphaValue('Alpha Number test value 35.6'));
  });

  it('should assert is Alpha Numberal value',  () => {
    assert.ok(Assert.isAlphaNumeralValue('a'));
    assert.ok(Assert.isAlphaNumeralValue('This is a test value'));
    assert.ok(Assert.isAlphaNumeralValue('Alpha Number test value 35.6'));
    assert.ok(Assert.isAlphaNumeralValue('0'));
    assert.ok(Assert.isAlphaNumeralValue('0.5'));
    assert.ok(Assert.isAlphaNumeralValue('21.3'));
    assert.ok(Assert.isAlphaNumeralValue('-33.67'));
    assert.ok(Assert.isAlphaNumeralValue('-7'));
    assert.ok(Assert.isAlphaNumeralValue('0.x'));
    assert.ok(Assert.isAlphaNumeralValue('a'));
    assert.ok(Assert.isAlphaNumeralValue('A test-value.'));

    assert.ok(!Assert.isAlphaNumeralValue(0));
    assert.ok(!Assert.isAlphaNumeralValue(new Number()));
    assert.ok(!Assert.isAlphaNumeralValue(-13));
    assert.ok(!Assert.isAlphaNumeralValue(null));
    assert.ok(!Assert.isAlphaNumeralValue(undefined));
    assert.ok(!Assert.isAlphaNumeralValue(true));
    assert.ok(!Assert.isAlphaNumeralValue(false));
    assert.ok(!Assert.isAlphaNumeralValue([]));
    assert.ok(!Assert.isAlphaNumeralValue(new Array()));
    assert.ok(!Assert.isAlphaNumeralValue(''));
    assert.ok(!Assert.isAlphaNumeralValue(new String()));
    assert.ok(!Assert.isAlphaNumeralValue({}));
    assert.ok(!Assert.isAlphaNumeralValue(new Object()));
    assert.ok(!Assert.isAlphaNumeralValue(() => { } ));
    assert.ok(!Assert.isAlphaNumeralValue(new Function()));
    assert.ok(!Assert.isAlphaNumeralValue(0.1));
    assert.ok(!Assert.isAlphaNumeralValue(12.5));
    assert.ok(!Assert.isAlphaNumeralValue(-22.6));
  });

  it('should assert is Date value',  () => {
    assert.ok(Assert.isDateValue(new Date()));
    assert.ok(Assert.isDateValue('2015/12/17'));
    assert.ok(Assert.isDateValue('2015/12/17 00:12:21'));
    assert.ok(Assert.isDateValue('2015/12/17 00:12:21 GMT'));
    assert.ok(Assert.isDateValue('2015-12-17'));
    assert.ok(Assert.isDateValue('2015-12-17 00:12:21'));
    assert.ok(Assert.isDateValue('2015-12-17 00:12:21 GMT'));
    assert.ok(Assert.isDateValue('12/17/2015'));
    assert.ok(Assert.isDateValue('12-17-2015'));
    assert.ok(Assert.isDateValue('17 Dec 2015'));
    assert.ok(Assert.isDateValue('Tue, 06 Feb 2018 05:32:31 GMT'));

    assert.ok(!Assert.isDateValue(null));
    assert.ok(!Assert.isDateValue(undefined));
    assert.ok(!Assert.isDateValue(true));
    assert.ok(!Assert.isDateValue(false));
    assert.ok(!Assert.isDateValue([]));
    assert.ok(!Assert.isDateValue(new Array()));
    assert.ok(!Assert.isDateValue(''));
    assert.ok(!Assert.isDateValue(new String()));
    assert.ok(!Assert.isDateValue(0));
    assert.ok(!Assert.isDateValue(new Number()));
    assert.ok(!Assert.isDateValue({}));
    assert.ok(!Assert.isDateValue(new Object()));
    assert.ok(!Assert.isDateValue(() => { } ));
    assert.ok(!Assert.isDateValue(new Function()));
    assert.ok(!Assert.isDateValue('2015/13/17'));
    assert.ok(!Assert.isDateValue('2015/12/17 24:12:21'));
    assert.ok(!Assert.isDateValue('20151217'));
    assert.ok(!Assert.isDateValue('2015--17'));
    assert.ok(!Assert.isDateValue('12\\17\\2015'));
  });
});
