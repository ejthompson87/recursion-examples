var Recursion = require('.././recursion.js');

describe("Recursion", function() {

  // 1. addList test
  describe("when addList function called", function() {
    let a = [1, 2, 10, 20];
    let b = [10, 10, 20, 30];
    let c = Recursion.addList(a);
    let d = Recursion.addList(b);

    it("should return sum of the list", function() {
      expect(c).toEqual(33);
      expect(c).not.toEqual(0);
      expect(d).toEqual(70);
    });
  });

  // 2. multiplyList
  describe("when multiplyList function called", function() {
    let a = [1, 2, 10, 20];
    let b = [3, 5, 2, 10];
    let c = Recursion.multiplyList(a);
    let d = Recursion.multiplyList(b);

    it("should multply list", function() {
      expect(c).toEqual(400);
      expect(c).not.toEqual(0);
      expect(d).toEqual(300);
    });
  });

  // 3. countOccurances
  describe("when countOccur function called", function() {
    let a = [1, 2, 10, 20, 1];
    let b = 1;
    let c = 2;
    let d = Recursion.countOccur(b, a);
    let e = Recursion.countOccur(c, a);

    it("should count the number of occurances of the passed in number", function() {
      expect(d).toEqual(2);
      expect(d).not.toEqual(1);
      expect(e).toEqual(1);
    });
  });

  // 4. binary search
  describe("when binSearch function called", function() { 
    let a = [2,5,6,8,12];
    let b = 5;
    let c = 10;
    let d = Recursion.binSearch(a, b);
    let e = Recursion.binSearch(a, c);

    it("should return true if number is in list", function() {
      expect(d).toBe(true);
      expect(e).not.toBe(true);
    });    
  });

  // 5. is Palindrome
  describe("when isPalindrome function called", function() { 
    let a = Recursion.isPalindrome("kabaak");
    let b = Recursion.isPalindrome("rever");
    let c = Recursion.isPalindrome("bob");

    it("should return true if string is a Palindrome", function() {
      expect(a).not.toBe(true);
      expect(b).toBe(true);
      expect(c).toBe(true);
    });    
  });
});
