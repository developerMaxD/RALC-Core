import Assert from '../Assert/Assert.js';

export default class Compare {
  static isIdenticalType(firstItem, secondItem) {
    return typeof firstItem === typeof secondItem;
  }

  static isEqual(firstValue, secondValue) {
    return Assert.exists(firstValue) && Assert.exists(secondValue) &&
      Compare.isIdenticalType(firstValue, secondValue) &&
      !Assert.isArray(firstValue) && !Assert.isObject(firstValue) && !Assert.isFunction(firstValue) &&
      (firstValue === secondValue || firstValue.valueOf() === secondValue.valueOf());
  }

  static isEqualArray(firstArray, secondArray, isDeepEqual = true) {
    if (!Assert.exists(firstArray) || !Assert.isArray(firstArray) ||
      !Assert.exists(secondArray) || !Assert.isArray(secondArray)) {
      return false;
    }
    if (isDeepEqual) {
      if (!Compare.isEqual(firstArray.length, secondArray.length)) { return false; }
      return firstArray.every((item, index) => {
        const compareTo = secondArray[index];
        return Compare.isIdenticalType(item, compareTo) &&
          (
            (Assert.isArray(item) && Compare.isEqualArray(item, compareTo)) ||
            (Assert.isLiteralObject(item) && Compare.isEqualLiteralObject(item, compareTo)) ||
            (!Assert.isArray(item) && !Assert.isLiteralObject(item) && !Assert.isFunction(item) && Compare.isEqual(item, compareTo))
          );
      });
    } else {
      return firstArray === secondArray;
    }
  }

  static isEqualLiteralObject(firstObject, secondObject, ignoredKeys = [], isDeepEqual = true) {
    if (!Assert.exists(firstObject) || !Assert.isLiteralObject(firstObject) ||
      !Assert.exists(secondObject) || !Assert.isLiteralObject(secondObject)) {
      return false;
    }
    let filteredFirstObject, filteredSecondObject;
    if (Assert.isEmptyArray(ignoredKeys)) {
      filteredFirstObject = firstObject;
      filteredSecondObject = secondObject;
    } else {
      filteredFirstObject = { ...firstObject };
      filteredSecondObject = { ...secondObject };
      ignoredKeys.forEach(key => {
        delete filteredFirstObject[key];
        delete filteredSecondObject[key];
      });
    }
    if (isDeepEqual) {
      if (!Compare.isEqualArray(Object.keys(filteredFirstObject), Object.keys(filteredSecondObject))) { return false; }
      for (const key in filteredFirstObject) {
        const firstItem = filteredFirstObject[key];
        const secondItem = filteredSecondObject[key];
        if (!Compare.isIdenticalType(firstItem, secondItem) ||
          (Assert.isArray(firstItem) && !Compare.isEqualArray(firstItem, secondItem)) ||
          (Assert.isLiteralObject(firstItem) && !Compare.isEqualLiteralObject(firstItem, secondItem)) ||
          (!Assert.isArray(firstItem) && !Assert.isLiteralObject(firstItem) && !Assert.isFunction(firstItem) && !Compare.isEqual(firstItem, secondItem))) {
          return false;
        }
      }
      return true;
    } else {
      return filteredFirstObject === filteredSecondObject;
    }
  }
}
