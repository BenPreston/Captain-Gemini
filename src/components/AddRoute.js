import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import firebase from "firebase";

import { db } from '../firebase_config'


export default function AddRoute() {

    const [averageTime, setAverageTime] = useState("");
    const [distance, setDistance] = useState("");
    const [end_point, setEndPoint] = useState("");
    const [finish_location, setFinishLocation] = useState("");
    const [start_location, setStartLocation] = useState("");
    const [start_point, setStartPoint] = useState("");
    
    function AddRoute(e) {
        e.preventDefault();
    
        db.collection("boat_routes").add({
          average_time: averageTime,
          distance: distance,
          end_point: end_point,
          finish_location: finish_location,
          id: Math.random(),
          start_location: start_location,
          start_point: start_point,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    
        setAverageTime("");
        setDistance("");
        setEndPoint("");
        setFinishLocation("");
        setStartLocation("");
        setStartPoint("");
        
      }

    return (
        <div className='formContainer'>
          <h1>Add a new Route</h1>
            <form>

            <TextField
            id="standard-basic"
            label="Start Location"
            value={start_location}
            onChange={(e) => setStartLocation(e.target.value)}
          />

          <TextField
            id="standard-basic"
            label="Start Point"
            value={start_point}
            onChange={(e) => setStartPoint(e.target.value)}
          />

          <TextField
            id="standard-basic"
            label="Finish Location"
            value={finish_location}
            onChange={(e) => setFinishLocation(e.target.value)}
          />

          <TextField
            id="standard-basic"
            label="End Point"
            value={end_point}
            onChange={(e) => setEndPoint(e.target.value)}
          />

          <TextField
            id="standard-basic"
            label="Average Time"
            value={averageTime}
            onChange={(e) => setAverageTime(e.target.value)}
          />

          <TextField
            id="standard-basic"
            label="Distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            onClick={AddRoute}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>
 
        </div>
    )
}
