import React from 'react';
import styles from './TelaZooupp.module.scss';

// Importação de Ícones
import { 
  BsHeartPulse, 
  BsShop, 
  BsHouseHeart, 
  BsFillHouseFill, 
  BsPeople,
  BsScissors,
  BsStarFill 
} from 'react-icons/bs'; 

import { 
  FiSearch, 
  FiHome, 
  FiFileText, 
  FiUser,
  FiMenu 
} from 'react-icons/fi'; 

// Importação das Imagens
import logoCobasi from '../../assets/images/cobasi-logo.png';
import logoPetz from '../../assets/images/petz-logo.png';
import logoPetshopGenerico1 from '../../assets/images/petshop-logo-1.png';
import logoPetshopGenerico2 from '../../assets/images/petshop-logo-2.png';
import logoPetshopGenerico3 from '../../assets/images/petshop-logo-3.png';
import logoPetshopGenerico4 from '../../assets/images/petshop-logo-4.png';
import logoPetshopGenerico5 from '../../assets/images/petshop-logo-5.png';
import logoPetshopGenerico6 from '../../assets/images/petshop-logo-6.png';
import logoZooupp from '../../assets/images/zooupp-logo.png';


const TelaZooupp: React.FC = () => {
  return (
    <div className={styles.zoouppContainer}>

      {/* Cabeçalho */}
      <header className={styles.zoouppHeader}>
        <div className={styles.zoouppLogo}>
          <img src={logoZooupp} alt="Zooupp Logo" className={styles.headerLogo} />
          <h1>Zooupp+</h1>
        </div>
        <button className={styles.menuButton}>
          <FiMenu />
        </button>
      </header>

      {/* Conteúdo Principal */}
      <main className={styles.zoouppMain}>

        {/* Barra de Busca */}
        <div className={styles.searchWrapper}>
          <span><FiSearch /></span>
          <input type="text" placeholder="Buscar lojas ou produtos..." />
        </div>

        {/* Categorias */}
        <section className={styles.zoouppCategories}>
          <div className={styles.categoryList}>
             <div className={styles.categoryItem}>
              <span className={styles.categoryIcon}><BsHeartPulse /></span>
              <p>Veterinários</p>
            </div>
            <div className={styles.categoryItem}>
              <span className={styles.categoryIcon}><BsShop /></span>
              <p>Pet Shops</p>
            </div>
            <div className={styles.categoryItem}>
              <span className={styles.categoryIcon}><BsHouseHeart /></span>
              <p>Adote seu filhote</p>
            </div>
            <div className={styles.categoryItem}>
              <span className={styles.categoryIcon}><BsFillHouseFill /></span>
              <p>Hotéis</p>
            </div>
            <div className={styles.categoryItem}>
              <span className={styles.categoryIcon}><BsPeople /></span>
              <p>Parceiros</p>
            </div>
            <div className={styles.categoryItem}>
              <span className={styles.categoryIcon}><BsScissors /></span>
              <p>Banho & Tosa</p>
            </div>
          </div>
        </section>

        {/* Lojas em Destaque */}
        <section className={styles.zoouppStores}>
          <h2>Lojas em destaque</h2>
          <div className={styles.storeList}>
            <div className={styles.storeCard}>
              <img src={logoCobasi} alt="Cobasi" />
              <div className={styles.storeInfo}>
                <h3>Cobasi</h3>
                <p><BsStarFill /> 4.9 • 2.5km</p>
                <p>A maior variedade para seu pet</p>
              </div>
            </div>
            <div className={styles.storeCard}>
              <img src={logoPetz} alt="Petz" />
              <div className={styles.storeInfo}>
                <h3>Petz</h3>
                <p><BsStarFill /> 4.8 • 1.2km</p>
                <p>Tudo para o bem-estar animal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outras Lojas */}
        <section className={styles.zoouppStores}>
          <h2>Outras lojas</h2>
          <div className={styles.smallStoreList}> 
            <div className={styles.smallStoreCard}>
              <img src={logoPetshopGenerico1} alt="Petshop 1" />
              <div className={styles.storeInfo}>
                <h3>Pet Shop do Bairro</h3>
                <p className={styles.storeRating}>
                  <BsStarFill /> 4.5 • 0.8km
                </p>
                <p className={styles.storeSubtext}>Banho e Tosa</p>
              </div>
            </div>
            <div className={styles.smallStoreCard}>
              <img src={logoPetshopGenerico2} alt="Petshop 2" />
              <div className={styles.storeInfo}>
                <h3>Casa da Ração</h3>
                <p className={styles.storeRating}>
                  <BsStarFill /> 4.3 • 1.0km
                </p>
                <p className={styles.storeSubtext}>Entregas Rápidas</p>
              </div>
            </div>
            <div className={styles.smallStoreCard}>
              <img src={logoPetshopGenerico3} alt="Petshop 3" />
              <div className={styles.storeInfo}>
                <h3>Clínica Vet Patinhas</h3>
                <p className={styles.storeRating}>
                  <BsStarFill /> 4.7 • 3.1km
                </p>
                <p className={styles.storeSubtext}>Veterinário 24h</p>
              </div>
            </div>
            <div className={styles.smallStoreCard}>
              <img src={logoPetshopGenerico4} alt="Petshop 4" />
              <div className={styles.storeInfo}>
                <h3>Hotelzinho do Cão</h3>
                <p className={styles.storeRating}>
                  <BsStarFill /> 4.6 • 5.0km
                </p>
                <p className={styles.storeSubtext}>Creche e Hospedagem</p>
              </div>
            </div>
            <div className={styles.smallStoreCard}>
              <img src={logoPetshopGenerico5} alt="Petshop 5" />
              <div className={styles.storeInfo}>
                <h3>Mundo Animal</h3>
                <p className={styles.storeRating}>
                  <BsStarFill /> 4.2 • 0.5km
                </p>
                <p className={styles.storeSubtext}>Acessórios e Brinquedos</p>
              </div>
            </div>
            <div className={styles.smallStoreCard}>
              <img src={logoPetshopGenerico6} alt="Petshop 6" />
              <div className={styles.storeInfo}>
                <h3>Estilo Pet</h3>
                <p className={styles.storeRating}>
                  <BsStarFill /> 4.9 • 1.8km
                </p>
                <p className={styles.storeSubtext}>Roupas e Moda Pet</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Navegação Inferior */}
      <nav className={styles.bottomNav}>
        <div className={`${styles.navItem} ${styles.active}`}>
          <FiHome />
          <span>Início</span>
        </div>
        <div className={styles.navItem}>
          <FiSearch />
          <span>Busca</span>
        </div>
        <div className={styles.navItem}>
          <FiFileText />
          <span>Pedidos</span>
        </div>
        <div className={styles.navItem}>
          <FiUser />
          <span>Perfil</span>
        </div>
      </nav>
    </div>
  );
};

export default TelaZooupp;