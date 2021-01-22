import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
// import { db } from "../firebase_config";

export default function BoatRouteItem( { start_location, finish_location, distance, average_time } ) {

  return (
      <ListItem>
        <ListItemText
          primary={start_location}
        />
        <ListItemText
          primary={finish_location}
        />
         <ListItemText
          primary={distance}
        />
         <ListItemText
          primary={average_time}
        />
      </ListItem>
  );
}