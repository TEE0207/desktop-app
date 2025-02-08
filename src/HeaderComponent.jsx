import ButtonComponent from "./LogosNButton/ButtonComponent";
import ToppestComponent from "./Headings/ToppestComponent";
import style from "./FinalLayout.module.css"

export default function HeaderComponent(){

    return(
        <div className={style.headerContainer}>
            <ToppestComponent 
               title={"A history Of Everything You Copy"}

               paragraph={"Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."}
            
            />


            <ButtonComponent />
        </div>
    )
}