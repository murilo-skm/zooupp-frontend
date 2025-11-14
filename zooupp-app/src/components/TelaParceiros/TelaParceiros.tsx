import React, { useState } from 'react';
import styles from './TelaParceiros.module.scss';
import { FiArrowLeft, FiSearch, FiExternalLink } from 'react-icons/fi'; 

const parceiros = [
  {
    id: 'p1',
    name: 'DoctorClin',
    description: 'Soluções completas em planos de saúde e odontológicos para você e sua família.',
    image: 'https://via.placeholder.com/80x80/0046B4/FFFFFF?text=DoctorClin',
    websiteUrl: 'https://www.doctorclin.com.br/',
  }
];

type TelaParceirosProps = {
  onBackClick: () => void;
}

const TelaParceiros: React.FC<TelaParceirosProps> = ({ onBackClick }) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParceiros = parceiros.filter(parceiro =>
    parceiro.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.parceirosContainer}>
      
      <header className={styles.parceirosHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <h1 className={styles.headerTitle}>Nossos Parceiros</h1>
      </header>

      <main className={styles.parceirosMain}>
        
        <div className={styles.searchWrapper}>
          <span><FiSearch /></span>
          <input 
            type="text" 
            placeholder="Buscar parceiro..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.parceiroList}>
          
          {filteredParceiros.map(parceiro => (
            <div className={styles.parceiroCard} key={parceiro.id}>
              <img src={parceiro.image} alt={parceiro.name} className={styles.parceiroImage} />
              <div className={styles.parceiroInfo}>
                <h3>{parceiro.name}</h3>
                <p className={styles.parceiroSubtext}>{parceiro.description}</p>
                <a 
                  href={parceiro.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.websiteButton}
                >
                  Visitar Site <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}

          {filteredParceiros.length === 0 && (
            <p className={styles.noResults}>Nenhum parceiro encontrado.</p>
          )}

        </div>
      </main>
    </div>
  );
};

export default TelaParceiros;