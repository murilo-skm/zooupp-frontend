import React from 'react';
import styles from './TelaZooupp.module.scss';

import { 
  BsHeartPulse, 
  BsShop, 
  BsHouseHeart, 
  BsFillHouseFill, 
  BsPeople,
  BsStarFill,
  BsHeartFill
} from 'react-icons/bs'; 
import { 
  FiSearch, 
  FiHome, 
  FiFileText, 
  FiUser,
  FiMenu,
  FiMapPin
} from 'react-icons/fi'; 

import logoCobasi from '../../assets/images/cobasi-logo.png';
import logoPetz from '../../assets/images/petz-logo.png';
import logoPetshopGenerico1 from '../../assets/images/petshop-logo-1.png';
import logoPetshopGenerico2 from '../../assets/images/petshop-logo-2.png';
import logoPetshopGenerico3 from '../../assets/images/petshop-logo-3.png';
import logoPetshopGenerico4 from '../../assets/images/petshop-logo-4.png';
import logoPetshopGenerico5 from '../../assets/images/petshop-logo-5.png';
import logoPetshopGenerico6 from '../../assets/images/petshop-logo-6.png';
import logoZooupp from '../../assets/images/zooupp-logo.png';
import ModalDesconto from '../ModalDesconto/ModalDesconto';

type TelaZoouppProps = {
  onStoreClick: (storeId: string) => void; 
  onClinicasClick: () => void;
  onPetshopsClick: () => void;
  onHoteisClick: () => void;
  onTinderPetClick: () => void;
  onAdocaoClick: () => void;
  onParceirosClick: () => void;
  onLogoClick: () => void;
  showModal: boolean;
  onCloseModal: () => void;
}

const TelaZooupp: React.FC<TelaZoouppProps> = ({ 
  onStoreClick, 
  onClinicasClick, 
  onPetshopsClick, 
  onHoteisClick,
  onTinderPetClick,
  onAdocaoClick,
  onParceirosClick,
  onLogoClick,
  showModal,
  onCloseModal
}) => {
  return (
    <div className={styles.zoouppContainer}>

      <ModalDesconto
        show={showModal}
        onClose={onCloseModal}
        title="Desconto Especial!"
        message="15% de desconto"
        storeName="em rações selecionadas!"
      />

      <header className={styles.zoouppHeader}>
        <div className={styles.zoouppLogo} onClick={onLogoClick}>
          <img src={logoZooupp} alt="Zooupp Logo" className={styles.headerLogo} />
        </div>

        <div className={styles.userLocation}>
          <span className={styles.userName}>Isadora</span>
          <div className={styles.userAddress}>
            <FiMapPin />
            <span>Av. Ipiranga, 6681</span>
          </div>
        </div>
        <button className={styles.menuButton}>
          <FiMenu />
        </button>
      </header>

      <main className={styles.zoouppMain}>

        <div className={styles.searchWrapper}>
          <span><FiSearch /></span>
          <input type="text" placeholder="Buscar lojas ou produtos..." />
        </div>

        <section className={styles.zoouppCategories}>
          <div className={styles.categoryList}>
             <div 
               className={styles.categoryItem} 
               onClick={onClinicasClick}
             >
              <span className={styles.categoryIcon}><BsHeartPulse /></span>
              <p>Veterinários</p>
            </div>
            
            <div 
               className={styles.categoryItem} 
               onClick={onTinderPetClick}
            >
              <span className={styles.categoryIcon}><BsHeartFill /></span>
              <p>Match Pet</p>
            </div>

            <div 
              className={styles.categoryItem} 
              onClick={onPetshopsClick}
            >
              <span className={styles.categoryIcon}><BsShop /></span>
              <p>Pet Shops</p>
            </div>
            
            <div 
              className={styles.categoryItem} 
              onClick={onAdocaoClick}
            >
              <span className={styles.categoryIcon}><BsHouseHeart /></span>
              <p>Adote seu filhote</p>
            </div>

            <div 
              className={styles.categoryItem} 
              onClick={onHoteisClick}
            >
              <span className={styles.categoryIcon}><BsFillHouseFill /></span>
              <p>Hotéis</p>
            </div>
            
            <div 
              className={styles.categoryItem} 
              onClick={onParceirosClick}
            >
              <span className={styles.categoryIcon}><BsPeople /></span>
              <p>Parceiros</p>
            </div>
          </div>
        </section>

        <section className={styles.zoouppStores}>
          <h2>Lojas em destaque</h2>
          <div className={styles.storeList}>
            <div 
              className={styles.storeCard} 
              onClick={() => onStoreClick('cobasi')}
            >
              <img src={logoCobasi} alt="Cobasi" />
              <div className={styles.storeInfo}>
                <h3>Cobasi</h3>
                <p><BsStarFill /> 4.9 • 2.5km</p>
                <p>A maior variedade para seu pet</p>
              </div>
            </div>
            <div 
              className={styles.storeCard} 
              onClick={() => onStoreClick('petz')}
            >
              <img src={logoPetz} alt="Petz" />
              <div className={styles.storeInfo}>
                <h3>Petz</h3>
                <p><BsStarFill /> 4.8 • 1.2km</p>
                <p>Tudo para o bem-estar animal</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.zoouppStores}>
          <h2>Outras lojas</h2>
          <div className={styles.smallStoreList}> 
            <div 
              className={styles.smallStoreCard} 
              onClick={() => onStoreClick('petshop1')}
            >
              <img src={logoPetshopGenerico1} alt="Petshop 1" />
              <div className={styles.storeInfo}>
                <h3>Pet Shop do Bairro</h3>
                <p className={styles.storeRating}>
                  <BsStarFill /> 4.5 • 0.8km
                </p>
                <p className={styles.storeSubtext}>Banho e Tosa</p>
              </div>
            </div>
            <div 
              className={styles.smallStoreCard} 
              onClick={() => onStoreClick('petshop2')}
            >
              <img src={logoPetshopGenerico2} alt="Petshop 2" />
              <div className={styles.storeInfo}>
                <h3>Casa da Ração</h3>
                <p className={styles.storeRating}>
                  <BsStarFill /> 4.3 • 1.0km
                </p>
                <p className={styles.storeSubtext}>Entregas Rápidas</p>
              </div>
            </div>
            <div 
              className={styles.smallStoreCard} 
              onClick={onClinicasClick}
            >
              <img src={logoPetshopGenerico3} alt="Petshop 3" />
              <div className={styles.storeInfo}>
                <h3>Clínica Vet Patinhas</h3>
                <p className={styles.storeRating}><BsStarFill /> 4.7 • 3.1km</p>
                <p className={styles.storeSubtext}>Veterinário 24h</p>
              </div>
            </div>
            <div 
              className={styles.smallStoreCard} 
              onClick={onHoteisClick}
            >
              <img src={logoPetshopGenerico4} alt="Petshop 4" />
              <div className={styles.storeInfo}>
                <h3>Hotelzinho do Cão</h3>
                <p className={styles.storeRating}><BsStarFill /> 4.6 • 5.0km</p>
                <p className={styles.storeSubtext}>Creche e Hospedagem</p>
              </div>
            </div>
            <div className={styles.smallStoreCard} onClick={() => onStoreClick('petshop5')}>
              <img src={logoPetshopGenerico5} alt="Petshop 5" />
              <div className={styles.storeInfo}>
                <h3>Mundo Animal</h3>
                <p className={styles.storeRating}><BsStarFill /> 4.2 • 0.5km</p>
                <p className={styles.storeSubtext}>Acessórios e Brinquedos</p>
              </div>
            </div>
            <div className={styles.smallStoreCard} onClick={() => onStoreClick('petshop6')}>
              <img src={logoPetshopGenerico6} alt="Petshop 6" />
              <div className={styles.storeInfo}>
                <h3>Estilo Pet</h3>
                <p className={styles.storeRating}><BsStarFill /> 4.9 • 1.8km</p>
                <p className={styles.storeSubtext}>Roupas e Moda Pet</p>
              </div>
            </div>
          </div>
        </section>
      </main>

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