#!Javascript

// 1) Biggie Size - Given an array, write a function that changes all positive
// numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5])
// returns that same array, changed to [-1, "big", "big", -5].

function bigg_e_smallz(arr){
    for (var i=0; i< arr.length; i++){
        if(arr[i]>0){
            arr[i] = 'biggie';
        }
    }
    return arr
}
a=[-1,3,5,-5];
console.log(bigg_e_smallz(a));

// 2) Print Low, Return High - Create a function that takes in an array of numbers.
//   The function should print the lowest value in the array, and return the
//   highest value in the array.

function low_high(arr){
    min = arr[0];
    max = arr[0];
    for(var i=1; i<arr.length; arr++){
        if (arr[i]> max){
            max=arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max
}
a = [1, 0, 5, 9, -10, 11, 15]
console.log(low_high(a))
