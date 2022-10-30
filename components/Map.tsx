import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'


function Map({ resultSearch }: any) {
    const coordinates = resultSearch.searchResults.results.map((result: any) => ({
        latitude: result.coordinate.lat,
        longitude: result.coordinate.lon,
    }));
    const center = getCenter(coordinates)
    const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -6.874282,
    longitude: 107.619129,
    zoom: 11,
    });
    console.log(coordinates)
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/rizkialim1807/cl9uo6gt9003s14prrvl2ebwi"
      mapboxAccessToken="pk.eyJ1Ijoicml6a2lhbGltMTgwNyIsImEiOiJjbDl1bzRsM3IxbWlwM25wNXpleG43YWdlIn0.blmpC9nobhs3mi6lFQhbVQ"
      {...viewport}
    >
      {coordinates.map((item: any) => (
        <div key={item.longitude}>
          <Marker
            longitude={item.longitude}
            latitude={item.latitude}
          >
            <p>📍</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map