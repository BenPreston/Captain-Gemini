import { useState, useEffect } from "react";
import { db } from "../firebase_config";

import BoatRouteItem from "./BoatRouteItem";


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
        <div>
            <BoatRouteItem
              start_location='Start'
              finish_location='Finish'
              distance='Distance'
              average_time='Av Time'
            />
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
