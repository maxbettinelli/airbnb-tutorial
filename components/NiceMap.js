import React from 'react'
import Map, {Market, Popup} from 'react-map-gl';
import { useState } from 'react';
import { getCenter } from 'geolib';


function NiceMap({searchResults}) {

  const [selectedLocation, setSelectedLocation] = useState({});


      
    //transform the searchResults into object with {lat: 12.12. long:12.1423}
    const coordinates = searchResults.map(result => ({
      longitude: result.long,
      latitude: result.lat,
    }))


    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,
    })


    const center = getCenter(coordinates)

  return (
    <Map 
        mapStyle='mapbox://styles/maxbettinelli/clcn0naca000814mv2fpzbo1l'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewPort}
        onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}>
        {searchResults.map(result =>(
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetRight={-10}
              >
                <p onClick={() => setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce'>|</p>
            </Marker>

            {selectedLocation.long === result.long ? (
              <Popup 
              onClose={() => setSelectedLocation({})} 
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}>
                {result.title}
              </Popup>
            )}
          </div>
        ))}
    </Map>
  )
}

export default NiceMap;