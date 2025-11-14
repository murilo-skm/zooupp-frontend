import React, { useState } from 'react';
import styles from './TelaOngs.module.scss';
import { BsStarFill } from 'react-icons/bs'; 
import { FiArrowLeft, FiSearch } from 'react-icons/fi'; 

const ongs = [
  {
    id: 'ong1',
    name: 'ONG Salve Vidas Pet',
    rating: 4.9,
    location: 'Porto Alegre, RS',
    description: 'Resgate e adoção de cães e gatos em situação de risco.',
    image: 'https://via.placeholder.com/80x80/FF6F61/FFFFFF?text=ONG',
  },
  {
    id: 'ong2',
    name: 'Projeto Patinhas Felizes',
    rating: 4.8,
    location: 'Canoas, RS',
    description: 'Focada em gatos, castração e feiras de adoção.',
    image: 'https://via.placeholder.com/80x80/76FF03/000000?text=ONG',
  },
  {
    id: 'ong3',
    name: 'Amparo Animal POA',
    rating: 4.7,
    location: 'Porto Alegre, RS',
    description: 'Cuidado de animais idosos e com necessidades especiais.',
    image: 'https://via.placeholder.com/80x80/607D8B/FFFFFF?text=ONG',
  }
];

type TelaOngsProps = {
  onBackClick: () => void;
  onOngClick: (ongId: string) => void;
}

const TelaOngs: React.FC<TelaOngsProps> = ({ onBackClick, onOngClick }) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOngs = ongs.filter(ong =>
    ong.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.ongsContainer}>
      
      <header className={styles.ongsHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <h1 className={styles.headerTitle}>ONGs para Adoção</h1>
      </header>

      <main className={styles.ongsMain}>
        
        <div className={styles.searchWrapper}>
          <span><FiSearch /></span>
          <input 
            type="text" 
            placeholder="Buscar ONG..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.ongList}>
          
          {filteredOngs.map(ong => (
            <div 
              className={styles.ongCard} 
              key={ong.id}
              onClick={() => onOngClick(ong.id)}
            >
              <img src={ong.image} alt={ong.name} className={styles.ongImage} />
              <div className={styles.ongInfo}>
                <h3>{ong.name}</h3>
                <p className={styles.ongRating}>
                  <BsStarFill /> {ong.rating} • {ong.location}
                </p>
                <p className={styles.ongSubtext}>{ong.description}</p>
              </div>
            </div>
          ))}

          {filteredOngs.length === 0 && (
            <p className={styles.noResults}>Nenhuma ONG encontrada.</p>
          )}

        </div>
      </main>
    </div>
  );
};

export default TelaOngs;