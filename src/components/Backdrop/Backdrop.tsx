import React from 'react';
import styles from './Backdrop.module.css';

interface backdropProps{
  sideBarClose:any 
}

const Backdrop: React.FC<backdropProps> = ({sideBarClose}) => (
  <div className={styles.Backdrop} data-testid="Backdrop" onClick={sideBarClose}>
  </div>
);

export default Backdrop;
