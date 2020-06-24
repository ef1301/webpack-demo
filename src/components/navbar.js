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

  let linktitles = { "Elements": "/elements", "Links": "links.html", "Colors": "colors.html", "Icons": "icons.html", "Layout": "layout.html"};
  for (const title in linktitles) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', linktitles[title]);
    link.setAttribute('role', 'navigation');
    link.appendChild(document.createTextNode(title));
    li.appendChild(link);
    navlinks.appendChild(li);
  }

  nav.appendChild(navlinks);
  header.appendChild(nav);

  return header;
}
