import userform from './form_elements/basic-text.js';
import radio from './form_elements/radio.js';
export default function form() {
  const form = document.createElement('form');
  const basictext = userform();
  const radioform = radio();
  form.appendChild(basictext);
  form.appendChild(radioform);
  return form;
}
