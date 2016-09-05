import { createDOMElement } from './lib/helper.js';

const hello = createDOMElement('p', 'pcolor', {}, 'Hello World!');

document.querySelector('main').appendChild(hello);
