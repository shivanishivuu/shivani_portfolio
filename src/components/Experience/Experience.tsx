import React from 'react';
import styles from './Experience.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Experience: React.FC = () => {
  const exp = ['experience', 'content']
  const eachItem = [styles.timeLineItemInner,styles.outerShadow]
  return (
    <div className={styles.ExperienceContent} data-testid="Experience">
      <div className={styles.row}>
        <div className={exp.join(' ')}>
          <div className={styles.ExperienceTitle}>
            <h2 >My Experience</h2>
          </div>
          <div className={styles.row}>
            <div className={styles.timeLine}>
              <div className={styles.row}>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> JAN 22 - Present</span>
                  <h3> Sr UI Developer</h3>
                  <h4>Northern Trust Bank, IL</h4>
                  <p></p>
                  </div>
                </div>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Aug 20 - Dec 21</span>
                  <h3> Sr UI Developer</h3>
                  <h4>The Hartford, CT</h4>
                  <p></p>
                  </div>
                </div>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Jan 19 - Aug 20</span>
                  <h3> Sr UI Developer</h3>
                  <h4>Dollar Bank, PA</h4>
                  <p></p>
                  </div>
                </div>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Jan 16 - Dec 18 </span>
                  <h3> Front End Developer </h3>
                  <h4>Abbvie, IL</h4>
                  <p></p>
                  </div>
                </div>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Aug 14 - Dec 15 </span>
                  <h3> UI Developer </h3>
                  <h4>Thrymr software, India</h4>
                  <p></p>
                  </div>
                </div>
                <div className={styles.timeLineItem}>
                  <div className={eachItem.join(' ')}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span> Aug 13 - Aug 14 </span>
                  <h3> UI Developer </h3>
                  <h4>Axis Bank, India</h4>
                  <p></p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>

      </div>
    </div>
  )
};

export default Experience; 
