//! property deco - this takes two arguments
//* target which is the constructor
//* name of the property
function PropLog(target: any, propertyName: string | Symbol) {
  console.log("PROPERTY DECO");
  console.log(target, propertyName);
}

//! accessor deco - 3 arguments (setter/getter)
//* target
//* name
//* description of the accessor method

function AccLog(target: any, name: string, description: PropertyDescriptor) {
  console.log("ACCESSOR DECO");
  console.log(target);
  console.log(name);
  console.log(description);
}

//! Method deco - 3 arguments (setter/getter)
//* target
//* name
//* description of the accessor method

function MetLog(target: any, name: string, description: PropertyDescriptor) {
  console.log("METHOD DECO");
  console.log(target);
  console.log(name);
  console.log(description);
}

//! Parameter deco - 3 arguments (setter/getter)
//* target
//* name
//* index that the param is in, in the arguments

function ParLog(target: any, name: string, position: number) {
  console.log("PARAMETER DECO");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  title: string;
  @PropLog
  private _price: number;

  @AccLog
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price!");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @MetLog
  getPriceWithTax(@ParLog tax: number = 0.12) {
    return this._price * (1 + tax);
  }
}
