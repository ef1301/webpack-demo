export default function navbar() {
  const header = document.createElement('header');
  const webtitle = document.createElement('h1');
  let a = document.createElement('a');
  a.href = "/";
  var title = document.createTextNode("Style Guide");
  a.appendChild(title);
  webtitle.appendChild(a);
  header.appendChild(webtitle);

  const nav = document.createElement('nav');
  const navlinks = document.createElement('ul');
  navlinks.setAttribute('id', 'scroll-nav');

  let linktitles = { "Elements": "elements", "Colors": "colors", "Icons": "icons", "Layout": "layout"};
  for (const title in linktitles) {

    let link = document.createElement('button');
    link.setAttribute('id', linktitles[title] + "-link");
    link.setAttribute('onclick', 'scroll()');
    link.appendChild(document.createTextNode(title));
    link.onclick = function() {
      let id = linktitles[title];
      let object = document.getElementById(id);
      console.log(object);
      object.scrollIntoView();
    }
    navlinks.appendChild(link);
  }

  nav.appendChild(navlinks);
  header.appendChild(nav);

  return header;
}
