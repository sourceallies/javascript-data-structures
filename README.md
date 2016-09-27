Since JavaScript doesn't have official implementations for any of the popular data
structures, this might come in handy when doing candidate interviews with JavaScript.

## Installation

```
npm i @sourceallies/data-structures --save-dev
```

## Data Structures

### Stack

```js
import {Stack} from '@sourceallies/data-structures';

const stack = new Stack();
```

| Function                 | Description                                                                                |
|--------------------------|--------------------------------------------------------------------------------------------|
| `stack.size()`           | Returns the size of the stack.                                                             |
| `stack.push(element)`    | Adds `element` to the top of the stack.                                                    |
| `stack.peek()`           | Returns the top element in the stack.  Throws an error if the stack is empty.              |
| `stack.pop()`            | Returns and removes the top element in the stack.  Throws an error if the stack is empty.  |

### Queue

```js
import {Queue} from '@sourceallies/data-structures';

const queue = new Queue();
```

| Function                 | Description                                                                                |
|--------------------------|--------------------------------------------------------------------------------------------|
| `queue.size()`           | Returns the size of the queue.                                                             |
| `queue.enqueue(element)` | Adds `element` to the back of the queue.                                                   |
| `queue.peek()`           | Returns the next element in the queue.  Throws an error if the queue is empty.             |
| `queue.dequeue()`        | Returns and removes the next element in the queue.  Throws an error if the queue is empty. |

## License

[Apache Public License v2.0](https://github.com/sourceallies/javascript-data-structures/blob/master/LICENSE)