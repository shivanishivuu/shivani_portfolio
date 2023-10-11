import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const shadow = [styles.btn1,styles.outerShadow, styles.hoverInShadow]
  return(
  <div className={styles.Contact} data-testid="Contact">
     <div className={styles.ContactTitle}>
            <h2 data-heading='contact info'>Contact Me</h2>
          </div>
          <div className={styles.row}> 
          <div className={styles.container}> 
          <a  href = "mailto:shahsank.kf314@gmail.com" className ={shadow.join(' ')} > Say Hello </a>
           </div>
          </div>
  </div>
)};

export default Contact;
