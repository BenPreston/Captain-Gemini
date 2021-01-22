import { useState, useEffect } from "react";
import { db } from "../firebase_config";
import { Link } from "react-router-dom"

import BoatRouteItem from "./BoatRouteItem";
import { Button } from "@material-ui/core";


export default function RouteList() {

    const [routes, setRoutes] = useState([]);

    useEffect(() => {
      getRoutes();
    }, []); 
  
    function getRoutes() {
      db.collection("boat_routes").onSnapshot(function (querySnapshot) {
        setRoutes(
          querySnapshot.docs.map((doc) => ({
            start_location: doc.data().start_location,
            finish_location: doc.data().finish_location,
            distance: doc.data().distance,
            average_time: doc.data().average_time,
          }))
        );
      });
    }
  
    return (
        <div className='listPage'>
          <h1>List of Routes</h1>
          <Link exact activeClassName="active" to={'add/routes'}>
            <Button className="">Add Route</Button>
          </Link>

    
          {routes.map((route) => (
            <BoatRouteItem
              start_location={route.start_location}
              finish_location={route.finish_location}
              distance={route.distance}
              average_time={route.average_time}
            />
          ))}
      </div>
    )
}
