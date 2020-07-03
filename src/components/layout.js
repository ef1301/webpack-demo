function layoutBreve() {
  let container = document.createElement("div");
  container.setAttribute("class", "layout-breve");
  let text = document.createElement("p");
  text.innerHTML = "layout-breve";
  container.appendChild(text);
  return container;
}

function layoutMinim() {
  let container = layoutBreve();
  for(let i = 0; i < 2; i++) {
    let object = new document.createElement("div");
    object.setAttribute("class", "layout-minim");
    let text = document.createElement("p");
    text.innerHTML = "layout-minim";
    object.appendChild(text);
    container.appendChild(object);
  }
  return container;
}

function layoutCrochet() {
  let container = layoutBreve();
  for(let i = 0; i < 3; i++) {
    let object = new document.createElement("div");
    object.setAttribute("class", "layout-crochet");
    let text = document.createElement("p");
    text.innerHTML = "layout-crochet";
    object.appendChild(text);
    container.appendChild(object);
  }
  return container;
}

function layoutQuaver() {
  let container = layoutBreve();
  for(let i = 0; i < 9; i++) {
    let object = new document.createElement("div");
    object.setAttribute("class", "layout-quaver");
    let text = document.createElement("p");
    text.innerHTML = "layout-quaver";
    object.appendChild(text);
    container.appendChild(object);
  }
  return container;
}

export default function layout() {
  let container = document.createElement('div');
  container.setAttribute("id", "layout");
  let title = document.createElement("h1");
  title.innerHTML = "Layout";
  container.appendChild(title);

  container.appendChild(layoutBreve());
  container.appendChild(layoutMinim());
  container.appendChild(layoutCrochet());
  container.appendChild(layoutQuaver());
  return container;
}
