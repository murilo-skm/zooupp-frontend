import React, { useState } from 'react';
import styles from './TelaHoteis.module.scss';
import { BsStarFill } from 'react-icons/bs'; 
import { FiArrowLeft, FiSearch, FiList, FiMap } from 'react-icons/fi'; 

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

type Hotel = {
  id: string;
  name: string;
  rating: number;
  distance: string;
  services: string;
  image: string;
  coords: [number, number]; 
};

const hoteis: Hotel[] = [
  {
    id: 'h1',
    name: 'Hotelzinho do Cão (Moinhos)',
    rating: 4.6,
    distance: '5.0km',
    services: 'Creche (diária), Hospedagem (noite)',
    image: 'https://via.placeholder.com/80x80/2196F3/FFFFFF?text=Hotel',
    coords: [-30.0310, -51.2290],
  },
  {
    id: 'h2',
    name: 'Gatotel Miau (Menino Deus)',
    rating: 4.9,
    distance: '2.8km',
    services: 'Apenas para gatos, suítes individuais',
    image: 'https://via.placeholder.com/80x80/E91E63/FFFFFF?text=Gatotel',
    coords: [-30.0500, -51.2100], 
  },
  {
    id: 'h3',
    name: 'Recanto Pet (Centro Histórico)',
    rating: 4.5,
    distance: '7.2km',
    services: 'Amplo espaço verde, adestramento',
    image: 'https://via.placeholder.com/80x80/795548/FFFFFF?text=Recanto',
    coords: [-30.0328, -51.2300], 
  }
];

type TelaHoteisProps = {
  onBackClick: () => void;
}

const TelaHoteis: React.FC<TelaHoteisProps> = ({ onBackClick }) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const filteredHoteis = hoteis.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.hoteisContainer}>
      
      <header className={styles.hoteisHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <h1 className={styles.headerTitle}>Hotéis e Creches</h1>
      </header>

      <main className={styles.hoteisMain}>
        
        <div className={styles.searchWrapper}>
          <span><FiSearch /></span>
          <input 
            type="text" 
            placeholder="Buscar hotel ou creche..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.viewToggle}>
          <button 
            className={`${styles.toggleButton} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FiList /> Lista
          </button>
          <button 
            className={`${styles.toggleButton} ${viewMode === 'map' ? styles.active : ''}`}
            onClick={() => setViewMode('map')}
          >
            <FiMap /> Mapa
          </button>
        </div>

        {viewMode === 'list' && (
          <div className={styles.hotelList}>
            {filteredHoteis.map(hotel => (
              <div 
                className={styles.hotelCard} 
                key={hotel.id}
                onClick={() => alert(`Clicou no hotel: ${hotel.name}`)}
              >
                <img src={hotel.image} alt={hotel.name} className={styles.hotelImage} />
                <div className={styles.hotelInfo}>
                  <h3>{hotel.name}</h3>
                  <p className={styles.hotelRating}>
                    <BsStarFill /> {hotel.rating} • {hotel.distance}
                  </p>
                  <p className={styles.hotelSubtext}>{hotel.services}</p>
                </div>
              </div>
            ))}
            {filteredHoteis.length === 0 && (
              <p className={styles.noResults}>Nenhum hotel encontrado.</p>
            )}
          </div>
        )}
        
        {viewMode === 'map' && (
          <div className={styles.mapContainer}>
            <MapContainer 
              center={[-30.0328, -51.2300]}
              zoom={14} 
              scrollWheelZoom={true} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredHoteis.map(hotel => (
                <Marker 
                  position={hotel.coords} 
                  key={hotel.id}
                >
                  <Popup>
                    <b>{hotel.name}</b><br />
                    {hotel.services}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}

      </main>
    </div>
  );
};

export default TelaHoteis;