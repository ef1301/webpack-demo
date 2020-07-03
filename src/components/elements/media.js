import bar_graph from '../../assets/bar_graph.png';

export default function media() {
  let container = document.createElement("div");
  container.id = "media";
  let title = document.createElement("h1");
  title.innerHTML = "Media";
  container.appendChild(title);

  title = new document.createElement("h2");
  title.innerHTML = "Video";
  container.appendChild(title);
  let video = document.createElement("video");
  video.width = "320";
  video.height = "240";
  video.controls = true;

  container.appendChild(video);

  title = new document.createElement("h2");
  title.innerHTML = "Audio";
  container.appendChild(title);
  let audio = document.createElement("audio");
  audio.controls = true;
  container.appendChild(audio);

  let br = document.createElement("br");
  container.appendChild(br);

  title = new document.createElement("h2");
  title.innerHTML = "Image";
  container.appendChild(title);
  let image = document.createElement("img");
  image.src = bar_graph;
  container.appendChild(image);

  return container;
}
