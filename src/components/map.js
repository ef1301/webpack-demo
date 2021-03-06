import { loadModules } from 'esri-loader';
import jsonToGeoJSON from './geojson.js';

function searchAddress(query) {
  let url = `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${query}&outFields=Match_addr,Addr_type`;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = () => {
      if(xhr.readyState !== 4) {
        return;
      }
      if(xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        const error = xhr.statusText || "Issue with AJAX call";
        reject(error);
      }
    };
  });
}

function search() {
  let query = document.getElementById("search-query").value;
  let e = document.getElementById("search-results");
  let json = [];
  let results = [];
  searchAddress(query)
    .then(esri => {
      console.log(esri);
      console.log(`${esri.candidates[0].address}`);
      json.push(esri);
      console.log(e);
      e.innerHTML = JSON.stringify(json, null, 2);
      return searchAddress(query)
    })
    .catch(error => console.log(`${error}`));
}

export function searchResults() {
  let searchForm = document.createElement("form");
  searchForm.setAttribute("id", "search-form");
  let query = document.createElement("input");
  query.type = "text";
  query.id = "search-query";
  searchForm.appendChild(query);

  let button = document.createElement("button");
  button.type = "button";
  button.innerHTML = "Submit";
  searchForm.appendChild(button);

  let details = document.createElement("details");
  let results = document.createElement("pre");
  results.setAttribute("id", "search-results");
  let summary = document.createElement("summary");
  details.appendChild(results);
  summary.innerHTML = "Search Results";
  details.appendChild(summary);
  searchForm.appendChild(details);

  button.addEventListener("click", () => {
    search();
  });

  return searchForm;
}

// this will lazy load the ArcGIS API
// and then use Dojo's loader to require the classes
export function loadMap(c, b) {
//export function loadMap() {
  return loadModules(
    ["esri/Map", "esri/views/MapView", "esri/widgets/Search", "esri/layers/GeoJSONLayer"],
    {css: "https://js.arcgis.com/4.10/esri/css/main.css"}
  ).then(([Map, MapView, Search, GeoJSONLayer]) => {
    //const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
    const url = "https://data.cityofnewyork.us/resource/he7q-3hwy.geojson";
    
    const renderer = {
      type: "simple",
      field: "mag",
      symbol: {
        type: "simple-marker",
        color: "orange",
        outline: {
          color: "white"
        }
      },
     // visualVariables: [
     //   {
     //     type: "size",
     //     field: "mag",
     //     stops: [
     //       {
     //         value: 2.5,
     //         size: "4px"
     //       },
     //       {
     //         value: 8,
     //         size: "40px"
     //       }
     //     ]
     //   }
     // ]
    };
    
    const template = {
      title: "Earthquake Info",
      content: "Magnitude {mag} {type} hit {place} on {time}",
      fieldInfos: [
        {
          fieldName: "time",
          format: {
            dateFormat: "short-date-short-time"
          }
        }
      ]
    };

    const geojsonLayer = new GeoJSONLayer({
      url: url,
      //copyright: "USGS Earthquakes",
      //template: template,
      renderer: renderer //optional
    });
    const map = new Map({ 
      basemap: b, 
      layers: [geojsonLayer]
    });
    const view = new MapView({
      container: c,
      map: map,
      center: [-73.86835600032798, 40.84916900104506],
      zoom: 11,
    });

      
    //var search = new Search({
    //  view: view,
    //});
    //    var promise = new Promise((resolve, reject) => {
    //      let request = XMLHttpRequest();
    //      request
    //
    //    });
    //    view.ui.add(search, "top-right");
    //console.log(search.results);
    return view;
  })
}
