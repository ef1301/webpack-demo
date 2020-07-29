function toTheTop() {
  let button = document.createElement("button");
  button.id = "top-button";
  button.innerHTML = "To the top!";
  button.onclick = function() {
    window.scrollTo(0, 0);
  }
  return button;
}

function sidebar() {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'sidebar-nav');
  let left = document.createElement("div");
  left.setAttribute("id", "sidebar-left");
  let right = document.createElement("div");
  right.setAttribute("id", "sidebar-right");

  let linktitles = { "Elements": "elements", "Colors": "colors", "Icons": "icons", "Layout": "layout", "Map": "viewDiv"};
  for (const title in linktitles) {

    let link = document.createElement('button');
    let abbr = document.createElement("button");
    abbr.innerHTML = title[0];
    link.setAttribute('id', linktitles[title] + "-link");
    link.appendChild(document.createTextNode(title));
    link.onclick = function() {
      let id = linktitles[title];
      let object = document.getElementById(id);
      object.scrollIntoView();
    };

    left.appendChild(abbr);
    right.appendChild(link);
  }
  nav.appendChild(left);
  nav.appendChild(right);

  nav.appendChild(toTheTop());
  return nav;
}

export default function navbar() {
  const header = document.createElement('header');
  let container = document.createElement('div');
  container.id = "header-title";
  const webtitle = document.createElement('h1');
  let a = document.createElement('a');
  a.href = "/";
  var title = document.createTextNode("Style Guide");
  a.appendChild(title);
  webtitle.appendChild(a);
  container.appendChild(webtitle);
  header.appendChild(container);

  const nav = document.createElement('nav');
  const navlinks = document.createElement('ul');
  nav.setAttribute('id', 'scroll-nav');

  let linktitles = { "Elements": "elements", "Colors": "colors", "Icons": "icons", "Layout": "layout"};
  for (const title in linktitles) {

    let link = document.createElement('button');
    link.setAttribute('id', linktitles[title] + "-link");
    link.appendChild(document.createTextNode(title));
    link.onclick = function() {
      let id = linktitles[title];
      let object = document.getElementById(id);
      console.log(object);
      object.scrollIntoView();
    };
    navlinks.appendChild(link);
  }

  //nav.appendChild(navlinks);
  //header.appendChild(nav);
  header.appendChild(sidebar());
  //header.appendChild(toTheTop());

  return header;
}
