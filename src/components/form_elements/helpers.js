module.exports = {
  setAttributes: function (el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  },

  setLabelFor: function (text, name) {
    let content = document.createTextNode(text);
    var label = document.createElement('label');
    label.setAttribute('for', name);
    label.appendChild(content);

    return label;
  },

  setFieldsetIdLegend: function (id, legendtext) {
    let field = document.createElement('fieldset');
    field.setAttribute('id', id);
    let labeltext = document.createTextNode(legendtext);
    const legend = document.createElement('legend');
    legend.appendChild(labeltext);
    field.appendChild(legend);
    return field;
  },
}
