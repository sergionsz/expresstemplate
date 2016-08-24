/**
 * createDOMElement - Creates a DOM element with optional class or
 * list of class names, attributes and content.
 *
 * @param   {string}              type        Type of the node (eg. 'div')
 * @param   {(string|string[])}   className   Name or array of names
 * @param   {Object}              attributes  Key value of attributes
 * @param   {Array}               content   Text or HTMLElements to be
 * added as children
 *
 * @returns {HTMLElement} The newly created element.
 */
export function createDOMElement (type, className = [], attributes = {}, ...content) {
  const node = document.createElement(type);
  if (typeof className === 'string') {
    node.classList.add(className.trim());
  } else {
    className.forEach(cls => node.classList.add(cls.trim()));
  }
  Object.keys(attributes).forEach(key =>
    node.setAttribute(key, attributes[key])
  );


  /**
   * appendContent - Appends all the content passed to the function
   * as parameters. This function has side effects.
   *
   * @param  {string|HTMLElement} piece The node or string that should be
   * appended to the element being created
   */
  function appendContent(piece) {
    if (typeof piece === 'string') {
      if (node.hasChildNodes()) {
        node.appendChild(createDOMElement('span', [], {}, piece));
      } else {
        node.textContent = piece;
      }
    } else if (typeof piece.appendChild === 'function') {
      // piece is a DOM node
      node.appendChild(piece);
    }
  }
  content.forEach(appendContent);

  return node;
}
