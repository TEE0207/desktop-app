import logo from "../assets/logo.svg"
import styles from "./Toppest.module.css"

export default function ToppestComponent ({title , paragraph}){


    return(
        <div>
            <div className={styles.logoC}>
            
                    <div className={styles.headerBackgroundContainer}>
                        <div className={styles.toppestLogoContainer}>
                            <img src={logo} alt="logo" className={styles.toppestLogoContainerImg} />
                        </div>
                    </div>

                

                   <div className={styles.toppestHeadingParagraphContainer}>
                        <div className={styles.historyContainer}>
                                <h1>{title}</h1>
                            </div>

                            <div className={styles.clipboardContainer}>
                                <p>{paragraph}</p>
                            </div>
                   </div>
            </div>
        </div>
    )
}