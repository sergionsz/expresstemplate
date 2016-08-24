import 'jsdom-global/register';
import test from 'tape';
import $ from 'jquery';
import { createDOMElement } from '../../src/js/lib/helper';

test('Creates a DOM element', assert => {
  const dummyElement = '<li  class="dummy" value="2">Dummy<a></a></li>';
  const actual = createDOMElement('li', 'dummy', { value: 2 },
  'Dummy', document.createElement('a')).outerHTML;
  const expected = $.parseHTML(dummyElement)[0].outerHTML;

  assert.deepEqual(actual, expected,
    'should be equal');
  assert.end();
});
