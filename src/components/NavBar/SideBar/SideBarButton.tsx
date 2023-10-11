import React from 'react';
import styles from './SideBarButton.module.css';
interface SideBarButtonProps{
    sideBarShow:any 
  }

const SideBarButton: React.FC<SideBarButtonProps> = ({sideBarShow}) => {

    return(
    <button className={styles.togglebutton} onClick={sideBarShow}>
        <div className={styles.togglebutton_line}></div>
        <div className={styles.togglebutton_line}></div>
        <div className={styles.togglebutton_line}></div>
    </button>
)}

export default SideBarButton;