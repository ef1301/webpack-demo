var helpers = require("../form_elements/helpers.js");
import pie_graph from '../assets/favorite_fruit.png';

export default function pieChart() {
  const article = document.createElement('article');
  const title = document.createElement('h4');
  title.appendChild(document.createTextNode('Pie Charts'));

  const pieChartAttr = {'src': pie_graph, 'aria-details': "pie-chart-info", 'alt': "Pie Chart: What is your favorite fruit? Description follows.", 'tabindex': "0"};
  const pieChart = new Image();
  helpers.setAttributes(pieChart, pieChartAttr);
  article.appendChild(pieChart);

  const pieChartDescriptAttr = {'class': "visually-hidden", 'tabindex':"0"};
  const pieChartDescript = document.createElement('dl');
  helpers.setAttributes(pieChartDescript, pieChartDescriptAttr);

  var descriptDetails = ['Banana', '30%', 'Grapes', '27%', 'Pineapple', '20%', 'Orange', '13%', 'Peach', '10%']
  descriptDetails.forEach( (detail, index) => {
    if (index % 2 == 0) {
      let element = document.createElement('dt');
      element.appendChild(document.createTextNode(detail));
      pieChartDescript.appendChild(element);
    } else {
      let element = document.createElement('dd');
      element.appendChild(document.createTextNode(detail));
      pieChartDescript.appendChild(element);
    }
  });

  article.appendChild(pieChartDescript);

  return article;
}
