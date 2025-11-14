import React, { useState } from 'react';
import styles from './TelaTinderPetBusca.module.scss';
import { FiArrowLeft, FiHeart } from 'react-icons/fi';

const racas = ['Golden Retriever', 'Labrador', 'Poodle', 'Bulldog Francês', 'Vira-lata', 'Persa', 'Siamês', 'SRD Gato'];
const cores = ['Preto', 'Branco', 'Marrom', 'Dourado', 'Cinza', 'Tigrado', 'Bicolor'];
const estilosPelo = ['Curto', 'Médio', 'Longo', 'Ondulado', 'Cacheado', 'Sem Pelo'];
const sexos = ['Macho', 'Fêmea']; 

type TelaTinderPetBuscaProps = {
  onBackClick: () => void;
  onBuscarMatches: (raca: string, cor: string, estiloPelo: string, sexo: string) => void;
};

const TelaTinderPetBusca: React.FC<TelaTinderPetBuscaProps> = ({ onBackClick, onBuscarMatches }) => {
  const [selectedRaca, setSelectedRaca] = useState('');
  const [selectedCor, setSelectedCor] = useState('');
  const [selectedEstiloPelo, setSelectedEstiloPelo] = useState('');
  const [selectedSexo, setSelectedSexo] = useState('');

  const handleBuscar = () => {
    onBuscarMatches(selectedRaca, selectedCor, selectedEstiloPelo, selectedSexo);
  };

  return (
    <div className={styles.tinderPetBuscaContainer}>
      <header className={styles.tinderPetBuscaHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <h1 className={styles.headerTitle}>Tinder Pet - Encontre um Amor</h1>
      </header>

      <main className={styles.tinderPetBuscaMain}>
        <p className={styles.description}>
          Selecione as características ideais para o seu pet!
        </p>

        <div className={styles.formGroup}>
          <label htmlFor="raca">Raça do meu Pet:</label>
          <select 
            id="raca" 
            value={selectedRaca} 
            onChange={(e) => setSelectedRaca(e.target.value)}
          >
            <option value="">Selecione uma raça</option>
            {racas.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="sexo">Sexo do meu Pet:</label>
          <select 
            id="sexo" 
            value={selectedSexo} 
            onChange={(e) => setSelectedSexo(e.target.value)}
          >
            <option value="">Selecione o sexo</option>
            {sexos.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cor">Cor do meu Pet:</label>
          <select 
            id="cor" 
            value={selectedCor} 
            onChange={(e) => setSelectedCor(e.target.value)}
          >
            <option value="">Selecione uma cor</option>
            {cores.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="estiloPelo">Estilo de Pelo do meu Pet:</label>
          <select 
            id="estiloPelo" 
            value={selectedEstiloPelo} 
            onChange={(e) => setSelectedEstiloPelo(e.target.value)}
          >
            <option value="">Selecione um estilo</option>
            {estilosPelo.map(ep => <option key={ep} value={ep}>{ep}</option>)}
          </select>
        </div>

        <button 
          className={styles.buscarButton} 
          onClick={handleBuscar}
          disabled={!selectedRaca || !selectedCor || !selectedEstiloPelo || !selectedSexo} 
        >
          <FiHeart /> Buscar Matches
        </button>
      </main>
    </div>
  );
};

export default TelaTinderPetBusca;