var helpers = require('./helpers.js');

export default function checklist() {
  const field = helpers.setFieldsetIdLegend('birds', 'Checklist Input Practice [Birds]');

  let sparrowAttributes = {'id': "sparrow", 'type': "checkbox", 'aria-labelledby': "birds", 'role': "checkbox", 'value': "sparrow"};
  var sparrow = document.createElement('input');
  helpers.setAttributes(sparrow, sparrowAttributes);
  field.appendChild(sparrow);
  var sparrowLabel = helpers.setLabelFor('Sparrow', 'sparrow');
  field.appendChild(sparrowLabel);

  let chickenAttributes = {'id': "chicken", 'type': "checkbox", 'aria-labelledby': "birds", 'role': "checkbox", 'value': "chicken"};
  var chicken = document.createElement('input');
  helpers.setAttributes(chicken, chickenAttributes);
  field.appendChild(chicken);
  var chickenLabel = helpers.setLabelFor('Chicken', 'chicken');
  field.appendChild(chickenLabel);

  let pigeonAttributes = {'id': "pigeon", 'type': "checkbox", 'aria-labelledby': "birds", 'role': "checkbox", 'value': "pigeon"};
  var pigeon = document.createElement('input');
  helpers.setAttributes(pigeon, pigeonAttributes);
  field.appendChild(pigeon);
  var pigeonLabel = helpers.setLabelFor('Pigeon', 'pigeon');
  field.appendChild(pigeonLabel);

  let cotingaAttributes = {'id': "continga", 'type': "checkbox", 'aria-labelledby': "birds", 'role': "checkbox", 'value': "cotinga"};
  var cotinga = document.createElement('input');
  helpers.setAttributes(cotinga, cotingaAttributes);
  field.appendChild(cotinga);
  var cotingaLabel = helpers.setLabelFor('Cotinga', 'cotinga');
  field.appendChild(cotingaLabel);

  return field;
}
