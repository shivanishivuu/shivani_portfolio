import React from 'react';
import About from '../About/About';
import Backdrop from '../Backdrop/Backdrop';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import NavBar from '../NavBar/NavBar';
import SideBar from '../NavBar/SideBar/SideBar';
import styles from './Container.module.css';
// interface MyCodeParams {
//   sideBarShow: any
// }

const Container: React.FC = () => {
  const [sideBar, setSideBar] = React.useState(false)

   const sideBarShow =():void => {
    setSideBar(!sideBar)
}

const sideBarClose = () =>{
  setSideBar(!sideBar)
}
  return(
  <div className={styles.Container} data-testid="Container">
    <NavBar sideBarShow={sideBarShow}  />
  <SideBar sideBar={sideBar} sideBarShow ={sideBarShow} /> 
  {sideBar && <Backdrop sideBarClose={sideBarClose} />}
    <Home />
    <About />
    <Experience />
    <Contact/>
  </div>
)};

export default Container;
