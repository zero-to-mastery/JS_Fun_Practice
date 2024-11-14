import { describe, test, it, expect } from "vitest";
import { addb, identity, subb, mulb, minb, add, maxb, min, max, addRecurse, mulRecurse, minRecurse, not, maxRecurse } from "../Solutions/awodesigns_solutions";

describe('identity', () => {
    it('should return the argument passed', () => {
        expect(identity(5)).toBe(5);
    });
});

describe('addb', () => {
    it('should return the sum of two numbers', () => {
        expect(addb(2, 2)).toBe(4)
    });
});

describe('subb', () => {
    it('should return the difference of two numbers', () => {
        expect(subb(2, 2)).toBe(0);
    });
});

describe('mulb', () => {
    it('should return the product of two numbers', () => {
        expect(mulb(2, 3)).toBe(6);
    });
});

describe('minb', () => {
    it('should return the minimum of two numbers', () => {
        expect(minb(2, 3)).toBe(2);
    });
});

describe('maxb', () => {
    it('should return the maximum of two numbers', () => {
        expect(maxb(1, 2)).toBe(2);
    });
});

describe('add', () => {
    it('should return the sum of all arguments passed', () => {
        expect(add(1, 2, 3, 4, 5)).toBe(15);
    });
});

// write a test for min
describe('min', () => {
    it('should return the minimum of all arguments', () => {
        expect(min(4, 3, 2, 0, 5)).toBe(0);
    });
})

describe('max', () => {
    it('should return the maximum of all arguments', () => {
        expect(max(12, 3, 45, 0, 0, 9)).toBe(45)
    });
});

describe('addRecurse', () => {
    it('should return the sum of all arguments', () => {
        expect(addRecurse(1, 4, 2, 3, 5)).toBe(15);
    });
});

describe('mulRecurse', () => {
    it('should return the product of all arguments', () => {
        expect(mulRecurse(1, 3)).toBe(3);
    });
});

describe('minRecurse', () => {
    it('should return the min of all args using recursion', () => {
        expect(minRecurse(5, 2, 4, 3)).toBe(2);
    });
});

describe('maxRecurse', () => {
    it('should return the min of all args using recursion', () => {
        expect(maxRecurse(5, 2, 4, 3)).toBe(5);
    });
});
