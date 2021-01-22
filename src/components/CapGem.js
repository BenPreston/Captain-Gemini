import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import AddRoute from './AddRoute'
import Footer from './Footer'
import Map from '../components/Map'
import RouteList from './RouteList'
import BoatRoute from './BoatRoute'
import BoatList from './BoatList'
import Boat from './Boat'
import Traders from './Traders'
import Trader from './Trader'
import Events from './Events'
import Event from './Event'
import AddEvent from './AddEvent'

export default function CapGem() {
    return (
        <div className='CapGem'>
     <Router>
          <Route exact path="/">
           <Map />
          </Route>
          <Route exact path="/routes">
           <RouteList />
          </Route>
          <Route exact path="/routes/:id">
          <BoatRoute />
          </Route>
          <Route exact path="/add/routes">
          <AddRoute />
          </Route>
          <Route exact path="/map">
           <Map />
          </Route>
          <Route exact path="/boats">
           <BoatList />
          </Route>
          <Route exact path="/boats/:id">
           <Boat />
          </Route>
          <Route exact path="/traders">
           <Traders />
          </Route>
          <Route exact path="/traders/:id">
          <Trader />
          </Route>
          <Route exact path="/events">
           <Events />
          </Route>
          <Route exact path="/events/:id">
           <Event />
          </Route>
          <Route exact path="/add/events">
           <AddEvent />
          </Route>
        </Router>
        <Footer />
        </div>
    )
}
