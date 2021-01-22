import { useState, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'

import StormMarker from './StormMarker'

function Map({ center, zoom}) {

  const [eventData, setEventData] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)

    }

    fetchEvents()

  }, [])
  
  const stormPoints = []

  const stormData = eventData.filter(ev => ev.categories[0].id === 10)
  
  for(let i = 0; i < stormData.length; i++) {
      
      const geometries = stormData[i].geometries;

      for(let j = 0; j < geometries.length; j++ ) {

          stormPoints.push(geometries[j])            

      }
  }

  const markers = stormPoints.map(point => {

      return <StormMarker 
      lat={point.coordinates[1] } 
      lng={point.coordinates[0] } 
  />  

  })

    return (
      <div className="map">
          <div className='mapButtons'>
            <a class="active" href="">Friends</a>
            <a href="">Floatilla</a>
            <a href="">Local</a>
        </div>

      <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
          defaultCenter={center}
          defaultZoom={zoom}
      >
      {markers}
      </GoogleMapReact>
  </div>
    )
}

Map.defaultProps = {
  center: {
      lat: -22,
      lng: 46.5
  },
  zoom: 6
}

export default Map