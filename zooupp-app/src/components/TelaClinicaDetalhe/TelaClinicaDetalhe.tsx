import React, { useState } from 'react';
import styles from './TelaClinicaDetalhe.module.scss';

import { BsStarFill } from 'react-icons/bs'; 
import { FiArrowLeft, FiPlus } from 'react-icons/fi'; 

const clinicDatabase: any = {
  'c1': {
    id: 'c1',
    name: 'Clínica Vet. Dr. Patas',
    rating: 4.8,
    distance: '1.2km',
    image: 'https://via.placeholder.com/100x100/0046B4/FFFFFF?text=Clínica',
    categories: ['Serviços', 'Consultas', 'Vacinas', 'Emergência'],
    services: [
      { id: 's1', name: 'Consulta de Rotina', description: 'Check-up geral com Dr. Patas.', price: 'R$ 120,00', category: 'Consultas' },
      { id: 's2', name: 'Vacina V10 (Importada)', description: 'Proteção essencial para cães.', price: 'R$ 90,00', category: 'Vacinas' },
      { id: 's3', name: 'Atendimento de Emergência', description: 'Plantão 24 horas.', price: 'A partir de R$ 250,00', category: 'Emergência' },
      { id: 's1_extra', name: 'Consulta Pediátrica', description: 'Acompanhamento de filhotes.', price: 'R$ 130,00', category: 'Consultas' },
    ]
  },
  'c2': {
    id: 'c2',
    name: 'Hospital Veterinário Central',
    rating: 4.9,
    distance: '3.5km',
    image: 'https://via.placeholder.com/100x100/9C27B0/FFFFFF?text=Hospital',
    categories: ['Serviços', 'Cirurgias', 'Exames', 'Internação'],
    services: [
      { id: 's4', name: 'Cirurgia de Castração', description: 'Procedimento seguro para cães e gatos.', price: 'R$ 450,00', category: 'Cirurgias' },
      { id: 's5', name: 'Exame de Raio-X Digital', description: 'Diagnóstico por imagem.', price: 'R$ 180,00', category: 'Exames' },
      { id: 's6', name: 'Internação (Diária)', description: 'UTI e acompanhamento 24h.', price: 'R$ 600,00', category: 'Internação' },
      { id: 's5_extra', name: 'Ultrassom Abdominal', description: 'Avaliação de órgãos internos.', price: 'R$ 200,00', category: 'Exames' },
    ]
  },
  'c3': {
    id: 'c3',
    name: 'PetCare & Saúde Animal',
    rating: 4.6,
    distance: '800m',
    image: 'https://via.placeholder.com/100x100/4CAF50/FFFFFF?text=PetCare',
    categories: ['Serviços', 'Consultas', 'Estética'],
    services: [
      { id: 's7', name: 'Banho & Tosa Medicinal', description: 'Tratamento para pele sensível.', price: 'R$ 110,00', category: 'Estética' },
      { id: 's8', name: 'Aplicação de Anti-Pulgas', description: 'Proteção por 30 dias.', price: 'R$ 85,00', category: 'Estética' },
      { id: 's9', name: 'Consulta Dermatológica', description: 'Especialista em pele e alergias.', price: 'R$ 180,00', category: 'Consultas' },
    ]
  },
  'c4': {
    id: 'c4',
    name: 'Centro de Diagnóstico Pet',
    rating: 4.7,
    distance: '2.1km',
    image: 'https://via.placeholder.com/100x100/666666/FFFFFF?text=Exames',
    categories: ['Serviços', 'Exames', 'Consultas'],
    services: [
      { id: 's10', name: 'Exame de Sangue Completo', description: 'Hemograma e perfil bioquímico.', price: 'R$ 150,00', category: 'Exames' },
      { id: 's11', name: 'Ultrassom Abdominal', description: 'Avaliação de órgãos internos.', price: 'R$ 200,00', category: 'Exames' },
      { id: 's12', name: 'Consulta com Especialista', description: 'Cardiologista, Oftalmologista, etc.', price: 'R$ 250,00', category: 'Consultas' },
    ]
  },
  'default': {
    id: 'default',
    name: 'Clínica não encontrada',
    rating: 0,
    distance: 'N/A',
    image: 'https://via.placeholder.com/100x100/000/FFF?text=?',
    categories: [],
    services: []
  }
};

type TelaClinicaDetalheProps = {
  clinicaId: string;
  onBackClick: () => void; 
}

const TelaClinicaDetalhe: React.FC<TelaClinicaDetalheProps> = ({ clinicaId, onBackClick }) => {
  
  const clinicaData = clinicDatabase[clinicaId] || clinicDatabase['default'];
  
  const [activeCategory, setActiveCategory] = useState(clinicaData.categories[0]); 

  const filteredServices = clinicaData.services.filter((service: any) => {
    if (activeCategory === 'Serviços') {
      return true;
    }
    return service.category === activeCategory;
  });

  return (
    <div className={styles.detalheContainer}>
      
      <header className={styles.detalheHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <img src={clinicaData.image} alt={clinicaData.name} className={styles.clinicaLogo} />
        <div className={styles.headerInfo}>
          <h1 className={styles.clinicaName}>{clinicaData.name}</h1>
          <p className={styles.clinicaRating}>
            <BsStarFill /> {clinicaData.rating} • {clinicaData.distance}
          </p>
        </div>
      </header>

      <main className={styles.detalheMain}>

        <section className={styles.serviceCategories}>
          {clinicaData.categories.map((category: string) => (
            <button 
              key={category}
              className={`${styles.categoryTab} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        <section className={styles.serviceListSection}>
          <h2>{activeCategory}</h2>
          
          {filteredServices.length === 0 && (
            <p className={styles.noResults}>Nenhum serviço encontrado nesta categoria.</p>
          )}

          <div className={styles.serviceList}>
            {filteredServices.map((service: any) => (
              <div className={styles.serviceCard} key={service.id}>
                <div className={styles.serviceInfo}>
                  <h3>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <p className={styles.servicePrice}>{service.price}</p>
                </div>
                <div className={styles.serviceAction}>
                   <button className={styles.addButton}>
                     <FiPlus />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TelaClinicaDetalhe;