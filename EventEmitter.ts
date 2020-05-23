/*
  https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
*/
class EventEmitter {
  listeners: {
    [key: string]: Function[];
  } = {}; // key-value pair

  addListener(eventName: string, fn: Function): EventEmitter {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  on(eventName: string, fn: Function): EventEmitter {
    return this.addListener(eventName, fn);
  }

  removeListener(eventName: string, fn: Function): EventEmitter {
    if (!this.listeners[eventName]) {
      return this;
    }
    this.listeners[eventName] = this.listeners[eventName].filter((listener) =>
      listener !== fn
    );
    return this;
  }

  off(eventName: string, fn: Function): EventEmitter {
    return this.removeListener(eventName, fn);
  }

  once(eventName: string, fn: Function): EventEmitter {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    };
    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  emit(eventName: string, ...args: [any]): boolean {
    if (!this.listeners[eventName]) {
      return false;
    }
    this.listeners[eventName].forEach((f) => {
      f(...args);
    });
    return true;
  }

  listenerCount(eventName: string): number {
    return this.listeners[eventName] ? this.listeners[eventName].length : 0;
  }

  rawListeners(eventName: string): Function[] {
    return this.listeners[eventName];
  }
}

export { EventEmitter };