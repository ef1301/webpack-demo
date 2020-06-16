var helpers = require('../form_elements/helpers.js');
import bar_graph from '../assets/bar_graph.png';

export default function barGraph() {
  const article = document.createElement('article');
  const title = document.createElement('h4');
  title.appendChild(document.createTextNode('Bar Graphs'));

  const barGraphAttr = {'src': bar_graph, 'aria-details': "bar-graph-info", 'alt': "Bar Graph: Communication and Presentation Skills. Description follows.", 'tabindex': "0"}
  const barGraph = new Image();
  helpers.setAttributes(barGraph, barGraphAttr);
  article.appendChild(barGraph);

  const barGraphDescriptAttr = {'class': "visually-hidden", 'tabindex':"0"};
  const barGraphDescript = document.createElement('dl');
  helpers.setAttributes(barGraphDescript, barGraphDescriptAttr);

  var descriptDetails = ['Present their ideas clearly and effectively', '45% Agree. 55% Disagree.', 'Ability to create and deliver structured and engaging presentations', '35% Agree. 65% Disagree.', 'Aware of implications drawn from the information presented', '30% Agree. 70% Disagree', 'Conclude the contents in an appropriate manner.', '40% Agree. 60% Disagree.', 'Display the credibility and professionalism in their work', '55% Agree. 45% Disagree', 'Communicate with their colleagues and clients in a multicultural environment.', '35% Agree. 65% Disagree.'];

  descriptDetails.forEach( (detail, index) => {
    if (index % 2 == 0) {
      let element = document.createElement('dt');
      element.appendChild(document.createTextNode(detail));
      barGraphDescript.appendChild(element);
    } else {
      let element = document.createElement('dd');
      element.appendChild(document.createTextNode(detail));
      barGraphDescript.appendChild(element);
    }
  });

  article.appendChild(barGraphDescript);
  article.appendChild(document.createElement('br'));
  article.appendChild(document.createTextNode("As for bar graphs, descriptions and tables can be used in a similar manner to pie charts."));

  return article;
}
