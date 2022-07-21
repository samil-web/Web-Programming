/*
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"
*/
function int_to_str(a){
    b = a.toString()
    return typeof b
}
// console.log(int_to_str(8))

/*
DESCRIPTION:
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

function factorial(a){
    if (a == 1){
        return a
    }
    else{
        return a*factorial(a-1)
    }
}
function wilson_primes(p,factorial){
    formula = (factorial(p-1) +1)/(p*p)
    if (formula%1==0){
        return  (factorial(p-1) +1)/(p*p)
    }  
    else{
        return false
    }
}

// console.log(wilson_primes(13,factorial))

/*
DESCRIPTION:
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function pos_neg(arr){
    pos_count=0
    neg_sum=0
    arr.forEach(i => {
        if (i >0){
        pos_count +=1
        }
        else{
            neg_sum -=i
        }
    });
    return Array(pos_count,neg_sum)
}
// console.log(pos_neg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

/*
DESCRIPTION:
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
*/

function sum_numb(num_arr){
    summ = 0
    if (num_arr.length == 0){
        return 0
    }
    else{
    num_arr.forEach(i => {
        summ +=i
    });
}
return summ
}
// console.log(sum_numb([]))
/*
DESCRIPTION:
The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

Their first act in power is absolute wealth equality through coercive redistribution.

Create a function that redistributes all wealth equally among all citizens.

Wealth is represented as an array/list where every index is the wealth of a single citizen.
The function should mutate the input such that every index has the same amount of wealth.

See example:

Input:
[5, 10, 6]  >>> This represents:
           # citizen 1 has wealth 5
           # citizen 2 has wealth 10
           # citizen 3 has wealth 6
Should be after the test:
 [7, 7, 7] >>> wealth has now been equally redistributed
 */

function redistributed_wealth(arr){
    wealth_sum = 0
    equal_wealth_arr = []
    if (arr[0] != arr[1]){
        arr.forEach(i => {
            wealth_sum += i
        });
        equal_wealth = wealth_sum/arr.length
        equal_wealth_arr = Array(arr.length).fill(equal_wealth)
    }
    return equal_wealth_arr
}
// console.log(redistributed_wealth([5,4,6,12,5,9,0]))

/*
DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

console.log(alphabet.indexOf('z'))
/*
Create a function called DrEvil. 
It should take a single argument, an amount, and return '<amount> dollars',
 except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/
function DrEvil(amount){
    if (amount == 1000000){
        return amount.toString() +' dollars' + ' (pinky)'
    }
    else{
        return amount.toString() + ' dollars'
    }
}

// console.log(DrEvil(10000))
/*
Create a function called mixUp. 
It should take in two strings, 
and return the concatenation of the two strings (separated by a space)
slicing out and swapping the first 2 characters of each. 
You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
*/

function mixUp(a,b){
    c = a[1]
    a = a.replace(a.charAt(1),b.charAt(1))
    b = b.replace(b.charAt(1),c)
    return a + ' ' + b
}

console.log(mixUp('dog','dinner'))

/*
FixStart
Create a function called fixStart. 
It should take a single argument, a string, 
and return a version where all occurences of its first character have been replaced with '*',
except for the first character itself. 
You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(a){
    return (a[0].concat(a.slice(1,a.length).replaceAll('b','*')))
}
console.log(fixStart('babble'))