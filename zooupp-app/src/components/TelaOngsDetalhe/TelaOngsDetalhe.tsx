import React, { useState } from 'react';
import styles from './TelaOngsDetalhe.module.scss';
import { FiArrowLeft, FiHeart } from 'react-icons/fi';

const ongPetDatabase: any = {
  'ong1': {
    name: 'ONG Salve Vidas Pet',
    logo: 'https://via.placeholder.com/80x80/FF6F61/FFFFFF?text=ONG',
    pets: [
      { id: 'a1', name: 'Rex', species: 'Cães', breed: 'Vira-lata', age: '2 anos', image: 'https://via.placeholder.com/150/795548/FFFFFF?text=Rex' },
      { id: 'a2', name: 'Mimi', species: 'Gatos', breed: 'Siamês', age: '1 ano', image: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=Mimi' },
      { id: 'a3', name: 'Thor', species: 'Cães', breed: 'Pitbull', age: '4 anos', image: 'https://via.placeholder.com/150/607D8B/FFFFFF?text=Thor' },
    ]
  },
  'ong2': {
    name: 'Projeto Patinhas Felizes',
    logo: 'https://via.placeholder.com/80x80/76FF03/000000?text=ONG',
    pets: [
      { id: 'a4', name: 'Frajola', species: 'Gatos', breed: 'SRD', age: '6 meses', image: 'https://via.placeholder.com/150/333333/FFFFFF?text=Frajola' },
      { id: 'a5', name: 'Garfield', species: 'Gatos', breed: 'Persa', age: '3 anos', image: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Garfield' },
    ]
  },
  'ong3': {
    name: 'Amparo Animal POA',
    logo: 'https://via.placeholder.com/80x80/607D8B/FFFFFF?text=ONG',
    pets: [
      { id: 'a6', name: 'Marley', species: 'Cães', breed: 'Labrador', age: '8 anos', image: 'https://via.placeholder.com/150/FFEB3B/000000?text=Marley' },
    ]
  },
  'default': { name: 'ONG não encontrada', logo: '', pets: [] }
};

type TelaOngsDetalheProps = {
  ongId: string;
  onBackClick: () => void;
}

const TelaOngsDetalhe: React.FC<TelaOngsDetalheProps> = ({ ongId, onBackClick }) => {
  
  const ongData = ongPetDatabase[ongId] || ongPetDatabase['default'];
  
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredPets = ongData.pets.filter((pet: any) => {
    if (activeFilter === 'Todos') return true;
    return pet.species === activeFilter;
  });

  return (
    <div className={styles.ongDetalheContainer}>
      
      <header className={styles.ongDetalheHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <img src={ongData.logo} alt={ongData.name} className={styles.ongLogo} />
        <h1 className={styles.headerTitle}>{ongData.name}</h1>
      </header>

      <main className={styles.ongDetalheMain}>

        <section className={styles.petFilters}>
          {['Todos', 'Cães', 'Gatos'].map(filter => (
            <button 
              key={filter}
              className={`${styles.filterTab} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </section>

        <section className={styles.petListSection}>
          <h2>Pets para Adoção ({filteredPets.length})</h2>

          {filteredPets.length === 0 && (
            <p className={styles.noResults}>Nenhum pet encontrado com este filtro.</p>
          )}

          <div className={styles.petList}>
            {filteredPets.map((pet: any) => (
              <div className={styles.petCard} key={pet.id}>
                <img src={pet.image} alt={pet.name} className={styles.petImage} />
                <div className={styles.petInfo}>
                  <h3>{pet.name} ({pet.age})</h3>
                  <p>{pet.breed}</p>
                </div>
                <button className={styles.adoptButton}>
                  <FiHeart /> Adotar
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TelaOngsDetalhe;