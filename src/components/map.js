import { loadModules } from 'esri-loader';

// this will lazy load the ArcGIS API
// and then use Dojo's loader to require the classes
export default function loadMap(container, basemap) {
  return loadModules(
    ["esri/Map", "esri/views/MapView"],
    {css: "https://js.arcgis.com/4.10/esri/css/main.css"}
  ).then(([Map, MapView]) => {
    const map = new Map({ basemap });
    const view = new MapView({
      container,
      map,
      center: [-118.71511,34.09042],
      zoom: 11,
    });
    return view;
  })
}
