export default function jsonToGeoJSON(object) {
  let json = `
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [${object.location.y}, ${object.location.x}]
    },
    "properties": {
      "name": ${object.address}
    }
  }`;
  return json;
}
