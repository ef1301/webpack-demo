var helpers = require('./helpers.js');

export default function userform() {
  const field = helpers.setFieldsetIdLegend('user-form', 'User Form');

  var firstnameLabel = helpers.setLabelFor('First Name: *', 'first-name');
  field.appendChild(firstnameLabel);

  let firstnameAttributes = { "id": "first-name", "aria-required": "true", "type": "text", "placeholder": "Enter Your First Name"};
  var firstname = document.createElement('input');
  helpers.setAttributes(firstname, firstnameAttributes);
  field.appendChild(firstname);


  var lastnameLabel = helpers.setLabelFor('Last Name: *', 'last-name');
  field.appendChild(lastnameLabel);

  let lastnameAttributes = { "id": "last-name", "aria-required": "true", "type": "text", "placeholder": "Enter Your Last Name"};
  var lastname = document.createElement('input');
  helpers.setAttributes(lastname, lastnameAttributes);
  field.appendChild(lastname);


  var dateofbirthLabel = helpers.setLabelFor('Date of Birth: *', 'birth-date');
  field.appendChild(dateofbirthLabel);

  let birthdateAttributes = { "id": "birth-date", "aria-required": "true", "type": "date"};
  var birthdate = document.createElement('input');
  helpers.setAttributes(birthdate, birthdateAttributes);
  field.appendChild(birthdate);

  return field;
}
