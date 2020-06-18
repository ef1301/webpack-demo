import _ from 'lodash';
import printMe from './print.js';
import navbar from './navbar.js';
import form from './form.js';
import './style.css'; //css works
import gallery from './gallery.js';
import loadMap from './map.js';

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

function component() {
  const element = document.createElement('main');
  const btn = document.createElement('button');

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  //const imageGallery = gallery();
  //element.appendChild(imageGallery);

  //const formelement = form();
  //element.appendChild(formelement);

  return element;
}

const map = document.createElement('div');
map.setAttribute('id', 'viewDiv');

document.head.appendChild(apiStylesheet());
document.head.appendChild(apiScript());

document.body.appendChild(navbar());
document.body.appendChild(component());
document.body.appendChild(map);

loadMap("viewDiv", "topo-vector");
