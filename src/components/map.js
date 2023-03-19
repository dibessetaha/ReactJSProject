import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Form, Input, Button } from "antd";
import axios from "axios";

const FormItem = Form.Item;

const MapPage = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [route, setRoute] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=YOUR_API_KEY&start=${origin}&end=${destination}`;
    axios
      .get(url)
      .then((response) => {
        setRoute(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <Input
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <Input
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Calculate
          </Button>
        </FormItem>
      </Form>
      {route && (
        <Map
          center={[route.start_coordinates[1], route.start_coordinates[0]]}
          zoom={13}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[route.start_coordinates[1], route.start_coordinates[0]]}
          >
            <Popup>{origin}</Popup>
          </Marker>
          <Marker
            position={[route.end_coordinates[1], route.end_coordinates[0]]}
          >
            <Popup>{destination}</Popup>
          </Marker>
        </Map>
      )}
    </div>
  );
};

export default MapPage;
