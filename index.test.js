const {
    myConstant,
    myVar,
    myBoolVal,
    myStingVar,
    constantIdentifier,
    add,
    subtract,
    areaRectangle,
    oddOrEven,
    isItString,
    isInteger,
    lengthText,
    reverseString,
    doubleChar,
    disemvowel
} = require("./index.js");

describe('smoke test', () => { //a describe block groups several tests together
    it('tests that Jest is working', () => { //smoke test
        expect(2+2).toBe(4); // smoke test's assertion
    });
});

describe('tests variables and constants', () => {
    it('tests myConstant', () => {
        expect(myConstant).toBeDefined();
        expect(typeof myConstant).toBe("number");
        expect(myConstant%1).toBe(0);
        expect(() => {
            constantIdentifier('const');
        }).toThrowError(/^Assignment to constant variable.$/);
    });
    it('tests myVar', () => {
        expect(myVar).toBeDefined();
        expect(typeof myConstant).toBe("number");
        expect(myConstant%1).toBe(0);
        expect(() => {
            constantIdentifier('var');
        }).not.toThrowError(/^Assignment to constant variable.$/);
    });
    it('tests myBoolVal', () => {
        expect(myBoolVal).toBeDefined();
        expect(typeof myBoolVal).toBe("boolean");
        expect(myBoolVal).not.toBe(true);
    });
    it('tests myStingVar', () => {
        expect(myStingVar).toBeDefined();
        expect(typeof myStingVar).toBe("string");
        expect(myStingVar).toHaveLength(23);
    });
});

describe('tests function add', () => {
    // the test below has 2 assertions
    it('tests that function add adds whole numbers', () => {
        expect(add(2,3)).toBe(5);
        expect(add(100, -200)).toBe(-100);
    });
    // the test below has 1 assertion
    it('tests that function add adds fractional numbers', () => {
        expect(add(0.2, 0.1)).toBeCloseTo(0.3, 5);
    });
    // the test below has 3 assertions
    it('tests that function add works for stringified numbers', () => {
        expect(add('2','2')).toBe(4);
        expect(add('2',3)).toBe(5);
        expect(add(7,'2')).toBe(9);
    });
});

describe('tests function subtract', () => {
    it('tests that function subtract subtracts whole numbers', () => {
        expect(subtract(5,3)).toBe(2);
        expect(subtract(100, -200)).toBe(300);
    });
    it('tests that function subtract subtracts fractional numbers', () => {
        expect(subtract(0.4, 0.1)).toBeCloseTo(0.3, 5);
    });
    it('tests that function add works for stringified numbers', () => {
        expect(subtract('2','2')).toBe(0);
        expect(subtract('2',3)).toBe(-1);
        expect(subtract(7,'2')).toBe(5);
    });
});

describe('tests function areaRectangle', () => {
    it('tests that areaRectangle function works with whole numbers', () => {
        expect(areaRectangle(2,2)).toBe(4);
        expect(areaRectangle(2.3,2.3)).toBeCloseTo(5.29,2);
    });
});

describe('tests function oddOrEven', () => {
    it('tests that oddOrEven works with whole numbers', () => {
        expect(oddOrEven(6)).toBe("even");
        expect(oddOrEven(7)).toBe("odd");
    });
});

describe('tests function isItString', () => {
    it('tests that isItString works for strings', () => {
        expect(isItString('')).toBeTruthy();
        expect(isItString('!@|')).toBe(true);
        expect(isItString('Hello world!')).toBeTruthy();
    });
    it('tests that isItString works for non-strings', () => {
        expect(isItString(2.3)).toBeFalsy();
        expect(isItString([1,2,3])).toBe(false);
    });
});

describe('tests function isInteger', () => {
    it('tests that isInteger works for whole numbers', () => {
        expect(isInteger(2)).toBeTruthy();
        expect(isInteger(-2)).toBeTruthy();
    });
    it('tests that isItString works for non-integers', () => {
        expect(isInteger(2.3)).toBe(false);
    });
});

describe('tests function lengthText', () => {
    it('tests that lengthText function works for strings', () => {
        expect(lengthText('aaa')).toBe(3);
        expect(lengthText('')).toBe(0);
    });
});

describe('tests function reverseString', () => {
    it('tests that reverseString function works for strings', () => {
        expect(reverseString('aaa')).toBe('aaa');
        expect(reverseString('hello')).toBe('olleh');
    });
});

describe('tests function doubleChar', () => {
    it('tests that doubleChar function works for strings', () => {
        expect(doubleChar('hello')).toBe('hheelllloo');
    });
});

describe('tests function disemvowel', () => {
    it('tests that disemvowel function works for strings', () => {
        expect(disemvowel('hello')).toBe('hll');
    });
});