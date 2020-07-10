
export default function links() {
  let container = document.createElement('div');
  container.setAttribute("id", "links");
  let title = document.createElement("h1");
  title.innerHTML = "Links";
  container.appendChild(title);

  let wrapper = document.createElement("div");
  let link = document.createElement("a");
  link.innerHTML = "an external link.";
  link.href = "#";
  let text = document.createElement("p");
  text.innerHTML = "This is ";
  text.appendChild(link);
  wrapper.appendChild(text);

  link = document.createElement("a");
  link.innerHTML = "an inline link.";
  link.href = "#";
  text = document.createElement("p");
  text.innerHTML = "This is ";
  text.appendChild(link);
  wrapper.append(text);

  container.appendChild(wrapper);
  return container;
}
