import form from './form.js';
import links from './elements/link.js';
import headings from './elements/headings.js';
import media from './elements/media.js';
import text from './elements/text.js';

export default function elements() {
  let container = document.createElement('div');
  container.setAttribute("id", "elements");
  let title = document.createElement("h1");
  title.innerHTML = "Elements";
  container.appendChild(title);

  const formElement = form();
  const linksElement = links();
  const headingsElement = headings();
  const mediaElement = media();
  const textElement = text();

  let allElements = [formElement, linksElement, headingsElement, mediaElement, textElement];
  allElements.forEach(item => {
    container.appendChild(item);
  })

  return container;
}
