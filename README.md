# Brief
This is a very, very basic demonstration of an average calculation code. To help You understand
some basics topics of programming.

# Topics covered
- How to declare variables in JavaScript
- How to use template strings and log it in the console.
- How to use conditional blocks (if/else);
- How to declare objects and arrays;
-How to create functions
 
# How to...
1) Declare variables:
  Nowadays the most common ways to declare variables are using `let` and `const`
  * ```const myName = 'Paul Stone';```
  * ```const myAge = 22;```
  * ```let myName02 = 'Ernie Smith';```
  * ```let myAge02 = 30;```
2) Use template strings and log it in the console:
  
  ``` 
  console.log(`${yourVariable} followed by some text. You can also add math operations, conditionals,
   etc, inside the ${}`);
   ```
3) Use conditional blocks:

```
if(true){
    //do something if TRUE;
} else {
  do another thing if FALSE
}
```
4) Declare objects and arrays:
  * Objects are one of the most important topics in programming. It's formed of attributes and methods.
    Think about a coffe machine. It has a start button, color, serial number, etc. We can gather these
    informations as follow: 
    ```
    const coffeMachine = {
    buttonType: "Start/Stop",
    color: "blue",
    serialNumber: 12345};
    ```

  * Arrays are not but a variable composed of elements of the same type.
    For example: ```const names = ["John", "Elliot", "Valerie", "Megan"];```
5) Functions are used to avoid writing the same code many times. To declare functions we need to
  specify, if necessary, the parameters. Also, there are two elementary
  ways to declare functions: **Function declaration** and **Function expression**.
  In the examples bellow, a function has one parameter:
  * Function declaration:
    ```
    function myFunction01(parameter) {
      //do something with parameter
      return parameter
    };
    ```
  * Calling this function: `let x = myFunction02(parameter);`

  * Function expression:
    ```
    const myFunction = function(parameter) {
      //do something
    };
    ```
    * In the case of functions expressions You do not need to assign it to a varible, because it has
    been assigned already: `myFunction(parameter);`
