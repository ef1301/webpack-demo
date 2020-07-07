
export default function icons() {
  let container = document.createElement('div');
  container.setAttribute("id", "icons");

  let collection = ["icon-home", "icon-file-picture", "icon-file-music", "icon-file-play", "icon-file-video", "icon-file-zip", "icon-paste", "icon-folder-open", "icon-folder-plus", "icon-folder-minus", "icon-folder-download", "icon-folder-upload", "icon-phone", "icon-box-add", "icon-bubbles", "icon-user", "icon-users", "icon-user-plus", "icon-user-minus", "icon-user-check"];

  collection.forEach(iconClass => {
    let icon = new document.createElement("span");
    icon.setAttribute("class", iconClass);
    icon.innerHTML = iconClass;
    container.appendChild(icon);
  });

  return container;
}
