import React from 'react'
import { BrowserRouter as Router, NavLink } from "react-router-dom";

// Material UI
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import MapIcon from '@material-ui/icons/Room'
import RoutesIcon from '@material-ui/icons/Explore'
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat'
import EventIcon from '@material-ui/icons/Event'
import StorefrontIcon from '@material-ui/icons/Storefront'

export default function Footer () {
  const [value, setValue] = React.useState(0)

  return (
     <div className='footer'>
         {/* <Router> */}
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            showLabels
        >

            <NavLink exact activeClassName="active" to={'/map'}>
                <BottomNavigationAction exact activeClassName="active" to="/map" label="Map" icon={<MapIcon />} />
            </NavLink>

            <NavLink exact activeClassName="active" to={'/routes'}>
            <BottomNavigationAction label="Routes" icon={<RoutesIcon />} />
            </NavLink>

            <NavLink exact activeClassName="active" to={'/boats'}>
            <BottomNavigationAction label="Boats" icon={<DirectionsBoatIcon />} />
            </NavLink>

            <NavLink exact activeClassName="active" to={'/traders'}>
            <BottomNavigationAction label="Traders" icon={<StorefrontIcon />} />
            </NavLink>

            <NavLink exact activeClassName="active" to={'/events'}>
            <BottomNavigationAction label="Events" icon={<EventIcon />} />
            </NavLink>

        </BottomNavigation>
      {/* </Router> */}
     </div>
  )
}
