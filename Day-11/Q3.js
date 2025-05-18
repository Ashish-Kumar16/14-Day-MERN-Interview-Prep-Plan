// 3. Implement a custom EventEmitter class with `on`, `off`, and `emit` methods.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((l) => l !== listener);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach((listener) => listener(...args));
  }
}

// Example usage:
const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

emitter.on("greet", greet);
emitter.emit("greet", "Alice"); // Output: Hello, Alice!
emitter.off("greet", greet);
emitter.emit("greet", "Bob"); // No output
