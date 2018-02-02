export default class Assert {
  // -------------------- basic assert --------------------
  static isUndefined(value) {
    return typeof value === 'undefined';
  }

  static isNull(value) {
    return value === null;
  }

  static exists(value) {
    return !Assert.isUndefined(value) && !Assert.isNull(value);
  }

  // -------------------- type assert --------------------
  static isString(value) {
    return typeof value === 'string' || value instanceof String;
  }

  static isNumber(value) {
    return (typeof value === 'number' || value instanceof Number) && !isNaN(value);
  }

  static isBool(value) {
    return typeof value === 'boolean';
  }

  static isDate(value) {
    return value instanceof Date;
  }

  static isArray(value) {
    return Array.isArray(value);
  }

  static isObject(value) {
    return Assert.exists(value) &&
      typeof value === 'object' &&
      !(Assert.isBool(value) ||
        Assert.isNumber(value) ||
        Assert.isDate(value) ||
        Assert.isArray(value) ||
        Assert.isString(value) ||
        Assert.isFunction(value));
  }

  static isLiteralObject(value) {
    return Assert.isObject(value) &&
      value.constructor === ({}).constructor;
  }

  static isFunction(value) {
    return value instanceof Function;
  }

  // -------------------- value assert --------------------
  static isEmptyString(value) {
    return value === '';
  }

  static isNullOrEmptyString(value) {
    return !Assert.exists(value) || Assert.isEmptyString(value);
  }

  static isEmptyArray(value) {
    return Assert.isArray(value) && value.length === 0;
  }

  static isEmptyLiteralObject(value) {
    return Assert.isLiteralObject(value) && Object.getOwnPropertyNames(value).length === 0;
  }

  static isNullOrEmpty(value) {
    return !Assert.exists(value) ||
            Assert.isEmptyString(value) ||
            Assert.isEmptyArray(value) ||
            Assert.isEmptyLiteralObject(value);
  }

  static isTrue(value) {
    return Assert.isBool(value) && value === true;
  }

  static isFalse(value) {
    return Assert.isBool(value) && value === false;
  }

  static isTruthyValue(value) {
    return Assert.isTrue(value) || (Assert.isString(value) && /^true$/i.test(value.trim()));
  }

  static isFalseyValue(value) {
    return Assert.isFalse(value) || (Assert.isString(value) && /^false/i.test(value.trim()));
  }

  static isNumberValue(value) {
    return Assert.isNumber(value) || (Assert.isString(value) && /^[-+]?[0-9]+(\.[0-9]+)?$/.test(value));
  }

  static isIntegerValue(value) {
    return Math.floor(value) === value || (Assert.isString(value) && /^[-+]?[0-9]+$/.test(value));
  }

  static isAlphaValue(value) {
    return Assert.isString(value) && /^[a-zA-Z\s]+$/.test(value);
  }

  static isAlphaNumeralValue(value) {
    return Assert.isString(value) && /^[a-zA-Z0-9-\.\s\r\n]*$/.test(value);
  }

  static isDateValue(value) {
    return Assert.isDate(value) || (Assert.isString(value) && Assert.isNumber(Date.parse(value)));
  }
}
