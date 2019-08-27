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



// 3) Print One, Return Another - Build a function that takes in an array of numbers.
//    The function should print the second-to-last value in the array, and return
//    the first odd value in the array.

function print_or_return(arr){
    console.log(arr[arr.length-2]);
    for (var i=0; i < arr.length; i++){
        if (arr[i]%2 != 0){
            return arr[i];
        }
    }
}
a = [1, 0, 5, 9, -10, 11, 15];
console.log(print_or_return(a));

// 4) Double Vision - Given an array (similar to saying 'takes in an array'),
// create a function that returns a new array where each value in the original
// array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without
// changing the original array.

function double_double(arr){
    d_arr = [];
    for (var i=0; i< arr.length; i++){
        d_arr.push(arr[i]*2)
    }
    return d_arr
}

a=[1,2,3];
console.log(double_double(a));

// 5) Count Positives - Given an array of numbers, create a function to replace
// the last value with the number of positive values found in the array.
// Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3]
// and returns it.

function count_positives(arr){
    count = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]> 0){
            count++
        }
    }
    arr[arr.length-1] = count
    return arr
}
a=[-1,1,1,1]
console.log(count_positives(a))


// 6) Evens and Odds - Create a function that accepts an array.  Every time that
// array has three odd values in a row, print "That's odd!".  Every time the array
//  has three evens in a row, print "Even more so!".

function odds_n_evens(arr){
    counter = 0
    // itterate through Array
    for (var i=0; i<arr.length-2; i++){
        if(arr[i]%2 !=0){
            if(arr[i+1]%2 != 0){
                if(arr[i+2]%2!=0){
                    console.log("thats odd");
                    counter++;
                } else{counter =0
                }
            } else{counter =0
            }
        } else{counter =0}
        if (counter ==3){
            console.log("Even more so");
            counter = 0
        }
    }
}

a=[0,1,3,5,7,2,2,3,17,9,11,0]
odds_n_evens(a)

// 7)Increment the Seconds - Given an array of numbers arr, add 1 to every other
// element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).
//  Afterward, console.log each array value and return arr

function increment_odds(arr){
    for( var i=1; i< arr.length; i += 2){
        arr[i]++;
        console.log(arr[i]);
    }
    return arr
}
a=[0,1,3,5,7,2,2,3,17,9,11,0]
console.log(increment_odds(a))

// 8)Previous Lengths - You are passed an array
// (similar to saying 'takes in an array' or 'given an array') containing
// strings.  Working within that same array, replace each string with a number
//  - the length of the string at the previous array index - and return the array.
//    For example, previousLengths(["hello", "dojo", "awesome"]) should
//    return ["hello", 5, 4]. Hint: Can for loops only go forward?
function prev_len(arr){
    for(var i = arr.length-1; i > 0; i--){
        arr[i]= arr[i-1].length;
    }
    return arr
}
aa=["hello", "dojo", "awesome"]
console.log(prev_len(aa));



// 9)Add Seven - Build a function that accepts an array. Return a new array with
// all the values of the original, but add 7 to each. Do not alter the original
// array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    returner = []
    for (var i=0; i<arr.length; i++){
        returner.push(arr[i]+7)
    }
    return returner
}
console.log(addSeven([1,2,3]))


// 10) Reverse Array - Given an array, write a function that reverses its values,
// in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now
// contains values reversed like so... [2,4,6,1,3].  Do this without creating an
// empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr){
    var temp = 0
    // set for loops
    for(var i = 0; i<arr.length/2; i++){
        temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i]=temp
    }
    return arr
}

console.log(reverse([3,1,6,4,2]))


// 11)Outlook: Negative - Given an array, create and return a new one containing
// all the values of the original array, but make them all negative (not simply
//     multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negitive_nancy(arr){
    // 1) itterate through the Array
    for(var i=0; i< arr.length; i++){
        if(arr[i]>0){
            arr[i]=-arr[i];
        }
    }
    return arr
}
a=[1,-3,5]
console.log(negitive_nancy(a))



// 12) Always Hungry - Create a function that accepts an array, and prints "yummy"
// each time one of the values is equal to "food".  If no array values are "food",
// then print "I'm hungry" once.
function hungry(arr){
    var counter= 0
    for (var i=0; i< arr.length; i++){
        if(arr[i]=='food'){
            console.log('Yummy')
            counter++
        }
    }
    if(counter == 0){
        console.log("I am hungry")
    }
}
a=['water','water', 'food', 'food']
b=['water','water','water','water','water']
hungry(a)
hungry(b)

// 13) Swap Toward the Center - Given an array, swap the first and last values,
// third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"])
//  turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6])
//   turns the array into [6,2,4,3,5,1].
function swap_center(arr){
    var temp = 0
    // set for loops
    for(var i = 0; i<arr.length/2; i+=2){
        temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[i];
        arr[i]=temp
    }
    return arr
}

console.log(swap_center([true,42,"Ada",2,"pizza"]))
console.log(swap_center([1,2,3,4,5,6]))

// 14) Scale the Array - Given an array arr and a number num, multiply all values
// in the array arr by the number num, and return the changed array arr.
// For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArray(arr, n){
    for (var i =0; i< arr.length; i++){
        arr[i]= arr[i]*n
    }
    return arr
}
console.log(scaleArray([1,2,3], 3))
