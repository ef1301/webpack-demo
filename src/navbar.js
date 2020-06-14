export default function navbar() {
  const header = document.createElement('header');
  const webtitle = document.createElement('h1');
  var title = document.createTextNode("Accessibility");
  webtitle.appendChild(title);
  header.appendChild(webtitle);

  const nav = document.createElement('nav');
  const navlinks = document.createElement('ul');

  let linktitles = ["Home", "About", "Blog", "Services"];
  linktitles.forEach((item) => {
    let link = document.createElement('a');
    link.setAttribute('href', '/');
    link.setAttribute('role', 'navigation');
    link.appendChild(document.createTextNode(item));
    console.log(item);
    navlinks.appendChild(document.createElement('li').appendChild(link));
  })

  nav.appendChild(navlinks);
  header.appendChild(nav);

  return header;
}
