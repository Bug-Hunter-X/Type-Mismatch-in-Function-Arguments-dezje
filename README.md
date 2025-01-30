# Type Mismatch in Function Arguments in TypeScript

This example demonstrates a common type error in TypeScript that occurs when a function is called with arguments that do not match the function's defined type signatures.

## Bug

The `add` function is defined to take two numbers (`number`) as arguments and return a number. However, in the call to `add`, a string ('2') is passed as the second argument, which causes a type error.

## Solution

The solution involves ensuring that the arguments passed to the `add` function are of the correct type. This can be done by explicitly converting the string to a number using `parseInt()` or by ensuring that the function's arguments are always numbers.