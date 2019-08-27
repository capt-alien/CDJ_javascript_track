#!Javascript


// 1) Sigma - Implement function sigma(num) that, given a number, returns the sum
// of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6
// (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
total = 0
for (var i=0; i<=n; i++){
    total += i
}
return total
}

console.log(sigma(5))


// 2) Factorial - Write a function factorial(num) that, given a number, returns the
// product (multiplication) of all positive integers from 1 up to the given number (inclusive).
//  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(n){
    multi = 1
    for (var i=1; i<=n; i++){
        multi = multi*i
    }
    return multi
}
console.log(factorial(5))

// 3) Fibonacci - Create a function to generate Fibonacci numbers.  In this famous
// mathematical sequence, each number is the sum of the previous two, starting with
// values 0 and 1.  Your function should accept one argument, an index into the
// sequence (where 0 corresponds to the initial value, 4 corresponds to the value
//      four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1
//      (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1),
//      fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2),
//      fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).
//      Do this without using recursion first.  If you don't know what a recursion
//      is yet, don't worry as we'll be introducing this concept in Part 2 of
//      this assignment.
function fibonacci_itterative(num){
  var arr = [0,1];
  for (var i =2; i < num + 1; i++){
    arr.push(arr[i-2]+ arr[i-1])
  }
  return arr[num]
}
console.log(fibonacci_itterative(6)) // = 8




// 4)Array: Second-to-Last: Return the second-to-last element of an array.
// Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short,
// return null.
function second_large(arr){
    if (arr.length<2){
        return null
    }
    var first = arr[0], second = 0;
    for (var i = 1; i< arr.length; i++){
        if(arr[i] > first){
            second = first
            first =arr[i];
            console.log(first)
            console.log(second)
        }
    }
    return second
}
console.log(second_large([42,53,1,4,3.14,7]))



// 5)Array: Nth-to-Last: Return the element that is N-from-array's-end.
//  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function n_to_last(arr, n){
    if (arr.length < n){
        return null
    }
    return arr[arr.length-n]
}

console.log(n_to_last([5,2,3,6,4,9,7],3))

// 6)Array: Second-Largest: Return the second-largest element of an array.
//  Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function second_large(arr){
    if (arr.length<2){
        return null
    }
    var first = arr[0], second;
    for (var i = 1; i< arr.length; i++){
        if(arr[i]> first){
            second = first
            first =arr[i];
        }
    }
    return second
}
console.log(second_large([42,1,4,3.14,7]))


// 7)Double Trouble: Create a function that changes a given array to list each
// existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false]
//  to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function double_trouble(arr){
    temp_arr = []
    for(var i=0; i< arr.length; i++){
        temp_arr.push(arr[i],arr[i])
    }
    return temp_arr
}
console.log(double_trouble([4, "Ulysses", 42, false]))

// end
