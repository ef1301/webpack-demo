import form from './form.js';
import links from './elements/link.js';
import headings from './elements/headings.js';
import media from './elements/media.js';
import text from './elements/text.js';

export default function elements() {
  let container = document.createElement('div');
  container.setAttribute("id", "elements");
  const formElement = form();
  container.appendChild(formElement);

  const linksElement = links();
  container.appendChild(linksElement);

  const headingsElement = headings();
  container.appendChild(headingsElement);

  const mediaElement = media();
  container.appendChild(mediaElement);

  const textElement = text();
  container.appendChild(textElement);

  return container;
}
