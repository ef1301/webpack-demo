var helpers = require('./form_elements/helpers.js');
import userform from './form_elements/basic-text.js';
import radio from './form_elements/radio.js';
import option from  './form_elements/option.js';
import checklist from './form_elements/checklist.js';

export default function form() {
  const form = document.createElement('form');
  form.setAttribute('id', 'user-form');
  const basicTextForm = userform();
  const radioForm = radio();
  const selectForm = option();
  const checklistForm = checklist();

  let title = document.createElement("h1");
  title.innerHTML = "Forms";
  form.appendChild(title);

  form.appendChild(basicTextForm);
  form.appendChild(radioForm);
  form.appendChild(selectForm);
  form.appendChild(checklistForm);

  // const btn = document.createElement('button');
  // let btnAttributes = {'type': "submit", 'form': "user-form", 'value': "user-form-submission"};
  // helpers.setAttributes(btn, btnAttributes);
  // btn.appendChild(document.createTextNode("Submit"));
  // form.appendChild(btn);

  return form;
}
