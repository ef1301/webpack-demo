
export default function links() {
  let container = document.createElement('div');
  container.setAttribute("id", "links");
  let title = document.createElement("h1");
  title.innerHTML = "Links";
  container.appendChild(title);

  let link = document.createElement("a");
  link.innerHTML = "a link.";
  link.href = "#";
  let text = document.createElement("p");
  text.innerHTML = "This is";
  text.appendChild(link);
  container.append(text);
  return container;
}
