// import { increase as inc } from './counter.js';

// import { increase, getCount } from './counter.js';

import * as counter from './counter.js';

counter.increase(); // 1
counter.increase(); // 2
counter.increase(); // 3

const count = counter.getCount();
console.log(count); // 3
