function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  console.log(descriptor);

  const originalMethod = descriptor.value;
  console.log(originalMethod);

  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "this works";

  //! without binding this will show undefined because there is no constructor defined
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();

const buttonEl = document.querySelector("button")!;
buttonEl.addEventListener("click", p.showMessage);
// buttonEl.addEventListener("click", p.showMessage.bind(p))
