import React from 'react';
import styles from './ModalDesconto.module.scss';
import { FiX, FiGift } from 'react-icons/fi'; 

type ModalProps = {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
  storeName: string;
};

const ModalDesconto: React.FC<ModalProps> = ({ show, onClose, title, message, storeName }) => {
  if (!show) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.closeButton} onClick={onClose}>
          <FiX />
        </button>
        
        <div className={styles.modalIcon}>
          <FiGift />
        </div>

        <div className={styles.modalHeader}>
          <h2>{title}</h2>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.message}>{message}</p>
          <p className={styles.storeName}>{storeName}</p>
        </div>

        <button className={styles.actionButton} onClick={onClose}>
          Pegar Desconto!
        </button>

      </div>
    </div>
  );
};

export default ModalDesconto;