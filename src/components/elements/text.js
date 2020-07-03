//Abbreviations
function abbr() {
  let container = document.createElement("div");
  let p = document.createElement("p");
  let abbr = document.createElement("abbr");
  abbr.title = "National Aeronautics and Space Administration";
  abbr.innerHTML = "NASA";
  p.appendChild(abbr);
  p.appendChild(document.createTextNode("is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and space research. NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics."));
  container.appendChild(p);

  return container;
}

//Address
function address() {
  let container = document.createElement("div");
  let address = document.createElement("address");
  address.innerHTML = "3 3rd Street Mundelein, IL 60060";
  container.appendChild(address);
  return container;
}

//Bold
function bold() {
  let container = document.createElement("div");
  let text = ["Actionable content tailored to support member needs, including ", "deployment guides", " for CfA-vetted apps, ", "timely case studies", ", and ", "online training", " with renowned experts."];
  let p = document.createElement("p");

  text.forEach((words, index) => {
    if(index % 2 === 1) {
      let object = new document.createElement("b");
      object.innerHTML = words;
      p.appendChild(object);
    } else {
      p.appendChild(document.createTextNode(words));
    }
  });
  container.appendChild(p);

  return container;
}

function blockquote() {
  let container = document.createElement("div");
  let blockq = document.createElement("blockquote");
  let p = document.createElement("p");
  p.innerHTML = "The failure of the federal levee system during Hurricane Katrina changed the way I think about the world around me. I was 20-years-old, but I understood for the first time that our cities are what we make them.";
  blockq.appendChild(p);
  container.appendChild(blockq);
  return container;
}

//All text elements
export default function text() {
  let container = document.createElement("div");
  container.id = "text";
  let title = document.createElement("h1");
  title.innerHTML = "Text";
  container.appendChild(title);

  const abbrElement = abbr();
  const bElement = bold();
  const addressElement = address();
  const blockqElement = blockquote();

  let elements = {"abbr": abbrElement, "b": bElement, "address": addressElement, "blockquote": blockqElement};
  for(let id in elements) {
    let wrapper = new document.createElement("div");
    let detail = new document.createElement("details");
    let summary = new document.createElement("summary");
    let object = elements[id];
    summary.innerHTML = id;

    let code = new document.createElement("code");
    code.appendChild(document.createTextNode(object.innerHTML));

    detail.appendChild(summary);
    detail.appendChild(code);

    wrapper.appendChild(detail);
    wrapper.appendChild(object);

    container.appendChild(wrapper);
  }

  return container;
}
