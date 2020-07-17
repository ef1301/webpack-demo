import _ from 'lodash';
//import printMe from './components/print.js';
import navbar from './components/navbar.js';
import form from './components/form.js';

import elements from './components/elements.js';
import colors from './components/colors.js';
import icons from './components/icons.js';
import layout from './components/layout.js';

//import loadMap from './components/map.js';
import './styles/style.scss';
import './styles/responsive.scss';
import './styles/fonts/icomoon/style.css';
import './styles/fonts/indie-flower/style.css';
import './styles/fonts/major-mono-display/style.css';
import './styles/fonts/changa/style.css';

function component() {
  //const map = document.createElement('div');
  //map.setAttribute('id', 'viewDiv');
  //document.body.appendChild(map);

  const element = document.createElement('main');
  element.setAttribute('id', 'style-guide');

  const elementsContainer = elements();
  const colorsContainer = colors();
  const iconsContainer = icons();
  const layoutContainer = layout();

  element.appendChild(elementsContainer);
  element.appendChild(colorsContainer);
  element.appendChild(iconsContainer);
  element.appendChild(layoutContainer);

  return element;
}


document.body.appendChild(navbar());
document.body.appendChild(component());

//loadMap("viewDiv", "topo-vector");
