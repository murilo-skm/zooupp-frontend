import React, { useState } from 'react';
import styles from './TelaPetshops.module.scss';

import { BsStarFill } from 'react-icons/bs'; 
import { FiArrowLeft, FiSearch } from 'react-icons/fi'; 

import logoCobasi from '../../assets/images/cobasi-logo.png';
import logoPetz from '../../assets/images/petz-logo.png';
import logoPetshopGenerico1 from '../../assets/images/petshop-logo-1.png';
import logoPetshopGenerico2 from '../../assets/images/petshop-logo-2.png';
import logoPetshopGenerico5 from '../../assets/images/petshop-logo-5.png';
import logoPetshopGenerico6 from '../../assets/images/petshop-logo-6.png';

const petshopDatabase = [
  {
    id: 'cobasi', 
    name: 'Cobasi',
    rating: 4.9,
    distance: '2.5km',
    subtext: 'A maior variedade para seu pet',
    logo: logoCobasi,
  },
  {
    id: 'petz', 
    name: 'Petz',
    rating: 4.8,
    distance: '1.2km',
    subtext: 'Tudo para o bem-estar animal',
    logo: logoPetz,
  },
  {
    id: 'petshop1',
    name: 'Pet Shop do Bairro',
    rating: 4.5,
    distance: '0.8km',
    subtext: 'Banho e Tosa',
    logo: logoPetshopGenerico1,
  },
  {
    id: 'petshop2',
    name: 'Casa da Ração',
    rating: 4.3,
    distance: '1.0km',
    subtext: 'Entregas Rápidas',
    logo: logoPetshopGenerico2,
  },
  {
    id: 'petshop5',
    name: 'Mundo Animal',
    rating: 4.2,
    distance: '0.5km',
    subtext: 'Acessórios e Brinquedos',
    logo: logoPetshopGenerico5,
  },
  {
    id: 'petshop6',
    name: 'Estilo Pet',
    rating: 4.9,
    distance: '1.8km',
    subtext: 'Roupas e Moda Pet',
    logo: logoPetshopGenerico6,
  },
];

type TelaPetshopsProps = {
  onBackClick: () => void; 
  onStoreClick: (storeId: string) => void; 
}

const TelaPetshops: React.FC<TelaPetshopsProps> = ({ onBackClick, onStoreClick }) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPetshops = petshopDatabase.filter(petshop =>
    petshop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.petshopsContainer}>
      
      <header className={styles.petshopsHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <h1 className={styles.headerTitle}>Pet Shops</h1>
      </header>

      <main className={styles.petshopsMain}>
        
        <div className={styles.searchWrapper}>
          <span><FiSearch /></span>
          <input 
            type="text" 
            placeholder="Buscar pet shop..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.petshopList}>
          
          {filteredPetshops.map(petshop => (
            <div 
              className={styles.petshopCard} 
              key={petshop.id}
              onClick={() => onStoreClick(petshop.id)} 
            >
              <img src={petshop.logo} alt={petshop.name} className={styles.petshopImage} />
              <div className={styles.petshopInfo}>
                <h3>{petshop.name}</h3>
                <p className={styles.petshopRating}>
                  <BsStarFill /> {petshop.rating} • {petshop.distance}
                </p>
                <p className={styles.petshopSubtext}>{petshop.subtext}</p>
              </div>
            </div>
          ))}

          {filteredPetshops.length === 0 && (
            <p className={styles.noResults}>Nenhum pet shop encontrado.</p>
          )}

        </div>
      </main>
    </div>
  );
};

export default TelaPetshops;