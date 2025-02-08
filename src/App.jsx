import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import HeroOneComponent from "./HeroOneComponent"
import HeroTwoComponent from "./HeroTwoComponent"
import style from "./FinalLayout.module.css"






function App() {

  
  

  return (
    <div className={style.dashboardLayout}>
      <HeaderComponent />
      <HeroOneComponent />
      <HeroTwoComponent />
      <FooterComponent />
     
     


    </div>
  )
}

export default App
