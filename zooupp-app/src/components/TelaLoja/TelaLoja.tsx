import React, { useState } from 'react';
import styles from './TelaLoja.module.scss';

import { BsStarFill } from 'react-icons/bs'; 
import { FiArrowLeft, FiPlus } from 'react-icons/fi'; 

import logoCobasi from '../../assets/images/cobasi-logo.png';
import logoPetz from '../../assets/images/petz-logo.png';
import logoPetshopGenerico1 from '../../assets/images/petshop-logo-1.png';
import logoPetshopGenerico2 from '../../assets/images/petshop-logo-2.png';
import logoPetshopGenerico5 from '../../assets/images/petshop-logo-5.png';
import logoPetshopGenerico6 from '../../assets/images/petshop-logo-6.png';

//const placeholderRacao = "";
//const placeholderBrinquedo = "";
//const placeholderFarmacia = "";
//const placeholderAcessorio = "";
//const placeholderEstetica = "";

const storeDatabase: any = {
  'cobasi': {
    id: 'cobasi',
    name: 'Cobasi',
    logo: logoCobasi,
    rating: 4.9,
    distance: '2.5km',
    deliveryTime: '30-45 min',
    deliveryFee: 'R$ 5,99',
    categories: ['Destaques', 'Rações', 'Brinquedos', 'Farmácia'],
    products: [
      { id: 'p1', name: 'Ração Seca Premium 15kg', description: 'Para cães adultos de porte médio.', price: 'R$ 189,90', category: 'Rações' },
      { id: 'p2', name: 'Arranhador para Gatos', description: 'Torre alta com 3 níveis.', price: 'R$ 129,90', category: 'Brinquedos' },
      { id: 'p3', name: 'Shampoo Antipulgas', description: 'Proteção e cuidado (500ml).', price: 'R$ 45,50', category: 'Farmácia' },
      { id: 'p4', name: 'Coleira de Couro', description: 'Resistente e confortável, cor preta.', price: 'R$ 79,90', category: 'Destaques' },
    ]
  },
  'petz': {
    id: 'petz',
    name: 'Petz',
    logo: logoPetz,
    rating: 4.8,
    distance: '1.2km',
    deliveryTime: '25-40 min',
    deliveryFee: 'R$ 4,50',
    categories: ['Destaques', 'Rações', 'Brinquedos', 'Acessórios'],
    products: [
      { id: 'p5', name: 'Ração Úmida (Sachê)', description: 'Sabor carne para gatos castrados.', price: 'R$ 4,90', category: 'Rações' },
      { id: 'p6', name: 'Bolinha Maciça', description: 'Brinquedo resistente para cães.', price: 'R$ 29,90', category: 'Brinquedos' },
      { id: 'p7', name: 'Tapete Higiênico (30 unid.)', description: 'Super absorvente.', price: 'R$ 75,00', category: 'Acessórios' },
      { id: 'p8', name: 'Gaiola para Hamster', description: 'Completa com roda e comedouro.', price: 'R$ 149,90', category: 'Destaques' },
    ]
  },
  'petshop1': {
    id: 'petshop1',
    name: 'Pet Shop do Bairro',
    logo: logoPetshopGenerico1,
    rating: 4.5,
    distance: '0.8km',
    deliveryTime: '20-30 min',
    deliveryFee: 'R$ 3,00',
    categories: ['Destaques', 'Banho & Tosa'],
    products: [
      { id: 'p9', name: 'Banho e Tosa Completo', description: 'Inclui corte de unhas e limpeza de ouvidos.', price: 'R$ 80,00', category: 'Banho & Tosa' },
      { id: 'p10', name: 'Hidratação de Pelos', description: 'Para pelos macios e brilhantes.', price: 'R$ 40,00', category: 'Banho & Tosa' },
      { id: 'p11', name: 'Tosa Higiênica', description: 'Aparação de áreas essenciais.', price: 'R$ 35,00', category: 'Destaques' },
    ]
  },
  'petshop2': {
    id: 'petshop2',
    name: 'Casa da Ração',
    logo: logoPetshopGenerico2,
    rating: 4.3,
    distance: '1.0km',
    deliveryTime: '40-50 min',
    deliveryFee: 'R$ 6,00',
    categories: ['Rações', 'Acessórios'],
    products: [
      { id: 'p12', name: 'Ração Granel (Kg)', description: 'Diversas marcas por quilo.', price: 'R$ 19,90/kg', category: 'Rações' },
      { id: 'p13', name: 'Comedouro de Inox', description: 'Pequeno, médio e grande.', price: 'R$ 25,00', category: 'Acessórios' },
    ]
  },
  'petshop5': {
    id: 'petshop5',
    name: 'Mundo Animal',
    logo: logoPetshopGenerico5,
    rating: 4.2,
    distance: '0.5km',
    deliveryTime: '30-40 min',
    deliveryFee: 'R$ 5,00',
    categories: ['Destaques', 'Brinquedos', 'Acessórios'],
    products: [
      { id: 'p14', name: 'Cama Acolchoada', description: 'Tamanho M, várias estampas.', price: 'R$ 99,90', category: 'Acessórios' },
      { id: 'p15', name: 'Osso de Nylon', description: 'Brinquedo de longa duração.', price: 'R$ 35,00', category: 'Brinquedos' },
      { id: 'p16', name: 'Caixa de Transporte N°2', description: 'Para viagens seguras.', price: 'R$ 119,90', category: 'Destaques' },
    ]
  },
  'petshop6': {
    id: 'petshop6',
    name: 'Estilo Pet',
    logo: logoPetshopGenerico6,
    rating: 4.9,
    distance: '1.8km',
    deliveryTime: '50-60 min',
    deliveryFee: 'R$ 8,00',
    categories: ['Roupas', 'Acessórios'],
    products: [
      { id: 'p17', name: 'Roupa de Inverno (Moletom)', description: 'Para cães de porte P e M.', price: 'R$ 65,00', category: 'Roupas' },
      { id: 'p18', name: 'Peitoral e Guia', description: 'Conjunto estampado.', price: 'R$ 55,00', category: 'Acessórios' },
    ]
  },
  'default': {
    id: 'default',
    name: 'Loja não encontrada',
    logo: 'https://via.placeholder.com/50x50/000/FFF?text=?',
    rating: 0,
    distance: 'N/A',
    deliveryTime: 'N/A',
    deliveryFee: 'N/A',
    categories: [],
    products: []
  }
};

type TelaLojaProps = {
  storeId: string;
  onBackClick: () => void;
}

const TelaLoja: React.FC<TelaLojaProps> = ({ storeId, onBackClick }) => {
  
  const storeData = storeDatabase[storeId] || storeDatabase['default'];
  
  const [activeCategory, setActiveCategory] = useState(storeData.categories[0] || 'Destaques');

  const filteredProducts = storeData.products.filter((product: any) => {
    if (activeCategory === storeData.categories[0]) {
      return true;
    }
    return product.category === activeCategory;
  });

  return (
    <div className={styles.storePageContainer}>
      
      <header className={styles.storeHeader}>
        <button className={styles.backButton} onClick={onBackClick}>
          <FiArrowLeft />
        </button>
        <img 
          src={storeData.logo} 
          alt={storeData.name} 
          className={`${styles.storeLogo} ${['petz', 'petshop1', 'petshop2', 'petshop5', 'petshop6'].includes(storeId) ? styles.isPetz : ''}`} 
        />
        <div className={styles.storeHeaderInfo}>
          <h1 className={styles.storeName}>{storeData.name}</h1>
          <p className={styles.storeRating}>
            <BsStarFill /> {storeData.rating} • {storeData.distance}
          </p>
        </div>
      </header>

      <div className={styles.deliveryInfo}>
        <p>Entrega: {storeData.deliveryTime}</p>
        <p>Frete: {storeData.deliveryFee}</p>
      </div>

      <main className={styles.storeMain}>
        
        <section className={styles.productCategories}>
          {storeData.categories.map((category: string) => (
            <button 
              key={category}
              className={`${styles.categoryTab} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        <section className={styles.productListSection}>
          <h2>{activeCategory}</h2>

          {filteredProducts.length === 0 && (
            <p className={styles.noProducts}>Nenhum produto encontrado nesta categoria.</p>
          )}

          <div className={styles.productList}>
            {filteredProducts.map((product: any) => (
              <div className={styles.productCard} key={product.id}>
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p className={styles.productDescription}>{product.description}</p>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>
                <div className={styles.productImageContainer}>
                   <img src={product.image} alt={product.name} className={styles.productImage} />
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

export default TelaLoja;