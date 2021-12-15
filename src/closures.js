/**
 * What is closure
 * A function along with its lexical scope bundled together forms a closures.
 */

/**
 * closures
   here below on function y since a is not defined so what happen in function y
   It tries to find out the value of a in local scope when it won't be able to fiunc out 
   It will go to its lexical scope and find the value of x and prints the required output
 */
const closure = () => {
  function x() {
    let a = 10;
    function y() {
      console.log(a); // a got access to its parent lexical scope
    }
    y();
  }

  x(); // output 10
};

const returningFunct = () => {
  /**
   * We can also use to return the function in another function
   */
  function x() {
    let a = 10;
    function y() {
      console.log(a); // a got access to its parent lexical scope
    }
    a = 100; // the function will print 100 instead of 10 since a in console is referencing to the variable not the value
    return y; // here not only the function was returned but the closure is also returned
  }
  let z = x();
  console.log(z);
  //...... after 100 lines of code i want to execute that z its got the value of a from the lexical scope
  // That's the beauty of javaScript
  z();
};

/**
 * Below example for double closure
 */
function z() {
  var b = 20;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b); //it will form closure with both a and b
    }
    y();
  }
  x();
}
z();

// other examples of javascript
const other_example = () => {
  /**
   * We can also pass variable as a function
   */
  function x() {
    let a = function y() {
      console.log(a);
    };
    a();
  }
  x();
};
