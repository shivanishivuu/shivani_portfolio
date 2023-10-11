import React from 'react';
import styles from './NavBar.module.css';
import SideBarButton from './SideBar/SideBarButton';
import About from '../About/About';

interface navBarProps{
  sideBarShow:any
}

const NavBar: React.FC<navBarProps> = ({sideBarShow}) => {

 const goToHome = function(){

  const homeElement:HTMLElement| null = document.querySelector('.About_aboutImage__1JPfx');
  
  if(homeElement !== null){
   homeElement.scrollIntoView(false)
  }
 }

 const goToExperience = function(){

  const homeElement:HTMLElement| null = document.querySelector('.Experience_ExperienceContent__1PvNj');
  
  if(homeElement !== null){  
   homeElement.scrollIntoView(false)
  }
 }

 const goToContact = function(){

  const homeElement:HTMLElement| null = document.querySelector('.Contact_Contact__2CqGJ');
  
  if(homeElement !== null){
    console.log('test',homeElement)
   homeElement.scrollIntoView(false)
  }
 }


  return(
    <div>
  <div className={styles.NavBar} data-testid="NavBar"> 
 
   <header className={styles.header}>
   <h1 className={styles.logo}>ShivaniPortfolio</h1>
     <nav>
       <ul className={styles.nav_links}>
       <li><a  className={styles.nav_linksChild} >Home</a></li>
       <li><a className={styles.nav_linksChild} onClick={goToHome}>About</a></li>
       <li><a  className={styles.nav_linksChild}onClick={goToExperience}>Experience</a></li>
       <li><a  className={styles.nav_linksChild} onClick={goToContact}>Contact</a></li>
       </ul>
     </nav>
     {/* <a className='cta'href=''><button>Contact</button></a> */}
     <div className={styles.sideBarButtonBar}>
   <SideBarButton sideBarShow={sideBarShow} />
   </div>
   </header>
  
   </div>
  </div>

  )};

export default NavBar;
