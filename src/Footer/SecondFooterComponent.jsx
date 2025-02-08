import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import instagram from "../assets/icon-instagram.svg"
import logo from "../assets/logo.svg"
import styles from "./SecondFooter.module.css"

export default function SecondFooterComponent(){

    return(
        <div className={styles.secondFooterAndAllContentContainer}>

            <div className={styles.secondFooterLogoAndAllTextContainer}>

                <div className={styles.secondFooterLogoContainer}>
                    <img src={logo} alt="logo" className={styles.secondFooterLogoImage}/>

                </div>

                <div className={styles.secondFooterAllTextContainer}>

                    <div className={styles.secondFooterFirst2TextByColumnContainer}>
                        <p>FAQS</p>
                        <p>Contant Us</p>

                    </div>
                    <div className={styles.secondFooterSecond2TextByColumnContainer}>
                        <p>Privacy Policy</p>
                        <p>Press Kit</p>
                    </div>

                    <div className={styles.secondFooterLast1TextByColumnContainer}>
                        <p>Install Guide</p>
                    </div>
                </div>


            </div>

            <div className={styles.secondFooterAllSocialMediaContainer}>

                <div className={styles.secondFooterSocialMediaContainer}>
                    <img src={facebook} alt="facebook-logo" className={styles.secondFooterSocialMediaImage} />

                </div>

                <div className={styles.secondFooterSocialMediaContainer}>
                    <img src={twitter} alt="twitter-logo" className={styles.secondFooterSocialMediaImage} />
                    
                </div>

                <div className={styles.secondFooterSocialMediaContainer}>
                    <img src={instagram}alt="instagram-logo" className={styles.secondFooterSocialMediaImage} />
                    
                </div>
            </div>

        </div>
    )
}