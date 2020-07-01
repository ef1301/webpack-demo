import _ from 'lodash';
//import printMe from './components/print.js';
import navbar from './components/navbar.js';
import form from './components/form.js';
//import gallery from './components/gallery.js';

import elements from './components/elements.js';
import links from './components/links.js';
import colors from './components/colors.js';
import icons from './components/icons.js';
import layout from './components/layout.js';

//import loadMap from './components/map.js';
import './styles/style.scss';
import './styles/responsive.scss';

function component() {
  const element = document.createElement('main');
  element.setAttribute('id', 'style-guide');

  const elementsContainer = elements();
  const linksContainer = links();
  const colorsContainer = colors();
  const iconsContainer = icons();
  const layoutContainer = layout();

  // element.appendChild(elementsContainer);
  // element.appendChild(linksContainer);
  element.appendChild(colorsContainer);
  // element.appendChild(iconsContainer);
  // element.appendChild(layoutContainer);

  //const btn = document.createElement('button');
  //btn.innerHTML = "Click me and check the console!";
  //btn.onclick = printMe;
  //element.appendChild(btn);

  //const imageGallery = gallery();
  //element.appendChild(imageGallery);

  const formelement = form();
  element.appendChild(formelement);

  return element;
}

function scroll() {
  //console.log("ree");
  //var divContainer = document.getElementById(id.substring(0,-5));
  //divContainer.scrollIntoView();
  //console.log(id.substring(0,-5));
}

const map = document.createElement('div');
map.setAttribute('id', 'viewDiv');

document.body.appendChild(navbar());
document.body.appendChild(component());
//document.body.appendChild(map);

//loadMap("viewDiv", "topo-vector");

let navbarLinks = document.getElementById('scroll-nav').childNodes;
//console.log(navbarLinks);
for(let index in navbarLinks) {
  let id = navbarLinks[index].id;

  if(id !== undefined) {
    //console.log(id);
    document.getElementById(id).addEventListener("click", scroll());
  }

}
