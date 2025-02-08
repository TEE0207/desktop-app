import google from "../assets/logo-google.png"
import ibm from "../assets/logo-ibm.png"
import microsoft from "../assets/logo-microsoft.png"
import hp from "../assets/logo-hp.png"
import vector from "../assets/logo-vector-graphics.png"
import styles from "./Logos.module.css"


export default function LogosComponent(){

    return(
        <div className={styles.logosContainer}>
            <div className={styles.logoContainer}>
                <img src={google} alt="logo" className={styles.logoImage}/>
            </div>

            <div className={styles.logoContainer}>
                <img src={ibm} alt="logo" className={styles.logoImage} />
            </div>

            <div className={styles.logoContainer3}>
                <img src={microsoft} alt="logo" className={styles.logo3Image} />
            </div>

            <div className={styles.logoContainer}>
                <img src={hp} alt="logo"className={styles.logoImage}/>
            </div>

            <div className={styles.logoContainer5}>
                <img src={vector} alt="logo" className={styles.logo5Image}/>
            </div>

        </div>
    )
}