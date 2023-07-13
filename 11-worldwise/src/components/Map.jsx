import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {useCities} from '../contexts/CitiesContext';
import styles from './Map.module.css';
import { useState } from 'react';

const Map = () => {
  const navigate = useNavigate();

  // global state - inside context
  const {cities} = useCities()

  const [mapPosition, setMapPosition] = useState([40, 0])

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div 
      className={styles.mapContainer} 
      // onClick={() => navigate('form')}
    >
      {/* <h1>Map</h1>

      <h2>Pos: {lat}:{lng}</h2>

      <button 
        onClick={() => {
          setSearchParams({lat: 34, lng: 50 })
        }}
      >
        Change Position
      </button> */}
      <MapContainer 
        center={mapPosition} 
        zoom={13} 
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        { cities.map((city) => ( 
          <Marker 
            position={[city.position.lat, city.position.lng]} 
            key={city.id}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map;
