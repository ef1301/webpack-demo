const helpers = require('./helpers.js');

export default function radio() {
  const field = helpers.setFieldsetIdLegend('pizza-toppings', 'Radio Input Practice [Pizza Toppings]');

  const radiogroup = document.createElement('div');
  radiogroup.setAttribute('role', 'radiogroup');

  //Pineapple Radio Input
  let pineappleAttributes = { "id": "pinapple", "aria-labelledby": "pizza-toppings", "type": "radio", "name": "pineapple" };
  var pineappleRadio = document.createElement('input');
  helpers.setAttributes(pineappleRadio, pineappleAttributes);
  field.appendChild(pineappleRadio);

  var pineapplelabel = helpers.setLabelFor('Pineapple', 'pineapple');
  field.appendChild(pineapplelabel);

  //Ham Radio Input
  let hamAttributes = { "id": "ham", "aria-labelledby": "pizza-toppings", "type": "radio", "name": "ham" };
  var hamRadio = document.createElement('input');
  helpers.setAttributes(hamRadio, hamAttributes);
  field.appendChild(hamRadio);

  var hamlabel = helpers.setLabelFor('Ham', 'ham');
  field.appendChild(hamlabel);

  //Olive Radio Input
  let oliveAttributes = { "id": "olive", "aria-labelledby": "pizza-toppings", "type": "radio", "name": "olive" };
  var oliveRadio = document.createElement('input');
  helpers.setAttributes(oliveRadio, oliveAttributes);
  field.appendChild(oliveRadio);

  var olivelabel = helpers.setLabelFor('Olive', 'olive');
  field.appendChild(olivelabel);

  //None Radio Input
  let noneAttributes = { "id": "none", "aria-labelledby": "pizza-toppings", "type": "radio", "name": "none" };
  var noneRadio = document.createElement('input');
  helpers.setAttributes(noneRadio, noneAttributes);
  field.appendChild(noneRadio);

  var nonelabel = helpers.setLabelFor('None', 'none');
  field.appendChild(nonelabel);

  return field;
}
