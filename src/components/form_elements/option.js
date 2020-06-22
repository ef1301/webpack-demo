var helpers = require('./helpers.js');

export default function option() {
  const field = helpers.setFieldsetIdLegend('city-travel', 'Select Input Practice [Cities]');
  const citiesLabel = helpers.setLabelFor("Which  city would you travel to?", "cities");
  var select = document.createElement('select');
  let selectAttributes = {"id": "cities", "aria-labelledby": "city-travel"};
  helpers.setAttributes(select, selectAttributes);

  let cities = ["New York", "Seoul", "Moscow", "Buenos Aires", "Tokyo"];
  cities.forEach( (city) => {
    let option = document.createElement('option');
    option.appendChild(document.createTextNode(city));
    select.appendChild(option);
  });
  field.appendChild(select);
  return field;
}
