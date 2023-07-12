import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

const Map = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div 
      className={styles.mapContainer} 
      onClick={() => navigate('form')}
    >
      <h1>Map</h1>

      <h2>Pos: {lat}:{lng}</h2>

      <button 
        onClick={() => {
          setSearchParams({lat: 34, lng: 50 })
        }}
      >
        Change Position
      </button>
    </div>
  )
}

export default Map