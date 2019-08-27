//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n){
    sum = 0
    for (var i=1; i<=n; i++){
        sum += i
    }
    return sum
}
//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr){
    return (arr[0]+arr[arr.length-1])
}


// create a test for a function that returns the largest number in the array.
function return_max(arr){
    max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max
}

describe("Sum1toN", function() {
    it("should return 3 when we pass 2 as an argument", function() {
        expect(Sum1toN(2)).toEqual(3);
    });
    it("should return 6 when we pass 3 as an argument", function() {
        expect(Sum1toN(3)).toEqual(6);
    });
    it("should return 10 when we pass 4 as an argument", function() {
        expect(Sum1toN(4)).toEqual(10);
    });
});

describe("sumFirstLast", function() {
    it("should return 3 when we pass [1,2] as an argument", function() {
        expect(sumFirstLast([1,2])).toEqual(3);
    });
    it("should return 10 when we pass [2,3,8] as an argument", function() {
        expect(sumFirstLast([2,3,8])).toEqual(10);
    });
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() {
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10);
    });
});

describe("return_max", function(){
    it("should return 9 when passed [1,2,9] as an argument", function(){
        expect(return_max([1,2,9])).toEqual(9);
    });
    it("should return -6 when passed [-6,-11,-18] as an argument", function(){
        expect(return_max([-6,-11,-18])).toEqual(-6);
        });
    it("should return 130 when passed [8,59,122, 130] as an argument", function(){
        expect(return_max([-129, 130, 22, 8, 9, 13])).toEqual(130);
    });
});
