# Deno Toolbelt

## Event Emitter

Simple event emitter class from [how to code your own event emitter](https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/).

### Usage

```js
import { EventEmitter } from 'package url';

class Client extends EventEmitter {
  constructor () {
    super();
  }
}

let client = new Client();
let emitter = new EventEmitter();

emitter.on('logme', (data: any) => {
  console.log(`logme: ${data}`);
});

client.on('logme', (data: any) => {
  console.log(`client logme: ${data}`);
});

emitter.emit('logme', 'Hello toolbelt');
client.emit('logme', 'Client toolbelt');
```
