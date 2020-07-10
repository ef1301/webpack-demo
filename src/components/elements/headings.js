export default function headings() {
  let container = document.createElement("div");
  container.setAttribute("id", "headings");
  let wrapper = document.createElement("div");
  let title = document.createElement("h1");
  title.innerHTML = "Headings";
  container.appendChild(title);

  for(let i = 1; i < 7; i++) {
    let object = document.createElement("h" + i);
    object.innerHTML = "A new kind of public service";
    wrapper.appendChild(object);
  }
  container.appendChild(wrapper);

  return container;
}
