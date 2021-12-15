/**
 * Hoisting in JavaScript
 */
getName();  // print Hello Hari
console.log("---->", x); // print undefined
console.log(getName)

var x = 7; // if i comment this thing it will give me a reference error

function getName() {
  console.log(" |>_ Hello Hari");
}

getName();
console.log("---->", x);
