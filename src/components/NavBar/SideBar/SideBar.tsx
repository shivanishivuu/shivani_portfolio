import React from 'react';
import styles from './SideBar.module.css';

interface sideBarProps{
  sideBar:Boolean; 
  sideBarShow:any;
}

const SideBar: React.FC<sideBarProps> = ({sideBar,sideBarShow}) => { 

  let drawerClasses= [styles.SideBar]
  if(sideBar){
  drawerClasses= [styles.SideBar,styles.open]

  }

  const goToHome = () =>{
    sideBarShow()

  }
  const goToAbout = () =>{
    const homeElement:HTMLElement| null = document.querySelector('.About_aboutImage__1JPfx');

  
  if(homeElement !== null){
   homeElement.scrollIntoView(false)
 
  }
  sideBarShow()
  }
  const goToExperience = () =>{
    const homeElement:HTMLElement| null = document.querySelector('.Experience_ExperienceContent__1PvNj');
  
  if(homeElement !== null){  
   homeElement.scrollIntoView(false)
  }
  sideBarShow()
    
  }
  const goToContact = () =>{
    const homeElement:HTMLElement| null = document.querySelector('.Contact_Contact__2CqGJ');
  
  if(homeElement !== null){
    console.log('test',homeElement)
   homeElement.scrollIntoView(false)
  }
  sideBarShow()
  }

  return(
  <div className={drawerClasses.join(' ')} data-testid="SideBar"> 
   <header className={styles.header}>
     <nav>
       <ul className={styles.nav_links}>
       <li><a  onClick={goToHome}>Home</a></li>
       <li><a  onClick={goToAbout}>About</a></li>
       <li><a  onClick={goToExperience}>Experience</a></li>
       <li><a  onClick={goToContact}>Contact</a></li>
       </ul>
     </nav>
     {/* <a className='cta'href=''><button>Contact</button></a> */}
   </header>
  </div>
)};

export default SideBar;
