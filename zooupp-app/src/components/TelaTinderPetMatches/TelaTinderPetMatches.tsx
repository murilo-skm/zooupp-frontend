import React, { useState, useEffect } from 'react';
import styles from './TelaTinderPetMatches.module.scss';
import { FiArrowLeft, FiHeart, FiX } from 'react-icons/fi';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import logoZooupp from '../../assets/images/zooupp-logo.png';

const mockPets = [
  { id: 'tp1', name: 'Pandora', age: 2, gender: 'Fêmea', breed: 'Golden Retriever', color: 'Dourado', coatStyle: 'Médio', bio: 'Adora brincar de bolinha...', image: 'https://via.placeholder.com/300x300/FFC107/FFFFFF?text=Pandora', isMatchCandidate: true },
  { id: 'tp2', name: 'Max', age: 3, gender: 'Macho', breed: 'Labrador', color: 'Preto', coatStyle: 'Curto', bio: 'Energético e adestrado...', image: 'https://via.placeholder.com/300x300/4CAF50/FFFFFF?text=Max', isMatchCandidate: false },
  { id: 'tp3', name: 'Mel', age: 1, gender: 'Fêmea', breed: 'Poodle', color: 'Branco', coatStyle: 'Cacheado', bio: 'Pequena, mas cheia de personalidade!', image: 'https://via.placeholder.com/300x300/E91E63/FFFFFF?text=Mel', isMatchCandidate: false },
  { id: 'tp4', name: 'Thor', age: 4, gender: 'Macho', breed: 'Bulldog Francês', color: 'Tigrado', coatStyle: 'Curto', bio: 'Ronca, mas é puro amor.', image: 'https://via.placeholder.com/300x300/607D8B/FFFFFF?text=Thor', isMatchCandidate: false },
  { id: 'tp5', name: 'Sofia', age: 2, gender: 'Fêmea', breed: 'Vira-lata', color: 'Bicolor', coatStyle: 'Curto', bio: 'Resgatada e cheia de gratidão.', image: 'https://via.placeholder.com/300x300/FF5722/FFFFFF?text=Sofia', isMatchCandidate: false },
  { id: 'tp6', name: 'Apollo', age: 5, gender: 'Macho', breed: 'Golden Retriever', color: 'Dourado', coatStyle: 'Longo', bio: 'Um cavalheiro. Adora nadar.', image: 'https://via.placeholder.com/300x300/03A9F4/FFFFFF?text=Apollo', isMatchCandidate: false },
  { id: 'tp7', name: 'Nina', age: 2, gender: 'Fêmea', breed: 'Siamês', color: 'Cinza', coatStyle: 'Curto', bio: 'Princesa da casa. Curiosa.', image: 'https://via.placeholder.com/300x300/9C27B0/FFFFFF?text=Nina', isMatchCandidate: false },
  { id: 'tp8', name: 'Bolinha', age: 6, gender: 'Macho', breed: 'Pug', color: 'Marrom', coatStyle: 'Curto', bio: 'Amo comer e dormir.', image: 'https://via.placeholder.com/300x300/795548/FFFFFF?text=Bolinha', isMatchCandidate: false },
  { id: 'tp9', name: 'Frida', age: 3, gender: 'Fêmea', breed: 'Vira-lata', color: 'Preto', coatStyle: 'Médio', bio: 'Inteligente e ágil.', image: 'https://via.placeholder.com/300x300/333333/FFFFFF?text=Frida', isMatchCandidate: false },
  { id: 'tp10', name: 'Simba', age: 1, gender: 'Macho', breed: 'Persa', color: 'Branco', coatStyle: 'Longo', bio: 'Majestoso e calmo.', image: 'https://via.placeholder.com/300x300/f5f5f5/000000?text=Simba', isMatchCandidate: false },
];

type Pet = {
  id: string;
  name: string;
  age: number;
  gender: string;
  breed: string;
  color: string;
  coatStyle: string;
  bio: string;
  image: string;
  isMatchCandidate: boolean;
};

type TelaTinderPetMatchesProps = {
  onBackClick: () => void;
  raca: string;
  cor: string;
  estiloPelo: string;
  sexo: string; 
};

const TelaTinderPetMatches: React.FC<TelaTinderPetMatchesProps> = ({ onBackClick, raca, cor, estiloPelo, sexo }) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [matchedPet, setMatchedPet] = useState<Pet | null>(null);

  useEffect(() => {
    const filtered = mockPets.filter(pet => 
      (raca === '' || pet.breed === raca) &&
      (cor === '' || pet.color === cor) &&
      (estiloPelo === '' || pet.coatStyle === estiloPelo) &&
      (sexo === '' || pet.gender === sexo) 
    );
    setPets(filtered);
    setCurrentIndex(0);
  }, [raca, cor, estiloPelo, sexo]); 

  const currentPet = pets[currentIndex];

  const advancePet = (direction: 'left' | 'right') => {
    if (!currentPet) return;

    if (direction === 'right' && currentPet.isMatchCandidate) {
      setMatchedPet(currentPet); 
    } else {
      setSwipeDirection(direction);
      setTimeout(() => {
          setCurrentIndex(prevIndex => prevIndex + 1);
          setSwipeDirection(null);
      }, 300);
    }
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number, y: number } }) => {
    const swipeThreshold = 100;
    if (!currentPet) return;

    if (info.offset.x > swipeThreshold) {
      if (currentPet.isMatchCandidate) {
        setMatchedPet(currentPet);
      } else {
        advancePet('right');
      }
    } else if (info.offset.x < -swipeThreshold) {
      advancePet('left');
    }
  };

  const handleCloseMatchModal = () => {
    setMatchedPet(null); 
    setSwipeDirection('right'); 
    setTimeout(() => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setSwipeDirection(null);
    }, 300);
  };

  const handleLike = () => advancePet('right');
  const handleDislike = () => advancePet('left');
  
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: swipeDirection === 'right' ? 500 : -500, transition: { duration: 0.3 } }
  };


  return (
    <div className={styles.tinderPetMatchesContainer}>
      
      <AnimatePresence>
        {matchedPet && (
          <motion.div 
            className={styles.matchOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.matchContent}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            >
              <h2 className={styles.matchTitle}>É um Match!</h2>
              <p>Você e <b>{matchedPet.name}</b> se curtiram!</p>
              <div className={styles.matchPets}>
                <img src={logoZooupp} alt="Seu Pet" className={styles.matchPetImage} />
                <FiHeart className={styles.matchHeartIcon} />
                <img src={matchedPet.image} alt={matchedPet.name} className={styles.matchPetImage} />
              </div>
              <button className={styles.matchCloseButton} onClick={handleCloseMatchModal}>
                Continuar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={styles.tinderPetMatchesHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <h1 className={styles.headerTitle}>Tinder Pet - Matches</h1>
      </header>

      <main className={styles.tinderPetMatchesMain}>
        
        <div className={styles.cardContainer}>
          <AnimatePresence mode='wait'>
            {currentPet && !matchedPet ? ( 
              <motion.div
                key={currentPet.id}
                className={styles.swipeWrapper}
                drag="x"
                onDragEnd={handleDragEnd}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className={styles.petCard}>
                  <img src={currentPet.image} alt={currentPet.name} className={styles.petImage} />
                  <div className={styles.petInfo}>
                    <h2>
                      {currentPet.name}, {currentPet.age} {currentPet.age === 1 ? 'ano' : 'anos'}
                      {currentPet.gender === 'Macho' ? <BsGenderMale className={styles.genderIconMale} /> : <BsGenderFemale className={styles.genderIconFemale} />}
                    </h2>
                    <p className={styles.petDetails}>
                      {currentPet.breed} • {currentPet.color} • Pelo {currentPet.coatStyle}
                    </p>
                    <p className={styles.petBio}>{currentPet.bio}</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="no-more-pets"
                className={styles.noMorePets}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <FiHeart size={60} color="#FF6F61" />
                <h2>Ops\! Acabaram os Matches por enquanto...</h2>
                <p>Tente ajustar suas preferências ou volte mais tarde.</p>
                <button className={styles.backToSearchButton} onClick={onBackClick}>
                  Voltar à Busca
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.swipeButtons}>
          <button className={styles.dislikeButton} onClick={handleDislike} disabled={!currentPet || !!matchedPet}>
            <FiX /> 
          </button>
          <button className={styles.likeButton} onClick={handleLike} disabled={!currentPet || !!matchedPet}>
            <FiHeart /> 
          </button>
        </div>
      </main>
    </div>
  );
};

export default TelaTinderPetMatches;