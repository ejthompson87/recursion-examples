// recursion examples 

// 1. addList [1, 2, 10, 20]
function addList(list) {
    if (list.length === 0) {
        return 0;
    }
    return list[0] + addList(list.slice(1));
}
exports.addList = addList;

// 2. multiplyList
function multiplyList(list) {
    if (list.length === 0) {
        return 0;
    }
    return multiplyHelper(list);
}
function multiplyHelper(list) {
    if (list.length === 0) {
        return 1;
    }
    return list[0] * multiplyHelper(list.slice(1));
}
exports.multiplyList = multiplyList;

// 3. count occurances - given list of numbers and a number - how many times does that number appear 
function countOccur(num, list) {
    if (list.length === 0) {
        return 0;
    }
    let occuranceCount = 0;
    if (list[0] === num) {
        occuranceCount++;
    }
    occuranceCount += countOccur(num, list.slice(1));
    return occuranceCount;
}
exports.countOccur = countOccur;

// 4. binary search - search if num is in list 
function binSearch(list, num) {
    if (list.length === 0) {
        return false;
    }
    let middleIndex = Math.floor(list.length / 2);
    if (list[middleIndex] === num) {
        return true;
    }
    if (list[middleIndex] > num) {
        return binSearch(list.slice(0,middleIndex), num);
    }
    if (list[middleIndex] < num) {
        return binSearch(list.slice(middleIndex+1), num);
    }

}
exports.binSearch = binSearch;

// 5. is palindrome 
function isPalindrome(word) {
    if (word.length <= 1) {
        return true;
    }
    if (word.charAt(0) === word.charAt(word.length - 1)) {
        return isPalindrome(word.slice(1, -1));
    }
    return false;
}
exports.isPalindrome = isPalindrome;

// 6. countdown from 10 
function countdown(number) {
    if (number === 0) {
        return;
    }
    console.log(number);
    return countdown(number - 1);
}
countdown(10);

let countdown2 = (number) => {
    if (number === 0) {
        return;
    }
    console.log(number);
    return countdown2(number - 1);
}
countdown2(5);



