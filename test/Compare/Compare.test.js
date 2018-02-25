import assert from 'assert';
import { describe, it } from 'mocha';
import Compare from '../../src/Compare/Compare';

describe('Compare Test', () => {
  it('should compare type', () => {
    const nullVar1 = null;
    const nullVar2 = null;
    const undefinedVar1 = undefined;
    const undefinedVar2 = undefined;
    const trueVar = true;
    const falseVar = false;
    const stringVar1 = 'string';
    const stringVar2 = '';
    const stringVar3 = new String();
    const stringVar4 = new String(100);
    const numberVar1 = 0;
    const numberVar2 = 1.5;
    const numberVar3 = new Number();
    const numberVar4 = new Number('200');
    const arrayVar1 = [];
    const arrayVar2 = [1, 2, 3];
    const arrayVar3 = new Array();
    const dateVar1 = Date.now();
    const dateVar2 = Date.parse('2018/01/01');
    const dateVar3 = new Date();
    const objectVar1 = {};
    const objectVar2 = { id: 1, name: 'X', list: [1, 3, 5] };
    const objectVar3 = new Object();
    const functionVar1 = () => { };
    const functionVar2 = new Function();

    assert.ok(Compare.isIdenticalType(nullVar1, nullVar2));
    assert.ok(Compare.isIdenticalType(undefinedVar1, undefinedVar2));
    assert.ok(Compare.isIdenticalType(trueVar, falseVar));
    assert.ok(Compare.isIdenticalType(stringVar1, stringVar2));
    assert.ok(Compare.isIdenticalType(stringVar3, stringVar4));
    assert.ok(Compare.isIdenticalType(numberVar1, numberVar2));
    assert.ok(Compare.isIdenticalType(numberVar3, numberVar4));
    assert.ok(Compare.isIdenticalType(arrayVar1, arrayVar2));
    assert.ok(Compare.isIdenticalType(arrayVar2, arrayVar3));
    assert.ok(Compare.isIdenticalType(arrayVar1, arrayVar3));
    assert.ok(Compare.isIdenticalType(dateVar1, dateVar2));
    assert.ok(Compare.isIdenticalType(objectVar1, objectVar2));
    assert.ok(Compare.isIdenticalType(objectVar2, objectVar3));
    assert.ok(Compare.isIdenticalType(objectVar1, objectVar3));
    assert.ok(Compare.isIdenticalType(functionVar1, functionVar2));
    assert.ok(Compare.isIdenticalType(nullVar1, arrayVar1));
    assert.ok(Compare.isIdenticalType(nullVar1, objectVar1));
    assert.ok(Compare.isIdenticalType(numberVar1, dateVar1));
    assert.ok(Compare.isIdenticalType(arrayVar1, objectVar1));

    assert.ok(!Compare.isIdenticalType(nullVar1, undefinedVar1));
    assert.ok(!Compare.isIdenticalType(nullVar1, trueVar));
    assert.ok(!Compare.isIdenticalType(nullVar1, stringVar1));
    assert.ok(!Compare.isIdenticalType(nullVar1, numberVar1));
    assert.ok(!Compare.isIdenticalType(nullVar1, dateVar1));
    assert.ok(!Compare.isIdenticalType(nullVar1, functionVar1));
    assert.ok(!Compare.isIdenticalType(undefinedVar1, trueVar));
    assert.ok(!Compare.isIdenticalType(undefinedVar1, stringVar1));
    assert.ok(!Compare.isIdenticalType(undefinedVar1, numberVar1));
    assert.ok(!Compare.isIdenticalType(undefinedVar1, arrayVar1));
    assert.ok(!Compare.isIdenticalType(undefinedVar1, dateVar1));
    assert.ok(!Compare.isIdenticalType(undefinedVar1, objectVar1));
    assert.ok(!Compare.isIdenticalType(undefinedVar1, functionVar1));
    assert.ok(!Compare.isIdenticalType(trueVar, stringVar1));
    assert.ok(!Compare.isIdenticalType(trueVar, numberVar1));
    assert.ok(!Compare.isIdenticalType(trueVar, arrayVar1));
    assert.ok(!Compare.isIdenticalType(trueVar, dateVar1));
    assert.ok(!Compare.isIdenticalType(trueVar, objectVar1));
    assert.ok(!Compare.isIdenticalType(trueVar, functionVar1));
    assert.ok(!Compare.isIdenticalType(stringVar1, numberVar1));
    assert.ok(!Compare.isIdenticalType(stringVar1, arrayVar1));
    assert.ok(!Compare.isIdenticalType(stringVar1, dateVar1));
    assert.ok(!Compare.isIdenticalType(stringVar1, objectVar1));
    assert.ok(!Compare.isIdenticalType(stringVar1, functionVar1));
    assert.ok(!Compare.isIdenticalType(numberVar1, arrayVar1));
    assert.ok(!Compare.isIdenticalType(numberVar1, objectVar1));
    assert.ok(!Compare.isIdenticalType(numberVar1, functionVar1));
    assert.ok(!Compare.isIdenticalType(arrayVar1, dateVar1));
    assert.ok(!Compare.isIdenticalType(arrayVar1, functionVar1));
    assert.ok(!Compare.isIdenticalType(dateVar1, objectVar1));
    assert.ok(!Compare.isIdenticalType(dateVar1, functionVar1));
    assert.ok(!Compare.isIdenticalType(objectVar1, functionVar1));
    assert.ok(!Compare.isIdenticalType(stringVar2, stringVar3));
    assert.ok(!Compare.isIdenticalType(stringVar1, stringVar3));
    assert.ok(!Compare.isIdenticalType(numberVar2, numberVar3));
    assert.ok(!Compare.isIdenticalType(numberVar1, numberVar3));
    assert.ok(!Compare.isIdenticalType(dateVar1, dateVar3));
    assert.ok(!Compare.isIdenticalType(dateVar2, dateVar3));
  });

  it('should compare sample value', () => {
    const nullVar1 = null;
    const nullVar2 = null;
    const undefinedVar1 = undefined;
    const undefinedVar2 = undefined;
    const boolVar1 = true;
    const boolVar2 = false;
    const boolVar3 = true;
    const boolVar4 = false;
    const stringVar1 = '100';
    const stringVar2 = '200';
    const stringVar3 = '100';
    const stringVar4 = new String('100');
    const stringVar5 = new String('100');
    const numberVar1 = 0;
    const numberVar2 = 20.5;
    const numberVar3 = 20.5;
    const numberVar4 = new Number(20.5);
    const numberVar5 = new Number(20.5);
    const arrayVar1 = [1, 2, 3];
    const arrayVar2 = [1, 2, 3];
    const dateVar1 = Date.parse('01/01/2018');
    const dateVar2 = Date.parse('2018/01/01');
    const dateVar3 = Date.now();
    const objectVar1 = { id: 1, name: 'X', list: [1, 3, 5] };
    const objectVar2 = { id: 1, name: 'X', list: [1, 3, 5] };
    const functionVar1 = () => { };
    const functionVar2 = () => { };

    assert.ok(Compare.isEqual(boolVar1, boolVar3));
    assert.ok(Compare.isEqual(boolVar2, boolVar4));
    assert.ok(Compare.isEqual(stringVar1, stringVar3));
    assert.ok(Compare.isEqual(stringVar4, stringVar5));
    assert.ok(Compare.isEqual(numberVar2, numberVar3));
    assert.ok(Compare.isEqual(numberVar4, numberVar5));
    assert.ok(Compare.isEqual(dateVar1, dateVar2));

    assert.ok(!Compare.isEqual(nullVar1, nullVar2));
    assert.ok(!Compare.isEqual(undefinedVar1, undefinedVar2));
    assert.ok(!Compare.isEqual(boolVar1, boolVar2));
    assert.ok(!Compare.isEqual(stringVar1, stringVar2));
    assert.ok(!Compare.isEqual(stringVar1, stringVar4));
    assert.ok(!Compare.isEqual(numberVar2, numberVar4));
    assert.ok(!Compare.isEqual(arrayVar1, arrayVar2));
    assert.ok(!Compare.isEqual(dateVar1, dateVar3));
    assert.ok(!Compare.isEqual(objectVar1, objectVar2));
    assert.ok(!Compare.isEqual(functionVar1, functionVar2));
  });

  it('should compare array', () => {
    const nullVar1 = null;
    const nullVar2 = null;
    const undefinedVar1 = undefined;
    const undefinedVar2 = undefined;
    const boolVar1 = true;
    const boolVar2 = false;
    const boolVar3 = true;
    const boolVar4 = false;
    const stringVar1 = '100';
    const stringVar2 = '200';
    const stringVar3 = '100';
    const stringVar4 = new String('100');
    const stringVar5 = new String('100');
    const numberVar1 = 0;
    const numberVar2 = 20.5;
    const numberVar3 = 20.5;
    const numberVar4 = new Number(20.5);
    const numberVar5 = new Number(20.5);
    const dateVar1 = Date.parse('01/01/2018');
    const dateVar2 = Date.parse('2018/01/01');
    const objectVar1 = { id: 1, name: 'X', list: [1, 3, 5] };
    const objectVar2 = { id: 1, name: 'X', list: [1, 3, 5] };
    const functionVar1 = () => { };
    const functionVar2 = () => { };

    const arrayVar1 = [1, 2, 3];
    const arrayVar2 = [1, 2, 3];
    const arrayVar3 = [];
    const arrayVar4 = new Array();
    const arrayVar5 = [1, 'XA', Date.now(), true, new String('102'), new Number(20.5), 33.5, [1, 3], { id: 3, name: 'XB' }];
    const arrayVar6 = [1, 'XA', Date.now(), true, new String('102'), new Number(20.5), 33.5, [1, 3], { id: 3, name: 'XB' }];
    const arrayVar7 = [1, 3];
    const arrayVar8 = [1, 2];
    const arrayVar9 = [1, 'XA', Date.now(), true, new String('102'), new Number(20.5), 33.5, [1, 3], { id: 3, name: 'XA' }];
    const arrayVar0 = [1, 'XA', Date.now(), true, new String('102'), new Number(20.5), 33.5, [1, 3], { id: 3, name: 'XB' }];

    assert.ok(Compare.isEqualArray(arrayVar1, arrayVar2));
    assert.ok(Compare.isEqualArray(arrayVar3, arrayVar4));
    assert.ok(Compare.isEqualArray(arrayVar5, arrayVar6));

    assert.ok(!Compare.isEqualArray(nullVar1, nullVar2));
    assert.ok(!Compare.isEqualArray(undefinedVar1, undefinedVar2));
    assert.ok(!Compare.isEqualArray(boolVar1, boolVar3));
    assert.ok(!Compare.isEqualArray(boolVar2, boolVar4));
    assert.ok(!Compare.isEqualArray(stringVar1, stringVar2));
    assert.ok(!Compare.isEqualArray(stringVar3, stringVar4));
    assert.ok(!Compare.isEqualArray(stringVar5, numberVar1));
    assert.ok(!Compare.isEqualArray(numberVar2, numberVar3));
    assert.ok(!Compare.isEqualArray(numberVar4, numberVar5));
    assert.ok(!Compare.isEqualArray(arrayVar7, arrayVar8));
    assert.ok(!Compare.isEqualArray(arrayVar9, arrayVar0));
    assert.ok(!Compare.isEqualArray(dateVar1, dateVar2));
    assert.ok(!Compare.isEqualArray(objectVar1, objectVar2));
    assert.ok(!Compare.isEqualArray(functionVar1, functionVar2));
  });

  it('should compare literal object', () => {
    const nullVar1 = null;
    const nullVar2 = null;
    const undefinedVar1 = undefined;
    const undefinedVar2 = undefined;
    const boolVar1 = true;
    const boolVar2 = false;
    const boolVar3 = true;
    const boolVar4 = false;
    const stringVar1 = '100';
    const stringVar2 = '200';
    const stringVar3 = '100';
    const stringVar4 = new String('100');
    const stringVar5 = new String('100');
    const numberVar1 = 0;
    const numberVar2 = 20.5;
    const numberVar3 = 20.5;
    const numberVar4 = new Number(20.5);
    const numberVar5 = new Number(20.5);
    const dateVar1 = Date.parse('01/01/2018');
    const dateVar2 = Date.parse('2018/01/01');
    const arrayVar1 = [1, 2, 3];
    const arrayVar2 = [1, 2, 3];
    const functionVar1 = () => { };
    const functionVar2 = () => { };

    const literalObjectVar1 = { id: 1, name: 'x' };
    const literalObjectVar2 = { id: 1, name: 'x' };
    const literalObjectVar3 = {};
    const literalObjectVar4 = new Object();
    const literalObjectVar5 = { id: 1, name: 'x', list: ['2', '7A'] };
    const literalObjectVar6 = { id: 1, name: 'x', list: ['2', '7A'] };

    const literalObjectVar7 = { id: 0, name: 'x', list: ['2', '7A'] };
    const literalObjectVar8 = { id: 1, name: 'x', list: ['2', '7A'] };
    const literalObjectVar9 = { id: 1, name: 'x', list: ['2', 'A7'] };
    const literalObjectVar0 = { id: 1, name: 'x', list: ['2', '7A'] };

    assert.ok(Compare.isEqualLiteralObject(literalObjectVar1, literalObjectVar2));
    assert.ok(Compare.isEqualLiteralObject(literalObjectVar3, literalObjectVar4));
    assert.ok(Compare.isEqualLiteralObject(literalObjectVar5, literalObjectVar6));

    assert.ok(!Compare.isEqualLiteralObject(nullVar1, nullVar2));
    assert.ok(!Compare.isEqualLiteralObject(undefinedVar1, undefinedVar2));
    assert.ok(!Compare.isEqualLiteralObject(boolVar1, boolVar3));
    assert.ok(!Compare.isEqualLiteralObject(boolVar2, boolVar4));
    assert.ok(!Compare.isEqualLiteralObject(stringVar1, stringVar2));
    assert.ok(!Compare.isEqualLiteralObject(stringVar3, stringVar4));
    assert.ok(!Compare.isEqualLiteralObject(stringVar5, numberVar1));
    assert.ok(!Compare.isEqualLiteralObject(numberVar2, numberVar3));
    assert.ok(!Compare.isEqualLiteralObject(numberVar4, numberVar5));
    assert.ok(!Compare.isEqualLiteralObject(arrayVar1, arrayVar2));
    assert.ok(!Compare.isEqualLiteralObject(dateVar1, dateVar2));
    assert.ok(!Compare.isEqualLiteralObject(functionVar1, functionVar2));
    assert.ok(!Compare.isEqualLiteralObject(literalObjectVar7, literalObjectVar8));
    assert.ok(!Compare.isEqualLiteralObject(literalObjectVar9, literalObjectVar0));
  });
});