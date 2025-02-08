import FirstHeroComponent from "./Heros/FirstHeroComponent";
import SecondHeroComponent from "./Heros/SecondHeroComponent";
import style from "./FinalLayout.module.css"






export default function HeroOneComponent(){

    return(
        <div className={style.heroOneContainer}>
            
            <FirstHeroComponent />


            <SecondHeroComponent
              title={"Access Clipboard anywhere"}

              paragraph={"Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."}
            
            />
            
            
        </div>
    )
}