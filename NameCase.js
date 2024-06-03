"use strict";
// //Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// // declare variable
// let personName: string = "Rafay";
// // lowercase
// console.log(`Lowercase: ${personName.toLowerCase()}`);
// // uppercase
// console.log(`Uppercase: ${personName.toUpperCase()}`);
// // titlecase
// // nameCases.ts
// Declare
let pName = "Rafay";
// lowercase
console.log("Lowercase:", pName.toLowerCase());
// uppercase
console.log("Uppercase:", pName.toUpperCase());
// titlecase
console.log("Titlecase:", pName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()));
Here;
's a revised version of your TypeScript document, with improvements for clarity and structure:;
-- - ;
#;
 ** Operators in TypeScript **
    Operators;
allow;
us;
to;
perform;
operations;
on;
variables;
and;
values.
;
-- -
        ** Addition(+);
 **
    You;
add;
apples;
to;
your;
cart.;
2;
apples;
and;
then;
3;
more;
apples;
give;
you;
5;
apples.
 `` `typescript
console.log(2 + 3);

let num1: number = 2;
let num2: number = 3;
let cart: number = num1 + num2;

console.log(cart);
` ``;
-- -
        ** Subtraction(-);
 **
    You;
have;
5;
apples in the;
cart, and;
you;
eat;
2;
apples, leaving;
you;
with (3)
    apples.
     `` `typescript
console.log(5 - 2);

let cart: number = 5;
let num3: number = 2;
let total: number = cart - num3;

console.log(total);
` ``;
-- -
        ** Multiplication( * );
 **
    You;
decide;
you;
need;
4;
bags;
of;
5;
apples.You;
now;
have;
20;
apples.
 `` `typescript
console.log(4 * 5);

let bags: number = 4;
let apples: number = 5;
let totalApples: number = bags * apples;

console.log(totalApples);
` ``;
-- -
        ** Division(/):**, You, decide, to, distribute, these, 20, apples, equally, into, 4, bags.Each, bag, gets, 5, apples.
         `` `typescript
console.log(20 / 4);

let bags: number = 4;
let totalApples: number = 20;
let applesPerBag: number = totalApples / bags;

console.log(applesPerBag);
` ``, -- -
                ** Modulus( % ),  **
            You, have, 5, apples);
you;
distribute;
them;
into;
2;
bags.Each;
bag;
gets;
2;
apples, and;
1;
apple;
remains(5 % 2, 1).
 `` `typescript
console.log(5 % 2);

let apples: number = 5;
let bags: number = 2;
let remainder: number = apples % bags;

console.log(remainder);
` ``;
-- - ;
#;
 ** Unary;
Operators:  **
        ** Prefix;
and;
Postfix;
Operators:  **
    Imagine;
you;
have;
a;
loyalty;
card;
that;
you;
use;
once(++);
and;
then;
a;
coupon;
that;
you;
use;
once;
and;
throw away(--).
 `` `typescript
let a: number = 5;
let b: number = 2;

a++; // a becomes 6
b--; // b becomes 1

console.log(a, b);
` ``;
-- - ;
#;
 ** Homework;
 **
    `` `typescript
let a: number = 5; 
let b: number = 2; 
let c: number;

c = ++a + a++ + --b + b-- + a + b++ + b;

console.log(c);
` ``;
-- - ;
#;
 ** Combining;
Operators:  **
    `` `typescript
let result = 3 + 4 * 5;

console.log(result); // Answer will be 23 or ??
` ``;
-- -
    I;
hope;
this;
revised;
version;
meets;
your;
expectations.Let;
me;
know;
if (you)
    'd like further adjustments.;
