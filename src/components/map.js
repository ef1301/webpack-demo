import { loadModules } from 'esri-loader';

function searchResults(object) {
  console.log(object.results);
}

let button = document.getElementsByClassName("esri-search__submit-button esri-widget--button");
console.log(button);

function searchPromise() {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

// this will lazy load the ArcGIS API
// and then use Dojo's loader to require the classes
export default function loadMap(container, basemap) {
  return loadModules(
    ["esri/Map", "esri/views/MapView", "esri/widgets/Search"],
    {css: "https://js.arcgis.com/4.10/esri/css/main.css"}
  ).then(([Map, MapView, Search]) => {
    const map = new Map({ basemap });
    const view = new MapView({
      container,
      map,
      center: [-118.71511,34.09042],
      zoom: 11,
    });

    var search = new Search({
      view: view,
    });

    var promise = new Promise((resolve, reject) => {


    });

    view.ui.add(search, "top-right");
    //console.log(search.results);
    return view;
  })
}
