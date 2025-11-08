import React, { useState } from 'react';
import styles from './TelaHoteis.module.scss';

import { BsStarFill } from 'react-icons/bs'; 
import { FiArrowLeft, FiSearch } from 'react-icons/fi'; 

const hoteis = [
  {
    id: 'h1',
    name: 'Hotelzinho do Cão',
    rating: 4.6,
    distance: '5.0km',
    services: 'Creche (diária), Hospedagem (noite)',
    image: 'https://via.placeholder.com/80x80/2196F3/FFFFFF?text=Hotel',
  },
  {
    id: 'h2',
    name: 'Gatotel Miau',
    rating: 4.9,
    distance: '2.8km',
    services: 'Apenas para gatos, suítes individuais',
    image: 'https://via.placeholder.com/80x80/E91E63/FFFFFF?text=Gatotel',
  },
  {
    id: 'h3',
    name: 'Recanto Pet',
    rating: 4.5,
    distance: '7.2km',
    services: 'Amplo espaço verde, adestramento',
    image: 'https://via.placeholder.com/80x80/795548/FFFFFF?text=Recanto',
  }
];

type TelaHoteisProps = {
  onBackClick: () => void;
}

const TelaHoteis: React.FC<TelaHoteisProps> = ({ onBackClick }) => {
  
  const [searchTerm, setSearchTerm] = useState('');

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
      </main>
    </div>
  );
};

export default TelaHoteis;