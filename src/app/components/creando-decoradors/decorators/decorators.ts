// Property Decorator
export function Emoji() {
  return function (target: any, key: string | symbol) {
    let val = target[key];

    const getter = () => {
      return val;
    };
    const setter = (next: any) => {
      console.log("updating flavor...");
      val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function Log(target: any, name: any, descriptor: any) {
  console.log("target ", target);
  console.log("name ", name);
  console.log("descriptor ", descriptor);

  const original = descriptor.value;
  descriptor.value = function (...args: any) {
    const result = original.apply(this, args);
    if (result > new Date(new Date().setDate(new Date().getDate() + 1))) {
      return "today is grether than tomorrow";
    } else {
      return "today is lower than tomorrow";
    }
  };
  return descriptor;
}

export function Sticker(target: any) {
  Object.defineProperty(target.prototype, "name", {
    value: () => "Hello decorator @Log",
  });
  console.log("Decorador Sticker ", target);
}

export function doSomething(name: string) {
  console.log(`Hello ${name}`);
}

export function loggingDecorator(wrapped: any) {
  return () => {
    console.log("Fruit");
    const result = wrapped.apply(arguments);
    console.log("Fhinished");
    return result;
  };
}

export function CheckValidDataId() {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 80) {
        return console.log(
          "%cError id debe ser entre 1 y 80 ",
          "color: red; display: block; width: 100%;"
        );
      } else {
        return originalMethod(id);
      }
    };
  };
}
