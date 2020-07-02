import form from './form.js';
import links from './links.js';

export default function elements() {
  let container = document.createElement('div');
  container.setAttribute("id", "elements");
  const formElement = form();
  container.appendChild(formElement);
  const linksElement = links();
  container.appendChild(linksElement);

  return container;
}
