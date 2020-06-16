import _ from 'lodash';
import printMe from './print.js';
import navbar from './navbar.js';
import form from './form.js';
import './style.css'; //css works

function apiStylesheet() {
  const stylesheet = document.createElement("link");
  stylesheet.setAttribute("rel", "stylesheet");
  stylesheet.setAttribute("href", "https://js.arcgis.com/4.15/esri/themes/light/main.css");
  return stylesheet;
}

function apiScript() {
  const apiScript = document.createElement("script");
  apiScript.src = "https://js.arcgis.com/4.15/";
  return apiScript;
}

//function mapVisual() {
//  const script = document.createElement('script');
//  var inlineScript = document.createTextNode("");
//  script.appendChild(inlineScript);
//  return script;
//}

function component() {
  const element = document.createElement('main');
  const btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  const formelement = form();
  element.appendChild(formelement);

  return element;
}

document.head.appendChild(apiStylesheet());
document.head.appendChild(apiScript());

//document.body.appendChild(mapVisual()); //can't get this to work
document.body.appendChild(navbar());
document.body.appendChild(component());
