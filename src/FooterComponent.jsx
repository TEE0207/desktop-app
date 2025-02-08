import FirstFooterComponent from "./Footer/FirstFooterComponent";
import SecondFooterComponent from "./Footer/SecondFooterComponent";
import style from "./FinalLayout.module.css"

export default function FooterComponent(){

    return(
        <div className={style.footerContainer}>
            <FirstFooterComponent
              title={"Clipboard for iOS and Mac OS"}

              paragraph={"Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."}
            
            />
            <SecondFooterComponent />
        </div>
    )
}