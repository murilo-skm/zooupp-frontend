import React, { useState } from 'react';
import styles from './TelaClinicas.module.scss';

import { BsStarFill } from 'react-icons/bs'; 
import { FiArrowLeft, FiSearch } from 'react-icons/fi'; 

const clinicas = [
  {
    id: 'c1',
    name: 'Clínica Vet. Dr. Patas',
    rating: 4.8,
    distance: '1.2km',
    services: 'Consultas, Vacinas, Emergência',
    image: 'https://via.placeholder.com/80x80/0046B4/FFFFFF?text=Clínica',
  },
  {
    id: 'c2',
    name: 'Hospital Veterinário Central',
    rating: 4.9,
    distance: '3.5km',
    services: 'Internação, Cirurgia, Exames',
    image: 'https://via.placeholder.com/80x80/9C27B0/FFFFFF?text=Hospital',
  },
  {
    id: 'c3',
    name: 'PetCare & Saúde Animal',
    rating: 4.6,
    distance: '800m',
    services: 'Consultas, Banho & Tosa Medicinal',
    image: 'https://via.placeholder.com/80x80/4CAF50/FFFFFF?text=PetCare',
  },
  {
    id: 'c4',
    name: 'Centro de Diagnóstico Pet',
    rating: 4.7,
    distance: '2.1km',
    services: 'Exames Laboratoriais, Ultrassom',
    image: 'https://via.placeholder.com/80x80/666666/FFFFFF?text=Exames',
  }
];

type TelaClinicasProps = {
  onBackClick: () => void;
  onClinicaClick: (clinicaId: string) => void;
}

const TelaClinicas: React.FC<TelaClinicasProps> = ({ onBackClick, onClinicaClick }) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClinicas = clinicas.filter(clinica =>
    clinica.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.clinicasContainer}>
      
      <header className={styles.clinicasHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <h1 className={styles.headerTitle}>Clínicas Veterinárias</h1>
      </header>

      <main className={styles.clinicasMain}>

        <div className={styles.searchWrapper}>
          <span><FiSearch /></span>
          <input 
            type="text" 
            placeholder="Buscar clínica ou serviço..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.clinicaList}>
          
          {filteredClinicas.map(clinica => (
            <div 
              className={styles.clinicaCard} 
              key={clinica.id}
              onClick={() => onClinicaClick(clinica.id)} 
            >
              <img src={clinica.image} alt={clinica.name} className={styles.clinicaImage} />
              <div className={styles.clinicaInfo}>
                <h3>{clinica.name}</h3>
                <p className={styles.clinicaRating}>
                  <BsStarFill /> {clinica.rating} • {clinica.distance}
                </p>
                <p className={styles.clinicaSubtext}>{clinica.services}</p>
              </div>
            </div>
          ))}

          {filteredClinicas.length === 0 && (
            <p className={styles.noResults}>Nenhuma clínica encontrada.</p>
          )}

        </div>
      </main>
    </div>
  );
};

export default TelaClinicas;