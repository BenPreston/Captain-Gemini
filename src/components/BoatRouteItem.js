import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";

export default function BoatRouteItem( { start_location, finish_location } ) {

  return (
      <ListItem>
        <ListItemText
          primary={start_location}
        />
        <ListItemText
          primary={finish_location}
        />
        <Button className="">Details</Button>
      </ListItem>
  );
}