var helpers = require('./form_elements/helpers.js');
import barGraph from './gallery_elements/bar-graph.js';
import pieChart from './gallery_elements/pie-chart.js';
import line_graph from '../assets/line_graph.png';

export default function gallery() {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  title.appendChild(helpers.setLabelFor('Img Gallery', 'image-gallery'));
  section.appendChild(title);

  section.appendChild(barGraph());
  section.appendChild(pieChart());
  return section;
}
