/**

 # How JavaScript works
   - JavaScript is the synchronous single-threaded language.
   - JavaScript can only execute one line at a time in an specific order.
   - Everything in JavaScript happens inside an Execution Context.
   - Execution Context is consider as a virtual big box where whole javascript code is executed (Imagine).

                                    Execution Context
                                          | 
                             /                         \
                    Memory component              Code Component 

 # Memory component  (Also known as variable enviournment)
   - The Place where all the varaibles and functiuons are stored inside as a key value pair.
   -  Key :  value
   -  a   :   10 

 # Code component   (Also known as thread of execution)
   - This is the place where code is executed one line at a time.

 # Imp
   - What happen when we execute the JavaScript Program. An execution context is created.
   - In JavaScript function is treated like a mini program. which has there new execution context

 # Example
   1  var n=2;
   2  function square (num){
   3      var ans = num*num;
   4  }
   5  var square2 = square(n);
   6  var square4 = square(4);

   - Working
     ~ When we run the program the global execution context is created.
     ~ When a function is executed it store the whole function body in variable.
     ~ In first phase javascript will allocated memory to all functions and variables.
  
     *** Phase 1 Memory Creation Phase
     ________________________________________________________________________________________ 
    |        Memory Component                      |           Code Component                |
    |  key      :     value                        |                                         |   
    |   n       :    undefined                     |                                         |
    | square    :  {..full function copied inside} |                                         |
    | square2   :    undefined                     |                                         |
    | square4   :    undefined                     |                                         |
    |______________________________________________|_________________________________________|

     *** Phase 2 Memory Creation Phase
     ________________________________________________________________________________________ 
    |        Memory Component                      |           Code Component                |
    |  key      :     value                        |                                         |   
    |   n       :      2                           |                                         |
    | square    :  {..full function copied inside} |                                         |
    | square2   :    undefined                     |                                         |
    | square4   :    undefined                     |                                         |
    |______________________________________________|_________________________________________|

     ~ Second phase is the code execution state. line first will execute and provide the value of n:2.
     ~ from line 2 to line 4 nothing to do.
     ~ from line 5 a function is invoked. 
     ~ Since javascript treat function as a mini program to a brand new execution context is created.

     *** Phase 2 function invokation Phase. a new context is craeted at line 5 and memory component is executed
       num - is treated as parameter of function
        n  - is treatd as argument for the function
     ________________________________________________________________________________________ 
    |        Memory Component                      |           Code Component                |
    |  key      :     value                        |                                         |   
    |  num      :    undefined                     |                                         |
    |  ans      :    undefined                     |                                         |
    |______________________________________________|_________________________________________|

    *** Phase 2 function invokation phase. and mini phase 2 executed.
     ________________________________________________________________________________________ 
    |        Memory Component                      |           Code Component                |
    |  key      :     value                        |                                         |   
    |  num      :       2                          |                                         |
    |  ans      :       4                          |                                         |
    |______________________________________________|_________________________________________|

     ~ After function execution completed return tells the function you done your work 
     ~ just return the control to the previous execution context. 
     ~ return the value to memory and assign the value of 4 to square 2.
     ~ The mini execution context is deleted.

     ~ for line 7 same thing happen and a brand new execution context is created.



____________________________________________________________________________________________________________________________

 # Hoisting in JavaScript
   - JavaScript work very differently let's understand with help of an example.
     
     *** Check the out put of below code in console. Something strange will happen
     ________________________________________________________________________________________________________
    |                                  |   printName()                    |   printName()                    |
    |                                  |   console.log(x)                 |   console.log(x)                 |
    |   var x = 2                      |   var x = 2                      |                                  |                                        
    |   function printName(){          |   function printName(){          |   function printName(){          |                                                    
    |     console.log("Hi I am, Hari") |     console.log("Hi I am, Hari") |     console.log("Hi I am, Hari") |                                                            
    |   }                              |   }                              |   }                              |                                
    |   printName();                   |                                  |                                  |
    |   console.log(x)                 |                                  |                                  |
    |__________________________________|__________________________________|__________________________________|
 
      Output 
     ________________________________________________________________________________________________________
    |                                  |                                  |                                  |      
    |  Hi I am, Hari                   |  Hi I am, Hari                   |  Hi I am, Hari                   |
    |  2                               |  undefined                       |  *** reference error             |
    |__________________________________|__________________________________|__________________________________|

   - Hoisting is a phenomena in javascript by which we can access the variable and function even before its initialization.

____________________________________________________________________________________________________________________________

 # 





















































 */