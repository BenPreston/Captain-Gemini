import { useState, useEffect } from 'react'

import GoogleMapReact from 'google-map-react'

import StormMarker from './StormMarker'
import BoatMarker from './BoatMarker'

function Map({ friend_boat, own_boat, center, zoom}) {

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
      <BoatMarker lat={own_boat.lat} lng={own_boat.lng} type='boat_marker boat_own' />
      <BoatMarker lat={friend_boat.lat} lng={friend_boat.lng} type='boat_marker boat_friend' />
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
  own_boat: {
    lat: -25,
      lng: 50
  },
  friend_boat: {
    lat: -26,
      lng: 51
  },
  zoom: 5
}

export default Map