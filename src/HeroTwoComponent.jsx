import LogosComponent from "./LogosNButton/LogosComponent";
import ThirdHeroComponent from "./Heros/ThirdHeroComponent";
import style from "./FinalLayout.module.css"

export default function HeroTwoComponent(){

    return(
        <div className={style.heroTwoContainer}>
            <ThirdHeroComponent />
            <LogosComponent />
        </div>
    )
}