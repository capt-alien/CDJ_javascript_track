// 1) Get 1 to 255 - Write a function that returns an array with all the numbers
// from 1 to 255.

function two_fiddy_fi(){
    arr = [];
    for(var i=0; i <=255; i++){
        arr.push(i);
    }
    return arr;
}
console.log(two_fiddy_fi())


// 2) Get even 1000 - Write a function that would get the sum of all the even
//  numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function dont_get_1k_get_even(){
    for (var i= 0 ; i <=1000; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
dont_get_1k_get_even()


// 3) Sum odd 5000 - Write a function that returns the sum of all the odd numbers
// from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function some_tin(){
    sum= 0
    for (var i=1; i<=5000; i = i+2){
        sum += i;
    }
    return sum
}
console.log(some_tin())

// 4) Iterate an array - Write a function that returns the sum of all the values
// within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function i_arr(arr){
    total= 0
    for(var i=0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
a= [1,2,5]
b=[-5,2,5,12]
console.log(i_arr(a))
console.log(i_arr(b))

// 5) Find max - Given an array with multiple values, write a function that
//  returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function find_max(arr){
    max=arr[0];
    for(var i=1; i<arr.length; i++){
        if (arr[i]> max){
            max = arr[i]
        }
    }
    return max
}
a=[-3,3,5,7]
console.log(find_max(a))


// 6) Find average - Given an array with multiple values, write a function that
// returns the average of the values in the array. (e.g. for [1,3,5,7,20]
// average is 7.2)
function find_avg(arr){
    total=arr[0];
    for(var i=1; i<arr.length; i++){
        total += arr[i];
    }
    return (total/arr.length)
}
a=[1,3,5,7,20]
console.log(find_avg(a))


// 7) Array odd - Write a function that would return an array of all the odd
//  numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function odd_balls(){
    arr = [];
    for (var i = 1; i <50; i = i+2){
        arr.push(i);
    }
    return arr;
}
console.log(odd_balls())

// 8) Greater than Y - Given value of Y, write a function that takes an array and
//  returns the number of values that are greater than Y. For example if
//  arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two
//      values in the array greater than 3, which are 5, 7).
function greater_y( y, arr){
    counter = 0;
    for (i = 0; i< arr.length; i++){
        if(arr[i]> y){
            counter++;
        }
    }
    return counter
}
a= [1, 3, 5, 7]
var y = 3
console.log(greater_y(y, a))

// 9) Squares - Given an array with multiple values, write a function that
//  replaces each value in the array with the value squared by itself.
//  (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i]=arr[i]*arr[i]
    }
    return arr
}
a=[1,5,10,-2]
console.log(squares(a))


// 10) Negatives - Given an array with multiple values, write a function that
// replaces any negative numbers within the array with the value of 0. When the
//  program is done the array should contain no negative values. (e.g. [1,5,10,-2]
// will become [1,5,10,0])
function negitives(arr){
    for (var i=0; i< arr.length; i++){
        if (arr[i]<0){
            arr[i] = 0
        }
    }
    return arr
}
a = [1,5,10,0]
console.log(negitives(a))



// 11) Max/Min/Avg - Given an array with multiple values, write a function that
//  returns a new array that only contains the maximum, minimum, and average
//  values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function stats(arr){
    max = arr[0];
    min = arr[0];
    total = arr[0];
    for (var i = 1; i< arr.length; i++){
        total += arr[i];
        if (arr[i]> max){
            max = arr[i];
        }
        else if (arr[i]< min){
            min = arr[i];
        }
    }
    avg = total/arr.length
    arr_2 = [max, min, avg]
    return arr_2
}
a = [1,5,10,-2]
console.log(stats(a))

// 12) Swap Values - Write a function that will swap the first and last values
//  of any given array. The default minimum length of the array is 2. (e.g.
// [1,5,10,-2] will become [-2,5,10,1]).
function values_swap(arr){
    temp=arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] =temp;
    return arr
}
a=[1,5,10,-2];
console.log(values_swap(a));


// 13) Number to String - Write a function that takes an array of numbers and
// replaces any negative values within the array with the string 'Dojo'. For
// example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function num_string(arr){
    for (var i=0; i< arr.length; i++){
        if (arr[i]< 0){
            arr[i]= 'Dojo';
        }
    }
    return arr
}
a = [-1,-3,2];
console.log(num_string(a));
