/**
 * Creates HTML element with specified tag, class and text conten
 *
 * @param {string} tag - The HTML tag to create (e.g., 'div', 'p').
 * @param {string} className - The CSS class name for the element.
 * @param {string} textContent - The text content for the element.
 * @returns {HTMLElement} The created DOM element.
 */
export function createElement(tag, className = "", textContent = "") {
  const element = document.createElement(tag);

  element.className = className;

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}
