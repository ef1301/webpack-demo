var RGB = false; //keeps track of state

function changeToRGB() { //changes color codes to RBG if HEX
  if(!RGB) {
    RGB = true;
    var colorCodes = document.getElementsByClassName("color-code");
    [].forEach.call(colorCodes, function(colorCodes) {
      colorCodes.innerHTML = colorCodes.value.RGB;
    });
  } else {
    return;
  }
}

function changeToHEX() { //changes color codes to HEX if RGB
  if(RGB) {
    RGB = false;
    var colorCodes = document.getElementsByClassName("color-code");
    [].forEach.call(colorCodes, function(colorCodes) {
      colorCodes.innerHTML = colorCodes.value.HEX;
    });
  } else {
    return;
  }
}

function getContrastYIQ(hexcolor){
  hexcolor = hexcolor.replace("#", "");
  var r = parseInt(hexcolor.substr(0,2),16);
  var g = parseInt(hexcolor.substr(2,2),16);
  var b = parseInt(hexcolor.substr(4,2),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? '#241C15' : '#FFFFFF';
}

function colorSwitch() {
  let switchBar = document.createElement('span');
  switchBar.id = "switchBar";
  let RGB = document.createElement('button');
  RGB.innerHTML = "RGB";
  RGB.onclick = function() { changeToRGB(); };
  switchBar.appendChild(RGB);
  let HEX = document.createElement('button');
  HEX.innerHTML = "HEX";
  HEX.onclick = function() { changeToHEX(); };
  switchBar.appendChild(HEX);

  return switchBar;
}


//Color Swatch containers-----------------------------------------------------------------------------------

//FUNCTIONAL COLORS
function functionalColors() {
  let container = document.createElement('div');

  let title = document.createElement("h2");
  title.innerHTML = "Functional Colors";
  container.appendChild(title);

  let colors = {"Peppercorn": {"HEX": "#241C15", "RGB": "rgb(36,28,21)"},
                "Oyster": {"HEX": "#403B3B", "RGB": "rgb(64,59,59)"},
                "Tuna": {"HEX": "#8C8C8C", "RGB": "rgb(140,140,140)"},
                "Portobello": {"HEX": "#B7A9A1", "RGB": "rgb(183,169,161)"},
                "Basmati": {"HEX": "#DBD9D2", "RGB": "rgb(219,217,210)"},
                "Parsnip": {"HEX": "#EFEEEA", "RGB": "rgb(239,238,234)"},
                "Jasmine": {"HEX": "#F6F6F4", "RGB": "rgb(246,246,244)"},
                "Coconut": {"HEX": "#FFFFFF", "RGB": "rgb(255,255,255)"},
                "Kale": {"HEX": "#007C89", "RGB": "rgb(0,124,137)"}
  };

  for(let color in colors) {
    let swatchName = new document.createElement('p');
    swatchName.innerHTML = color;
    let swatch = new document.createElement('div');
    swatch.setAttribute("class", "swatch");
    swatch.style.backgroundColor = colors[color].HEX;
    swatchName.style.color = getContrastYIQ(colors[color].HEX);
    swatch.appendChild(swatchName);

    let br = document.createElement("br");
    swatch.appendChild(br);

    let colorCode = document.createElement('span');
    colorCode.setAttribute("class", "color-code");
    colorCode.innerHTML = colors[color].HEX;
    colorCode.value = {"HEX": colors[color].HEX, "RGB": colors[color].RGB};
    colorCode.style.color = getContrastYIQ(colors[color].HEX);

    swatch.appendChild(colorCode);
    container.appendChild(swatch);
  }

  return container;
}

//FEEDBACK COLORS
function feedbackColors() {
  let container = document.createElement('div');
  let title = document.createElement("h2");
  title.innerHTML = "Feedback Colors";
  container.appendChild(title);

  let colors = {"Yam": {"HEX": "#FBCFBD", "RGB": "rgb(251,207,189)"},
                "Cornflower": {"HEX": "#C5DBF2", "RGB": "rgb(197,219,242)"},
                "Cucumber": {"HEX": "#D8EACC", "RGB": "rgb(216,234,204)"},
                "Squash": {"HEX": "#FBEECA", "RGB": "rgb(251,238,202)"},
                "Radish": {"HEX": "#F9E0FA", "RGB": "rgb(249,224,250)"}
  };

  for(let color in colors) {
    let swatchName = new document.createElement('p');
    swatchName.innerHTML = color;
    let swatch = new document.createElement('div');
    swatch.setAttribute("class", "swatch");
    swatch.style.backgroundColor = colors[color].HEX;
    swatchName.style.color = getContrastYIQ(colors[color].HEX);
    swatch.appendChild(swatchName);

    let br = document.createElement("br");
    swatch.appendChild(br);

    let colorCode = document.createElement('span');
    colorCode.setAttribute("class", "color-code");
    colorCode.innerHTML = colors[color].HEX;
    colorCode.value = {"HEX": colors[color].HEX, "RGB": colors[color].RGB};
    colorCode.style.color = getContrastYIQ(colors[color].HEX);

    swatch.appendChild(colorCode);
    container.appendChild(swatch);
  }
  return container;
}

function accentColors() {
  let container = document.createElement('div');
  let title = document.createElement("h2");
  title.innerHTML = "Accent Colors";
  container.appendChild(title);

  let colors = {"Dragonfruit": {"HEX": "#FF3EBF", "RGB": "rgb(255,62,191)"},
                "Plum": {"HEX": "#692340", "RGB": "rgb(105,35,64)"},
                "Apricot": {"HEX": "#E7B75F", "RGB": "rgb(231,183,95)"},
                "Apple": {"HEX": "#00C14E", "RGB": "rgb(0,193,78)"},
                "Pumpkin": {"HEX": "#F25F25", "RGB": "rgb(242,95,37)"}
  };

  for(let color in colors) {
    let swatchName = new document.createElement('p');
    swatchName.innerHTML = color;
    let swatch = new document.createElement('div');
    swatch.setAttribute("class", "swatch");
    swatch.style.backgroundColor = colors[color].HEX;
    swatchName.style.color = getContrastYIQ(colors[color].HEX);
    swatch.appendChild(swatchName);

    let br = document.createElement("br");
    swatch.appendChild(br);

    let colorCode = document.createElement('span');
    colorCode.setAttribute("class", "color-code");
    colorCode.innerHTML = colors[color].HEX;
    colorCode.value = {"HEX": colors[color].HEX, "RGB": colors[color].RGB};
    colorCode.style.color = getContrastYIQ(colors[color].HEX);

    swatch.appendChild(colorCode);
    container.appendChild(swatch);
  }

  return container;
}

//Container holdiong all color swwatches
export default function colors() {
  let container = document.createElement('div');
  container.setAttribute("id", "colors");

  let title = document.createElement("h1");
  title.innerHTML = "Colors";
  container.appendChild(title);

  let switchBar = colorSwitch();
  container.appendChild(switchBar);

  let functional = functionalColors();
  container.appendChild(functional);

  let feedback = feedbackColors();
  container.appendChild(feedback);

  let accent = accentColors();
  container.appendChild(accent);

  return container;
}
