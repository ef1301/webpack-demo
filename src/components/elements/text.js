//Abbreviations
function abbr() {
  let p = document.createElement("p");
  let abbr = document.createElement("abbr");
  abbr.title = "National Aeronautics and Space Administration";
  abbr.innerHTML = "NASA";
  p.appendChild(abbr);
  p.appendChild(document.createTextNode("is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and space research. NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics."));

  return p;
}

//Address
function address() {
  let address = document.createElement("address");
  address.innerHTML = "3 3rd Street Mundelein, IL 60060";
  return address;
}

//Bold
function bold() {
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

  return p;
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

  let elements = {"abbr": abbrElement, "b": bElement, "address": addressElement};
  for(let object in elements) {
    console.log(object);
    let detail = new document.createElement("details");
    let summary = new document.createElement("summary");

    let code = new document.createElement("code");
    code.appendChild(elements[object]);
    summary.innerHTML = object;

    detail.appendChild(summary);
    detail.appendChild(code);

    container.appendChild(detail);
  }

  return container;
}
