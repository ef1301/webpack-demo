import _ from 'lodash';
import printMe from './print.js';
import navbar from './navbar.js';
import form from './form.js';

function component() {
  const element = document.createElement('main');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  const formelement = form();
  element.appendChild(formelement);

  return element;
}

document.body.appendChild(navbar());
document.body.appendChild(component());
