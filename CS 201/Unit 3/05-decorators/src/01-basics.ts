//! This breaks, too few arguments
// function Logger() {
//   console.log("logging");
// }

//! If a decorator is being used on a class there MUST be one argument
//! That argument is the constructor
// function Logger(constructor: Function){
//   console.log(constructor);
// }

//! You can change any required param to an _ to skip it in compiling
// function Logger(_: Function) {
//   console.log(`This works`);
// }

//! Decorator Factory
function Logger(toLog: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(toLog);
    console.log(constructor);
  };
}

//! This creates a decorator that will ad the template string to whatever hook we pass through as long as the id exists
// function WithTemplate(template: string, hookId: string) {
//   return function (_: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template;
//     }
//   };
// }
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    const p = new Person()
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("CREATING PERSON DECORATOR")
@WithTemplate("<h1>Person Class Placeholder</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Created Person Object");
  }
}

const max = new Person();

console.log(max);
